import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency, formatShort } from "./shared";
import {
  clientesDataJan, clientesDataFev,
  clientesDataS4, clientesDataS5, clientesDataS6, clientesDataS7,
  type ClienteCompany, type ClienteEntry,
} from "./agingData";

const dataByPeriod: Record<string, ClienteCompany[]> = {
  jan: clientesDataJan,
  fev: clientesDataFev,
  s4: clientesDataS4,
  s5: clientesDataS5,
  s6: clientesDataS6,
  s7: clientesDataS7,
  mar: clientesDataS7,
  total: clientesDataS7,
};

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-xl text-sm">
      <p className="font-bold text-card-foreground">{d.name}</p>
      <p className="font-semibold mt-1">{formatCurrency(d.value)}</p>
    </div>
  );
};

interface Props {
  period: string;
}

const PosicaoClientesTab = ({ period }: Props) => {
  const companies = useMemo(() => dataByPeriod[period] || clientesDataS7, [period]);
  const [selectedEntry, setSelectedEntry] = useState<ClienteEntry | null>(null);

  return (
    <div className="space-y-6">
      {companies.map((company) => {
        const chartData = company.entries.map((e) => ({ name: e.name, value: e.value }));
        const chartHeight = Math.max(160, chartData.length * 36 + 40);

        return (
          <div key={company.company} className="bg-card rounded-xl border border-border p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: company.color }} />
                <h4 className="font-bold text-foreground">{company.company}</h4>
              </div>
              <div className="flex items-center gap-4 text-sm">
                {company.caucao != null && (
                  <span className="text-muted-foreground">Caução: <span className="font-semibold text-foreground">{formatCurrency(company.caucao)}</span></span>
                )}
                {company.multa != null && (
                  <span className="text-muted-foreground">Multa: <span className="font-semibold text-foreground">{formatCurrency(company.multa)}</span></span>
                )}
                <span className="text-muted-foreground">Aberto: <span className="font-semibold" style={{ color: "hsl(120, 50%, 40%)" }}>{formatCurrency(company.aberto)}</span></span>
              </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={chartHeight}>
              <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 30, top: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                <XAxis type="number" tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <YAxis type="category" dataKey="name" width={200} tick={{ fill: "hsl(var(--foreground))", fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
                <Bar dataKey="value" fill={company.color} radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>

            {/* Table */}
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-1.5 text-muted-foreground font-medium">Cliente</th>
                    <th className="text-right py-1.5 text-muted-foreground font-medium">A Receber</th>
                    <th className="text-right py-1.5 text-muted-foreground font-medium">Caução</th>
                  </tr>
                </thead>
                <tbody>
                  {company.entries.map((e) => (
                    <tr
                      key={e.name}
                      className="border-b border-border/30 hover:bg-muted/30 cursor-pointer"
                      onClick={() => setSelectedEntry(e)}
                    >
                      <td className="py-1.5 text-foreground">{e.name}</td>
                      <td className="py-1.5 text-right font-medium" style={{ color: "hsl(120, 50%, 40%)" }}>{formatCurrency(e.value)}</td>
                      <td className="py-1.5 text-right font-medium text-muted-foreground">{e.caucao ? formatCurrency(e.caucao) : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      {/* Drill-down modal */}
      {selectedEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setSelectedEntry(null)}>
          <div className="bg-card border border-border rounded-xl p-6 shadow-2xl max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">Detalhe Cliente</h3>
              <button onClick={() => setSelectedEntry(null)} className="text-muted-foreground hover:text-foreground text-xl leading-none">&times;</button>
            </div>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-border/30">
                  <td className="py-2 text-muted-foreground font-medium">Cliente</td>
                  <td className="py-2 text-right text-foreground font-semibold">{selectedEntry.name}</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-2 text-muted-foreground font-medium">A Receber</td>
                  <td className="py-2 text-right font-semibold" style={{ color: "hsl(120, 50%, 40%)" }}>{formatCurrency(selectedEntry.value)}</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground font-medium">Caução</td>
                  <td className="py-2 text-right font-semibold text-foreground">{selectedEntry.caucao ? formatCurrency(selectedEntry.caucao) : "—"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PosicaoClientesTab;

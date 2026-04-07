import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { formatCurrency, formatShort, PERIODS } from "./shared";
import {
  clientesDataJan, clientesDataFev,
  clientesDataS4, clientesDataS5, clientesDataS6, clientesDataS7,
  type ClienteCompany, type ClienteEntry,
} from "./agingData";
import AgingCliDrillModal, { type AgingCliDrillSelection } from "./AgingCliDrillModal";

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
      {d.caucao != null && d.caucao > 0 && (
        <p className="text-muted-foreground mt-0.5">Caução: {formatCurrency(d.caucao)}</p>
      )}
    </div>
  );
};

interface DrillSelection {
  company: ClienteCompany;
}

const DrillModal = ({ selection, onClose }: { selection: DrillSelection | null; onClose: () => void }) => {
  if (!selection) return null;
  const { company } = selection;
  const sorted = [...company.entries].sort((a, b) => b.value - a.value);
  const hasCaucao = sorted.some(e => e.caucao != null && e.caucao > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-xl border border-border shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: company.color }} />
            <h3 className="text-lg font-bold text-foreground">{company.company}</h3>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors text-xl leading-none">✕</button>
        </div>
        <div className="flex gap-6 px-5 pt-4 text-sm">
          <div>
            <span className="text-muted-foreground">A Receber: </span>
            <span className="font-bold text-foreground">{formatCurrency(company.aberto)}</span>
          </div>
          {company.caucao != null && company.caucao > 0 && (
            <div>
              <span className="text-muted-foreground">Caução: </span>
              <span className="font-semibold text-foreground">{formatCurrency(company.caucao)}</span>
            </div>
          )}
          {company.multa != null && company.multa > 0 && (
            <div>
              <span className="text-muted-foreground">Multa: </span>
              <span className="font-semibold text-foreground">{formatCurrency(company.multa)}</span>
            </div>
          )}
        </div>
        <div className="overflow-auto flex-1 p-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 text-muted-foreground font-medium">Cliente</th>
                <th className="text-right py-2 text-muted-foreground font-medium">A Receber</th>
                {hasCaucao && <th className="text-right py-2 text-muted-foreground font-medium">Caução</th>}
              </tr>
            </thead>
            <tbody>
              {sorted.map((e, i) => (
                <tr key={e.name} className={`border-b border-border/30 ${i % 2 === 0 ? "bg-muted/10" : ""}`}>
                  <td className="py-2 text-foreground">{e.name}</td>
                  <td className="py-2 text-right font-medium">{formatCurrency(e.value)}</td>
                  {hasCaucao && (
                    <td className="py-2 text-right text-muted-foreground">
                      {e.caucao != null && e.caucao > 0 ? formatCurrency(e.caucao) : "—"}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-border bg-muted/30">
                <td className="py-2 font-bold text-foreground">Total</td>
                <td className="py-2 text-right font-bold text-foreground">{formatCurrency(company.aberto)}</td>
                {hasCaucao && (
                  <td className="py-2 text-right font-bold text-foreground">
                    {company.caucao != null && company.caucao > 0 ? formatCurrency(company.caucao) : "—"}
                  </td>
                )}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

interface Props {
  period: string;
}

const PosicaoClientesTab = ({ period }: Props) => {
  const data = useMemo(() => dataByPeriod[period] || clientesDataS7, [period]);
  const [drill, setDrill] = useState<DrillSelection | null>(null);
  const [detailDrill, setDetailDrill] = useState<AgingCliDrillSelection | null>(null);

  const openDetailDrill = (company: ClienteCompany) => {
    setDetailDrill({ mode: "empresa", empresa: company.company, period, titleContext: "Posição Clientes" });
  };

  const openBarDrill = (company: ClienteCompany, clienteName: string) => {
    setDetailDrill({ mode: "empresa", empresa: company.company, cliente: clienteName, period, titleContext: "Posição Clientes" });
  };

  const pieData = data.map((c) => ({
    name: c.company,
    value: c.aberto,
    color: c.color,
    label: `${c.company}: ${formatShort(c.aberto)}`,
  }));

  return (
    <div className="space-y-6">
      {/* Title + Donut */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h2 className="text-2xl font-bold italic text-primary mb-4">Posição Clientes</h2>
        <div className="flex flex-col items-center">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                innerRadius={45}
                paddingAngle={2}
                strokeWidth={0}
                style={{ cursor: "pointer" }}
                onClick={(_: any, index: number) => setDrill({ company: data[index] })}
              >
                {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip formatter={(v: number) => formatCurrency(v)} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 justify-center mt-3">
            {pieData.map((d, i) => (
              <div
                key={d.name}
                className="flex items-center gap-1.5 text-xs cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() => setDrill({ company: data[i] })}
              >
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                <span className="text-muted-foreground">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.map((company) => {
          const sorted = [...company.entries].sort((a, b) => b.value - a.value);
          const hasCaucaoDetail = sorted.some(e => e.caucao != null && e.caucao > 0);
          const chartHeight = Math.max(160, sorted.length * 36 + 40);
          return (
            <div
              key={company.company}
              className="bg-card rounded-xl border border-border p-5 shadow-sm cursor-pointer hover:border-primary/40 transition-colors"
              onClick={() => openDetailDrill(company)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: company.color }} />
                  <h4 className="font-bold text-foreground">{company.company}</h4>
                </div>
                <div className="text-right text-sm">
                  <span className="font-semibold text-foreground">Aberto: {formatCurrency(company.aberto)}</span>
                  {company.caucao != null && company.caucao > 0 && (
                    <span className="ml-3 text-muted-foreground">Caução: {formatCurrency(company.caucao)}</span>
                  )}
                </div>
              </div>
              <div onClick={(e) => e.stopPropagation()}>
                <ResponsiveContainer width="100%" height={chartHeight}>
                  <BarChart data={sorted} layout="vertical" margin={{ left: 10, right: 30, top: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                    <XAxis type="number" tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                    <YAxis type="category" dataKey="name" width={200} tick={{ fill: "hsl(var(--foreground))", fontSize: 10 }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
                    <Bar
                      dataKey="value"
                      fill={company.color}
                      radius={[0, 4, 4, 0]}
                      barSize={20}
                      style={{ cursor: "pointer" }}
                      onClick={(data: any) => openBarDrill(company, data.name)}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              {/* Caucao detail table */}
              {hasCaucaoDetail && (
                <div className="mt-3 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-1.5 text-muted-foreground font-medium">Cliente</th>
                        <th className="text-right py-1.5 text-muted-foreground font-medium">Aberto</th>
                        <th className="text-right py-1.5 text-muted-foreground font-medium">Caução</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sorted.map((e) => (
                        <tr key={e.name} className="border-b border-border/30">
                          <td className="py-1.5 text-foreground">{e.name}</td>
                          <td className="py-1.5 text-right font-medium">{formatCurrency(e.value)}</td>
                          <td className="py-1.5 text-right text-muted-foreground">
                            {e.caucao != null && e.caucao > 0 ? formatCurrency(e.caucao) : "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <DrillModal selection={drill} onClose={() => setDrill(null)} />
      <AgingCliDrillModal selection={detailDrill} onClose={() => setDetailDrill(null)} />
    </div>
  );
};

export default PosicaoClientesTab;

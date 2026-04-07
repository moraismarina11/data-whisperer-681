import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { formatCurrency, formatShort, PERIODS } from "./shared";
import {
  fornecedoresDataJan, fornecedoresDataFev,
  fornecedoresDataS4, fornecedoresDataS5, fornecedoresDataS6, fornecedoresDataS7,
  type FornecedorCompany,
} from "./agingData";
import AgingFornDrillModal, { type AgingFornDrillSelection } from "./AgingFornDrillModal";

const dataByPeriod: Record<string, FornecedorCompany[]> = {
  jan: fornecedoresDataJan,
  fev: fornecedoresDataFev,
  s4: fornecedoresDataS4,
  s5: fornecedoresDataS5,
  s6: fornecedoresDataS6,
  s7: fornecedoresDataS7,
  mar: fornecedoresDataS7,
  total: fornecedoresDataS7,
};

// Map agingData company names → drill data empresa names
const FORN_EMPRESA_MAP: Record<string, string[]> = {
  "Consórcio Alsub": ["CONSÓRCIO ECB SEA_ALSUB"],
  "MEBR": ["MEBR - Part. Consultoria"],
  "MEFB": ["ME FUNDAÇÕES BRASIL LTDA", "MEFB"],
  "Mota-Engil Brasil": ["Mota-Engil Brasil"],
  "Tracevia": ["Tracevia Brasil"],
  "Macaé": ["MOTA ENGIL - MACAE"],
  "REDUC": ["REDUC"],
  "Reduc": ["REDUC"],
  "Mota Engil Engenharia": ["Mota Engil Engenharia"],
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

interface DrillSelection {
  company: FornecedorCompany;
}

const DrillModal = ({ selection, onClose }: { selection: DrillSelection | null; onClose: () => void }) => {
  if (!selection) return null;
  const { company } = selection;
  const sorted = [...company.entries].sort((a, b) => b.value - a.value);
  const total = sorted.reduce((s, e) => s + e.value, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-xl border border-border shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: company.color }} />
            <h3 className="text-lg font-bold text-foreground">{company.company} — {company.topLabel}</h3>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors text-xl leading-none">✕</button>
        </div>
        <div className="overflow-auto flex-1 p-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 text-muted-foreground font-medium">Fornecedor</th>
                <th className="text-right py-2 text-muted-foreground font-medium">Valor</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((e, i) => (
                <tr key={e.name} className={`border-b border-border/30 ${i % 2 === 0 ? "bg-muted/10" : ""}`}>
                  <td className="py-2 text-foreground">{e.name}</td>
                  <td className="py-2 text-right font-medium text-destructive">{formatCurrency(e.value)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-border bg-muted/30">
                <td className="py-2 font-bold text-foreground">Total</td>
                <td className="py-2 text-right font-bold text-destructive">{formatCurrency(total)}</td>
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

const PosicaoFornecedoresTab = ({ period }: Props) => {
  const data = useMemo(() => dataByPeriod[period] || fornecedoresDataS7, [period]);
  const [drill, setDrill] = useState<DrillSelection | null>(null);
  const [detailDrill, setDetailDrill] = useState<AgingFornDrillSelection | null>(null);

  const openDetailDrill = (company: FornecedorCompany) => {
    setDetailDrill({ mode: "empresa", empresa: company.company, period });
  };

  const pieData = data.map((c) => ({
    name: c.company,
    value: c.total,
    color: c.color,
    label: `${c.company}: ${formatShort(c.total)}`,
  }));

  return (
    <div className="space-y-6">
      {/* Title + Donut */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h2 className="text-2xl font-bold italic text-primary mb-4">Posição Fornecedores</h2>
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

      {/* Company cards with bar charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.map((company) => {
          const sorted = [...company.entries].sort((a, b) => b.value - a.value);
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
                  <span className="text-xs text-muted-foreground">{company.topLabel}</span>
                </div>
                <span className="text-sm font-semibold text-foreground">Total: {formatCurrency(company.total)}</span>
              </div>
              <ResponsiveContainer width="100%" height={chartHeight}>
                <BarChart data={sorted} layout="vertical" margin={{ left: 10, right: 30, top: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                  <XAxis type="number" tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" width={180} tick={{ fill: "hsl(var(--foreground))", fontSize: 10 }} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
                  <Bar dataKey="value" fill={company.color} radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          );
        })}
      </div>

      <DrillModal selection={drill} onClose={() => setDrill(null)} />
      <AgingFornDrillModal selection={detailDrill} onClose={() => setDetailDrill(null)} />
    </div>
  );
};

export default PosicaoFornecedoresTab;

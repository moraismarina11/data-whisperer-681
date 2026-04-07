import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { formatCurrency, formatShort } from "./shared";
import {
  agingFornecedoresData_jan, agingFornecedoresTotals_jan,
  agingFornecedoresData_fev, agingFornecedoresTotals_fev,
  agingFornecedoresData_s4, agingFornecedoresTotals_s4,
  agingFornecedoresData_s5, agingFornecedoresTotals_s5,
  agingFornecedoresData_s6, agingFornecedoresTotals_s6,
  agingFornecedoresData_s7, agingFornecedoresTotals_s7,
  agingFornecedoresData_mar, agingFornecedoresTotals_mar,
  agingFornecedoresData_total, agingFornecedoresTotals_total,
} from "./agingBreakdownData";
import type { AgingFornecedorEntry } from "./agingBreakdownData";
import AgingFornDrillModal, { type AgingFornDrillSelection } from "./AgingFornDrillModal";

const COLORS = [
  "hsl(210, 70%, 50%)", "hsl(340, 60%, 50%)", "hsl(40, 90%, 50%)",
  "hsl(150, 60%, 40%)", "hsl(25, 90%, 55%)", "hsl(270, 50%, 55%)", "hsl(190, 60%, 45%)",
];

const AGING_COLS: { key: keyof AgingFornecedorEntry; label: string }[] = [
  { key: "aVencer", label: "A Vencer" },
  { key: "ate30", label: "Até 30d" },
  { key: "de31a60", label: "31-60d" },
  { key: "de61a90", label: "61-90d" },
  { key: "de91a180", label: "91-180d" },
  { key: "de181a360", label: "181-360d" },
  { key: "mais360", label: "> 360d" },
];

const AGING_COLORS = [
  "hsl(150, 60%, 45%)", "hsl(210, 70%, 55%)", "hsl(40, 90%, 50%)",
  "hsl(25, 85%, 55%)", "hsl(340, 60%, 50%)", "hsl(0, 65%, 50%)", "hsl(270, 50%, 55%)",
];

// Ref dates por período
const REF_DATES: Record<string, string> = {
  jan:   "06/02/2026",
  fev:   "27/02/2026",
  s4:    "06/03/2026",
  s5:    "13/03/2026",
  s6:    "20/03/2026",
  s7:    "27/03/2026",
  mar:   "27/03/2026",
  total: "27/03/2026",
};

function getDataForPeriod(period: string): { data: AgingFornecedorEntry[]; totals: AgingFornecedorEntry } {
  switch (period) {
    case "jan":   return { data: agingFornecedoresData_jan,   totals: agingFornecedoresTotals_jan };
    case "fev":   return { data: agingFornecedoresData_fev,   totals: agingFornecedoresTotals_fev };
    case "s4":    return { data: agingFornecedoresData_s4,    totals: agingFornecedoresTotals_s4 };
    case "s5":    return { data: agingFornecedoresData_s5,    totals: agingFornecedoresTotals_s5 };
    case "s6":    return { data: agingFornecedoresData_s6,    totals: agingFornecedoresTotals_s6 };
    case "s7":    return { data: agingFornecedoresData_s7,    totals: agingFornecedoresTotals_s7 };
    case "mar":   return { data: agingFornecedoresData_mar,   totals: agingFornecedoresTotals_mar };
    case "total": return { data: agingFornecedoresData_total, totals: agingFornecedoresTotals_total };
    default:      return { data: agingFornecedoresData_s7,    totals: agingFornecedoresTotals_s7 };
  }
}

interface Props {
  period: string;
}

const AgingFornecedoresTab = ({ period }: Props) => {
  const [drillSelection, setDrillSelection] = useState<AgingFornDrillSelection | null>(null);

  const { data: agingFornecedoresData, totals: agingFornecedoresTotals } = getDataForPeriod(period);
  const refDate = REF_DATES[period] ?? REF_DATES["s7"];

  // Pie data by empresa
  const pieData = agingFornecedoresData.map((e, i) => ({
    name: e.empresa,
    value: Math.abs(e.valor),
    color: COLORS[i % COLORS.length],
  }));

  // Aging distribution for stacked bar
  const agingDistribution = AGING_COLS.map((col) => ({
    name: col.label,
    key: col.key,
    value: Math.abs(agingFornecedoresTotals[col.key] as number),
    pct: ((Math.abs(agingFornecedoresTotals[col.key] as number) / Math.abs(agingFornecedoresTotals.valor)) * 100).toFixed(1),
  }));

  const handleEmpresaClick = (empresa: string) => {
    setDrillSelection({ mode: "empresa", empresa, period });
  };

  const handleFaixaClick = (empresa: string, faixa: string) => {
    setDrillSelection({ mode: "empresa_faixa", empresa, faixa, period });
  };

  const handleTotalClick = () => {
    setDrillSelection({ mode: "all", period });
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h2 className="text-2xl font-bold italic text-primary mb-2">Aging Fornecedores</h2>
        <p className="text-sm text-muted-foreground mb-4">Partidas em aberto até {refDate}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Donut by empresa */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-3">Distribuição por Empresa</h3>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={85}
                  innerRadius={40}
                  paddingAngle={2}
                  strokeWidth={0}
                  style={{ cursor: "pointer" }}
                  onClick={(_: any, index: number) => {
                    handleEmpresaClick(agingFornecedoresData[index].empresa);
                  }}
                >
                  {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
                </Pie>
                <Tooltip formatter={(v: number) => formatCurrency(v)} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              {pieData.map((d) => (
                <div key={d.name} className="flex items-center gap-1.5 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                  <span className="text-muted-foreground">{d.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bar chart aging distribution */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-3">Distribuição por Vencimento</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={agingDistribution} margin={{ left: 10, right: 10, top: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fill: "hsl(var(--foreground))", fontSize: 10 }} />
                <YAxis tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <Tooltip formatter={(v: number) => formatCurrency(v)} />
                <Bar
                  dataKey="value"
                  radius={[4, 4, 0, 0]}
                  barSize={32}
                  style={{ cursor: "pointer" }}
                  onClick={(data: any) => {
                    if (data && data.key) {
                      setDrillSelection({ mode: "faixa_only", faixa: data.key, period });
                    }
                  }}
                >
                  {agingDistribution.map((_, i) => <Cell key={i} fill={AGING_COLORS[i]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              {agingDistribution.map((d, i) => (
                <div key={d.name} className="flex items-center gap-1.5 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: AGING_COLORS[i] }} />
                  <span className="text-muted-foreground">{d.name}: {d.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed table */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-lg font-bold text-foreground mb-4">Detalhe por Empresa</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 text-muted-foreground font-medium">Empresa</th>
                <th className="text-right py-2 text-muted-foreground font-medium">Valor</th>
                {AGING_COLS.map((c) => (
                  <th key={c.key} className="text-right py-2 text-muted-foreground font-medium">{c.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {agingFornecedoresData.map((row, i) => (
                <tr key={row.empresa} className="border-b border-border/30">
                  <td
                    className="py-2 text-foreground flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleEmpresaClick(row.empresa)}
                  >
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: COLORS[i % COLORS.length] }} />
                    {row.empresa}
                  </td>
                  <td
                    className="py-2 text-right font-medium cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleEmpresaClick(row.empresa)}
                  >
                    {formatCurrency(row.valor)}
                  </td>
                  {AGING_COLS.map((c) => (
                    <td
                      key={c.key}
                      className={`py-2 text-right text-muted-foreground ${(row[c.key] as number) !== 0 ? "cursor-pointer hover:text-primary transition-colors" : ""}`}
                      onClick={() => {
                        if ((row[c.key] as number) !== 0) {
                          handleFaixaClick(row.empresa, c.key);
                        }
                      }}
                    >
                      {(row[c.key] as number) !== 0 ? formatCurrency(row[c.key] as number) : "—"}
                    </td>
                  ))}
                </tr>
              ))}
              <tr
                className="border-t-2 border-border font-bold cursor-pointer hover:bg-muted/30 transition-colors"
                onClick={handleTotalClick}
              >
                <td className="py-2 text-foreground">Total Geral</td>
                <td className="py-2 text-right">{formatCurrency(agingFornecedoresTotals.valor)}</td>
                {AGING_COLS.map((c) => (
                  <td key={c.key} className="py-2 text-right">
                    {formatCurrency(agingFornecedoresTotals[c.key] as number)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <AgingFornDrillModal selection={drillSelection} onClose={() => setDrillSelection(null)} />
    </div>
  );
};

export default AgingFornecedoresTab;

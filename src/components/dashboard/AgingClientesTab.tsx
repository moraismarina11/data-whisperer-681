import { useState } from "react";


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { formatCurrency, formatShort } from "./shared";
import {
  agingClientesData_jan, agingClientesTotals_jan,
  agingClientesData_fev, agingClientesTotals_fev,
  agingClientesData_s1_fev, agingClientesTotals_s1_fev,
  agingClientesData_s2_fev, agingClientesTotals_s2_fev,
  agingClientesData_s3_fev, agingClientesTotals_s3_fev,
  agingClientesData_s4_fev, agingClientesTotals_s4_fev,
  agingClientesData_s4, agingClientesTotals_s4,
  agingClientesData_s5, agingClientesTotals_s5,
  agingClientesData_s6, agingClientesTotals_s6,
  agingClientesData_s7, agingClientesTotals_s7,
  agingClientesData_s8, agingClientesTotals_s8,
  agingClientesData_s8_abr, agingClientesTotals_s8_abr,
  agingClientesData_abr, agingClientesTotals_abr,
  agingClientesData_mar, agingClientesTotals_mar,
  agingClientesData_total, agingClientesTotals_total,
} from "./agingBreakdownData";
import type { AgingClienteBreakdownEntry } from "./agingBreakdownData";
import AgingCliDrillModal, { type AgingCliDrillSelection } from "./AgingCliDrillModal";

const COLORS = [
  "hsl(25, 90%, 55%)", "hsl(190, 60%, 45%)", "hsl(150, 60%, 40%)",
  "hsl(210, 70%, 50%)", "hsl(270, 50%, 55%)", "hsl(40, 90%, 50%)",
];

const AGING_COLS: { key: keyof AgingClienteBreakdownEntry; label: string }[] = [
  { key: "aVencer", label: "A Vencer" },
  { key: "ate30", label: "Até 30d" },
  { key: "de31a60", label: "31-60d" },
  { key: "de61a90", label: "61-90d" },
  { key: "de91a180", label: "91-180d" },
  { key: "de181a1ano", label: "181d-1a" },
  { key: "de1a2anos", label: "1-2 anos" },
  { key: "de2a3anos", label: "2-3 anos" },
  { key: "mais3anos", label: "> 3 anos" },
];

const AGING_COLORS = [
  "hsl(150, 60%, 45%)", "hsl(210, 70%, 55%)", "hsl(40, 90%, 50%)",
  "hsl(25, 85%, 55%)", "hsl(340, 60%, 50%)", "hsl(0, 65%, 50%)",
  "hsl(270, 50%, 55%)", "hsl(190, 60%, 45%)", "hsl(30, 85%, 50%)",
];

const REF_DATES: Record<string, string> = {
  jan:     "31/01/2026",
  s1_jan:  "31/01/2026",
  s2_jan:  "31/01/2026",
  s3_jan:  "31/01/2026",
  s4_jan:  "31/01/2026",
  s1_fev:  "06/02/2026",
  s2_fev:  "20/02/2026",
  s3_fev:  "20/02/2026",
  s4_fev:  "27/02/2026",
  fev:     "27/02/2026",
  s4:      "06/03/2026",
  s5:      "13/03/2026",
  s6:      "20/03/2026",
  s7:      "27/03/2026",
  s8:      "04/04/2026",
  s8_abr:  "04/04/2026",
  abr:     "04/04/2026",
  mar:     "27/03/2026",
  total:   "04/04/2026",
};

function getDataForPeriod(period: string): { data: AgingClienteBreakdownEntry[]; totals: AgingClienteBreakdownEntry } {
  switch (period) {
    case "jan":
    case "s1_jan":
    case "s2_jan":
    case "s3_jan":
    case "s4_jan":  return { data: agingClientesData_jan,     totals: agingClientesTotals_jan };
    case "s1_fev":  return { data: agingClientesData_s1_fev,  totals: agingClientesTotals_s1_fev };
    case "s2_fev":  return { data: agingClientesData_s2_fev,  totals: agingClientesTotals_s2_fev };
    case "s3_fev":  return { data: agingClientesData_s3_fev,  totals: agingClientesTotals_s3_fev };
    case "s4_fev":
    case "fev":     return { data: agingClientesData_fev,     totals: agingClientesTotals_fev };
    case "s4":      return { data: agingClientesData_s4,      totals: agingClientesTotals_s4 };
    case "s5":      return { data: agingClientesData_s5,      totals: agingClientesTotals_s5 };
    case "s6":      return { data: agingClientesData_s6,      totals: agingClientesTotals_s6 };
    case "s7":      return { data: agingClientesData_s7,      totals: agingClientesTotals_s7 };
    case "s8":      return { data: agingClientesData_s8,      totals: agingClientesTotals_s8 };
    case "s8_abr":  return { data: agingClientesData_s8_abr,  totals: agingClientesTotals_s8_abr };
    case "abr":     return { data: agingClientesData_abr,     totals: agingClientesTotals_abr };
    case "mar":     return { data: agingClientesData_mar,     totals: agingClientesTotals_mar };
    case "total":   return { data: agingClientesData_total,   totals: agingClientesTotals_total };
    default:        return { data: agingClientesData_s8,      totals: agingClientesTotals_s8 };
  }
}

interface Props {
  period: string;
}

const AgingClientesTab = ({ period }: Props) => {
  const [drillSelection, setDrillSelection] = useState<AgingCliDrillSelection | null>(null);

  const { data: agingClientesData, totals: agingClientesTotals } = getDataForPeriod(period);
  const refDate = REF_DATES[period] ?? REF_DATES["s7"];

  // Filter out "Total Geral" row from display data
  const displayData = agingClientesData.filter((e) => e.empresa !== "Total Geral");

  // Pie data by empresa
  const pieData = displayData
    .filter((e) => e.aReceber > 0)
    .map((e, i) => ({
      name: e.empresa,
      value: e.aReceber,
      color: COLORS[i % COLORS.length],
    }));

  // Aging distribution
  const agingDistribution = AGING_COLS.map((col) => ({
    name: col.label,
    key: col.key,
    value: Math.abs(agingClientesTotals[col.key] as number),
    pct: agingClientesTotals.aReceber > 0
      ? ((Math.abs(agingClientesTotals[col.key] as number) / agingClientesTotals.aReceber) * 100).toFixed(1)
      : "0",
  })).filter((d) => d.value > 0);

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
        <h2 className="text-2xl font-bold italic text-primary mb-2">Aging Clientes</h2>
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
                    handleEmpresaClick(pieData[index].name);
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
                  <span className="text-muted-foreground">{d.name}: {formatShort(d.value)}</span>
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
                <th className="text-right py-2 text-muted-foreground font-medium">A Receber</th>
                {AGING_COLS.map((c) => (
                  <th key={c.key} className="text-right py-2 text-muted-foreground font-medium whitespace-nowrap">{c.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayData.map((row, i) => (
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
                    {row.aReceber > 0 ? formatCurrency(row.aReceber) : "—"}
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
              {/* Totals */}
              <tr
                className="border-t-2 border-border font-bold cursor-pointer hover:bg-muted/30 transition-colors"
                onClick={handleTotalClick}
              >
                <td className="py-2 text-foreground">Total Geral</td>
                <td className="py-2 text-right">{formatCurrency(agingClientesTotals.aReceber)}</td>
                {AGING_COLS.map((c) => (
                  <td key={c.key} className="py-2 text-right">
                    {(agingClientesTotals[c.key] as number) !== 0 ? formatCurrency(agingClientesTotals[c.key] as number) : "—"}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <AgingCliDrillModal selection={drillSelection} onClose={() => setDrillSelection(null)} />
    </div>
  );
};

export default AgingClientesTab;

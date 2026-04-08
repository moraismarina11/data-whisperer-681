import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { formatCurrency, formatShort } from "./shared";
import {
  agingFornecedoresTotals_jan, agingFornecedoresTotals_fev,
  agingFornecedoresTotals_s7, agingFornecedoresTotals_abr,
  agingClientesTotals_jan, agingClientesTotals_fev,
  agingClientesTotals_s7, agingClientesTotals_s8,
} from "./agingBreakdownData";
import { computePosicaoClientes, computePosicaoFornecedores } from "./computePosicaoFromAging";
import caucaoDrill from "./caucaoDrillData.json";

/* ── Compute caucao totals from drill JSON ── */
const caucaoByPeriod = (period: string): number => {
  return (caucaoDrill as any[])
    .filter(r => r.periodo === period)
    .reduce((s, r) => s + (r.valor || 0), 0);
};

const MULTA_TOTAL = 6438733.72;

/* ── Period blocks ── */
interface PeriodBlock {
  label: string;
  fornTotal: number;
  cliTotal: number;
  caucaoRaw: number;
  multa: number;
  periodKey: string;
}

const periods: PeriodBlock[] = [
  {
    label: "Janeiro",
    fornTotal: agingFornecedoresTotals_jan.valor,
    cliTotal: agingClientesTotals_jan.aReceber,
    caucaoRaw: caucaoByPeriod("jan"),
    multa: MULTA_TOTAL,
    periodKey: "jan",
  },
  {
    label: "Fevereiro",
    fornTotal: agingFornecedoresTotals_fev.valor,
    cliTotal: agingClientesTotals_fev.aReceber,
    caucaoRaw: caucaoByPeriod("fev"),
    multa: MULTA_TOTAL,
    periodKey: "fev",
  },
  {
    label: "Março",
    fornTotal: agingFornecedoresTotals_s7.valor,
    cliTotal: agingClientesTotals_s7.aReceber,
    caucaoRaw: 0,
    multa: MULTA_TOTAL,
    periodKey: "s7",
  },
  {
    label: "Abril",
    fornTotal: agingFornecedoresTotals_abr.valor,
    cliTotal: agingClientesTotals_s8.aReceber,
    caucaoRaw: 0,
    multa: MULTA_TOTAL,
    periodKey: "abr",
  },
  {
    label: "Total Acumulado",
    fornTotal: agingFornecedoresTotals_abr.valor,
    cliTotal: agingClientesTotals_s8.aReceber,
    caucaoRaw: 0,
    multa: MULTA_TOTAL,
    periodKey: "abr",
  },
];

/* ── component ── */
const ResumoTab = () => {
  // Compute per-company data for charts from Posição (which now uses aging data)
  const fornJan = computePosicaoFornecedores("jan");
  const fornFev = computePosicaoFornecedores("fev");
  const fornMar = computePosicaoFornecedores("s7");
  const fornAbr = computePosicaoFornecedores("abr");

  const cliJan = computePosicaoClientes("jan");
  const cliFev = computePosicaoClientes("fev");
  const cliMar = computePosicaoClientes("s7");
  const cliAbr = computePosicaoClientes("abr");

  const allFornCompanies = Array.from(
    new Set([...fornJan, ...fornFev, ...fornMar, ...fornAbr].map(c => c.company))
  );
  const allCliCompanies = Array.from(
    new Set([...cliJan, ...cliFev, ...cliMar, ...cliAbr].map(c => c.company))
  );

  const fornBarData = allFornCompanies.map(co => ({
    company: co,
    "Janeiro": fornJan.find(c => c.company === co)?.total ?? 0,
    "Fevereiro": fornFev.find(c => c.company === co)?.total ?? 0,
    "Março": fornMar.find(c => c.company === co)?.total ?? 0,
    "Abril": fornAbr.find(c => c.company === co)?.total ?? 0,
  }));

  const cliBarData = allCliCompanies.map(co => ({
    company: co,
    "Janeiro": cliJan.find(c => c.company === co)?.aberto ?? 0,
    "Fevereiro": cliFev.find(c => c.company === co)?.aberto ?? 0,
    "Março": cliMar.find(c => c.company === co)?.aberto ?? 0,
    "Abril": cliAbr.find(c => c.company === co)?.aberto ?? 0,
  }));

  // For detail tables per period
  const periodCompanyData = [
    { label: "Janeiro", forn: fornJan, cli: cliJan },
    { label: "Fevereiro", forn: fornFev, cli: cliFev },
    { label: "Março", forn: fornMar, cli: cliMar },
    { label: "Abril", forn: fornAbr, cli: cliAbr },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h2 className="text-2xl font-bold italic text-primary mb-6">Resumo Geral</h2>

        {/* Period summary cards — 5 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {periods.map((p) => {
            const caucaoDisplay = p.caucaoRaw > 0 ? p.caucaoRaw - p.multa : 0;
            const saldo = p.cliTotal + p.fornTotal;

            return (
              <div key={p.label} className="bg-muted/40 rounded-xl border border-border p-4 flex flex-col">
                <h3 className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">{p.label}</h3>
                <div className="space-y-1.5 text-xs flex-1">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-muted-foreground whitespace-nowrap">Fornecedores</span>
                    <span className="font-semibold text-destructive text-right tabular-nums">{formatCurrency(p.fornTotal)}</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-muted-foreground whitespace-nowrap">Clientes</span>
                    <span className="font-semibold text-green-600 text-right tabular-nums">{formatCurrency(p.cliTotal)}</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-muted-foreground whitespace-nowrap">Caução</span>
                    <span className="font-semibold text-foreground text-right tabular-nums">
                      {caucaoDisplay > 0 ? formatCurrency(caucaoDisplay) : "—"}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-muted-foreground whitespace-nowrap">Multas</span>
                    <span className="font-semibold text-foreground text-right tabular-nums">{formatCurrency(p.multa)}</span>
                  </div>
                </div>
                <div className="border-t border-border mt-2 pt-2 flex justify-between items-baseline gap-2">
                  <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">Saldo Líquido</span>
                  <span className={`text-xs font-bold text-right tabular-nums ${saldo >= 0 ? "text-green-600" : "text-destructive"}`}>
                    {formatCurrency(saldo)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fornecedores comparison chart */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-lg font-bold text-foreground mb-4">Fornecedores por Empresa — Comparativo</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={fornBarData} margin={{ left: 10, right: 20, top: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="company" tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }} />
            <YAxis tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
            <Tooltip formatter={(v: number) => formatCurrency(v)} />
            <Legend />
            <Bar dataKey="Janeiro" fill="hsl(210, 70%, 60%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Fevereiro" fill="hsl(25, 90%, 55%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Março" fill="hsl(150, 60%, 45%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Abril" fill="hsl(340, 60%, 50%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Clientes comparison chart */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-lg font-bold text-foreground mb-4">Clientes por Empresa — Comparativo</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={cliBarData} margin={{ left: 10, right: 20, top: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="company" tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }} />
            <YAxis tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
            <Tooltip formatter={(v: number) => formatCurrency(v)} />
            <Legend />
            <Bar dataKey="Janeiro" fill="hsl(150, 60%, 45%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Fevereiro" fill="hsl(340, 60%, 50%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Março" fill="hsl(210, 70%, 60%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Abril" fill="hsl(25, 90%, 55%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed tables per period */}
      {periodCompanyData.map((p) => (
        <div key={p.label} className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-lg font-bold text-foreground mb-4">{p.label}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Fornecedores table */}
            <div>
              <h4 className="text-sm font-bold text-destructive mb-2">Fornecedores</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-muted-foreground font-medium">Empresa</th>
                      <th className="text-right py-2 text-muted-foreground font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.forn.map((c) => (
                      <tr key={c.company} className="border-b border-border/50">
                        <td className="py-2 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                          {c.company}
                        </td>
                        <td className="py-2 text-right font-medium">{formatCurrency(c.total)}</td>
                      </tr>
                    ))}
                    <tr className="font-bold">
                      <td className="py-2">Total</td>
                      <td className="py-2 text-right text-destructive">
                        {formatCurrency(p.forn.reduce((s, c) => s + c.total, 0))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Clientes table */}
            <div>
              <h4 className="text-sm font-bold text-green-600 mb-2">Clientes</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-muted-foreground font-medium">Empresa</th>
                      <th className="text-right py-2 text-muted-foreground font-medium">A Receber</th>
                      <th className="text-right py-2 text-muted-foreground font-medium">Caução</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.cli.map((c) => (
                      <tr key={c.company} className="border-b border-border/50">
                        <td className="py-2 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                          {c.company}
                        </td>
                        <td className="py-2 text-right font-medium">{formatCurrency(c.aberto)}</td>
                        <td className="py-2 text-right text-muted-foreground">{c.caucao ? formatCurrency(c.caucao) : "—"}</td>
                      </tr>
                    ))}
                    <tr className="font-bold">
                      <td className="py-2">Total</td>
                      <td className="py-2 text-right text-green-600">
                        {formatCurrency(p.cli.reduce((s, c) => s + c.aberto, 0))}
                      </td>
                      <td className="py-2 text-right">
                        {formatCurrency(p.cli.reduce((s, c) => s + (c.caucao ?? 0), 0))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumoTab;

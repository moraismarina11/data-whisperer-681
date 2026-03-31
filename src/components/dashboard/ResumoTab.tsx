import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { formatCurrency, formatShort } from "./shared";
import {
  fornecedoresDataJan, fornecedoresDataFev,
  fornecedoresDataS4, fornecedoresDataS5, fornecedoresDataS6, fornecedoresDataS7,
  clientesDataJan, clientesDataFev,
  clientesDataS4, clientesDataS5, clientesDataS6, clientesDataS7,
} from "./agingData";
import type { FornecedorCompany, ClienteCompany } from "./agingData";

/* ── helpers ── */
const sumFornecedores = (data: FornecedorCompany[]) =>
  data.reduce((s, c) => s + c.total, 0);

const sumClientes = (data: ClienteCompany[]) =>
  data.reduce((s, c) => s + c.aberto, 0);

const sumCaucao = (data: ClienteCompany[]) =>
  data.reduce((s, c) => s + (c.caucao ?? 0), 0);

const sumMulta = (data: ClienteCompany[]) =>
  data.reduce((s, c) => s + (c.multa ?? 0), 0);

/* ── Aggregate weekly data into "Março" and "Total Acumulado" ── */
function mergeFornecedores(datasets: FornecedorCompany[][]): FornecedorCompany[] {
  const map = new Map<string, FornecedorCompany>();
  for (const ds of datasets) {
    for (const c of ds) {
      const existing = map.get(c.company);
      if (existing) {
        existing.total += c.total;
      } else {
        map.set(c.company, { ...c, total: c.total, entries: [...c.entries] });
      }
    }
  }
  return Array.from(map.values());
}

function mergeClientes(datasets: ClienteCompany[][]): ClienteCompany[] {
  const map = new Map<string, ClienteCompany>();
  for (const ds of datasets) {
    for (const c of ds) {
      const existing = map.get(c.company);
      if (existing) {
        existing.aberto += c.aberto;
        existing.caucao = (existing.caucao ?? 0) + (c.caucao ?? 0);
        existing.multa = (existing.multa ?? 0) + (c.multa ?? 0);
      } else {
        map.set(c.company, { ...c, aberto: c.aberto, caucao: c.caucao ?? 0, multa: c.multa ?? 0 });
      }
    }
  }
  return Array.from(map.values());
}

const marchWeeks = [fornecedoresDataS4, fornecedoresDataS5, fornecedoresDataS6, fornecedoresDataS7];
const marchWeeksCli = [clientesDataS4, clientesDataS5, clientesDataS6, clientesDataS7];

const fornecedoresDataMar = mergeFornecedores(marchWeeks);
const clientesDataMar = mergeClientes(marchWeeksCli);

const fornecedoresDataTotal = mergeFornecedores([fornecedoresDataJan, fornecedoresDataFev, ...marchWeeks]);
const clientesDataTotal = mergeClientes([clientesDataJan, clientesDataFev, ...marchWeeksCli]);

/* Fixed 4-column periods for Resumo */
interface PeriodBlock {
  label: string;
  fornData: FornecedorCompany[];
  cliData: ClienteCompany[];
}

const periods: PeriodBlock[] = [
  { label: "Janeiro", fornData: fornecedoresDataJan, cliData: clientesDataJan },
  { label: "Fevereiro", fornData: fornecedoresDataFev, cliData: clientesDataFev },
  { label: "Março", fornData: fornecedoresDataMar, cliData: clientesDataMar },
  { label: "Total Acumulado", fornData: fornecedoresDataTotal, cliData: clientesDataTotal },
];

/* Build per-company comparison data */
const allCompanies = Array.from(
  new Set([
    ...fornecedoresDataJan.map((c) => c.company),
    ...fornecedoresDataFev.map((c) => c.company),
    ...fornecedoresDataMar.map((c) => c.company),
    ...clientesDataJan.map((c) => c.company),
    ...clientesDataFev.map((c) => c.company),
    ...clientesDataMar.map((c) => c.company),
  ])
);

/* ── component ── */
const ResumoTab = () => {
  const fornBarData = allCompanies.map((co) => ({
    company: co,
    "Janeiro": fornecedoresDataJan.find((c) => c.company === co)?.total ?? 0,
    "Fevereiro": fornecedoresDataFev.find((c) => c.company === co)?.total ?? 0,
    "Março": fornecedoresDataMar.find((c) => c.company === co)?.total ?? 0,
  }));

  const cliBarData = allCompanies.map((co) => ({
    company: co,
    "Janeiro": clientesDataJan.find((c) => c.company === co)?.aberto ?? 0,
    "Fevereiro": clientesDataFev.find((c) => c.company === co)?.aberto ?? 0,
    "Março": clientesDataMar.find((c) => c.company === co)?.aberto ?? 0,
  }));

  return (
    <div className="space-y-8">
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h2 className="text-2xl font-bold italic text-primary mb-6">Resumo Geral</h2>

        {/* Period summary cards — always 4 fixed columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {periods.map((p) => (
            <div key={p.label} className="bg-muted/40 rounded-xl border border-border p-5">
              <h3 className="text-sm font-bold text-primary mb-3">{p.label}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Fornecedores</span>
                  <span className="font-semibold text-destructive">{formatCurrency(sumFornecedores(p.fornData))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Clientes (Aberto)</span>
                  <span className="font-semibold text-green-600">{formatCurrency(sumClientes(p.cliData))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Caução</span>
                  <span className="font-semibold text-foreground">{formatCurrency(sumCaucao(p.cliData))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Multas</span>
                  <span className="font-semibold text-foreground">{formatCurrency(sumMulta(p.cliData))}</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between font-bold">
                  <span className="text-muted-foreground">Saldo Líquido</span>
                  <span className={sumClientes(p.cliData) - sumFornecedores(p.fornData) >= 0 ? "text-green-600" : "text-destructive"}>
                    {formatCurrency(sumClientes(p.cliData) - sumFornecedores(p.fornData))}
                  </span>
                </div>
              </div>
            </div>
          ))}
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
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Clientes comparison chart */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-lg font-bold text-foreground mb-4">Clientes (Aberto) por Empresa — Comparativo</h3>
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
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed tables per period */}
      {periods.map((p) => (
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
                    {p.fornData.map((c) => (
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
                      <td className="py-2 text-right text-destructive">{formatCurrency(sumFornecedores(p.fornData))}</td>
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
                      <th className="text-right py-2 text-muted-foreground font-medium">Aberto</th>
                      <th className="text-right py-2 text-muted-foreground font-medium">Caução</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.cliData.map((c) => (
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
                      <td className="py-2 text-right text-green-600">{formatCurrency(sumClientes(p.cliData))}</td>
                      <td className="py-2 text-right">{formatCurrency(sumCaucao(p.cliData))}</td>
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

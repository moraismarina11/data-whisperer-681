import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { formatCurrency, formatShort } from "./shared";
import posicaoFornData from "./posicaoFornData.json";

const COMPANY_COLORS: Record<string, string> = {
  "MOTA ENGIL - MACAE": "hsl(40, 90%, 50%)",
  "Mota-Engil Brasil": "hsl(25, 90%, 55%)",
  "MOTA-ENGIL BRASIL S/A": "hsl(25, 90%, 55%)",
  "MEFB": "hsl(150, 60%, 40%)",
  "ME FUNDAÇÕES BRASIL LTDA": "hsl(150, 60%, 40%)",
  "Consórcio Alsub": "hsl(210, 70%, 50%)",
  "CONSÓRCIO ECB SEA_ALSUB": "hsl(210, 70%, 50%)",
  "MEBR": "hsl(340, 60%, 50%)",
  "MEBR - Part. Consultoria": "hsl(340, 60%, 50%)",
  "Tracevia": "hsl(270, 50%, 55%)",
  "Tracevia Brasil": "hsl(270, 50%, 55%)",
  "REDUC": "hsl(180, 50%, 45%)",
  "Reduc": "hsl(180, 50%, 45%)",
  "Mota Engil Engenharia": "hsl(40, 90%, 50%)",
  "Total Geral": "hsl(0, 0%, 50%)",
};

const getColor = (name: string) => COMPANY_COLORS[name] || "hsl(200, 50%, 50%)";

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

const PosicaoFornecedoresTab = ({ period }: Props) => {
  const companies = useMemo(() => {
    const raw = (posicaoFornData as any)[period] || {};
    return Object.entries(raw).map(([empresa, entries]: [string, any]) => {
      const sorted = [...entries].sort((a: any, b: any) => a.valor - b.valor); // most negative first
      const total = sorted.reduce((s: number, e: any) => s + e.valor, 0);
      return {
        empresa,
        color: getColor(empresa),
        total,
        entries: sorted.map((e: any) => ({ name: e.fornecedor, value: e.valor })),
      };
    }).sort((a, b) => a.total - b.total); // most negative company first
  }, [period]);

  const pieData = companies.map((c) => ({
    name: c.empresa,
    value: Math.abs(c.total),
    color: c.color,
  }));

  const grandTotal = companies.reduce((s, c) => s + c.total, 0);

  return (
    <div className="space-y-6">
      {/* Header with KPIs */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h2 className="text-2xl font-bold italic text-primary mb-4">Posição Fornecedores</h2>

        {/* KPI cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
          <div className="bg-muted/50 rounded-lg p-3 border border-border">
            <p className="text-xs text-muted-foreground">Total Geral</p>
            <p className="text-sm font-bold text-destructive">{formatCurrency(grandTotal)}</p>
          </div>
          {companies.slice(0, 4).map((c) => (
            <div key={c.empresa} className="bg-muted/50 rounded-lg p-3 border border-border">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.color }} />
                <p className="text-xs text-muted-foreground truncate">{c.empresa}</p>
              </div>
              <p className="text-sm font-bold text-destructive">{formatCurrency(c.total)}</p>
            </div>
          ))}
        </div>

        {/* Donut */}
        <div className="flex flex-col items-center">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} innerRadius={45} paddingAngle={2} strokeWidth={0}>
                {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip formatter={(v: number) => formatCurrency(v)} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 justify-center mt-3">
            {pieData.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5 text-xs">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                <span className="text-muted-foreground">{d.name}: {formatShort(-d.value)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company cards with bar charts + tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {companies.map((company) => {
          const chartData = company.entries.map((e) => ({ name: e.name, value: Math.abs(e.value) }));
          const chartHeight = Math.max(160, chartData.length * 36 + 40);
          return (
            <div key={company.empresa} className="bg-card rounded-xl border border-border p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: company.color }} />
                  <h4 className="font-bold text-foreground">{company.empresa}</h4>
                </div>
                <span className="text-sm font-semibold text-destructive">{formatCurrency(company.total)}</span>
              </div>

              <ResponsiveContainer width="100%" height={chartHeight}>
                <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 30, top: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                  <XAxis type="number" tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" width={180} tick={{ fill: "hsl(var(--foreground))", fontSize: 10 }} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
                  <Bar dataKey="value" fill={company.color} radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>

              {/* Table */}
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-1.5 text-muted-foreground font-medium">Fornecedor</th>
                      <th className="text-right py-1.5 text-muted-foreground font-medium">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {company.entries.map((e) => (
                      <tr key={e.name} className="border-b border-border/30 hover:bg-muted/30 cursor-pointer">
                        <td className="py-1.5 text-foreground">{e.name}</td>
                        <td className={`py-1.5 text-right font-medium ${e.value < 0 ? "text-destructive" : ""}`}>
                          {formatCurrency(e.value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PosicaoFornecedoresTab;

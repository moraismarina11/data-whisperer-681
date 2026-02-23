import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { formatCurrency, formatShort } from "./shared";
import type { ClienteCompany } from "./agingData";

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

interface Props { data: ClienteCompany[] }

const PosicaoClientesTab = ({ data }: Props) => {
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
          const chartHeight = Math.max(160, sorted.length * 36 + 40);
          return (
            <div key={company.company} className="bg-card rounded-xl border border-border p-5 shadow-sm">
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
              <ResponsiveContainer width="100%" height={chartHeight}>
                <BarChart data={sorted} layout="vertical" margin={{ left: 10, right: 30, top: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                  <XAxis type="number" tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" width={200} tick={{ fill: "hsl(var(--foreground))", fontSize: 10 }} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
                  <Bar dataKey="value" fill={company.color} radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PosicaoClientesTab;

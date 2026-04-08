import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { formatCurrency, formatShort } from "./shared";
import { type ClienteCompany, type ClienteEntry } from "./agingData";
import AgingCliDrillModal, { type AgingCliDrillSelection } from "./AgingCliDrillModal";
import { computePosicaoClientes } from "./computePosicaoFromAging";
import { getCaucaoForEmpresa } from "./caucaoCliData";

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
  const rawData = useMemo(() => computePosicaoClientes(period), [period]);
  const [detailDrill, setDetailDrill] = useState<AgingCliDrillSelection | null>(null);

  // Enrich with real caução data
  const data = useMemo(() => {
    return rawData.map((company) => {
      const caucao = getCaucaoForEmpresa(period, company.company);
      const enrichedEntries: ClienteEntry[] = company.entries.map((e) => {
        const match = caucao.entries.find(
          (c) => c.cliente.toUpperCase().includes(e.name.toUpperCase().slice(0, 15)) ||
                 e.name.toUpperCase().includes(c.cliente.toUpperCase().slice(0, 15))
        );
        return { ...e, caucao: match?.valor };
      });
      return {
        ...company,
        caucao: caucao.total > 0 ? caucao.total : undefined,
        entries: enrichedEntries,
      };
    });
  }, [rawData, period]);

  const openRowDrill = (company: ClienteCompany, clienteName: string) => {
    setDetailDrill({
      mode: "empresa",
      empresa: company.company,
      cliente: clienteName,
      period,
      titleContext: "Posição Clientes",
    });
  };

  const openCompanyDrill = (company: ClienteCompany) => {
    setDetailDrill({
      mode: "empresa",
      empresa: company.company,
      period,
      titleContext: "Posição Clientes",
    });
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
                onClick={(_: any, index: number) => openCompanyDrill(data[index])}
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
                onClick={() => openCompanyDrill(data[i])}
              >
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                <span className="text-muted-foreground">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company cards - 2 cols */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.map((company) => {
          const sorted = [...company.entries].sort((a, b) => b.value - a.value);
          const hasCaucao = company.caucao != null && company.caucao > 0;
          const chartHeight = Math.max(140, sorted.length * 32 + 30);

          return (
            <div
              key={company.company}
              className="bg-card rounded-xl border border-border p-5 shadow-sm"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: company.color }} />
                  <h4 className="font-bold text-foreground">{company.company}</h4>
                </div>
                <div className="text-right text-sm space-x-3">
                  <span className="font-semibold text-foreground">
                    Aberto: {formatCurrency(company.aberto)}
                  </span>
                  {hasCaucao && (
                    <span className="text-muted-foreground">
                      Caução: {formatCurrency(company.caucao!)}
                    </span>
                  )}
                </div>
              </div>

              {/* Horizontal bar chart */}
              <ResponsiveContainer width="100%" height={chartHeight}>
                <BarChart data={sorted} layout="vertical" margin={{ left: 10, right: 30, top: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                  <XAxis type="number" tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" width={180} tick={{ fill: "hsl(var(--foreground))", fontSize: 10 }} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
                  <Bar
                    dataKey="value"
                    fill={company.color}
                    radius={[0, 4, 4, 0]}
                    barSize={18}
                    style={{ cursor: "pointer" }}
                    onClick={(data: any) => openRowDrill(company, data.name)}
                  />
                </BarChart>
              </ResponsiveContainer>

              {/* Client table with Aberto + Caução */}
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-1.5 text-muted-foreground font-medium">Cliente</th>
                      <th className="text-right py-1.5 text-muted-foreground font-medium">Aberto</th>
                      {hasCaucao && (
                        <th className="text-right py-1.5 text-muted-foreground font-medium">Caução</th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((e, i) => (
                      <tr
                        key={e.name}
                        className={`border-b border-border/30 cursor-pointer hover:bg-muted/30 transition-colors ${i % 2 === 0 ? "bg-muted/10" : ""}`}
                        onClick={() => openRowDrill(company, e.name)}
                      >
                        <td className="py-1.5 text-foreground">{e.name}</td>
                        <td className="py-1.5 text-right font-medium tabular-nums">{formatCurrency(e.value)}</td>
                        {hasCaucao && (
                          <td className="py-1.5 text-right text-muted-foreground tabular-nums">
                            {e.caucao != null && e.caucao > 0 ? formatCurrency(e.caucao) : "—"}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      <AgingCliDrillModal selection={detailDrill} onClose={() => setDetailDrill(null)} />
    </div>
  );
};

export default PosicaoClientesTab;

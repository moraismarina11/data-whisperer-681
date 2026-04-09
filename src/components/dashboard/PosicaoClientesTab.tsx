import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { formatCurrency, formatShort } from "./shared";
import { computePosicaoClientes } from "./computePosicaoFromAging";
import { getCaucaoForEmpresa, getCaucaoByCliente, type CaucaoDetailRecord } from "./caucaoCliData";
import AgingCliDrillModal, { type AgingCliDrillSelection } from "./AgingCliDrillModal";
import CaucaoDrillModal, { type CaucaoDrillSelection } from "./CaucaoDrillModal";

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

interface TableRow {
  cliente: string;
  obra: string;
  aberto: number;
  caucao: number;
  caucaoRecords: CaucaoDetailRecord[];
}

interface CompanyData {
  company: string;
  color: string;
  aberto: number;
  caucaoTotal: number;
  rows: TableRow[];
}

interface Props {
  period: string;
}

const PosicaoClientesTab = ({ period }: Props) => {
  const rawData = useMemo(() => computePosicaoClientes(period), [period]);
  const [abertoDrill, setAbertoDrill] = useState<AgingCliDrillSelection | null>(null);
  const [caucaoDrill, setCaucaoDrill] = useState<CaucaoDrillSelection | null>(null);

  const data: CompanyData[] = useMemo(() => {
    return rawData.map((company) => {
      const caucaoData = getCaucaoForEmpresa(period, company.company);
      const caucaoByCliente = getCaucaoByCliente(period, company.company);

      // Build rows: merge aberto entries with caução entries
      const rowMap = new Map<string, TableRow>();

      // Add aberto entries
      for (const e of company.entries) {
        rowMap.set(e.name, {
          cliente: e.name,
          obra: "",
          aberto: e.value,
          caucao: 0,
          caucaoRecords: [],
        });
      }

      // Merge caução entries
      for (const [cliente, cData] of caucaoByCliente) {
        const existing = rowMap.get(cliente);
        if (existing) {
          existing.caucao = cData.total;
          existing.obra = existing.obra || cData.obra;
          existing.caucaoRecords = cData.records;
        } else {
          // Try fuzzy match
          let matched = false;
          for (const [key, row] of rowMap) {
            if (key.toUpperCase().includes(cliente.toUpperCase().slice(0, 15)) ||
                cliente.toUpperCase().includes(key.toUpperCase().slice(0, 15))) {
              row.caucao += cData.total;
              row.obra = row.obra || cData.obra;
              row.caucaoRecords.push(...cData.records);
              matched = true;
              break;
            }
          }
          if (!matched) {
            rowMap.set(cliente, {
              cliente,
              obra: cData.obra,
              aberto: 0,
              caucao: cData.total,
              caucaoRecords: cData.records,
            });
          }
        }
      }

      const rows = Array.from(rowMap.values()).sort((a, b) => (b.aberto + b.caucao) - (a.aberto + a.caucao));

      return {
        company: company.company,
        color: company.color,
        aberto: company.aberto,
        caucaoTotal: caucaoData.total,
        rows,
      };
    });
  }, [rawData, period]);

  const pieData = data.map(c => ({
    name: c.company,
    value: c.aberto,
    color: c.color,
    label: `${c.company}: ${formatShort(c.aberto)}`,
  }));

  const openAbertoDrill = (company: string, cliente?: string) => {
    setAbertoDrill({
      mode: "empresa",
      empresa: company,
      cliente,
      period,
      titleContext: "Posição Clientes",
    });
  };

  const openCaucaoDrill = (empresa: string, cliente: string, records: CaucaoDetailRecord[]) => {
    if (records.length === 0) return;
    setCaucaoDrill({ records, empresa, cliente, period });
  };

  return (
    <div className="space-y-6">
      {/* Donut */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h2 className="text-2xl font-bold italic text-primary mb-4">Posição Clientes</h2>
        <div className="flex flex-col items-center">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} innerRadius={45} paddingAngle={2} strokeWidth={0}
                style={{ cursor: "pointer" }} onClick={(_: any, index: number) => openAbertoDrill(data[index].company)}>
                {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip formatter={(v: number) => formatCurrency(v)} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 justify-center mt-3">
            {pieData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-1.5 text-xs cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() => openAbertoDrill(data[i].company)}>
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
          const barData = company.rows.filter(r => r.aberto > 0).slice(0, 10).map(r => ({ name: r.cliente, value: r.aberto }));
          const hasCaucao = company.caucaoTotal > 0;
          const chartHeight = Math.max(140, barData.length * 32 + 30);

          return (
            <div key={company.company} className="bg-card rounded-xl border border-border p-5 shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: company.color }} />
                  <h4 className="font-bold text-foreground">{company.company}</h4>
                </div>
                <div className="text-right text-sm space-x-3">
                  <span className="font-semibold text-foreground">Aberto: {formatCurrency(company.aberto)}</span>
                  {hasCaucao && <span className="text-muted-foreground">Caução: {formatCurrency(company.caucaoTotal)}</span>}
                </div>
              </div>

              {/* Bar chart */}
              {barData.length > 0 && (
                <ResponsiveContainer width="100%" height={chartHeight}>
                  <BarChart data={barData} layout="vertical" margin={{ left: 10, right: 30, top: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                    <XAxis type="number" tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                    <YAxis type="category" dataKey="name" width={180} tick={{ fill: "hsl(var(--foreground))", fontSize: 10 }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
                    <Bar dataKey="value" fill={company.color} radius={[0, 4, 4, 0]} barSize={18}
                      style={{ cursor: "pointer" }} onClick={(d: any) => openAbertoDrill(company.company, d.name)} />
                  </BarChart>
                </ResponsiveContainer>
              )}

              {/* Table: Cliente | Obra | Aberto | Caução */}
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-1.5 text-muted-foreground font-medium">Cliente</th>
                      <th className="text-left py-1.5 text-muted-foreground font-medium">Obra</th>
                      <th className="text-right py-1.5 text-muted-foreground font-medium">Aberto</th>
                      {hasCaucao && <th className="text-right py-1.5 text-muted-foreground font-medium">Caução</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {company.rows.map((row, i) => (
                      <tr key={row.cliente} className={`border-b border-border/30 ${i % 2 === 0 ? "bg-muted/10" : ""}`}>
                        <td className="py-1.5 text-foreground max-w-[180px] truncate">{row.cliente}</td>
                        <td className="py-1.5 text-muted-foreground max-w-[120px] truncate" title={row.obra}>{row.obra || "—"}</td>
                        <td className="py-1.5 text-right font-medium tabular-nums cursor-pointer hover:text-primary transition-colors"
                          onClick={() => row.aberto > 0 && openAbertoDrill(company.company, row.cliente)}>
                          {row.aberto > 0 ? formatCurrency(row.aberto) : "—"}
                        </td>
                        {hasCaucao && (
                          <td className="py-1.5 text-right text-muted-foreground tabular-nums cursor-pointer hover:text-primary transition-colors"
                            onClick={() => openCaucaoDrill(company.company, row.cliente, row.caucaoRecords)}>
                            {row.caucao > 0 ? formatCurrency(row.caucao) : "—"}
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

      <AgingCliDrillModal selection={abertoDrill} onClose={() => setAbertoDrill(null)} />
      <CaucaoDrillModal selection={caucaoDrill} onClose={() => setCaucaoDrill(null)} />
    </div>
  );
};

export default PosicaoClientesTab;

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { formatCurrency, formatShort, COST_TYPE_COLORS, COST_TYPE_LABELS, GROUP_COLORS, groupLabel, MEB_GROUP_ORDER, MACAE_CC_ORDER } from "./shared";
import type { CustoCentroEntry } from "./shared";
import { useState } from "react";
import CustoCentroDrillModal, { COST_KEY_TO_TIPO, type CcDrillSelection } from "./CustoCentroDrillModal";

const COST_KEYS = ["financiamento", "fornecedor", "imposto", "outrosCustos", "outrosRecebimentos", "recCliente", "salarios"] as const;

interface GroupedEntry {
  group: string;
  financiamento: number;
  fornecedor: number;
  imposto: number;
  outrosCustos: number;
  outrosRecebimentos: number;
  recCliente: number;
  salarios: number;
  total: number;
  children: CustoCentroEntry[];
}

function groupData(data: CustoCentroEntry[]): GroupedEntry[] {
  const map = new Map<string, GroupedEntry>();
  for (const d of data) {
    const g = d.cc === "Outros" ? "Outros" : groupLabel(d.cc);
    if (!map.has(g)) {
      map.set(g, { group: g, financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: 0, children: [] });
    }
    const entry = map.get(g)!;
    for (const k of COST_KEYS) entry[k] += d[k];
    entry.total += d.total;
    entry.children.push(d);
  }
  return Array.from(map.values());
}

const CcTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-xl text-sm">
      <p className="font-bold text-card-foreground">{d.group || d.cc}</p>
      <p className="font-semibold mt-1">Total: {formatCurrency(d.total)}</p>
    </div>
  );
};

function sortByFixedOrder(items: CustoCentroEntry[], order: string[]): CustoCentroEntry[] {
  const indexMap = new Map(order.map((cc, i) => [cc, i]));
  return [...items]
    .filter(d => d.total !== 0)
    .sort((a, b) => {
      const ai = indexMap.get(a.cc) ?? 9999;
      const bi = indexMap.get(b.cc) ?? 9999;
      return ai - bi;
    });
}

interface Props {
  data: CustoCentroEntry[];
  title: string;
  grouped?: boolean;
  period?: string;
  company?: string;
}

const CustoCentroTab = ({ data, title, grouped = false, period = "jan", company = "Mota Engil Brasil" }: Props) => {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [drillSelection, setDrillSelection] = useState<CcDrillSelection | null>(null);
  const groupedData = grouped ? groupData(data) : null;

  let displayData: any[];
  if (grouped) {
    displayData = [...groupedData!].sort((a, b) => Math.abs(b.total) - Math.abs(a.total));
    // Sort children by fixed order per group, skip zero-movement entries
    displayData.forEach((g: any) => {
      if (g.children) {
        const fixedOrder = MEB_GROUP_ORDER[g.group];
        if (fixedOrder) {
          g.children = sortByFixedOrder(g.children, fixedOrder);
        } else {
          // Financeiro / Outros: keep as-is but filter zero
          g.children = g.children.filter((c: CustoCentroEntry) => c.total !== 0);
        }
      }
    });
  } else {
    // Macaé: fixed order, skip zero-movement
    displayData = sortByFixedOrder(data, MACAE_CC_ORDER);
  }

  const totals = COST_KEYS.reduce((acc, k) => {
    acc[k] = data.reduce((s, d) => s + d[k], 0);
    return acc;
  }, {} as Record<string, number>);
  const grandTotal = data.reduce((s, d) => s + d.total, 0);

  // Pie data
  const pieData = COST_KEYS.map((k) => ({
    name: COST_TYPE_LABELS[k],
    value: Math.abs(totals[k]),
    color: COST_TYPE_COLORS[k],
  })).filter((d) => d.value > 0).sort((a, b) => b.value - a.value);

  const chartHeight = Math.max(300, displayData.length * 44 + 60);

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {COST_KEYS.filter((k) => totals[k] !== 0).map((k) => (
          <div
            key={k}
            className="bg-card rounded-xl border border-border p-4 shadow-sm cursor-pointer hover:bg-muted/30 transition-colors"
            onClick={() => setDrillSelection({ mode: "tipo", tipo: COST_KEY_TO_TIPO[k], tipoLabel: COST_TYPE_LABELS[k], company, period })}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: COST_TYPE_COLORS[k] }} />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{COST_TYPE_LABELS[k]}</span>
            </div>
            <p className="text-lg font-bold" style={{ color: COST_TYPE_COLORS[k] }}>{formatCurrency(totals[k])}</p>
          </div>
        ))}
        <div className="bg-card rounded-xl border-2 border-primary/30 p-4 shadow-sm">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Geral</span>
          <p className="text-lg font-bold text-primary mt-1.5">{formatCurrency(grandTotal)}</p>
        </div>
      </div>

      {/* Pie + Bar layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Pie */}
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Distribuição</h4>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={85}
                innerRadius={35}
                paddingAngle={2}
                strokeWidth={0}
                cursor="pointer"
                onClick={(entry: any) => {
                  const key = COST_KEYS.find((k) => COST_TYPE_LABELS[k] === entry.name);
                  if (key) {
                    setDrillSelection({ mode: "tipo", tipo: COST_KEY_TO_TIPO[key], tipoLabel: COST_TYPE_LABELS[key], company, period });
                  }
                }}
              >
                {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip formatter={(v: number) => formatCurrency(v)} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-3">
            {pieData.map((d) => (
              <div key={d.name} className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                <span className="text-muted-foreground truncate">{d.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar */}
        <div className="lg:col-span-3 bg-card rounded-xl border border-border p-5 shadow-sm">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{title}</h4>
          <ResponsiveContainer width="100%" height={chartHeight}>
            <BarChart data={displayData} layout="vertical" margin={{ left: 20, right: 40, top: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
              <XAxis type="number" tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
              <YAxis type="category" dataKey={grouped ? "group" : "cc"} width={160} tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
              <Tooltip content={<CcTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
              <Bar
                dataKey="total"
                radius={[0, 4, 4, 0]}
                barSize={26}
                cursor="pointer"
                onClick={(entry: any) => {
                  if (grouped) {
                    setDrillSelection({ mode: "group", group: entry.group, company, period });
                  } else {
                    setDrillSelection({ mode: "cc", cc: entry.cc, company, period });
                  }
                }}
              >
                {displayData.map((d: any, i) => (
                  <Cell key={i} fill={grouped ? (GROUP_COLORS[d.group] || "hsl(var(--primary))") : "hsl(var(--primary))"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border border-border shadow-sm overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-border bg-muted/40">
              <th className="text-left p-4 font-bold text-foreground">{grouped ? "Grupo" : "Centro de Custo"}</th>
              {COST_KEYS.map((k) => (
                <th key={k} className="text-right p-3 font-bold text-foreground whitespace-nowrap text-xs">
                  <div className="flex items-center justify-end gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: COST_TYPE_COLORS[k] }} />
                    {COST_TYPE_LABELS[k]}
                  </div>
                </th>
              ))}
              <th className="text-right p-4 font-bold text-foreground">Total</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((d: any, i: number) => (
              <>
                <tr
                  key={d.group || d.cc}
                  className={`border-b border-border/50 transition-colors cursor-pointer hover:bg-muted/30 ${i % 2 === 0 ? "bg-muted/10" : ""}`}
                  onClick={() => {
                    if (grouped) {
                      if (expandedGroup === d.group) {
                        setExpandedGroup(null);
                      } else {
                        setExpandedGroup(d.group);
                      }
                    } else {
                      setDrillSelection({ mode: "cc", cc: d.cc, company, period });
                    }
                  }}
                  onDoubleClick={() => {
                    if (grouped) {
                      setDrillSelection({ mode: "group", group: d.group, company, period });
                    }
                  }}
                >
                  <td className="p-3 text-foreground font-medium">
                    {grouped && (
                      <span className="inline-block w-5 text-muted-foreground text-xs">{expandedGroup === d.group ? "▼" : "▶"}</span>
                    )}
                    {grouped && <span className="w-3 h-3 rounded-full inline-block mr-2 align-middle" style={{ background: GROUP_COLORS[d.group] || "hsl(var(--primary))" }} />}
                    {d.group || d.cc}
                    {grouped && <span className="ml-2 text-xs text-muted-foreground">({d.children.length})</span>}
                  </td>
                  {COST_KEYS.map((k) => {
                    const val = d[k];
                    const clickable = val !== 0;
                    return (
                      <td
                        key={k}
                        className={`p-3 text-right text-xs ${val < 0 ? "text-destructive" : ""} ${clickable ? "cursor-pointer hover:bg-muted/30 transition-colors" : ""}`}
                        onClick={(e) => {
                          if (!clickable) return;
                          e.stopPropagation();
                          if (grouped) {
                            setDrillSelection({ mode: "tipo", tipo: COST_KEY_TO_TIPO[k], tipoLabel: COST_TYPE_LABELS[k], company, period });
                          } else {
                            setDrillSelection({ mode: "cc_tipo", cc: d.cc, tipo: COST_KEY_TO_TIPO[k], tipoLabel: COST_TYPE_LABELS[k], company, period });
                          }
                        }}
                      >
                        {val !== 0 ? formatCurrency(val) : "-"}
                      </td>
                    );
                  })}
                  <td className={`p-3 text-right font-bold text-sm ${d.total < 0 ? "text-destructive" : ""} cursor-pointer hover:bg-muted/30 transition-colors`}>{formatCurrency(d.total)}</td>
                </tr>
                {grouped && expandedGroup === d.group && d.children
                  .map((child: CustoCentroEntry) => (
                    <tr
                      key={child.cc}
                      className="border-b border-border/30 bg-muted/20 cursor-pointer hover:bg-muted/40 transition-colors"
                      onClick={() => setDrillSelection({ mode: "cc", cc: child.cc, company, period })}
                    >
                      <td className="p-3 pl-12 text-muted-foreground text-xs">{child.cc}</td>
                      {COST_KEYS.map((k) => (
                        <td key={k} className={`p-3 text-right text-xs ${child[k] < 0 ? "text-destructive" : "text-muted-foreground"}`}>
                          {child[k] !== 0 ? formatCurrency(child[k]) : "-"}
                        </td>
                      ))}
                      <td className={`p-3 text-right font-semibold text-xs ${child.total < 0 ? "text-destructive" : ""}`}>{formatCurrency(child.total)}</td>
                    </tr>
                  ))}
              </>
            ))}
            <tr className="bg-muted/50 border-t-2 border-border">
              <td className="p-4 font-bold text-foreground">Total Geral</td>
              {COST_KEYS.map((k) => (
                <td key={k} className={`p-3 text-right font-bold text-xs ${totals[k] < 0 ? "text-destructive" : ""}`}>{formatCurrency(totals[k])}</td>
              ))}
              <td className={`p-4 text-right font-bold ${grandTotal < 0 ? "text-destructive" : "text-primary"}`}>{formatCurrency(grandTotal)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CustoCentroDrillModal selection={drillSelection} onClose={() => setDrillSelection(null)} />
    </div>
  );
};

export default CustoCentroTab;

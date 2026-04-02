import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { formatCurrency, formatShort, COMPANY_COLORS } from "./shared";
import type { Top10Entry } from "./shared";
import Top10DrillModal, { type DrillSelection } from "./Top10DrillModal";

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-xl text-sm">
      <p className="font-bold text-card-foreground mb-1">{d.supplier}</p>
      {d.macae !== 0 && (
        <div className="flex justify-between gap-4">
          <span className="text-muted-foreground">Macaé:</span>
          <span className="font-semibold" style={{ color: COMPANY_COLORS["Macaé"] }}>{formatCurrency(d.macae)}</span>
        </div>
      )}
      {d.meb !== 0 && (
        <div className="flex justify-between gap-4">
          <span className="text-muted-foreground">Mota Engil Brasil:</span>
          <span className="font-semibold" style={{ color: COMPANY_COLORS["Mota Engil Brasil"] }}>{formatCurrency(d.meb)}</span>
        </div>
      )}
      <div className="flex justify-between gap-4 border-t border-border mt-1 pt-1 font-bold">
        <span>Total:</span>
        <span>{formatCurrency(d.total)}</span>
      </div>
    </div>
  );
};

interface Props {
  data: Top10Entry[];
  period: string;
}

const Top10Tab = ({ data, period }: Props) => {
  const [drillSelection, setDrillSelection] = useState<DrillSelection | null>(null);

  const sorted = [...data].sort((a, b) => a.total - b.total);
  const totalMacae = sorted.reduce((s, d) => s + d.macae, 0);
  const totalMeb = sorted.reduce((s, d) => s + d.meb, 0);
  const totalGeral = sorted.reduce((s, d) => s + d.total, 0);
  const chartHeight = Math.max(300, sorted.length * 48 + 60);

  const handleSupplierClick = (supplier: string, company: string) => {
    setDrillSelection({ supplier, company, period });
  };

  const handleCardClick = (company: string) => {
    setDrillSelection({ supplier: "", company, period, mode: "company-total" });
  };

  const handleBarClick = (data: any) => {
    if (!data) return;
    const entry = data as Top10Entry;
    const company = entry.macae !== 0 ? "Macaé" : "Mota Engil Brasil";
    handleSupplierClick(entry.supplier, company);
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Macaé", value: totalMacae, color: COMPANY_COLORS["Macaé"], dot: true, clickCompany: "Macaé" },
          { label: "Mota Engil Brasil", value: totalMeb, color: COMPANY_COLORS["Mota Engil Brasil"], dot: true, clickCompany: "Mota Engil Brasil" },
          { label: "Total Geral", value: totalGeral, color: undefined, dot: false, clickCompany: "all" },
        ].map((k) => (
          <div
            key={k.label}
            className="bg-card rounded-xl border border-border p-5 shadow-sm cursor-pointer transition-colors hover:bg-muted/30"
            onClick={() => handleCardClick(k.clickCompany)}
          >
            <div className="flex items-center gap-2 mb-2">
              {k.dot && <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: k.color }} />}
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{k.label}</span>
            </div>
            <p className="text-2xl font-bold" style={k.color ? { color: k.color } : undefined}>
              {formatCurrency(k.value)}
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Top 10 Pagamento de Fornecedores
        </h3>
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart data={sorted} layout="vertical" margin={{ left: 20, right: 40, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
            <XAxis type="number" tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
            <YAxis type="category" dataKey="supplier" width={220} tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
            <Bar
              dataKey="total"
              radius={[0, 4, 4, 0]}
              barSize={26}
              className="cursor-pointer"
              onClick={(_: any, __: any, e: any) => {
                // The click handler on Cell handles this
              }}
            >
              {sorted.map((d, i) => (
                <Cell
                  key={i}
                  fill={d.macae !== 0 ? COMPANY_COLORS["Macaé"] : COMPANY_COLORS["Mota Engil Brasil"]}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleBarClick(d)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border border-border shadow-sm overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-border bg-muted/40">
              <th className="text-left p-4 font-bold text-foreground">Fornecedor</th>
              <th className="text-right p-4 font-bold text-foreground">Macaé</th>
              <th className="text-right p-4 font-bold text-foreground">Mota Engil Brasil</th>
              <th className="text-right p-4 font-bold text-foreground">Total Geral</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((d, i) => (
              <tr
                key={d.supplier}
                className={`border-b border-border/50 cursor-pointer transition-colors hover:bg-muted/30 ${i % 2 === 0 ? "bg-muted/10" : ""}`}
                onClick={() => {
                  const company = d.macae !== 0 ? "Macaé" : "Mota Engil Brasil";
                  handleSupplierClick(d.supplier, company);
                }}
              >
                <td className="p-4 text-foreground font-medium">{d.supplier}</td>
                <td className={`p-4 text-right ${d.macae < 0 ? "text-destructive" : ""}`}>
                  {d.macae !== 0 ? (
                    <button
                      className="hover:underline"
                      onClick={(e) => { e.stopPropagation(); handleSupplierClick(d.supplier, "Macaé"); }}
                    >
                      {formatCurrency(d.macae)}
                    </button>
                  ) : "-"}
                </td>
                <td className={`p-4 text-right ${d.meb < 0 ? "text-destructive" : ""}`}>
                  {d.meb !== 0 ? (
                    <button
                      className="hover:underline"
                      onClick={(e) => { e.stopPropagation(); handleSupplierClick(d.supplier, "Mota Engil Brasil"); }}
                    >
                      {formatCurrency(d.meb)}
                    </button>
                  ) : "-"}
                </td>
                <td className={`p-4 text-right font-bold ${d.total < 0 ? "text-destructive" : ""}`}>{formatCurrency(d.total)}</td>
              </tr>
            ))}
            <tr className="bg-muted/50 border-t-2 border-border">
              <td className="p-4 font-bold text-foreground">Total</td>
              <td className={`p-4 text-right font-bold ${totalMacae < 0 ? "text-destructive" : ""}`}>{formatCurrency(totalMacae)}</td>
              <td className={`p-4 text-right font-bold ${totalMeb < 0 ? "text-destructive" : ""}`}>{formatCurrency(totalMeb)}</td>
              <td className={`p-4 text-right font-bold ${totalGeral < 0 ? "text-destructive" : "text-primary"}`}>{formatCurrency(totalGeral)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Drill-down Modal */}
      <Top10DrillModal selection={drillSelection} onClose={() => setDrillSelection(null)} />
    </div>
  );
};

export default Top10Tab;

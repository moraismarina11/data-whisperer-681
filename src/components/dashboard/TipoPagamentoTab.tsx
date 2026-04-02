import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { formatCurrency, formatShort, COST_TYPE_LABELS, COMPANY_COLORS } from "./shared";
import type { TipoPagamentoEntry } from "./shared";
import TipoPagamentoDrillModal, { type TipoDrillSelection } from "./TipoPagamentoDrillModal";

const COST_KEYS = ["financiamento", "fornecedor", "imposto", "outrosCustos", "outrosRecebimentos", "recCliente", "salarios"] as const;

// Map internal keys to the tipo values in drillData JSON
const COST_KEY_TO_TIPO: Record<string, string> = {
  financiamento: "FINANCIAMENTO",
  fornecedor: "FORNECEDOR",
  imposto: "IMPOSTO",
  outrosCustos: "OUTROS CUSTOS",
  outrosRecebimentos: "OUTROS RECEBIMENTOS",
  recCliente: "RECEBIMENTO CLIENTE",
  salarios: "SALARIOS",
};

interface ChartRow {
  type: string;
  key: string;
  macae: number;
  meb: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-xl text-sm">
      <p className="font-bold text-card-foreground mb-2">{label}</p>
      {payload.filter((p: any) => p.value !== 0).map((p: any) => (
        <div key={p.dataKey} className="flex justify-between gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            {p.name}
          </span>
          <span className="font-semibold">{formatCurrency(p.value)}</span>
        </div>
      ))}
    </div>
  );
};

interface Props {
  data: TipoPagamentoEntry[];
  period: string;
}

const TipoPagamentoTab = ({ data, period }: Props) => {
  const [drillSelection, setDrillSelection] = useState<TipoDrillSelection | null>(null);

  const macaeRow = data.find((d) => d.company === "Macaé");
  const mebRow = data.find((d) => d.company === "Mota Engil Brasil");

  const chartData: ChartRow[] = COST_KEYS.map((k) => ({
    type: COST_TYPE_LABELS[k],
    key: k,
    macae: macaeRow?.[k] ?? 0,
    meb: mebRow?.[k] ?? 0,
  }));

  const tableRows = COST_KEYS.map((k) => ({
    key: k,
    label: COST_TYPE_LABELS[k].toUpperCase(),
    tipoLabel: COST_TYPE_LABELS[k],
    tipo: COST_KEY_TO_TIPO[k],
    macae: macaeRow?.[k] ?? 0,
    meb: mebRow?.[k] ?? 0,
    total: (macaeRow?.[k] ?? 0) + (mebRow?.[k] ?? 0),
  }));

  const totalMacae = data.filter(d => d.company === "Macaé").reduce((s, d) => s + d.total, 0);
  const totalMeb = data.filter(d => d.company === "Mota Engil Brasil").reduce((s, d) => s + d.total, 0);
  const grandTotal = totalMacae + totalMeb;

  const openDrill = (tipo: string, tipoLabel: string, company: string) => {
    setDrillSelection({ tipo, tipoLabel, company, period });
  };

  const handleBarClick = (data: any, companyKey: "macae" | "meb") => {
    if (!data?.key) return;
    const key = data.key as string;
    const tipo = COST_KEY_TO_TIPO[key];
    const tipoLabel = COST_TYPE_LABELS[key];
    const company = companyKey === "macae" ? "Macaé" : "Mota Engil Brasil";
    if (data[companyKey] !== 0) {
      openDrill(tipo, tipoLabel, company);
    }
  };

  return (
    <div className="space-y-6">
      {/* Chart */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Tipo de Pagamento / Recebimento por Empresa
        </h3>
        <ResponsiveContainer width="100%" height={380}>
          <BarChart data={chartData} margin={{ left: 10, right: 30, top: 5, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="type"
              tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }}
              angle={-35}
              textAnchor="end"
              interval={0}
              height={80}
            />
            <YAxis tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
            <Legend />
            <Bar
              dataKey="macae"
              name="Macaé"
              fill={COMPANY_COLORS["Macaé"]}
              barSize={28}
              className="cursor-pointer"
              onClick={(data: any) => handleBarClick(data, "macae")}
            />
            <Bar
              dataKey="meb"
              name="Mota-Engil Brasil"
              fill={COMPANY_COLORS["Mota Engil Brasil"]}
              barSize={28}
              className="cursor-pointer"
              onClick={(data: any) => handleBarClick(data, "meb")}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border border-border shadow-sm overflow-auto">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider p-6 pb-0">
          Detalhe por Tipo
        </h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-border bg-muted/40">
              <th className="text-left p-4 font-bold text-foreground">Tipo</th>
              <th className="text-right p-4 font-bold text-foreground">Macaé</th>
              <th className="text-right p-4 font-bold text-foreground">Mota-Engil Brasil</th>
              <th className="text-right p-4 font-bold text-foreground">Total</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((r, i) => (
              <tr key={r.label} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-muted/10" : ""}`}>
                <td className="p-4 text-foreground font-semibold">{r.label}</td>
                <td
                  className={`p-4 text-right ${r.macae < 0 ? "text-destructive" : "text-foreground"} ${r.macae !== 0 ? "cursor-pointer hover:bg-muted/30 transition-colors rounded" : ""}`}
                  onClick={() => r.macae !== 0 && openDrill(r.tipo, r.tipoLabel, "Macaé")}
                >
                  {r.macae !== 0 ? formatCurrency(r.macae) : "-"}
                </td>
                <td
                  className={`p-4 text-right ${r.meb < 0 ? "text-destructive" : "text-foreground"} ${r.meb !== 0 ? "cursor-pointer hover:bg-muted/30 transition-colors rounded" : ""}`}
                  onClick={() => r.meb !== 0 && openDrill(r.tipo, r.tipoLabel, "Mota Engil Brasil")}
                >
                  {r.meb !== 0 ? formatCurrency(r.meb) : "-"}
                </td>
                <td
                  className={`p-4 text-right font-bold ${r.total < 0 ? "text-destructive" : "text-foreground"} ${r.total !== 0 ? "cursor-pointer hover:bg-muted/30 transition-colors rounded" : ""}`}
                  onClick={() => r.total !== 0 && openDrill(r.tipo, r.tipoLabel, "all")}
                >
                  {formatCurrency(r.total)}
                </td>
              </tr>
            ))}
            <tr className="bg-muted/50 border-t-2 border-border">
              <td className="p-4 font-bold text-foreground">Total Geral</td>
              <td className={`p-4 text-right font-bold ${totalMacae < 0 ? "text-destructive" : "text-foreground"}`}>
                {formatCurrency(totalMacae)}
              </td>
              <td className={`p-4 text-right font-bold ${totalMeb < 0 ? "text-destructive" : "text-foreground"}`}>
                {formatCurrency(totalMeb)}
              </td>
              <td className="p-4 text-right font-bold text-primary">
                {formatCurrency(grandTotal)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipoPagamentoDrillModal selection={drillSelection} onClose={() => setDrillSelection(null)} />
    </div>
  );
};

export default TipoPagamentoTab;

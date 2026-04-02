import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { formatCurrency, PERIODS, COST_TYPE_LABELS } from "./shared";
import { ArrowLeft, Search } from "lucide-react";
import drillData from "./top10DrillData.json";

export interface CcDrillSelection {
  mode: "group" | "cc" | "tipo" | "cc_tipo" | "all";
  group?: string;
  cc?: string;
  tipo?: string;
  tipoLabel?: string;
  company: string;
  period: string;
}

interface DrillRecord {
  empresa: string;
  cc: string;
  data: string;
  periodo: string;
  num_doc: string;
  fornecedor: string;
  tipo: string;
  historico: string;
  grupo: string;
  valor: number;
}

const periodLabel = (id: string) => PERIODS.find((p) => p.id === id)?.label ?? id;

const parseDate = (d: string) => {
  const [dd, mm, yyyy] = d.split("/");
  return new Date(+yyyy, +mm - 1, +dd);
};

const COST_KEY_TO_TIPO: Record<string, string> = {
  financiamento: "FINANCIAMENTO",
  fornecedor: "FORNECEDOR",
  imposto: "IMPOSTO",
  outrosCustos: "OUTROS CUSTOS",
  outrosRecebimentos: "OUTROS RECEBIMENTOS",
  recCliente: "RECEBIMENTO CLIENTE",
  salarios: "SALARIOS",
};

interface Props {
  selection: CcDrillSelection | null;
  onClose: () => void;
}

const CustoCentroDrillModal = ({ selection, onClose }: Props) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!selection) return [];

    let records = (drillData as DrillRecord[]).filter((r) => {
      if (r.periodo !== selection.period) return false;
      if (r.empresa !== selection.company) return false;

      if (selection.mode === "group") {
        return r.grupo === selection.group;
      }
      if (selection.mode === "cc") {
        return r.cc === selection.cc;
      }
      if (selection.mode === "tipo") {
        return r.tipo === selection.tipo;
      }
      if (selection.mode === "cc_tipo") {
        return r.cc === selection.cc && r.tipo === selection.tipo;
      }
      if (selection.mode === "all") {
        return true;
      }
      return false;
    });

    if (search.trim()) {
      const q = search.toLowerCase();
      records = records.filter(
        (r) =>
          r.fornecedor.toLowerCase().includes(q) ||
          r.historico.toLowerCase().includes(q) ||
          r.num_doc.toLowerCase().includes(q)
      );
    }

    return records.sort((a, b) => parseDate(b.data).getTime() - parseDate(a.data).getTime());
  }, [selection, search]);

  const total = useMemo(() => filtered.reduce((s, r) => s + r.valor, 0), [filtered]);

  if (!selection) return null;

  let title = "";
  if (selection.mode === "group") {
    title = `${selection.group} — ${selection.company} — ${periodLabel(selection.period)}`;
  } else if (selection.mode === "cc") {
    title = `CC ${selection.cc} — ${selection.company} — ${periodLabel(selection.period)}`;
  } else if (selection.mode === "tipo") {
    title = `${selection.tipoLabel?.toUpperCase()} — ${selection.company} — ${periodLabel(selection.period)}`;
  } else if (selection.mode === "cc_tipo") {
    title = `${selection.tipoLabel?.toUpperCase()} — CC ${selection.cc} — ${periodLabel(selection.period)}`;
  }

  return (
    <Dialog open={!!selection} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[85vh] flex flex-col p-0 gap-0">
        <DialogHeader className="p-6 pb-4 border-b border-border space-y-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </button>
          </div>
          <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pesquisar por fornecedor, histórico ou nº doc..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border bg-muted/40 sticky top-0">
                <th className="text-left p-3 font-bold text-foreground">Data</th>
                <th className="text-left p-3 font-bold text-foreground">Fornecedor</th>
                <th className="text-left p-3 font-bold text-foreground">Nº Doc</th>
                <th className="text-left p-3 font-bold text-foreground">CC</th>
                <th className="text-left p-3 font-bold text-foreground">Tipo</th>
                <th className="text-left p-3 font-bold text-foreground">Histórico</th>
                <th className="text-right p-3 font-bold text-foreground">Valor</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr
                  key={`${r.num_doc}-${r.data}-${i}`}
                  className={`border-b border-border/50 ${i % 2 === 0 ? "bg-muted/10" : ""}`}
                >
                  <td className="p-3 text-foreground whitespace-nowrap">{r.data}</td>
                  <td className="p-3 text-foreground">{r.fornecedor}</td>
                  <td className="p-3 text-foreground">{r.num_doc}</td>
                  <td className="p-3 text-foreground">{r.cc}</td>
                  <td className="p-3 text-foreground">{r.tipo}</td>
                  <td className="p-3 text-foreground">{r.historico}</td>
                  <td className={`p-3 text-right whitespace-nowrap ${r.valor < 0 ? "text-destructive" : ""}`}>
                    {formatCurrency(r.valor)}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-muted-foreground">
                    Nenhum registo encontrado.
                  </td>
                </tr>
              )}
            </tbody>
            {filtered.length > 0 && (
              <tfoot>
                <tr className="bg-muted/50 border-t-2 border-border">
                  <td colSpan={6} className="p-3 font-bold text-foreground">Total</td>
                  <td className={`p-3 text-right font-bold ${total < 0 ? "text-destructive" : ""}`}>
                    {formatCurrency(total)}
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { COST_KEY_TO_TIPO };
export default CustoCentroDrillModal;

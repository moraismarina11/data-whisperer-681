import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { formatCurrency, PERIODS } from "./shared";
import { ArrowLeft, Search } from "lucide-react";
import drillData from "./agingFornDrillData.json";

interface DrillRecord {
  empresa: string;
  codigo: string;
  descricao: string;
  cc: string;
  nf: string;
  num_doc: string;
  emissao: string;
  vencimento: string;
  historico: string;
  valor: number;
  periodo: string;
}

export interface AgingFornDrillSelection {
  mode: "empresa" | "empresa_faixa" | "all" | "bar" | "faixa_only";
  empresa?: string;
  faixa?: string;
  fornecedor?: string;
  period: string;
  titleContext?: string;
}

// Reference dates per period
const REF_DATES: Record<string, string> = {
  jan: "06/02/2026",
  fev: "27/02/2026",
  s4: "06/03/2026",
  s5: "13/03/2026",
  s6: "20/03/2026",
  s7: "27/03/2026",
  mar: "27/03/2026",
  total: "27/03/2026",
};

// Map summary empresa names → drill data empresa names
const EMPRESA_MAP: Record<string, string[]> = {
  "ME FUNDAÇÕES BRASIL LTDA": ["ME FUNDAÇÕES BRASIL LTDA"],
  "CONSÓRCIO ECB SEA_ALSUB": ["CONSÓRCIO ECB SEA_ALSUB"],
  "MEBR - Part. Consultoria": ["MEBR - Part. Consultoria"],
  "MOTA-ENGIL BRASIL S/A": ["Mota-Engil Brasil"],
  "Tracevia Brasil": ["Tracevia Brasil"],
  "Mota Engil Engenharia": ["Mota Engil Engenharia"],
  "REDUC": ["REDUC"],
  // Posição Fornecedores tab company names
  "Consórcio Alsub": ["CONSÓRCIO ECB SEA_ALSUB"],
  "MEBR": ["MEBR - Part. Consultoria"],
  "MEFB": ["ME FUNDAÇÕES BRASIL LTDA", "MEFB"],
  "Mota-Engil Brasil": ["Mota-Engil Brasil"],
  "Tracevia": ["Tracevia Brasil"],
  "Macaé": ["MOTA ENGIL - MACAE"],
  "Reduc": ["REDUC"],
};

const FAIXA_LABELS: Record<string, string> = {
  aVencer: "A Vencer",
  ate30: "Até 30d",
  de31a60: "31-60d",
  de61a90: "61-90d",
  de91a180: "91-180d",
  de181a360: "181-360d",
  mais360: "> 360d",
};

const parseDate = (d: string) => {
  const [dd, mm, yyyy] = d.split("/");
  return new Date(+yyyy, +mm - 1, +dd);
};

const daysDiff = (refDate: Date, vencDate: Date) =>
  Math.floor((refDate.getTime() - vencDate.getTime()) / (1000 * 60 * 60 * 24));

const getAgingBucket = (diff: number): string => {
  if (diff < 0) return "aVencer";
  if (diff <= 30) return "ate30";
  if (diff <= 60) return "de31a60";
  if (diff <= 90) return "de61a90";
  if (diff <= 180) return "de91a180";
  if (diff <= 360) return "de181a360";
  return "mais360";
};

const periodLabel = (id: string) => PERIODS.find((p) => p.id === id)?.label ?? id;

const resolvePeriod = (p: string) => (p === "mar" || p === "total") ? "s7" : p;

interface Props {
  selection: AgingFornDrillSelection | null;
  onClose: () => void;
}

const AgingFornDrillModal = ({ selection, onClose }: Props) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!selection) return [];

    const effPeriod = resolvePeriod(selection.period);
    const refDateStr = REF_DATES[selection.period];
    const refDate = refDateStr ? parseDate(refDateStr) : new Date();

    // Get the drill empresa names for the selected summary empresa
    const drillEmpresas = selection.empresa ? (EMPRESA_MAP[selection.empresa] ?? [selection.empresa]) : [];

    let records = (drillData as DrillRecord[]).filter((r) => {
      if (r.periodo !== effPeriod) return false;

      if (selection.mode === "empresa" || selection.mode === "bar") {
        if (!drillEmpresas.some((e) => r.empresa === e)) return false;
        if (selection.fornecedor) {
          return r.descricao === selection.fornecedor;
        }
        return true;
      }
      if (selection.mode === "empresa_faixa") {
        if (!drillEmpresas.some((e) => r.empresa === e)) return false;
        const venc = parseDate(r.vencimento);
        const diff = daysDiff(refDate, venc);
        return getAgingBucket(diff) === selection.faixa;
      }
      if (selection.mode === "faixa_only") {
        const venc = parseDate(r.vencimento);
        const diff = daysDiff(refDate, venc);
        return getAgingBucket(diff) === selection.faixa;
      }
      // mode === "all"
      return true;
    });

    if (search.trim()) {
      const q = search.toLowerCase();
      records = records.filter(
        (r) =>
          r.descricao.toLowerCase().includes(q) ||
          r.historico.toLowerCase().includes(q) ||
          r.num_doc.toLowerCase().includes(q)
      );
    }

    return records.sort((a, b) => parseDate(a.vencimento).getTime() - parseDate(b.vencimento).getTime());
  }, [selection, search]);

  const total = useMemo(() => filtered.reduce((s, r) => s + r.valor, 0), [filtered]);

  if (!selection) return null;

  let title = "";
  const pl = periodLabel(selection.period);
  const ctx = selection.titleContext || "Aging Fornecedores";
  if (selection.mode === "empresa" || selection.mode === "bar") {
    title = selection.fornecedor
      ? `${selection.fornecedor} — ${selection.empresa} — ${pl}`
      : `${selection.empresa} — ${ctx} — ${pl}`;
  } else if (selection.mode === "empresa_faixa") {
    title = `${selection.empresa} — ${FAIXA_LABELS[selection.faixa!] ?? selection.faixa} — ${pl}`;
  } else if (selection.mode === "faixa_only") {
    title = `${FAIXA_LABELS[selection.faixa!] ?? selection.faixa} — ${ctx} — ${pl}`;
  } else {
    title = `Total Geral — ${ctx} — ${pl}`;
  }

  return (
    <Dialog open={!!selection} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl max-h-[85vh] flex flex-col p-0 gap-0">
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
                <th className="text-left p-3 font-bold text-foreground">Empresa</th>
                <th className="text-left p-3 font-bold text-foreground">Fornecedor/Descrição</th>
                <th className="text-left p-3 font-bold text-foreground">CC</th>
                <th className="text-left p-3 font-bold text-foreground">NF</th>
                <th className="text-left p-3 font-bold text-foreground">Nº Doc SAP</th>
                <th className="text-left p-3 font-bold text-foreground">Emissão</th>
                <th className="text-left p-3 font-bold text-foreground">Vencimento</th>
                <th className="text-left p-3 font-bold text-foreground">Histórico</th>
                <th className="text-right p-3 font-bold text-foreground">Valor</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr
                  key={`${r.nf}-${r.vencimento}-${i}`}
                  className={`border-b border-border/50 ${i % 2 === 0 ? "bg-muted/10" : ""}`}
                >
                  <td className="p-3 text-foreground whitespace-nowrap">{r.empresa}</td>
                  <td className="p-3 text-foreground">{r.descricao}</td>
                  <td className="p-3 text-foreground">{r.cc}</td>
                  <td className="p-3 text-foreground">{r.nf}</td>
                  <td className="p-3 text-foreground">{r.num_doc}</td>
                  <td className="p-3 text-foreground whitespace-nowrap">{r.emissao}</td>
                  <td className="p-3 text-foreground whitespace-nowrap">{r.vencimento}</td>
                  <td className="p-3 text-foreground">{r.historico}</td>
                  <td className={`p-3 text-right whitespace-nowrap ${r.valor < 0 ? "text-destructive" : ""}`}>
                    {formatCurrency(r.valor)}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="p-8 text-center text-muted-foreground">
                    Nenhum registo encontrado.
                  </td>
                </tr>
              )}
            </tbody>
            {filtered.length > 0 && (
              <tfoot>
                <tr className="bg-muted/50 border-t-2 border-border">
                  <td colSpan={8} className="p-3 font-bold text-foreground">Total</td>
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

export default AgingFornDrillModal;

import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { formatCurrency, PERIODS } from "./shared";
import { ArrowLeft, Search } from "lucide-react";
import drillData from "./agingCliDrillData.json";

interface DrillRecord {
  empresa: string;
  cliente: string;
  historico: string;
  nf: string;
  num_doc: string;
  emissao: string;
  vencimento: string;
  a_receber: number;
  periodo: string;
}

export interface AgingCliDrillSelection {
  mode: "empresa" | "empresa_faixa" | "all" | "faixa_only";
  empresa?: string;
  faixa?: string;
  cliente?: string;
  period: string;
  titleContext?: string;
}

const REF_DATES: Record<string, string> = {
  jan: "31/01/2026",
  s1_jan: "31/01/2026",
  s2_jan: "31/01/2026",
  s3_jan: "31/01/2026",
  s4_jan: "31/01/2026",
  s1_fev: "06/02/2026",
  s2_fev: "20/02/2026",
  s3_fev: "20/02/2026",
  s4_fev: "27/02/2026",
  fev: "27/02/2026",
  s4: "06/03/2026",
  s5: "13/03/2026",
  s6: "20/03/2026",
  s7: "27/03/2026",
  s8: "04/04/2026",
  s8_abr: "04/04/2026",
  abr: "04/04/2026",
  mar: "27/03/2026",
  total: "04/04/2026",
};

const FAIXA_LABELS: Record<string, string> = {
  aVencer: "A Vencer",
  ate30: "Até 30d",
  de31a60: "31-60d",
  de61a90: "61-90d",
  de91a180: "91-180d",
  de181a1ano: "181d-1a",
  de1a2anos: "1-2 anos",
  de2a3anos: "2-3 anos",
  mais3anos: "> 3 anos",
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
  if (diff <= 365) return "de181a1ano";
  if (diff <= 730) return "de1a2anos";
  if (diff <= 1095) return "de2a3anos";
  return "mais3anos";
};

const periodLabel = (id: string) => PERIODS.find((p) => p.id === id)?.label ?? id;

const resolvePeriod = (p: string) => {
  if (p === "mar") return "s7";
  return p;
};

// Map summary empresa names → drill data empresa names
const CLI_EMPRESA_MAP: Record<string, string[]> = {
  "ME FUNDAÇÕES BRASIL LTDA": ["ME FUNDAÇÕES BRASIL LTDA"],
  "MOTA-ENGIL BRASIL S/A": ["MOTA-ENGIL BRASIL S/A"],
  "CONSÓRCIO ECB SEA_ALSUB": ["CONSÓRCIO ECB SEA_ALSUB"],
  "MOTA ENGIL ENGENHARIA": ["MOTA ENGIL ENGENHARIA"],
  "Tracevia Brasil": ["Tracevia Brasil"],
  "REDUC": ["REDUC"],
  "MEBR": ["MEBR"],
  // Legacy aliases for backward compat
  "MEFB": ["ME FUNDAÇÕES BRASIL LTDA"],
  "Mota-Engil Brasil": ["MOTA-ENGIL BRASIL S/A"],
  "Mota Engil Brasil": ["MOTA-ENGIL BRASIL S/A"],
  "Consórcio Alsub": ["CONSÓRCIO ECB SEA_ALSUB"],
  "Macaé": ["MOTA ENGIL ENGENHARIA"],
  "Mota Engil Engenharia": ["MOTA ENGIL ENGENHARIA"],
  "Tracevia": ["Tracevia Brasil"],
  "Reduc": ["REDUC"],
};

interface Props {
  selection: AgingCliDrillSelection | null;
  onClose: () => void;
}

const AgingCliDrillModal = ({ selection, onClose }: Props) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!selection) return [];

    const effPeriod = resolvePeriod(selection.period);
    const refDateStr = REF_DATES[selection.period];
    const refDate = refDateStr ? parseDate(refDateStr) : new Date();

    const drillEmpresas = selection.empresa ? (CLI_EMPRESA_MAP[selection.empresa] ?? [selection.empresa]) : [];

    let records = (drillData as DrillRecord[]).filter((r) => {
      if (r.periodo !== effPeriod) return false;

      if (selection.mode === "empresa") {
        if (!drillEmpresas.some((e) => r.empresa === e)) return false;
        if (selection.cliente) {
          return r.cliente === selection.cliente;
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
      return true;
    });

    if (search.trim()) {
      const q = search.toLowerCase();
      records = records.filter(
        (r) =>
          r.cliente.toLowerCase().includes(q) ||
          r.historico.toLowerCase().includes(q) ||
          r.num_doc.toLowerCase().includes(q)
      );
    }

    return records.sort((a, b) => parseDate(a.vencimento).getTime() - parseDate(b.vencimento).getTime());
  }, [selection, search]);

  const total = useMemo(() => filtered.reduce((s, r) => s + r.a_receber, 0), [filtered]);

  if (!selection) return null;

  let title = "";
  const pl = periodLabel(selection.period);
  const ctx = selection.titleContext || "Aging Clientes";
  if (selection.mode === "empresa") {
    title = selection.cliente
      ? `${selection.cliente} — ${selection.empresa} — ${pl}`
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
              placeholder="Pesquisar por cliente, histórico ou nº doc..."
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
                <th className="text-left p-3 font-bold text-foreground">Cliente/Descrição</th>
                <th className="text-left p-3 font-bold text-foreground">NF</th>
                <th className="text-left p-3 font-bold text-foreground">Nº Doc</th>
                <th className="text-left p-3 font-bold text-foreground">Emissão</th>
                <th className="text-left p-3 font-bold text-foreground">Vencimento</th>
                <th className="text-left p-3 font-bold text-foreground">Histórico</th>
                <th className="text-right p-3 font-bold text-foreground">Valor</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr
                  key={`${r.num_doc}-${r.vencimento}-${i}`}
                  className={`border-b border-border/50 ${i % 2 === 0 ? "bg-muted/10" : ""}`}
                >
                  <td className="p-3 text-foreground whitespace-nowrap">{r.empresa}</td>
                  <td className="p-3 text-foreground">{r.cliente || r.historico}</td>
                  <td className="p-3 text-foreground">{r.nf}</td>
                  <td className="p-3 text-foreground">{r.num_doc}</td>
                  <td className="p-3 text-foreground whitespace-nowrap">{r.emissao}</td>
                  <td className="p-3 text-foreground whitespace-nowrap">{r.vencimento}</td>
                  <td className="p-3 text-foreground">{r.historico}</td>
                  <td className="p-3 text-right whitespace-nowrap">{formatCurrency(r.a_receber)}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-muted-foreground">
                    Nenhum registo encontrado.
                  </td>
                </tr>
              )}
            </tbody>
            {filtered.length > 0 && (
              <tfoot>
                <tr className="bg-muted/50 border-t-2 border-border">
                  <td colSpan={7} className="p-3 font-bold text-foreground">Total</td>
                  <td className="p-3 text-right font-bold">{formatCurrency(total)}</td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgingCliDrillModal;

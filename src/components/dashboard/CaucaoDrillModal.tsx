import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "./shared";
import { ArrowLeft, Search } from "lucide-react";
import type { CaucaoDetailRecord } from "./caucaoCliData";

export interface CaucaoDrillSelection {
  records: CaucaoDetailRecord[];
  empresa: string;
  cliente: string;
  period: string;
}

interface Props {
  selection: CaucaoDrillSelection | null;
  onClose: () => void;
}

const CaucaoDrillModal = ({ selection, onClose }: Props) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!selection) return [];
    let records = selection.records;
    if (search.trim()) {
      const q = search.toLowerCase();
      records = records.filter(
        r => r.historico.toLowerCase().includes(q) ||
             r.doc.toLowerCase().includes(q) ||
             r.descricao_obra.toLowerCase().includes(q)
      );
    }
    return records;
  }, [selection, search]);

  const total = useMemo(() => filtered.reduce((s, r) => s + r.valor, 0), [filtered]);

  if (!selection) return null;

  return (
    <Dialog open={!!selection} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl max-h-[85vh] flex flex-col p-0 gap-0">
        <DialogHeader className="p-6 pb-4 border-b border-border space-y-3">
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" /> Voltar
            </button>
          </div>
          <DialogTitle className="text-lg font-bold">
            Caução — {selection.cliente} — {selection.empresa}
          </DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Pesquisar por histórico, doc ou obra..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border bg-muted/40 sticky top-0">
                <th className="text-left p-3 font-bold text-foreground">Obra</th>
                <th className="text-left p-3 font-bold text-foreground">Histórico</th>
                <th className="text-left p-3 font-bold text-foreground">Doc</th>
                <th className="text-left p-3 font-bold text-foreground">Emissão</th>
                <th className="text-left p-3 font-bold text-foreground">Vencimento</th>
                <th className="text-right p-3 font-bold text-foreground">Valor</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr key={`${r.doc}-${i}`} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-muted/10" : ""}`}>
                  <td className="p-3 text-foreground">{r.descricao_obra || r.obra}</td>
                  <td className="p-3 text-foreground">{r.historico}</td>
                  <td className="p-3 text-foreground">{r.doc}</td>
                  <td className="p-3 text-foreground whitespace-nowrap">{r.emissao}</td>
                  <td className="p-3 text-foreground whitespace-nowrap">{r.vencimento}</td>
                  <td className="p-3 text-right whitespace-nowrap">{formatCurrency(r.valor)}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="p-8 text-center text-muted-foreground">Nenhum registo encontrado.</td></tr>
              )}
            </tbody>
            {filtered.length > 0 && (
              <tfoot>
                <tr className="bg-muted/50 border-t-2 border-border">
                  <td colSpan={5} className="p-3 font-bold text-foreground">Total</td>
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

export default CaucaoDrillModal;

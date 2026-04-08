import type { Top10Entry, TipoPagamentoEntry, CustoCentroEntry } from "./shared";
import drillData from "./top10DrillData.json";

interface DrillRecord {
  empresa: string;
  cc: string;
  data: string;
  num_doc: string;
  fornecedor: string;
  tipo: string;
  historico: string;
  grupo: string;
  valor: number;
  periodo: string;
}

const allRecords = drillData as DrillRecord[];

const TIPO_TO_KEY: Record<string, string> = {
  "FINANCIAMENTO": "financiamento",
  "FORNECEDOR": "fornecedor",
  "IMPOSTO": "imposto",
  "OUTROS CUSTOS": "outrosCustos",
  "OUTROS RECEBIMENTOS": "outrosRecebimentos",
  "RECEBIMENTO CLIENTE": "recCliente",
  "SALARIOS": "salarios",
};

const COST_KEYS = ["financiamento", "fornecedor", "imposto", "outrosCustos", "outrosRecebimentos", "recCliente", "salarios"] as const;

function emptyTotals(): Record<string, number> {
  return { financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0 };
}

export function computeTop10(period: string): Top10Entry[] {
  const filtered = allRecords.filter(r => r.periodo === period);
  const map = new Map<string, { macae: number; meb: number }>();
  for (const r of filtered) {
    const key = r.fornecedor;
    if (!map.has(key)) map.set(key, { macae: 0, meb: 0 });
    const entry = map.get(key)!;
    if (r.empresa === "Macaé") entry.macae += r.valor;
    else entry.meb += r.valor;
  }
  const result: Top10Entry[] = [];
  for (const [supplier, v] of map) {
    result.push({ supplier, macae: v.macae, meb: v.meb, total: v.macae + v.meb, period });
  }
  result.sort((a, b) => a.total - b.total);
  return result.slice(0, 10);
}

export function computeTipoPagamento(period: string): TipoPagamentoEntry[] {
  const filtered = allRecords.filter(r => r.periodo === period);
  const companies = ["Macaé", "Mota Engil Brasil"];
  return companies.map(company => {
    const totals = emptyTotals();
    let total = 0;
    for (const r of filtered) {
      if (r.empresa !== company) continue;
      const key = TIPO_TO_KEY[r.tipo];
      if (key) {
        totals[key] += r.valor;
        total += r.valor;
      }
    }
    return {
      company,
      ...totals,
      financiamento: totals.financiamento,
      fornecedor: totals.fornecedor,
      imposto: totals.imposto,
      outrosCustos: totals.outrosCustos,
      outrosRecebimentos: totals.outrosRecebimentos,
      recCliente: totals.recCliente,
      salarios: totals.salarios,
      total,
      period,
    } as TipoPagamentoEntry;
  });
}

export function computeCustoCentro(period: string, company: string): CustoCentroEntry[] {
  const filtered = allRecords.filter(r => r.periodo === period && r.empresa === company);
  const map = new Map<string, Record<string, number>>();
  for (const r of filtered) {
    const cc = r.cc || "Outros";
    if (!map.has(cc)) map.set(cc, emptyTotals());
    const entry = map.get(cc)!;
    const key = TIPO_TO_KEY[r.tipo];
    if (key) entry[key] += r.valor;
  }
  const result: CustoCentroEntry[] = [];
  for (const [cc, totals] of map) {
    const total = COST_KEYS.reduce((s, k) => s + totals[k], 0);
    result.push({
      cc,
      financiamento: totals.financiamento,
      fornecedor: totals.fornecedor,
      imposto: totals.imposto,
      outrosCustos: totals.outrosCustos,
      outrosRecebimentos: totals.outrosRecebimentos,
      recCliente: totals.recCliente,
      salarios: totals.salarios,
      total,
      period,
    });
  }
  return result;
}

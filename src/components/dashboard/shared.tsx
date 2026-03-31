export const COMPANY_COLORS: Record<string, string> = {
  "Consórcio Alsub": "hsl(210, 70%, 50%)",
  "MEBR": "hsl(340, 60%, 50%)",
  "Macaé": "hsl(40, 90%, 50%)",
  "MEFB": "hsl(150, 60%, 40%)",
  "Mota Engil Brasil": "hsl(25, 90%, 55%)",
  "Mota-Engil Brasil": "hsl(25, 90%, 55%)",
  "Tracevia": "hsl(270, 50%, 55%)",
};

export const COST_TYPE_COLORS: Record<string, string> = {
  financiamento: "hsl(215, 70%, 45%)",
  fornecedor: "hsl(0, 65%, 50%)",
  imposto: "hsl(30, 85%, 50%)",
  outrosCustos: "hsl(340, 60%, 50%)",
  outrosRecebimentos: "hsl(160, 55%, 42%)",
  recCliente: "hsl(120, 50%, 40%)",
  salarios: "hsl(270, 50%, 50%)",
};

export const COST_TYPE_LABELS: Record<string, string> = {
  financiamento: "Financiamento",
  fornecedor: "Fornecedor",
  imposto: "Imposto",
  outrosCustos: "Outros Custos",
  outrosRecebimentos: "Outros Recebimentos",
  recCliente: "Recebimento Cliente",
  salarios: "Salários",
};

export const PERIODS = [
  { id: "jan", label: "Janeiro" },
  { id: "fev", label: "Fevereiro" },
  { id: "s4", label: "02/03 a 06/03" },
  { id: "s5", label: "09/03 a 13/03" },
  { id: "s6", label: "16/03 a 20/03" },
  { id: "s7", label: "23/03 a 27/03" },
  { id: "mar", label: "Março" },
  { id: "total", label: "Total Acumulado" },
] as const;

export type PeriodId = (typeof PERIODS)[number]["id"];

export const GROUP_LABELS: Record<string, string> = {
  "1": "Obra",
  "2": "Estrutura",
  "3": "Unidades de apoio",
  "4": "Financeiro",
  Outros: "Outros",
};

// Fixed order for children within MEB groups
export const MEB_OBRA_ORDER = ["10001","10216","10242","10243","10244","10248","10250","10252","10253","10254","10255","10257","10258","10260"];
export const MEB_ESTRUTURA_ORDER = ["20001","20002","20003","20004","20005","20006","20008","20009","20010","20012","20013","20015","20017","20020","20021","20022","20023","20024","20029","20030","20031","20032","20033","20099","20100","20102","20104","20107","20108","20109","20111","20112"];
export const MEB_APOIO_ORDER = ["30001","30002","30003","30099","30258","31001"];

export const MEB_GROUP_ORDER: Record<string, string[]> = {
  Obra: MEB_OBRA_ORDER,
  Estrutura: MEB_ESTRUTURA_ORDER,
  "Unidades de apoio": MEB_APOIO_ORDER,
};

// Fixed order for Macaé CCs
export const MACAE_CC_ORDER = ["10232","10234","10241","10251","10255","10256","10259","20001","40001","Outros"];

export const GROUP_COLORS: Record<string, string> = {
  Obra: "hsl(215, 70%, 45%)",
  Estrutura: "hsl(0, 65%, 50%)",
  "Unidades de apoio": "hsl(160, 55%, 42%)",
  Financeiro: "hsl(30, 85%, 50%)",
  Outros: "hsl(270, 50%, 50%)",
};

export const formatCurrency = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

export const formatShort = (v: number) => {
  const abs = Math.abs(v);
  const sign = v < 0 ? "-" : "";
  if (abs >= 1_000_000) return `${sign}R$ ${(abs / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `${sign}R$ ${(abs / 1_000).toFixed(0)}k`;
  return `${sign}R$ ${abs.toFixed(0)}`;
};

export function groupLabel(cc: string): string {
  const prefix = cc.charAt(0);
  if (["1", "2", "3", "4"].includes(prefix)) return GROUP_LABELS[prefix];
  return "Outros";
}

export interface CustoCentroEntry {
  cc: string;
  financiamento: number;
  fornecedor: number;
  imposto: number;
  outrosCustos: number;
  outrosRecebimentos: number;
  recCliente: number;
  salarios: number;
  total: number;
  period: string;
}

export interface Top10Entry {
  supplier: string;
  macae: number;
  meb: number;
  total: number;
  period: string;
}

export interface TipoPagamentoEntry {
  company: string;
  financiamento: number;
  fornecedor: number;
  imposto: number;
  outrosCustos: number;
  outrosRecebimentos: number;
  recCliente: number;
  salarios: number;
  total: number;
  period: string;
}

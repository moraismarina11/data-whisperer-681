/**
 * Caução detail data - loaded from caucaoCliDetailData.json
 * Provides per-empresa, per-cliente caução records with obra details.
 */
import caucaoRecords from "./caucaoCliDetailData.json";

export interface CaucaoDetailRecord {
  empresa: string;
  cliente: string;
  obra: string;
  descricao_obra: string;
  historico: string;
  doc: string;
  emissao: string;
  vencimento: string;
  valor: number;
  mes: string;
}

// Period → month mapping
const PERIOD_TO_MONTH: Record<string, string> = {
  jan: "jan", s1_jan: "jan", s2_jan: "jan", s3_jan: "jan", s4_jan: "jan",
  fev: "fev", s1_fev: "fev", s2_fev: "fev", s3_fev: "fev", s4_fev: "fev",
  mar: "mar", s4: "mar", s5: "mar", s6: "mar", s7: "mar",
  s8: "abr", s8_abr: "abr", abr: "abr", total: "abr",
};

/**
 * Get all caução records for a period.
 */
export function getCaucaoRecords(period: string): CaucaoDetailRecord[] {
  const month = PERIOD_TO_MONTH[period] || "jan";
  return (caucaoRecords as CaucaoDetailRecord[]).filter(r => r.mes === month);
}

/**
 * Get caução records for a specific empresa in a period.
 */
export function getCaucaoForEmpresa(period: string, empresa: string): { total: number; records: CaucaoDetailRecord[] } {
  const all = getCaucaoRecords(period);
  const records = all.filter(r => r.empresa === empresa);
  const total = records.reduce((s, r) => s + r.valor, 0);
  return { total, records };
}

/**
 * Get caução records grouped by cliente for a specific empresa.
 */
export function getCaucaoByCliente(period: string, empresa: string): Map<string, { total: number; obra: string; records: CaucaoDetailRecord[] }> {
  const { records } = getCaucaoForEmpresa(period, empresa);
  const map = new Map<string, { total: number; obra: string; records: CaucaoDetailRecord[] }>();
  
  for (const r of records) {
    const key = r.cliente;
    if (!map.has(key)) {
      map.set(key, { total: 0, obra: r.descricao_obra || r.obra, records: [] });
    }
    const entry = map.get(key)!;
    entry.total += r.valor;
    entry.records.push(r);
  }
  
  return map;
}

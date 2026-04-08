/**
 * Caução data per empresa+cliente, extracted from "Relação de caução" tabs.
 * Mapped to dashboard periods.
 */

export interface CaucaoClienteEntry {
  cliente: string;
  valor: number;
}

export interface CaucaoEmpresaPeriod {
  empresa: string;
  total: number;
  entries: CaucaoClienteEntry[];
}

// Raw data per month
const JAN: CaucaoEmpresaPeriod[] = [
  {
    empresa: "MOTA ENGIL ENGENHARIA",
    total: 16928900.60,
    entries: [
      { cliente: "PETROLEO BRASILEIRO S A PETROBRAS", valor: 16928900.60 },
    ],
  },
  {
    empresa: "MOTA-ENGIL BRASIL S/A",
    total: 26486403.17,
    entries: [
      { cliente: "CONCESSIONARIA RODOVIAS DO OESTE SP", valor: 20009275.82 },
      { cliente: "PETROLEO BRASILEIRO S A PETROBRAS", valor: 6477127.35 },
    ],
  },
  {
    empresa: "Tracevia Brasil",
    total: 46430.14,
    entries: [
      { cliente: "ECO101 CONCESSIONARIA DE RODOVIAS S", valor: 31837.30 },
      { cliente: "VIABAHIA CONCESSIONARIA", valor: 10573.59 },
      { cliente: "CONCESSIONARIA DE RODOVIAS NOROESTE", valor: 4019.25 },
    ],
  },
];

const FEV: CaucaoEmpresaPeriod[] = [
  {
    empresa: "MOTA ENGIL ENGENHARIA",
    total: 17139385.06,
    entries: [
      { cliente: "PETROLEO BRASILEIRO S A PETROBRAS", valor: 16665072.07 },
      { cliente: "Outros", valor: 474312.99 },
    ],
  },
  {
    empresa: "MOTA-ENGIL BRASIL S/A",
    total: 27305362.22,
    entries: [
      { cliente: "CONCESSIONARIA RODOVIAS DO OESTE SP", valor: 20009275.82 },
      { cliente: "PETROLEO BRASILEIRO S A PETROBRAS", valor: 7296086.40 },
    ],
  },
  {
    empresa: "Tracevia Brasil",
    total: 46430.14,
    entries: [
      { cliente: "ECO101 CONCESSIONARIA DE RODOVIAS S", valor: 31837.30 },
      { cliente: "VIABAHIA CONCESSIONARIA", valor: 10573.59 },
      { cliente: "CONCESSIONARIA DE RODOVIAS NOROESTE", valor: 4019.25 },
    ],
  },
];

const MAR: CaucaoEmpresaPeriod[] = [
  {
    empresa: "MOTA ENGIL ENGENHARIA",
    total: 17215080.98,
    entries: [
      { cliente: "PETROLEO BRASILEIRO S A PETROBRAS", valor: 17215080.98 },
    ],
  },
  {
    empresa: "MOTA-ENGIL BRASIL S/A",
    total: 28332684.26,
    entries: [
      { cliente: "CONCESSIONARIA RODOVIAS DO OESTE SP", valor: 20009275.82 },
      { cliente: "PETROLEO BRASILEIRO S A PETROBRAS", valor: 8323408.44 },
    ],
  },
  {
    empresa: "Tracevia Brasil",
    total: 58547.74,
    entries: [
      { cliente: "ECO101 CONCESSIONARIA DE RODOVIAS S", valor: 31837.30 },
      { cliente: "CONCESSIONARIA DE RODOVIAS NOROESTE", valor: 15165.03 },
      { cliente: "VIABAHIA CONCESSIONARIA", valor: 10573.59 },
      { cliente: "CONCESSIONARIA DE RODOVIA NOVA 364", valor: 971.82 },
    ],
  },
];

const ABR: CaucaoEmpresaPeriod[] = [
  {
    empresa: "MOTA ENGIL ENGENHARIA",
    total: 17780477.45,
    entries: [
      { cliente: "PETROLEO BRASILEIRO S A PETROBRAS", valor: 17780477.45 },
    ],
  },
  {
    empresa: "MOTA-ENGIL BRASIL S/A",
    total: 28332684.26,
    entries: [
      { cliente: "CONCESSIONARIA RODOVIAS DO OESTE SP", valor: 20009275.82 },
      { cliente: "PETROLEO BRASILEIRO S A PETROBRAS", valor: 8323408.44 },
    ],
  },
  {
    empresa: "Tracevia Brasil",
    total: 58547.74,
    entries: [
      { cliente: "ECO101 CONCESSIONARIA DE RODOVIAS S", valor: 31837.30 },
      { cliente: "CONCESSIONARIA DE RODOVIAS NOROESTE", valor: 15165.03 },
      { cliente: "VIABAHIA CONCESSIONARIA", valor: 10573.59 },
      { cliente: "CONCESSIONARIA DE RODOVIA NOVA 364", valor: 971.82 },
    ],
  },
];

const MONTH_DATA: Record<string, CaucaoEmpresaPeriod[]> = {
  jan: JAN,
  fev: FEV,
  mar: MAR,
  abr: ABR,
};

// Period → month mapping
const PERIOD_TO_MONTH: Record<string, string> = {
  jan: "jan", s1_jan: "jan", s2_jan: "jan", s3_jan: "jan", s4_jan: "jan",
  fev: "fev", s1_fev: "fev", s2_fev: "fev", s3_fev: "fev", s4_fev: "fev",
  mar: "mar", s4: "mar", s5: "mar", s6: "mar", s7: "mar",
  s8: "abr", s8_abr: "abr", abr: "abr", total: "abr",
};

// Empresa name normalization: display name → caução empresa names
const EMPRESA_ALIASES: Record<string, string[]> = {
  "Mota-Engil Brasil": ["MOTA-ENGIL BRASIL S/A"],
  "Macaé": ["MOTA ENGIL ENGENHARIA"],
  "Mota Engil Engenharia": ["MOTA ENGIL ENGENHARIA"],
  "Tracevia": ["Tracevia Brasil"],
  "MEFB": [],
  "Consórcio Alsub": [],
  "REDUC": [],
};

/**
 * Get caução data for a given period, returning per-empresa totals and client breakdown.
 */
export function getCaucaoForPeriod(period: string): CaucaoEmpresaPeriod[] {
  const month = PERIOD_TO_MONTH[period] || "jan";
  return MONTH_DATA[month] || [];
}

/**
 * Get caução total for a specific display empresa name in a given period.
 */
export function getCaucaoForEmpresa(period: string, displayName: string): { total: number; entries: CaucaoClienteEntry[] } {
  const data = getCaucaoForPeriod(period);
  const aliases = EMPRESA_ALIASES[displayName] || [displayName];
  
  let total = 0;
  const entries: CaucaoClienteEntry[] = [];
  
  for (const ep of data) {
    if (aliases.includes(ep.empresa) || ep.empresa === displayName) {
      total += ep.total;
      entries.push(...ep.entries);
    }
  }
  
  return { total, entries };
}

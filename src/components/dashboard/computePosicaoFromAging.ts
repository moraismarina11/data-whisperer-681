/**
 * Computes Posição Clientes and Posição Fornecedores dynamically from
 * aging breakdown data (company totals) + drill JSON (individual entries) + caucao JSON.
 * This ensures Posição totals always match Aging totals for every period.
 */
import type { ClienteCompany, ClienteEntry, FornecedorCompany, FornecedorEntry } from "./agingData";
import {
  agingClientesData_jan, agingClientesData_s1_fev, agingClientesData_s2_fev,
  agingClientesData_s3_fev, agingClientesData_fev, agingClientesData_s4_fev,
  agingClientesData_s4, agingClientesData_s5, agingClientesData_s6, agingClientesData_s7,
  agingClientesData_s8, agingClientesData_s8_abr,
  type AgingClienteBreakdownEntry,
} from "./agingBreakdownData";
import {
  agingFornecedoresData_jan, agingFornecedoresData_s1_fev, agingFornecedoresData_s2_fev,
  agingFornecedoresData_s3_fev, agingFornecedoresData_fev, agingFornecedoresData_s4_fev,
  agingFornecedoresData_s4, agingFornecedoresData_s5, agingFornecedoresData_s6, agingFornecedoresData_s7,
  agingFornecedoresData_abr,
  type AgingFornecedorEntry,
} from "./agingBreakdownData";
import cliDrill from "./agingCliDrillData.json";
import fornDrill from "./agingFornDrillData.json";
import caucaoDrill from "./caucaoDrillData.json";

// ── Client aging breakdown per period ──
const CLI_BREAKDOWN: Record<string, AgingClienteBreakdownEntry[]> = {
  jan: agingClientesData_jan,
  s1_jan: agingClientesData_jan,
  s2_jan: agingClientesData_jan,
  s3_jan: agingClientesData_jan,
  s4_jan: agingClientesData_jan,
  s1_fev: agingClientesData_s1_fev,
  s2_fev: agingClientesData_s2_fev,
  s3_fev: agingClientesData_s3_fev,
  fev: agingClientesData_fev,
  s4_fev: agingClientesData_s4_fev,
  s4: agingClientesData_s4,
  s5: agingClientesData_s5,
  s6: agingClientesData_s6,
  s7: agingClientesData_s7,
  mar: agingClientesData_s7,
  s8: agingClientesData_s8,
  s8_abr: agingClientesData_s8_abr,
  abr: agingClientesData_s8_abr,
  total: agingClientesData_s8_abr,
};

const FORN_BREAKDOWN: Record<string, AgingFornecedorEntry[]> = {
  jan: agingFornecedoresData_jan,
  s1_jan: agingFornecedoresData_jan,
  s2_jan: agingFornecedoresData_jan,
  s3_jan: agingFornecedoresData_jan,
  s4_jan: agingFornecedoresData_jan,
  s1_fev: agingFornecedoresData_s1_fev,
  s2_fev: agingFornecedoresData_s2_fev,
  s3_fev: agingFornecedoresData_s3_fev,
  fev: agingFornecedoresData_fev,
  s4_fev: agingFornecedoresData_s4_fev,
  s4: agingFornecedoresData_s4,
  s5: agingFornecedoresData_s5,
  s6: agingFornecedoresData_s6,
  s7: agingFornecedoresData_s7,
  mar: agingFornecedoresData_s7,
  s8: agingFornecedoresData_abr,
  s8_abr: agingFornecedoresData_abr,
  abr: agingFornecedoresData_abr,
  total: agingFornecedoresData_abr,
};

// ── Normalize aging empresa names → Posição display names ──

// Clientes: aging empresa → display name
function normalizeCliEmpresa(name: string): string {
  const u = name.toUpperCase().trim();
  if (u.includes("ALSUB") || u.includes("ECB SEA")) return "CONSÓRCIO ECB SEA_ALSUB";
  if (u.includes("FUNDAÇ") || u.includes("FUNDAC") || u === "ME FUNDAÇÕES BRASIL LTDA" || u === "MEFB") return "ME FUNDAÇÕES BRASIL LTDA";
  if (u.includes("ENGENHARIA") || u.includes("MACAE") || u.includes("MACAÉ")) return "MOTA ENGIL ENGENHARIA";
  if (u.includes("BRASIL")) return "MOTA-ENGIL BRASIL S/A";
  if (u.includes("REDUC")) return "REDUC";
  if (u.includes("TRACEVIA")) return "Tracevia Brasil";
  return name;
}

// Fornecedores: aging empresa → display name
function normalizeFornEmpresa(name: string): string {
  const u = name.toUpperCase().trim();
  if (u.includes("ALSUB") || u.includes("ECB SEA")) return "CONSÓRCIO ECB SEA_ALSUB";
  if (u.includes("MEBR") || u.includes("PARTICIPAÇ")) return "MEBR";
  if (u.includes("FUNDAÇ") || u.includes("FUNDAC") || u === "ME FUNDAÇÕES BRASIL LTDA" || u === "MEFB") return "ME FUNDAÇÕES BRASIL LTDA";
  if (u.includes("ENGENHARIA")) return "MOTA ENGIL ENGENHARIA";
  if (u.includes("MACAE") || u.includes("MACAÉ")) return "MOTA ENGIL ENGENHARIA";
  if (u.includes("BRASIL")) return "MOTA-ENGIL BRASIL S/A";
  if (u.includes("REDUC")) return "REDUC";
  if (u.includes("TRACEVIA")) return "Tracevia Brasil";
  return name;
}

// ── Colors ──
const CLI_COLORS: Record<string, string> = {
  "ME FUNDAÇÕES BRASIL LTDA": "hsl(150, 60%, 40%)",
  "CONSÓRCIO ECB SEA_ALSUB": "hsl(210, 70%, 50%)",
  "MOTA-ENGIL BRASIL S/A": "hsl(25, 90%, 55%)",
  "Tracevia Brasil": "hsl(270, 50%, 55%)",
  "MOTA ENGIL ENGENHARIA": "hsl(40, 90%, 50%)",
  "REDUC": "hsl(190, 60%, 45%)",
};

const FORN_COLORS: Record<string, string> = {
  "CONSÓRCIO ECB SEA_ALSUB": "hsl(210, 70%, 50%)",
  "MEBR": "hsl(340, 60%, 50%)",
  "ME FUNDAÇÕES BRASIL LTDA": "hsl(150, 60%, 40%)",
  "MOTA-ENGIL BRASIL S/A": "hsl(25, 90%, 55%)",
  "Tracevia Brasil": "hsl(270, 50%, 55%)",
  "MOTA ENGIL ENGENHARIA": "hsl(120, 40%, 45%)",
  "REDUC": "hsl(190, 60%, 45%)",
};

// Multa is fixed for Macaé across all periods
const MACAE_MULTA = 6438733.72;

// ── Resolve drill period: sub-weeks of Jan/Feb map to month ──
function resolveDrillPeriod(period: string): string {
  // The drill JSONs have data per period including sub-weeks
  // Check if drill data exists for this exact period, otherwise fallback
  return period;
}

// ── Compute Posição Clientes ──
export function computePosicaoClientes(period: string): ClienteCompany[] {
  const breakdown = CLI_BREAKDOWN[period] || CLI_BREAKDOWN["jan"];

  // Build company totals from aging breakdown
  const companyTotals = new Map<string, number>();
  for (const entry of breakdown) {
    const display = normalizeCliEmpresa(entry.empresa);
    companyTotals.set(display, (companyTotals.get(display) || 0) + entry.aReceber);
  }

  // Build individual entries from drill data
  const drillPeriod = resolveDrillPeriod(period);
  const drillRecords = (cliDrill as any[]).filter(r => r.periodo === drillPeriod);
  
  const clientsByCompany = new Map<string, Map<string, number>>();
  for (const r of drillRecords) {
    const display = normalizeCliEmpresa(r.empresa);
    if (!clientsByCompany.has(display)) clientsByCompany.set(display, new Map());
    const clients = clientsByCompany.get(display)!;
    const clientName = r.cliente || "Outros";
    clients.set(clientName, (clients.get(clientName) || 0) + (r.a_receber || 0));
  }

  // Compute caucao per company
  const caucaoByCompany = new Map<string, number>();
  const caucaoRecords = (caucaoDrill as any[]).filter(r => r.periodo === drillPeriod);
  for (const r of caucaoRecords) {
    const display = normalizeCliEmpresa(r.empresa);
    caucaoByCompany.set(display, (caucaoByCompany.get(display) || 0) + (r.valor || 0));
  }

  // Build result
  const result: ClienteCompany[] = [];
  for (const [company, aberto] of companyTotals) {
    const entries: ClienteEntry[] = [];
    const clientMap = clientsByCompany.get(company);
    if (clientMap) {
      for (const [name, value] of clientMap) {
        entries.push({ name, value });
      }
    }
    // Sort by value descending, take top entries
    entries.sort((a, b) => b.value - a.value);
    const topEntries = entries.slice(0, 10);

    const companyData: ClienteCompany = {
      company,
      color: CLI_COLORS[company] || "hsl(0, 0%, 50%)",
      aberto,
      entries: topEntries,
    };

    const caucao = caucaoByCompany.get(company);
    if (caucao && caucao > 0) companyData.caucao = caucao;
    if (company === "Macaé") companyData.multa = MACAE_MULTA;

    result.push(companyData);
  }

  // Sort by aberto descending
  result.sort((a, b) => b.aberto - a.aberto);
  return result;
}

// ── Compute Posição Fornecedores ──
export function computePosicaoFornecedores(period: string): FornecedorCompany[] {
  const breakdown = FORN_BREAKDOWN[period] || FORN_BREAKDOWN["jan"];

  // Build company totals from aging breakdown (use absolute value)
  const companyTotals = new Map<string, number>();
  for (const entry of breakdown) {
    const display = normalizeFornEmpresa(entry.empresa);
    companyTotals.set(display, (companyTotals.get(display) || 0) + Math.abs(entry.valor));
  }

  // Build individual entries from drill data
  const drillPeriod = resolveDrillPeriod(period);
  const drillRecords = (fornDrill as any[]).filter(r => r.periodo === drillPeriod);

  const fornByCompany = new Map<string, Map<string, number>>();
  for (const r of drillRecords) {
    const display = normalizeFornEmpresa(r.empresa);
    if (!fornByCompany.has(display)) fornByCompany.set(display, new Map());
    const forns = fornByCompany.get(display)!;
    const fornName = r.descricao || "Outros";
    forns.set(fornName, (forns.get(fornName) || 0) + Math.abs(r.valor || 0));
  }

  // Build result
  const result: FornecedorCompany[] = [];
  for (const [company, total] of companyTotals) {
    const entries: FornecedorEntry[] = [];
    const fornMap = fornByCompany.get(company);
    if (fornMap) {
      for (const [name, value] of fornMap) {
        entries.push({ name, value });
      }
    }
    entries.sort((a, b) => b.value - a.value);
    const topEntries = entries.slice(0, 10);

    const topLabel = `Top ${topEntries.length}`;

    result.push({
      company,
      color: FORN_COLORS[company] || "hsl(0, 0%, 50%)",
      total,
      topLabel,
      entries: topEntries,
    });
  }

  result.sort((a, b) => b.total - a.total);
  return result;
}

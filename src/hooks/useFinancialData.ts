import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { CustoCentroEntry, Top10Entry, TipoPagamentoEntry, PeriodId } from "@/components/dashboard/shared";
import type { FornecedorCompany, ClienteCompany } from "@/components/dashboard/agingData";

// Raw DB record type
interface FinancialRecord {
  id: string;
  date: string;
  company: string;
  cost_center: string | null;
  type: string;
  amount: number;
  created_at: string;
}

// Period date ranges for mapping
const PERIOD_RANGES: Record<PeriodId, { from: string; to: string }> = {
  jan: { from: "2025-01-01", to: "2025-01-31" },
  fev: { from: "2025-02-01", to: "2025-02-28" },
  s4: { from: "2025-03-02", to: "2025-03-06" },
  s5: { from: "2025-03-09", to: "2025-03-13" },
  s6: { from: "2025-03-16", to: "2025-03-20" },
  s7: { from: "2025-03-23", to: "2025-03-27" },
  mar: { from: "2025-03-01", to: "2025-03-31" },
  total: { from: "2025-01-01", to: "2025-12-31" },
};

function getPeriodForDate(dateStr: string): PeriodId | null {
  const d = dateStr;
  if (d >= "2025-01-01" && d <= "2025-01-31") return "jan";
  if (d >= "2025-02-01" && d <= "2025-02-28") return "fev";
  if (d >= "2025-03-02" && d <= "2025-03-06") return "s4";
  return null;
}

// Cost type keys
const COST_TYPES = ["financiamento", "fornecedor", "imposto", "outrosCustos", "outrosRecebimentos", "recCliente", "salarios"] as const;

function aggregateTop10(records: FinancialRecord[]): Top10Entry[] {
  // Group by supplier (company) and period, sum amounts
  const byPeriod: Record<string, Record<string, { macae: number; meb: number; total: number }>> = {};
  
  for (const r of records) {
    if (r.type !== "fornecedor") continue;
    const period = getPeriodForDate(r.date);
    if (!period) continue;
    
    if (!byPeriod[period]) byPeriod[period] = {};
    const supplier = r.cost_center || r.company;
    if (!byPeriod[period][supplier]) {
      byPeriod[period][supplier] = { macae: 0, meb: 0, total: 0 };
    }
    
    // Determine if macae or meb based on company
    const isMacae = r.company.toLowerCase().includes("macaé") || r.company.toLowerCase().includes("macae");
    if (isMacae) {
      byPeriod[period][supplier].macae += r.amount;
    } else {
      byPeriod[period][supplier].meb += r.amount;
    }
    byPeriod[period][supplier].total += r.amount;
  }

  const result: Top10Entry[] = [];
  for (const [period, suppliers] of Object.entries(byPeriod)) {
    const sorted = Object.entries(suppliers)
      .sort((a, b) => Math.abs(b[1].total) - Math.abs(a[1].total))
      .slice(0, 10);
    
    for (const [supplier, vals] of sorted) {
      result.push({ supplier, ...vals, period });
    }
  }

  // Add total accumulation
  const totalSuppliers: Record<string, { macae: number; meb: number; total: number }> = {};
  for (const r of records) {
    if (r.type !== "fornecedor") continue;
    const supplier = r.cost_center || r.company;
    if (!totalSuppliers[supplier]) totalSuppliers[supplier] = { macae: 0, meb: 0, total: 0 };
    const isMacae = r.company.toLowerCase().includes("macaé") || r.company.toLowerCase().includes("macae");
    if (isMacae) totalSuppliers[supplier].macae += r.amount;
    else totalSuppliers[supplier].meb += r.amount;
    totalSuppliers[supplier].total += r.amount;
  }
  
  const sortedTotal = Object.entries(totalSuppliers)
    .sort((a, b) => Math.abs(b[1].total) - Math.abs(a[1].total))
    .slice(0, 10);
  
  for (const [supplier, vals] of sortedTotal) {
    result.push({ supplier, ...vals, period: "total" });
  }

  return result;
}

function aggregateCustoCentro(records: FinancialRecord[], companyFilter: string): CustoCentroEntry[] {
  const byPeriodCC: Record<string, Record<string, Record<string, number>>> = {};

  for (const r of records) {
    if (!r.company.toLowerCase().includes(companyFilter.toLowerCase())) continue;
    const period = getPeriodForDate(r.date);
    if (!period) continue;
    const cc = r.cost_center || "Outros";

    if (!byPeriodCC[period]) byPeriodCC[period] = {};
    if (!byPeriodCC[period][cc]) {
      byPeriodCC[period][cc] = {};
      for (const t of COST_TYPES) byPeriodCC[period][cc][t] = 0;
    }
    
    if (COST_TYPES.includes(r.type as any)) {
      byPeriodCC[period][cc][r.type] += r.amount;
    }
  }

  const result: CustoCentroEntry[] = [];
  for (const [period, ccs] of Object.entries(byPeriodCC)) {
    for (const [cc, types] of Object.entries(ccs)) {
      const total = Object.values(types).reduce((s, v) => s + v, 0);
      result.push({
        cc,
        financiamento: types.financiamento || 0,
        fornecedor: types.fornecedor || 0,
        imposto: types.imposto || 0,
        outrosCustos: types.outrosCustos || 0,
        outrosRecebimentos: types.outrosRecebimentos || 0,
        recCliente: types.recCliente || 0,
        salarios: types.salarios || 0,
        total,
        period,
      });
    }
  }

  // Add total accumulation
  const totalCCs: Record<string, Record<string, number>> = {};
  for (const r of records) {
    if (!r.company.toLowerCase().includes(companyFilter.toLowerCase())) continue;
    const cc = r.cost_center || "Outros";
    if (!totalCCs[cc]) {
      totalCCs[cc] = {};
      for (const t of COST_TYPES) totalCCs[cc][t] = 0;
    }
    if (COST_TYPES.includes(r.type as any)) {
      totalCCs[cc][r.type] += r.amount;
    }
  }
  for (const [cc, types] of Object.entries(totalCCs)) {
    const total = Object.values(types).reduce((s, v) => s + v, 0);
    result.push({
      cc,
      financiamento: types.financiamento || 0,
      fornecedor: types.fornecedor || 0,
      imposto: types.imposto || 0,
      outrosCustos: types.outrosCustos || 0,
      outrosRecebimentos: types.outrosRecebimentos || 0,
      recCliente: types.recCliente || 0,
      salarios: types.salarios || 0,
      total,
      period: "total",
    });
  }

  return result;
}

function aggregateTipoPagamento(records: FinancialRecord[]): TipoPagamentoEntry[] {
  const byPeriodCompany: Record<string, Record<string, Record<string, number>>> = {};

  for (const r of records) {
    const period = getPeriodForDate(r.date);
    if (!period) continue;

    if (!byPeriodCompany[period]) byPeriodCompany[period] = {};
    if (!byPeriodCompany[period][r.company]) {
      byPeriodCompany[period][r.company] = {};
      for (const t of COST_TYPES) byPeriodCompany[period][r.company][t] = 0;
    }
    if (COST_TYPES.includes(r.type as any)) {
      byPeriodCompany[period][r.company][r.type] += r.amount;
    }
  }

  const result: TipoPagamentoEntry[] = [];
  for (const [period, companies] of Object.entries(byPeriodCompany)) {
    for (const [company, types] of Object.entries(companies)) {
      const total = Object.values(types).reduce((s, v) => s + v, 0);
      result.push({
        company,
        financiamento: types.financiamento || 0,
        fornecedor: types.fornecedor || 0,
        imposto: types.imposto || 0,
        outrosCustos: types.outrosCustos || 0,
        outrosRecebimentos: types.outrosRecebimentos || 0,
        recCliente: types.recCliente || 0,
        salarios: types.salarios || 0,
        total,
        period,
      });
    }
  }

  // Total accumulation
  const totalCompanies: Record<string, Record<string, number>> = {};
  for (const r of records) {
    if (!totalCompanies[r.company]) {
      totalCompanies[r.company] = {};
      for (const t of COST_TYPES) totalCompanies[r.company][t] = 0;
    }
    if (COST_TYPES.includes(r.type as any)) {
      totalCompanies[r.company][r.type] += r.amount;
    }
  }
  for (const [company, types] of Object.entries(totalCompanies)) {
    const total = Object.values(types).reduce((s, v) => s + v, 0);
    result.push({
      company,
      financiamento: types.financiamento || 0,
      fornecedor: types.fornecedor || 0,
      imposto: types.imposto || 0,
      outrosCustos: types.outrosCustos || 0,
      outrosRecebimentos: types.outrosRecebimentos || 0,
      recCliente: types.recCliente || 0,
      salarios: types.salarios || 0,
      total,
      period: "total",
    });
  }

  return result;
}

export interface AggregatedData {
  top10Data: Top10Entry[];
  custoCentroMEBData: CustoCentroEntry[];
  custoCentroMacaeData: CustoCentroEntry[];
  tipoPagamentoData: TipoPagamentoEntry[];
  hasData: boolean;
}

export function useFinancialData() {
  return useQuery<AggregatedData>({
    queryKey: ["financial-records"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("financial_records")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;

      const records = (data || []) as FinancialRecord[];

      if (records.length === 0) {
        return {
          top10Data: [],
          custoCentroMEBData: [],
          custoCentroMacaeData: [],
          tipoPagamentoData: [],
          hasData: false,
        };
      }

      return {
        top10Data: aggregateTop10(records),
        custoCentroMEBData: aggregateCustoCentro(records, "mota engil brasil"),
        custoCentroMacaeData: aggregateCustoCentro(records, "macae"),
        tipoPagamentoData: aggregateTipoPagamento(records),
        hasData: true,
      };
    },
    refetchInterval: 30000, // Auto-refresh every 30s
  });
}

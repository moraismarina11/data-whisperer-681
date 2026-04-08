import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Top10Tab from "@/components/dashboard/Top10Tab";
import CustoCentroTab from "@/components/dashboard/CustoCentroTab";
import TipoPagamentoTab from "@/components/dashboard/TipoPagamentoTab";
import PosicaoFornecedoresTab from "@/components/dashboard/PosicaoFornecedoresTab";
import PosicaoClientesTab from "@/components/dashboard/PosicaoClientesTab";
import AgingFornecedoresTab from "@/components/dashboard/AgingFornecedoresTab";
import AgingClientesTab from "@/components/dashboard/AgingClientesTab";
import ResumoTab from "@/components/dashboard/ResumoTab";
import { top10Data, custoCentroMEBData, custoCentroMacaeData, tipoPagamentoData } from "@/components/dashboard/data";
import { PERIODS, WEEK_PERIODS, type PeriodId } from "@/components/dashboard/shared";

const Index = () => {
  const [period, setPeriod] = useState<PeriodId>("jan");
  const [activeMonth, setActiveMonth] = useState<string>("jan");

  const filterByPeriod = <T extends { period: string }>(data: T[]): T[] => {
    return data.filter((d) => d.period === period);
  };

  const handleMonthClick = (monthId: string) => {
    if (activeMonth === monthId) {
      setPeriod(monthId);
    } else {
      setActiveMonth(monthId);
      setPeriod(monthId);
    }
  };

  const isMonthActive = (monthId: string) => {
    if (period === monthId) return true;
    const weeks = WEEK_PERIODS[monthId];
    return weeks?.some((w) => w.id === period) ?? false;
  };

  const activeWeeks = WEEK_PERIODS[activeMonth];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              Dashboard Financeiro
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">Análise de Contas a Pagar e Receber</p>
          </div>

          {/* Cascading Period selector */}
          <div className="flex flex-col gap-2 items-end">
            {/* Level 1: Months */}
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1 flex-wrap">
              {PERIODS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleMonthClick(m.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    isMonthActive(m.id)
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
            {/* Level 2: Weeks */}
            {activeWeeks && (
              <div className="flex items-center gap-1 bg-muted/60 rounded-lg p-1 flex-wrap">
                <button
                  onClick={() => setPeriod(activeMonth)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    period === activeMonth
                      ? "bg-primary/80 text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Mês completo
                </button>
                {activeWeeks.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setPeriod(w.id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      period === w.id
                        ? "bg-primary/80 text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-6">
        <Tabs defaultValue="resumo" className="space-y-6">
          <TabsList className="bg-card border border-border shadow-sm p-1 rounded-xl h-auto flex-wrap">
            <TabsTrigger value="resumo" className="rounded-lg px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Resumo
            </TabsTrigger>
            <TabsTrigger value="top10" className="rounded-lg px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Top 10 Pagamentos
            </TabsTrigger>
            <TabsTrigger value="tipo" className="rounded-lg px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Tipos de Pagamento/Recebimento
            </TabsTrigger>
            <TabsTrigger value="cc-meb" className="rounded-lg px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              CC Mota Engil Brasil
            </TabsTrigger>
            <TabsTrigger value="cc-macae" className="rounded-lg px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              CC Macaé
            </TabsTrigger>
            <TabsTrigger value="pos-forn" className="rounded-lg px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Posição Fornecedores
            </TabsTrigger>
            <TabsTrigger value="pos-cli" className="rounded-lg px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Posição Clientes
            </TabsTrigger>
            <TabsTrigger value="aging-forn" className="rounded-lg px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Aging Fornecedores
            </TabsTrigger>
            <TabsTrigger value="aging-cli" className="rounded-lg px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Aging Clientes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="resumo">
            <ResumoTab />
          </TabsContent>

          <TabsContent value="top10">
            <Top10Tab data={filterByPeriod(top10Data)} period={period} />
          </TabsContent>

          <TabsContent value="tipo">
            <TipoPagamentoTab data={filterByPeriod(tipoPagamentoData)} period={period} />
          </TabsContent>

          <TabsContent value="cc-meb">
            <CustoCentroTab
              data={filterByPeriod(custoCentroMEBData)}
              title="Centro de Custo — Mota Engil Brasil"
              grouped
              period={period}
              company="Mota Engil Brasil"
            />
          </TabsContent>

          <TabsContent value="cc-macae">
            <CustoCentroTab
              data={filterByPeriod(custoCentroMacaeData)}
              title="Centro de Custo — Macaé"
              period={period}
              company="Macaé"
            />
          </TabsContent>

          <TabsContent value="pos-forn">
            <PosicaoFornecedoresTab period={period} />
          </TabsContent>

          <TabsContent value="pos-cli">
            <PosicaoClientesTab period={period} />
          </TabsContent>

          <TabsContent value="aging-forn">
            <AgingFornecedoresTab period={period} />
          </TabsContent>

          <TabsContent value="aging-cli">
            <AgingClientesTab period={period} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;

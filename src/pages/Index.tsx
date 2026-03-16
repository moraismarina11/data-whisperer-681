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
import { top10Data as hardcodedTop10, custoCentroMEBData as hardcodedMEB, custoCentroMacaeData as hardcodedMacae, tipoPagamentoData as hardcodedTipo } from "@/components/dashboard/data";
import {
  fornecedoresDataJan, fornecedoresDataFev, fornecedoresDataS4,
  clientesDataJan, clientesDataFev, clientesDataS4,
} from "@/components/dashboard/agingData";
import { PERIODS, type PeriodId } from "@/components/dashboard/shared";
import { useFinancialData } from "@/hooks/useFinancialData";

const Index = () => {
  const [period, setPeriod] = useState<PeriodId>("jan");
  const { data: apiData, isLoading } = useFinancialData();

  // Use API data if available, otherwise fall back to hardcoded
  const top10Data = apiData?.hasData ? apiData.top10Data : hardcodedTop10;
  const custoCentroMEBData = apiData?.hasData ? apiData.custoCentroMEBData : hardcodedMEB;
  const custoCentroMacaeData = apiData?.hasData ? apiData.custoCentroMacaeData : hardcodedMacae;
  const tipoPagamentoData = apiData?.hasData ? apiData.tipoPagamentoData : hardcodedTipo;

  const filterByPeriod = <T extends { period: string }>(data: T[]): T[] => {
    return data.filter((d) => d.period === period);
  };

  const getFornecedoresData = () => {
    if (period === "jan") return fornecedoresDataJan;
    if (period === "fev") return fornecedoresDataFev;
    return fornecedoresDataS4;
  };

  const getClientesData = () => {
    if (period === "jan") return clientesDataJan;
    if (period === "fev") return clientesDataFev;
    return clientesDataS4;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              Dashboard Financeiro
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Análise de Contas a Pagar e Receber
              {apiData?.hasData && (
                <span className="ml-2 inline-flex items-center gap-1 text-xs text-green-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  API conectada
                </span>
              )}
              {isLoading && (
                <span className="ml-2 text-xs text-muted-foreground">Carregando...</span>
              )}
            </p>
          </div>

          {/* Period selector */}
          <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
            {PERIODS.map((p) => (
              <button
                key={p.id}
                onClick={() => setPeriod(p.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  period === p.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.label}
              </button>
            ))}
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
            <Top10Tab data={filterByPeriod(top10Data)} />
          </TabsContent>

          <TabsContent value="tipo">
            <TipoPagamentoTab data={filterByPeriod(tipoPagamentoData)} />
          </TabsContent>

          <TabsContent value="cc-meb">
            <CustoCentroTab
              data={filterByPeriod(custoCentroMEBData)}
              title="Centro de Custo — Mota Engil Brasil"
              grouped
            />
          </TabsContent>

          <TabsContent value="cc-macae">
            <CustoCentroTab
              data={filterByPeriod(custoCentroMacaeData)}
              title="Centro de Custo — Macaé"
            />
          </TabsContent>

          <TabsContent value="pos-forn">
            <PosicaoFornecedoresTab data={getFornecedoresData()} />
          </TabsContent>

          <TabsContent value="pos-cli">
            <PosicaoClientesTab data={getClientesData()} />
          </TabsContent>

          <TabsContent value="aging-forn">
            <AgingFornecedoresTab />
          </TabsContent>

          <TabsContent value="aging-cli">
            <AgingClientesTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;

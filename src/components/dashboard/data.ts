import type { CustoCentroEntry, Top10Entry, TipoPagamentoEntry } from "./shared";

// ── Top 10 Pagamento de Fornecedor ─────────────────────────────────

// Janeiro
const top10Jan: Top10Entry[] = [
  { supplier: "FLOW LATINO AMERICAN", macae: -1819879.67, meb: 0, total: -1819879.67, period: "jan" },
  { supplier: "FLP TRANSPORTES DE M", macae: -845353.00, meb: 0, total: -845353.00, period: "jan" },
  { supplier: "KROMINOX ACOS E META", macae: -837871.81, meb: 0, total: -837871.81, period: "jan" },
  { supplier: "JOTUN BRASIL", macae: -743932.36, meb: 0, total: -743932.36, period: "jan" },
  { supplier: "JOHN ZINK COMPANY LL", macae: -735476.35, meb: 0, total: -735476.35, period: "jan" },
  { supplier: "UPSTAR AVIATION", macae: 0, meb: -661000.00, total: -661000.00, period: "jan" },
  { supplier: "DBR ENERGIES S/A", macae: 0, meb: -549492.89, total: -549492.89, period: "jan" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -504763.65, total: -504763.65, period: "jan" },
  { supplier: "ALMEQ SERVICOS TECNI", macae: -494638.17, meb: 0, total: -494638.17, period: "jan" },
  { supplier: "JCR COMERCIO, SERVIC", macae: -455852.00, meb: 0, total: -455852.00, period: "jan" },
];

// Fevereiro
const top10Fev: Top10Entry[] = [
  { supplier: "PRINER LOCACAO DE EQ", macae: -1843033.42, meb: 0, total: -1843033.42, period: "fev" },
  { supplier: "FLOW LATINO", macae: -1150000.00, meb: 0, total: -1150000.00, period: "fev" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -894018.43, total: -894018.43, period: "fev" },
  { supplier: "JOTUN BRASIL", macae: -516587.98, meb: 0, total: -516587.98, period: "fev" },
  { supplier: "KROMINOX ACOS E META", macae: -482357.72, meb: 0, total: -482357.72, period: "fev" },
  { supplier: "HYDRATIGHT EQUIPAMEN", macae: -443206.22, meb: 0, total: -443206.22, period: "fev" },
  { supplier: "FLP TRANSPORTES DE M", macae: -439617.66, meb: 0, total: -439617.66, period: "fev" },
  { supplier: "CAIXA DE PREVIDENCIA DOS FUNCIONARI", macae: 0, meb: -380000.00, total: -380000.00, period: "fev" },
  { supplier: "ALMEQ SERVICOS TECNI", macae: -351979.89, meb: 0, total: -351979.89, period: "fev" },
  { supplier: "CISARENTAL ADMINISTR", macae: -345527.35, meb: 0, total: -345527.35, period: "fev" },
];

// Semana 02/03 a 06/03
const top10S4: Top10Entry[] = [
  { supplier: "FLP TRANSPORTES DE M", macae: -293696.61, meb: 0, total: -293696.61, period: "s4" },
  { supplier: "LUIS FELIPE EBOLI IABRUDI EPP", macae: 0, meb: -266534.32, total: -266534.32, period: "s4" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -246836.73, total: -246836.73, period: "s4" },
  { supplier: "CISARENTAL ADMINISTR", macae: -230312.76, meb: 0, total: -230312.76, period: "s4" },
  { supplier: "JRM SERVICOS", macae: -215539.57, meb: 0, total: -215539.57, period: "s4" },
  { supplier: "SAPIENSIA DESENVOLVI", macae: -192552.82, meb: 0, total: -192552.82, period: "s4" },
  { supplier: "S.N. REFEICOES E BUFFET LTDA", macae: 0, meb: -187232.50, total: -187232.50, period: "s4" },
  { supplier: "HIGH SUPPLY SERVICOS", macae: -175009.00, meb: 0, total: -175009.00, period: "s4" },
  { supplier: "HOTEL SAMBA ITABORAI", macae: -174296.80, meb: 0, total: -174296.80, period: "s4" },
  { supplier: "KROMINOX ACOS E META", macae: -169494.20, meb: 0, total: -169494.20, period: "s4" },
];

// Total Acumulado
const top10Total: Top10Entry[] = [
  { supplier: "FLOW LATINO AMERICAN", macae: -1853699.08, meb: 0, total: -1853699.08, period: "total" },
  { supplier: "PRINER LOCACAO DE EQ", macae: -1843033.42, meb: 0, total: -1843033.42, period: "total" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -1645618.81, total: -1645618.81, period: "total" },
  { supplier: "FLP TRANSPORTES DE M", macae: -1578667.27, meb: 0, total: -1578667.27, period: "total" },
  { supplier: "KROMINOX ACOS E META", macae: -1489723.73, meb: 0, total: -1489723.73, period: "total" },
  { supplier: "JOTUN BRASIL", macae: -1260520.34, meb: 0, total: -1260520.34, period: "total" },
  { supplier: "FLOW LATINO", macae: -1150000.00, meb: 0, total: -1150000.00, period: "total" },
  { supplier: "UPSTAR AVIATION", macae: 0, meb: -931000.00, total: -931000.00, period: "total" },
  { supplier: "CISARENTAL ADMINISTR", macae: -907595.88, meb: 0, total: -907595.88, period: "total" },
  { supplier: "ALMEQ SERVICOS TECNI", macae: -846618.06, meb: 0, total: -846618.06, period: "total" },
];

export const top10Data: Top10Entry[] = [...top10Jan, ...top10Fev, ...top10S4, ...top10Total];

// ── CC Mota Engil Brasil ───────────────────────────────────────────

// Janeiro
const ccMEBJan: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -329060.08, imposto: 0, outrosCustos: -201787.98, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -530848.06, period: "jan" },
  { cc: "10216", financiamento: 0, fornecedor: -15441.65, imposto: 0, outrosCustos: 0, outrosRecebimentos: 23264.29, recCliente: 0, salarios: 0, total: 7822.64, period: "jan" },
  { cc: "10242", financiamento: 0, fornecedor: -85872.81, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -85872.81, period: "jan" },
  { cc: "10243", financiamento: 0, fornecedor: -12608053.23, imposto: 0, outrosCustos: -2939.90, outrosRecebimentos: 0, recCliente: 6318339.18, salarios: 0, total: -6292653.95, period: "jan" },
  { cc: "10244", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1068.80, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1068.80, period: "jan" },
  { cc: "10248", financiamento: 0, fornecedor: -42882.29, imposto: 0, outrosCustos: -133773.56, outrosRecebimentos: 5000.00, recCliente: 0, salarios: -5648.01, total: -177303.86, period: "jan" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2423.55, outrosRecebimentos: 0, recCliente: 0, salarios: -607.20, total: -3030.75, period: "jan" },
  { cc: "10252", financiamento: 0, fornecedor: -2312.00, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2312.00, period: "jan" },
  { cc: "10253", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1014.69, outrosRecebimentos: 0, recCliente: 263370.35, salarios: 0, total: 262355.66, period: "jan" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -24.23, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -24.23, period: "jan" },
  { cc: "10257", financiamento: 0, fornecedor: -317438.39, imposto: 0, outrosCustos: -18358.33, outrosRecebimentos: 0, recCliente: 13384115.56, salarios: -44380.31, total: 13003938.53, period: "jan" },
  { cc: "10258", financiamento: 0, fornecedor: -1986674.29, imposto: -172342.98, outrosCustos: -257363.96, outrosRecebimentos: 294.00, recCliente: 6681070.38, salarios: -1172946.82, total: 3092036.33, period: "jan" },
  { cc: "10260", financiamento: 0, fornecedor: -578.00, imposto: 0, outrosCustos: -91070.66, outrosRecebimentos: 0, recCliente: 9948628.52, salarios: -398952.61, total: 9458027.25, period: "jan" },
  { cc: "20001", financiamento: 0, fornecedor: -772899.24, imposto: 0, outrosCustos: -133022.03, outrosRecebimentos: 0, recCliente: 0, salarios: -414343.84, total: -1320265.11, period: "jan" },
  { cc: "20002", financiamento: 0, fornecedor: -241119.67, imposto: 0, outrosCustos: -14201.55, outrosRecebimentos: 0, recCliente: 0, salarios: -75237.80, total: -330559.02, period: "jan" },
  { cc: "20003", financiamento: 0, fornecedor: -480.56, imposto: 0, outrosCustos: -17007.12, outrosRecebimentos: 0, recCliente: 0, salarios: -52984.80, total: -70472.48, period: "jan" },
  { cc: "20004", financiamento: 0, fornecedor: -428085.20, imposto: 0, outrosCustos: -29828.21, outrosRecebimentos: 0, recCliente: 0, salarios: -188163.05, total: -646076.46, period: "jan" },
  { cc: "20005", financiamento: 0, fornecedor: -27517.06, imposto: 0, outrosCustos: -29167.14, outrosRecebimentos: 0, recCliente: 0, salarios: -94756.61, total: -151440.81, period: "jan" },
  { cc: "20006", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4134.77, outrosRecebimentos: 0, recCliente: 0, salarios: -36150.88, total: -40285.65, period: "jan" },
  { cc: "20008", financiamento: 0, fornecedor: -462096.61, imposto: -1507.15, outrosCustos: -15321.71, outrosRecebimentos: 0, recCliente: 0, salarios: -50975.53, total: -529901.00, period: "jan" },
  { cc: "20009", financiamento: 0, fornecedor: -2709.10, imposto: 0, outrosCustos: -14998.12, outrosRecebimentos: 0, recCliente: 0, salarios: -68384.71, total: -86091.93, period: "jan" },
  { cc: "20010", financiamento: 0, fornecedor: -95033.03, imposto: 0, outrosCustos: -10565.30, outrosRecebimentos: 0, recCliente: 0, salarios: -49330.92, total: -154929.25, period: "jan" },
  { cc: "20013", financiamento: 0, fornecedor: -2850.48, imposto: 0, outrosCustos: -2595.51, outrosRecebimentos: 0, recCliente: 0, salarios: -15814.29, total: -21260.28, period: "jan" },
  { cc: "20015", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1769.89, outrosRecebimentos: 0, recCliente: 0, salarios: -41991.98, total: -43761.87, period: "jan" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4087.94, outrosRecebimentos: 0, recCliente: 0, salarios: -23660.44, total: -27748.38, period: "jan" },
  { cc: "20020", financiamento: 0, fornecedor: -100078.50, imposto: -30401.72, outrosCustos: -1460.60, outrosRecebimentos: 0, recCliente: 0, salarios: -150838.85, total: -282779.67, period: "jan" },
  { cc: "20021", financiamento: 0, fornecedor: -31158.73, imposto: 0, outrosCustos: -5578.02, outrosRecebimentos: 0, recCliente: 0, salarios: -55230.09, total: -91966.84, period: "jan" },
  { cc: "20022", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -340.00, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -340.00, period: "jan" },
  { cc: "20023", financiamento: 0, fornecedor: -489772.75, imposto: 0, outrosCustos: -13517.62, outrosRecebimentos: 0, recCliente: 0, salarios: -71161.34, total: -574451.71, period: "jan" },
  { cc: "20024", financiamento: 0, fornecedor: -5314.41, imposto: 0, outrosCustos: -3281.82, outrosRecebimentos: 0, recCliente: 0, salarios: -51412.31, total: -60008.54, period: "jan" },
  { cc: "20029", financiamento: 0, fornecedor: -133878.33, imposto: -4290.74, outrosCustos: -38647.81, outrosRecebimentos: 854.36, recCliente: 0, salarios: -17713.05, total: -193675.57, period: "jan" },
  { cc: "20030", financiamento: 0, fornecedor: -1259948.82, imposto: 0, outrosCustos: -45647.59, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1305596.41, period: "jan" },
  { cc: "20031", financiamento: 0, fornecedor: -317898.00, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -317898.00, period: "jan" },
  { cc: "20032", financiamento: 0, fornecedor: -2075.64, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2075.64, period: "jan" },
  { cc: "20099", financiamento: 0, fornecedor: -243045.95, imposto: -14877.37, outrosCustos: -179198.06, outrosRecebimentos: 0, recCliente: 0, salarios: -24572.52, total: -461693.90, period: "jan" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -5114.93, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -5114.93, period: "jan" },
  { cc: "20102", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -4554.00, total: -4554.00, period: "jan" },
  { cc: "20104", financiamento: 0, fornecedor: -569720.87, imposto: 0, outrosCustos: -19903.87, outrosRecebimentos: 0, recCliente: 0, salarios: -120065.08, total: -709689.82, period: "jan" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4357.65, outrosRecebimentos: 0, recCliente: 0, salarios: -30771.76, total: -35129.41, period: "jan" },
  { cc: "20108", financiamento: 0, fornecedor: -13812.81, imposto: 0, outrosCustos: -42114.98, outrosRecebimentos: 0, recCliente: 0, salarios: -154495.86, total: -210423.65, period: "jan" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3147.71, outrosRecebimentos: 0, recCliente: 0, salarios: -19561.96, total: -22709.67, period: "jan" },
  { cc: "30001", financiamento: 0, fornecedor: -70613.79, imposto: -4.67, outrosCustos: -34520.48, outrosRecebimentos: 0, recCliente: 0, salarios: -108457.08, total: -213596.02, period: "jan" },
  { cc: "30002", financiamento: 0, fornecedor: -295879.53, imposto: 0, outrosCustos: -195136.92, outrosRecebimentos: 0, recCliente: 0, salarios: -74237.31, total: -565253.76, period: "jan" },
  { cc: "30003", financiamento: 0, fornecedor: -29850.00, imposto: 0, outrosCustos: -36448.97, outrosRecebimentos: 200.00, recCliente: 0, salarios: -59613.98, total: -125712.95, period: "jan" },
  { cc: "30099", financiamento: 0, fornecedor: -53759.10, imposto: 0, outrosCustos: -40498.92, outrosRecebimentos: 0, recCliente: 0, salarios: -4871.51, total: -99129.53, period: "jan" },
  { cc: "30258", financiamento: 0, fornecedor: -594.00, imposto: -7.38, outrosCustos: -3204.10, outrosRecebimentos: 0, recCliente: 0, salarios: -81660.13, total: -85465.61, period: "jan" },
  { cc: "31001", financiamento: 0, fornecedor: -6322.05, imposto: 0, outrosCustos: -13798.49, outrosRecebimentos: 0, recCliente: 0, salarios: -19770.82, total: -39891.36, period: "jan" },
  { cc: "40001", financiamento: 29358574.67, fornecedor: -189080.15, imposto: -35405.98, outrosCustos: -41471.24, outrosRecebimentos: 83083.76, recCliente: 0, salarios: 0, total: 29175701.07, period: "jan" },
  { cc: "Outros", financiamento: 0, fornecedor: -17025656.39, imposto: -1911650.55, outrosCustos: 0, outrosRecebimentos: 10000000.00, recCliente: 0, salarios: 0, total: -8937306.94, period: "jan" },
];

// Fevereiro
const ccMEBFev: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -276812.77, imposto: 0, outrosCustos: -228106.75, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -504919.52, period: "fev" },
  { cc: "10243", financiamento: 0, fornecedor: -28049243.32, imposto: 0, outrosCustos: -130.16, outrosRecebimentos: 0, recCliente: 17205648.81, salarios: 0, total: -10843724.67, period: "fev" },
  { cc: "10244", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -229.80, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -229.80, period: "fev" },
  { cc: "10248", financiamento: 0, fornecedor: -13337.36, imposto: -9115.52, outrosCustos: -64498.29, outrosRecebimentos: 0, recCliente: 0, salarios: -10275.09, total: -97226.26, period: "fev" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1498.05, outrosRecebimentos: 0, recCliente: 0, salarios: -648.40, total: -2146.45, period: "fev" },
  { cc: "10252", financiamento: 0, fornecedor: -2312.00, imposto: 0, outrosCustos: -271.48, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2583.48, period: "fev" },
  { cc: "10253", financiamento: 0, fornecedor: -101947.22, imposto: 0, outrosCustos: -145.38, outrosRecebimentos: 0, recCliente: 91552.16, salarios: 0, total: -10540.44, period: "fev" },
  { cc: "10254", financiamento: 0, fornecedor: -12831.11, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -12831.11, period: "fev" },
  { cc: "10257", financiamento: 0, fornecedor: -38332.87, imposto: -5943.07, outrosCustos: -32087.86, outrosRecebimentos: 0, recCliente: 119547015.80, salarios: -59656.84, total: 119410995.16, period: "fev" },
  { cc: "10258", financiamento: 0, fornecedor: -1582428.08, imposto: -333910.18, outrosCustos: -263673.04, outrosRecebimentos: 2478.45, recCliente: 3208918.18, salarios: -1586591.12, total: -555205.79, period: "fev" },
  { cc: "10260", financiamento: 0, fornecedor: -1228.39, imposto: -48368.29, outrosCustos: -63444.56, outrosRecebimentos: 0, recCliente: 2230092.95, salarios: -425381.16, total: 1691670.55, period: "fev" },
  { cc: "20001", financiamento: 0, fornecedor: -601010.79, imposto: -544.15, outrosCustos: -118067.08, outrosRecebimentos: 0, recCliente: 0, salarios: -387825.76, total: -1107447.78, period: "fev" },
  { cc: "20002", financiamento: 0, fornecedor: -61802.88, imposto: -10755.57, outrosCustos: -20054.63, outrosRecebimentos: 0, recCliente: 0, salarios: -93488.18, total: -186101.26, period: "fev" },
  { cc: "20003", financiamento: 0, fornecedor: -352.39, imposto: -6089.51, outrosCustos: -17708.42, outrosRecebimentos: 0, recCliente: 0, salarios: -45131.61, total: -69281.93, period: "fev" },
  { cc: "20004", financiamento: 0, fornecedor: -421703.52, imposto: -20919.04, outrosCustos: -66474.45, outrosRecebimentos: 0, recCliente: 0, salarios: -185297.63, total: -694394.64, period: "fev" },
  { cc: "20005", financiamento: 0, fornecedor: -9019.87, imposto: -12994.21, outrosCustos: -28760.12, outrosRecebimentos: 0, recCliente: 0, salarios: -108869.13, total: -159643.33, period: "fev" },
  { cc: "20006", financiamento: 0, fornecedor: 0, imposto: -5953.97, outrosCustos: -4928.09, outrosRecebimentos: 0, recCliente: 0, salarios: -53167.74, total: -64049.80, period: "fev" },
  { cc: "20008", financiamento: 0, fornecedor: -602724.63, imposto: -8560.42, outrosCustos: -12066.43, outrosRecebimentos: 0, recCliente: 0, salarios: -35984.49, total: -659335.97, period: "fev" },
  { cc: "20009", financiamento: 0, fornecedor: -2515.84, imposto: -5492.66, outrosCustos: -16649.37, outrosRecebimentos: 2825.17, recCliente: 0, salarios: -40210.03, total: -62042.73, period: "fev" },
  { cc: "20010", financiamento: 0, fornecedor: -209192.84, imposto: -5924.66, outrosCustos: -9206.59, outrosRecebimentos: 0, recCliente: 0, salarios: -57338.70, total: -281662.79, period: "fev" },
  { cc: "20012", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1159.50, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1159.50, period: "fev" },
  { cc: "20013", financiamento: 0, fornecedor: -2850.48, imposto: -2793.79, outrosCustos: -3009.24, outrosRecebimentos: 0, recCliente: 0, salarios: -23997.71, total: -32651.22, period: "fev" },
  { cc: "20015", financiamento: 0, fornecedor: -2310.00, imposto: -951.43, outrosCustos: -2349.33, outrosRecebimentos: 0, recCliente: 0, salarios: -9599.07, total: -15209.83, period: "fev" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: -1284.80, outrosCustos: -4641.39, outrosRecebimentos: 0, recCliente: 0, salarios: -11452.65, total: -17378.84, period: "fev" },
  { cc: "20020", financiamento: 0, fornecedor: -106443.96, imposto: 0, outrosCustos: -2153.96, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -108597.92, period: "fev" },
  { cc: "20021", financiamento: 0, fornecedor: -58615.70, imposto: -1883.20, outrosCustos: -20812.20, outrosRecebimentos: 0, recCliente: 0, salarios: -30515.64, total: -111826.74, period: "fev" },
  { cc: "20022", financiamento: 0, fornecedor: -736.16, imposto: 0, outrosCustos: -5762.33, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -6498.49, period: "fev" },
  { cc: "20023", financiamento: 0, fornecedor: -62991.36, imposto: -18318.88, outrosCustos: -15595.96, outrosRecebimentos: 0, recCliente: 0, salarios: -66832.15, total: -163738.35, period: "fev" },
  { cc: "20024", financiamento: 0, fornecedor: -187.56, imposto: -4735.53, outrosCustos: -5299.45, outrosRecebimentos: 2198.93, recCliente: 0, salarios: -50521.01, total: -58544.62, period: "fev" },
  { cc: "20029", financiamento: 0, fornecedor: -108771.37, imposto: -74200.50, outrosCustos: -5580.61, outrosRecebimentos: 0, recCliente: 0, salarios: -10316.74, total: -198869.22, period: "fev" },
  { cc: "20030", financiamento: 0, fornecedor: -635506.10, imposto: -97561.57, outrosCustos: -4125.34, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -737193.01, period: "fev" },
  { cc: "20033", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -327.76, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -327.76, period: "fev" },
  { cc: "20099", financiamento: 0, fornecedor: -153150.12, imposto: -21301.53, outrosCustos: -17839.85, outrosRecebimentos: 0, recCliente: 0, salarios: -21790.62, total: -214082.12, period: "fev" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: -245.20, outrosCustos: -2367.64, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2612.84, period: "fev" },
  { cc: "20102", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -4863.00, total: -4863.00, period: "fev" },
  { cc: "20104", financiamento: 0, fornecedor: -923123.76, imposto: -77046.00, outrosCustos: -20070.57, outrosRecebimentos: 0, recCliente: 0, salarios: -122008.54, total: -1142248.87, period: "fev" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: -8680.08, outrosCustos: -3357.55, outrosRecebimentos: 0, recCliente: 0, salarios: -30884.44, total: -42922.07, period: "fev" },
  { cc: "20108", financiamento: 0, fornecedor: -13722.00, imposto: -17946.26, outrosCustos: -38095.40, outrosRecebimentos: 0, recCliente: 0, salarios: -146781.40, total: -216545.06, period: "fev" },
  { cc: "20109", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3007.46, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3007.46, period: "fev" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: -2282.26, outrosCustos: -57546.82, outrosRecebimentos: 0, recCliente: 0, salarios: -47441.48, total: -107270.56, period: "fev" },
  { cc: "30001", financiamento: 0, fornecedor: -16799.01, imposto: -17441.75, outrosCustos: -28353.02, outrosRecebimentos: 1595.00, recCliente: 0, salarios: -119137.68, total: -180136.46, period: "fev" },
  { cc: "30002", financiamento: -1948552.13, fornecedor: -470478.13, imposto: -139345.38, outrosCustos: -37919.49, outrosRecebimentos: 0, recCliente: 0, salarios: -58115.20, total: -2654410.33, period: "fev" },
  { cc: "30003", financiamento: 0, fornecedor: -562015.76, imposto: -6378.95, outrosCustos: -41600.62, outrosRecebimentos: 200.00, recCliente: 0, salarios: -45408.57, total: -655203.90, period: "fev" },
  { cc: "30099", financiamento: 0, fornecedor: -81716.53, imposto: -381.48, outrosCustos: -5164.63, outrosRecebimentos: 0, recCliente: 0, salarios: -5624.94, total: -92887.58, period: "fev" },
  { cc: "30258", financiamento: 0, fornecedor: -671.20, imposto: -15765.22, outrosCustos: -16286.02, outrosRecebimentos: 0, recCliente: 0, salarios: -122873.30, total: -155595.74, period: "fev" },
  { cc: "31001", financiamento: 0, fornecedor: -1734.44, imposto: -4410.54, outrosCustos: -13110.01, outrosRecebimentos: 220.34, recCliente: 0, salarios: -25058.81, total: -44093.46, period: "fev" },
  { cc: "40001", financiamento: 98082354.74, fornecedor: -183862.44, imposto: -1192027.75, outrosCustos: -35370.42, outrosRecebimentos: 1621861.47, recCliente: 0, salarios: 0, total: 98292955.60, period: "fev" },
  { cc: "Outros", financiamento: 0, fornecedor: -3311307.57, imposto: -220834.27, outrosCustos: -17389.53, outrosRecebimentos: 4287374.11, recCliente: 0, salarios: 0, total: 737842.74, period: "fev" },
];

// Semana 02/03 a 06/03
const ccMEBS4: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -39104.16, imposto: -6792.89, outrosCustos: -150719.17, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -196616.22, period: "s4" },
  { cc: "10243", financiamento: 0, fornecedor: -5094675.04, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -5094675.04, period: "s4" },
  { cc: "10248", financiamento: 0, fornecedor: -86.45, imposto: -1213.15, outrosCustos: -39229.04, outrosRecebimentos: 2323.50, recCliente: 0, salarios: 0, total: -38205.14, period: "s4" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -700.73, outrosRecebimentos: 0, recCliente: 0, salarios: -648.40, total: -1349.13, period: "s4" },
  { cc: "10257", financiamento: 0, fornecedor: -115350.00, imposto: 0, outrosCustos: -1488.16, outrosRecebimentos: 0, recCliente: 15957612.52, salarios: -89942.06, total: 15750832.30, period: "s4" },
  { cc: "10258", financiamento: 0, fornecedor: -598434.89, imposto: -37533.74, outrosCustos: -17597.78, outrosRecebimentos: 600.00, recCliente: 0, salarios: -575127.16, total: -1228093.57, period: "s4" },
  { cc: "10260", financiamento: 0, fornecedor: -2933.48, imposto: 0, outrosCustos: -14705.30, outrosRecebimentos: 0, recCliente: 0, salarios: -337812.10, total: -355450.88, period: "s4" },
  { cc: "20001", financiamento: 0, fornecedor: -111701.43, imposto: 0, outrosCustos: -20640.59, outrosRecebimentos: 0, recCliente: 0, salarios: -317104.55, total: -449446.57, period: "s4" },
  { cc: "20002", financiamento: 0, fornecedor: -2376.05, imposto: 0, outrosCustos: -2243.62, outrosRecebimentos: 0, recCliente: 0, salarios: -115276.88, total: -119896.55, period: "s4" },
  { cc: "20003", financiamento: 0, fornecedor: -6153.73, imposto: 0, outrosCustos: -3237.44, outrosRecebimentos: 0, recCliente: 0, salarios: -49285.12, total: -58676.29, period: "s4" },
  { cc: "20004", financiamento: 0, fornecedor: -1478.08, imposto: 0, outrosCustos: -3229.00, outrosRecebimentos: 0, recCliente: 0, salarios: -144271.02, total: -148978.10, period: "s4" },
  { cc: "20005", financiamento: 0, fornecedor: -2239.14, imposto: 0, outrosCustos: -3302.01, outrosRecebimentos: 0, recCliente: 0, salarios: -84002.78, total: -89543.93, period: "s4" },
  { cc: "20006", financiamento: 0, fornecedor: -5867.24, imposto: 0, outrosCustos: -50.00, outrosRecebimentos: 0, recCliente: 0, salarios: -53741.62, total: -59658.86, period: "s4" },
  { cc: "20008", financiamento: 0, fornecedor: -17230.63, imposto: 0, outrosCustos: -1011.89, outrosRecebimentos: 0, recCliente: 0, salarios: -44159.95, total: -62402.47, period: "s4" },
  { cc: "20009", financiamento: 0, fornecedor: -6523.30, imposto: 0, outrosCustos: -3108.32, outrosRecebimentos: 1014.85, recCliente: 0, salarios: -58317.92, total: -66934.69, period: "s4" },
  { cc: "20010", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -625.74, outrosRecebimentos: 4113.91, recCliente: 0, salarios: -59626.59, total: -56138.42, period: "s4" },
  { cc: "20013", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -99.98, outrosRecebimentos: 0, recCliente: 0, salarios: -25907.02, total: -26007.00, period: "s4" },
  { cc: "20015", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -50.00, outrosRecebimentos: 0, recCliente: 0, salarios: -26035.84, total: -26085.84, period: "s4" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -51.00, outrosRecebimentos: 0, recCliente: 0, salarios: -12080.47, total: -12131.47, period: "s4" },
  { cc: "20020", financiamento: 0, fornecedor: -43026.62, imposto: 0, outrosCustos: -50.00, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -43076.62, period: "s4" },
  { cc: "20021", financiamento: 0, fornecedor: -32144.17, imposto: 0, outrosCustos: -3887.44, outrosRecebimentos: 0, recCliente: 0, salarios: -34154.61, total: -70186.22, period: "s4" },
  { cc: "20022", financiamento: 0, fornecedor: -131317.24, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -131317.24, period: "s4" },
  { cc: "20023", financiamento: 0, fornecedor: -2499.95, imposto: 0, outrosCustos: -4794.10, outrosRecebimentos: 0, recCliente: 0, salarios: -70135.96, total: -77430.01, period: "s4" },
  { cc: "20024", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -50.00, outrosRecebimentos: 0, recCliente: 0, salarios: -57074.05, total: -57124.05, period: "s4" },
  { cc: "20029", financiamento: 0, fornecedor: -94367.50, imposto: 0, outrosCustos: -218.15, outrosRecebimentos: 0, recCliente: 0, salarios: -5694.88, total: -100280.53, period: "s4" },
  { cc: "20030", financiamento: 0, fornecedor: -651611.07, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -80741.51, total: -732352.58, period: "s4" },
  { cc: "20032", financiamento: 0, fornecedor: -28877.49, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -28877.49, period: "s4" },
  { cc: "20033", financiamento: 0, fornecedor: -1010.49, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1010.49, period: "s4" },
  { cc: "20099", financiamento: 0, fornecedor: -105386.25, imposto: 0, outrosCustos: -2195.12, outrosRecebimentos: 956.62, recCliente: 0, salarios: -18986.45, total: -125611.20, period: "s4" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1144.59, outrosRecebimentos: 0, recCliente: 0, salarios: -10611.23, total: -11755.82, period: "s4" },
  { cc: "20104", financiamento: 0, fornecedor: -484213.38, imposto: 0, outrosCustos: -4808.50, outrosRecebimentos: 0, recCliente: 0, salarios: -120913.59, total: -609935.47, period: "s4" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -50.00, outrosRecebimentos: 0, recCliente: 0, salarios: -25918.07, total: -25968.07, period: "s4" },
  { cc: "20108", financiamento: 0, fornecedor: -25119.34, imposto: 0, outrosCustos: -1486.08, outrosRecebimentos: 0, recCliente: 0, salarios: -159785.35, total: -186390.77, period: "s4" },
  { cc: "20109", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3007.44, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3007.44, period: "s4" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -19662.47, total: -19662.47, period: "s4" },
  { cc: "20112", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1460.00, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1460.00, period: "s4" },
  { cc: "30001", financiamento: 0, fornecedor: -3089.32, imposto: 0, outrosCustos: -757.28, outrosRecebimentos: 0, recCliente: 0, salarios: -103454.72, total: -107301.32, period: "s4" },
  { cc: "30002", financiamento: 0, fornecedor: -2824.20, imposto: 0, outrosCustos: -29078.47, outrosRecebimentos: 0, recCliente: 0, salarios: -54287.20, total: -86189.87, period: "s4" },
  { cc: "30003", financiamento: 0, fornecedor: -3687.98, imposto: 0, outrosCustos: -95.37, outrosRecebimentos: 0, recCliente: 0, salarios: -64003.69, total: -67787.04, period: "s4" },
  { cc: "30099", financiamento: 0, fornecedor: -34675.58, imposto: 0, outrosCustos: -1210.00, outrosRecebimentos: 0, recCliente: 0, salarios: -2256.11, total: -38141.69, period: "s4" },
  { cc: "30258", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -528.46, outrosRecebimentos: 0, recCliente: 0, salarios: -86782.03, total: -87310.49, period: "s4" },
  { cc: "31001", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -100.00, outrosRecebimentos: 0, recCliente: 0, salarios: -17427.60, total: -17527.60, period: "s4" },
  { cc: "40001", financiamento: -4559541.73, fornecedor: -1236.78, imposto: -17090.56, outrosCustos: -10235.45, outrosRecebimentos: 534511.73, recCliente: 0, salarios: -374707.16, total: -4428299.95, period: "s4" },
  { cc: "Outros", financiamento: 0, fornecedor: -96682919.56, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -96682919.56, period: "s4" },
];

// Total Acumulado
const ccMEBTotal: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -644977.01, imposto: -6792.89, outrosCustos: -580613.90, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1232383.80, period: "total" },
  { cc: "10216", financiamento: 0, fornecedor: -15441.65, imposto: 0, outrosCustos: 0, outrosRecebimentos: 23264.29, recCliente: 0, salarios: 0, total: 7822.64, period: "total" },
  { cc: "10242", financiamento: 0, fornecedor: -85872.81, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -85872.81, period: "total" },
  { cc: "10243", financiamento: 0, fornecedor: -45751971.59, imposto: 0, outrosCustos: -3070.06, outrosRecebimentos: 0, recCliente: 23523987.99, salarios: 0, total: -22231053.66, period: "total" },
  { cc: "10244", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1298.60, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1298.60, period: "total" },
  { cc: "10248", financiamento: 0, fornecedor: -56306.10, imposto: -10328.67, outrosCustos: -237500.89, outrosRecebimentos: 7323.50, recCliente: 0, salarios: -15923.10, total: -312735.26, period: "total" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4622.33, outrosRecebimentos: 0, recCliente: 0, salarios: -1904.00, total: -6526.33, period: "total" },
  { cc: "10252", financiamento: 0, fornecedor: -4624.00, imposto: 0, outrosCustos: -271.48, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4895.48, period: "total" },
  { cc: "10253", financiamento: 0, fornecedor: -101947.22, imposto: 0, outrosCustos: -1160.07, outrosRecebimentos: 0, recCliente: 354922.51, salarios: 0, total: 251815.22, period: "total" },
  { cc: "10254", financiamento: 0, fornecedor: -12831.11, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -12831.11, period: "total" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -24.23, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -24.23, period: "total" },
  { cc: "10257", financiamento: 0, fornecedor: -471121.26, imposto: -5943.07, outrosCustos: -51934.35, outrosRecebimentos: 0, recCliente: 148888743.88, salarios: -193979.21, total: 148165765.99, period: "total" },
  { cc: "10258", financiamento: 0, fornecedor: -4167537.26, imposto: -543786.90, outrosCustos: -538634.78, outrosRecebimentos: 3372.45, recCliente: 9889988.56, salarios: -3334665.10, total: 1308736.97, period: "total" },
  { cc: "10260", financiamento: 0, fornecedor: -4739.87, imposto: -48368.29, outrosCustos: -169220.52, outrosRecebimentos: 0, recCliente: 12178721.47, salarios: -1162145.87, total: 10794246.92, period: "total" },
  { cc: "20001", financiamento: 0, fornecedor: -1485611.46, imposto: -544.15, outrosCustos: -271729.70, outrosRecebimentos: 0, recCliente: 0, salarios: -1119274.15, total: -2877159.46, period: "total" },
  { cc: "20002", financiamento: 0, fornecedor: -305298.60, imposto: -10755.57, outrosCustos: -36499.80, outrosRecebimentos: 0, recCliente: 0, salarios: -284002.86, total: -636556.83, period: "total" },
  { cc: "20003", financiamento: 0, fornecedor: -6986.68, imposto: -6089.51, outrosCustos: -37952.98, outrosRecebimentos: 0, recCliente: 0, salarios: -147401.53, total: -198430.70, period: "total" },
  { cc: "20004", financiamento: 0, fornecedor: -851266.80, imposto: -20919.04, outrosCustos: -99531.66, outrosRecebimentos: 0, recCliente: 0, salarios: -517731.70, total: -1489449.20, period: "total" },
  { cc: "20005", financiamento: 0, fornecedor: -38776.07, imposto: -12994.21, outrosCustos: -61229.27, outrosRecebimentos: 0, recCliente: 0, salarios: -287628.52, total: -400628.07, period: "total" },
  { cc: "20006", financiamento: 0, fornecedor: -5867.24, imposto: -5953.97, outrosCustos: -9112.86, outrosRecebimentos: 0, recCliente: 0, salarios: -143060.24, total: -163994.31, period: "total" },
  { cc: "20008", financiamento: 0, fornecedor: -1082051.87, imposto: -10067.57, outrosCustos: -28400.03, outrosRecebimentos: 0, recCliente: 0, salarios: -131119.97, total: -1251639.44, period: "total" },
  { cc: "20009", financiamento: 0, fornecedor: -11748.24, imposto: -5492.66, outrosCustos: -34755.81, outrosRecebimentos: 3840.02, recCliente: 0, salarios: -166912.66, total: -215069.35, period: "total" },
  { cc: "20010", financiamento: 0, fornecedor: -304225.87, imposto: -5924.66, outrosCustos: -20397.63, outrosRecebimentos: 4113.91, recCliente: 0, salarios: -166296.21, total: -492730.46, period: "total" },
  { cc: "20012", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1159.50, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1159.50, period: "total" },
  { cc: "20013", financiamento: 0, fornecedor: -5700.96, imposto: -2793.79, outrosCustos: -5704.73, outrosRecebimentos: 0, recCliente: 0, salarios: -65719.02, total: -79918.50, period: "total" },
  { cc: "20015", financiamento: 0, fornecedor: -2310.00, imposto: -951.43, outrosCustos: -4169.22, outrosRecebimentos: 0, recCliente: 0, salarios: -77626.89, total: -85057.54, period: "total" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: -1284.80, outrosCustos: -8780.33, outrosRecebimentos: 0, recCliente: 0, salarios: -47193.56, total: -57258.69, period: "total" },
  { cc: "20020", financiamento: 0, fornecedor: -249549.08, imposto: -30401.72, outrosCustos: -3664.56, outrosRecebimentos: 0, recCliente: 0, salarios: -150838.85, total: -434454.21, period: "total" },
  { cc: "20021", financiamento: 0, fornecedor: -121918.60, imposto: -1883.20, outrosCustos: -30277.66, outrosRecebimentos: 0, recCliente: 0, salarios: -119900.34, total: -273979.80, period: "total" },
  { cc: "20022", financiamento: 0, fornecedor: -132053.40, imposto: 0, outrosCustos: -6102.33, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -138155.73, period: "total" },
  { cc: "20023", financiamento: 0, fornecedor: -555264.06, imposto: -18318.88, outrosCustos: -33907.68, outrosRecebimentos: 0, recCliente: 0, salarios: -208129.45, total: -815620.07, period: "total" },
  { cc: "20024", financiamento: 0, fornecedor: -5501.97, imposto: -4735.53, outrosCustos: -8631.27, outrosRecebimentos: 2198.93, recCliente: 0, salarios: -159007.37, total: -175677.21, period: "total" },
  { cc: "20029", financiamento: 0, fornecedor: -337017.20, imposto: -78491.24, outrosCustos: -44446.57, outrosRecebimentos: 854.36, recCliente: 0, salarios: -33724.67, total: -492825.32, period: "total" },
  { cc: "20030", financiamento: 0, fornecedor: -2547065.99, imposto: -97561.57, outrosCustos: -49772.93, outrosRecebimentos: 0, recCliente: 0, salarios: -80741.51, total: -2775142.00, period: "total" },
  { cc: "20031", financiamento: 0, fornecedor: -317898.00, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -317898.00, period: "total" },
  { cc: "20032", financiamento: 0, fornecedor: -30953.13, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -30953.13, period: "total" },
  { cc: "20033", financiamento: 0, fornecedor: -1010.49, imposto: 0, outrosCustos: -327.76, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1338.25, period: "total" },
  { cc: "20099", financiamento: 0, fornecedor: -501582.32, imposto: -36178.90, outrosCustos: -199233.03, outrosRecebimentos: 956.62, recCliente: 0, salarios: -65349.59, total: -801387.22, period: "total" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: -245.20, outrosCustos: -8627.16, outrosRecebimentos: 0, recCliente: 0, salarios: -10611.23, total: -19483.59, period: "total" },
  { cc: "20102", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9417.00, total: -9417.00, period: "total" },
  { cc: "20104", financiamento: 0, fornecedor: -1977058.01, imposto: -77046.00, outrosCustos: -44782.94, outrosRecebimentos: 0, recCliente: 0, salarios: -362987.21, total: -2461874.16, period: "total" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: -8680.08, outrosCustos: -7765.20, outrosRecebimentos: 0, recCliente: 0, salarios: -87574.27, total: -104019.55, period: "total" },
  { cc: "20108", financiamento: 0, fornecedor: -52654.15, imposto: -17946.26, outrosCustos: -81696.46, outrosRecebimentos: 0, recCliente: 0, salarios: -461062.61, total: -613359.48, period: "total" },
  { cc: "20109", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -6014.90, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -6014.90, period: "total" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: -2282.26, outrosCustos: -60694.53, outrosRecebimentos: 0, recCliente: 0, salarios: -86665.91, total: -149642.70, period: "total" },
  { cc: "20112", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1460.00, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1460.00, period: "total" },
  { cc: "30001", financiamento: 0, fornecedor: -90502.12, imposto: -17446.42, outrosCustos: -63630.78, outrosRecebimentos: 1595.00, recCliente: 0, salarios: -331049.48, total: -501033.80, period: "total" },
  { cc: "30002", financiamento: -1948552.13, fornecedor: -769181.86, imposto: -139345.38, outrosCustos: -262134.88, outrosRecebimentos: 0, recCliente: 0, salarios: -186639.71, total: -3305853.96, period: "total" },
  { cc: "30003", financiamento: 0, fornecedor: -595553.74, imposto: -6378.95, outrosCustos: -78144.96, outrosRecebimentos: 400.00, recCliente: 0, salarios: -169026.24, total: -848703.89, period: "total" },
  { cc: "30099", financiamento: 0, fornecedor: -170151.21, imposto: -381.48, outrosCustos: -46873.55, outrosRecebimentos: 0, recCliente: 0, salarios: -12752.56, total: -230158.80, period: "total" },
  { cc: "30258", financiamento: 0, fornecedor: -1265.20, imposto: -15772.60, outrosCustos: -20018.58, outrosRecebimentos: 0, recCliente: 0, salarios: -291315.46, total: -328371.84, period: "total" },
  { cc: "31001", financiamento: 0, fornecedor: -8056.49, imposto: -4410.54, outrosCustos: -27008.50, outrosRecebimentos: 220.34, recCliente: 0, salarios: -62257.23, total: -101512.42, period: "total" },
  { cc: "40001", financiamento: 122881387.68, fornecedor: -374179.37, imposto: -1244524.29, outrosCustos: -87077.11, outrosRecebimentos: 2239456.96, recCliente: 0, salarios: -374707.16, total: 123040356.72, period: "total" },
  { cc: "Outros", financiamento: 0, fornecedor: -117019883.52, imposto: -2132484.82, outrosCustos: -17389.53, outrosRecebimentos: 14287374.11, recCliente: 0, salarios: 0, total: -104882383.76, period: "total" },
];

export const custoCentroMEBData: CustoCentroEntry[] = [...ccMEBJan, ...ccMEBFev, ...ccMEBS4, ...ccMEBTotal];

// ── CC Macaé ───────────────────────────────────────────────────────

// Janeiro
const ccMacaeJan: CustoCentroEntry[] = [
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -58279.31, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -58279.31, period: "jan" },
  { cc: "10234", financiamento: 0, fornecedor: -271447.62, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -271447.62, period: "jan" },
  { cc: "10241", financiamento: 0, fornecedor: -76245.79, imposto: 0, outrosCustos: -1000.00, outrosRecebimentos: 0, recCliente: 11531852.81, salarios: 0, total: 11454607.02, period: "jan" },
  { cc: "10251", financiamento: 0, fornecedor: -4876599.91, imposto: 0, outrosCustos: -2053946.85, outrosRecebimentos: 0, recCliente: 1017382.18, salarios: -4805150.91, total: -10718315.49, period: "jan" },
  { cc: "10256", financiamento: 0, fornecedor: -4165331.81, imposto: 0, outrosCustos: -2055717.45, outrosRecebimentos: 0, recCliente: 14370426.06, salarios: -5105048.33, total: 3044328.47, period: "jan" },
  { cc: "10259", financiamento: 0, fornecedor: -773243.96, imposto: 0, outrosCustos: -166264.71, outrosRecebimentos: 0, recCliente: 1073440.78, salarios: -420280.55, total: -286348.44, period: "jan" },
  { cc: "20001", financiamento: 0, fornecedor: -1662816.21, imposto: 0, outrosCustos: -172616.65, outrosRecebimentos: 16355.20, recCliente: 0, salarios: -276797.21, total: -2095874.87, period: "jan" },
  { cc: "Outros", financiamento: -7569361.10, fornecedor: -1150000.00, imposto: -3774626.03, outrosCustos: -84789.73, outrosRecebimentos: 88227.83, recCliente: 0, salarios: 0, total: -12490549.03, period: "jan" },
];

// Fevereiro
const ccMacaeFev: CustoCentroEntry[] = [
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -58279.31, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -58279.31, period: "fev" },
  { cc: "10234", financiamento: 0, fornecedor: -271447.62, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -271447.62, period: "fev" },
  { cc: "10241", financiamento: 0, fornecedor: -76883.75, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0.02, salarios: 0, total: -76883.73, period: "fev" },
  { cc: "10251", financiamento: 0, fornecedor: -4097320.27, imposto: -66076.65, outrosCustos: -2095250.54, outrosRecebimentos: 0, recCliente: 13784149.19, salarios: -5592983.92, total: 1932517.81, period: "fev" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9807.00, total: -9807.00, period: "fev" },
  { cc: "10256", financiamento: 0, fornecedor: -3885223.92, imposto: 0, outrosCustos: -2104548.90, outrosRecebimentos: 0, recCliente: 15691264.93, salarios: -4677661.44, total: 5023830.67, period: "fev" },
  { cc: "10259", financiamento: 0, fornecedor: -1307574.22, imposto: 0, outrosCustos: -281317.75, outrosRecebimentos: 0, recCliente: 3198990.08, salarios: -443476.24, total: 1166621.87, period: "fev" },
  { cc: "20001", financiamento: -1103846.72, fornecedor: -1319861.20, imposto: -1346756.22, outrosCustos: -197382.37, outrosRecebimentos: 16355.20, recCliente: 0, salarios: -266348.91, total: -4217840.22, period: "fev" },
  { cc: "40001", financiamento: -44051.36, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -44051.36, period: "fev" },
  { cc: "Outros", financiamento: 0, fornecedor: 0, imposto: -4544966.95, outrosCustos: -768477.26, outrosRecebimentos: 0, recCliente: 0, salarios: -12616.19, total: -5326060.40, period: "fev" },
];

// Semana 02/03 a 06/03
const ccMacaeS4: CustoCentroEntry[] = [
  { cc: "10251", financiamento: 0, fornecedor: -795122.81, imposto: -19670.62, outrosCustos: -22792.72, outrosRecebimentos: 0, recCliente: 0, salarios: -5013263.61, total: -5850849.76, period: "s4" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9780.00, total: -9780.00, period: "s4" },
  { cc: "10256", financiamento: 0, fornecedor: -1002848.82, imposto: -6515.20, outrosCustos: -23134.96, outrosRecebimentos: 0, recCliente: 67428.04, salarios: -4617955.20, total: -5583026.14, period: "s4" },
  { cc: "10259", financiamento: 0, fornecedor: -223997.90, imposto: 0, outrosCustos: -3935.14, outrosRecebimentos: 0, recCliente: 0, salarios: -671616.10, total: -899549.14, period: "s4" },
  { cc: "20001", financiamento: 0, fornecedor: -953621.17, imposto: -7297.02, outrosCustos: -3140.42, outrosRecebimentos: 0, recCliente: 0, salarios: -268265.46, total: -1232324.07, period: "s4" },
  { cc: "40001", financiamento: -65974.94, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -65974.94, period: "s4" },
];

// Total Acumulado
const ccMacaeTotal: CustoCentroEntry[] = [
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -116558.62, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -116558.62, period: "total" },
  { cc: "10234", financiamento: 0, fornecedor: -542895.24, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -542895.24, period: "total" },
  { cc: "10241", financiamento: 0, fornecedor: -153129.54, imposto: 0, outrosCustos: -1000.00, outrosRecebimentos: 0, recCliente: 11531852.83, salarios: 0, total: 11377723.29, period: "total" },
  { cc: "10251", financiamento: 0, fornecedor: -9769042.99, imposto: -85747.27, outrosCustos: -4171990.11, outrosRecebimentos: 0, recCliente: 14801531.37, salarios: -15411398.44, total: -14636647.44, period: "total" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -19587.00, total: -19587.00, period: "total" },
  { cc: "10256", financiamento: 0, fornecedor: -9053404.55, imposto: -6515.20, outrosCustos: -4183401.31, outrosRecebimentos: 0, recCliente: 30129119.03, salarios: -14400664.97, total: 2485133.00, period: "total" },
  { cc: "10259", financiamento: 0, fornecedor: -2304816.08, imposto: 0, outrosCustos: -451517.60, outrosRecebimentos: 0, recCliente: 4272430.86, salarios: -1535372.89, total: -19275.71, period: "total" },
  { cc: "20001", financiamento: -1103846.72, fornecedor: -3936298.58, imposto: -1354053.24, outrosCustos: -373139.44, outrosRecebimentos: 32710.40, recCliente: 0, salarios: -811411.58, total: -7546039.16, period: "total" },
  { cc: "40001", financiamento: -110026.30, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -110026.30, period: "total" },
  { cc: "Outros", financiamento: -7569361.10, fornecedor: -1150000.00, imposto: -8319592.98, outrosCustos: -853266.99, outrosRecebimentos: 88227.83, recCliente: 0, salarios: -12616.19, total: -17816609.43, period: "total" },
];

export const custoCentroMacaeData: CustoCentroEntry[] = [...ccMacaeJan, ...ccMacaeFev, ...ccMacaeS4, ...ccMacaeTotal];

// ── Tipo de Pagamento/Recebimento por Empresa ──────────────────────

// Janeiro
const tipoJan: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -7569361.10, fornecedor: -12975685.30, imposto: -3774626.03, outrosCustos: -4592614.70, outrosRecebimentos: 104583.03, recCliente: 27993101.83, salarios: -10607277.00, total: -11421879.27, period: "jan" },
  { company: "Mota Engil Brasil", financiamento: 29358574.67, fornecedor: -38259563.51, imposto: -2170488.54, outrosCustos: -1713914.73, outrosRecebimentos: 10112696.41, recCliente: 36595523.99, salarios: -3783317.45, total: 30139510.85, period: "jan" },
];

// Fevereiro
const tipoFev: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -1147898.08, fornecedor: -10958310.98, imposto: -5957799.82, outrosCustos: -5505256.13, outrosRecebimentos: 16355.20, recCliente: 32674404.22, salarios: -11002893.70, total: -1881399.29, period: "fev" },
  { company: "Mota Engil Brasil", financiamento: 96133802.61, fornecedor: -38683789.53, imposto: -2400387.62, outrosCustos: -1356296.66, outrosRecebimentos: 5918753.47, recCliente: 142283227.90, salarios: -4043088.83, total: 197852221.34, period: "fev" },
];

// Semana 02/03 a 06/03
const tipoS4: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -65974.94, fornecedor: -2975590.70, imposto: -33482.84, outrosCustos: -53003.24, outrosRecebimentos: 0, recCliente: 67428.04, salarios: -10580880.37, total: -13641504.05, period: "s4" },
  { company: "Mota Engil Brasil", financiamento: -4559541.73, fornecedor: -104332160.54, imposto: -518079.01, outrosCustos: -327246.22, outrosRecebimentos: 543520.61, recCliente: 15957612.52, salarios: -2844487.49, total: -96080381.86, period: "s4" },
];

// Total Acumulado
const tipoTotal: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -8783234.12, fornecedor: -26909586.98, imposto: -9765908.69, outrosCustos: -10150874.07, outrosRecebimentos: 120938.23, recCliente: 60734934.09, salarios: -32191051.07, total: -26944782.61, period: "total" },
  { company: "Mota Engil Brasil", financiamento: 120932835.55, fornecedor: -181275513.58, imposto: -5088955.17, outrosCustos: -3397457.61, outrosRecebimentos: 16574970.49, recCliente: 194836364.41, salarios: -10670893.77, total: 131911350.33, period: "total" },
];

export const tipoPagamentoData: TipoPagamentoEntry[] = [...tipoJan, ...tipoFev, ...tipoS4, ...tipoTotal];

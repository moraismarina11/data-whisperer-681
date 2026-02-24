import type { CustoCentroEntry, Top10Entry, TipoPagamentoEntry } from "./shared";

// ── Top 10 Pagamento de Fornecedor ─────────────────────────────────

// Period s1: Janeiro a 06/02 (dados do relatório de 09/02)
const top10S1: Top10Entry[] = [
  { supplier: "FLOW LATINO AMERICAN", macae: -1829740.49, meb: 0, total: -1829740.49, period: "s1" },
  { supplier: "KROMINOX ACOS E META", macae: -1155346.05, meb: 0, total: -1155346.05, period: "s1" },
  { supplier: "UPSTAR AVIATION", macae: 0, meb: -931000.00, total: -931000.00, period: "s1" },
  { supplier: "JOTUN BRASIL", macae: -917635.37, meb: 0, total: -917635.37, period: "s1" },
  { supplier: "FLP TRANSPORTES DE M", macae: -848328.19, meb: 0, total: -848328.19, period: "s1" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -845597.39, total: -845597.39, period: "s1" },
  { supplier: "JOHN ZINK COMPANY LL", macae: -735476.35, meb: 0, total: -735476.35, period: "s1" },
  { supplier: "CISARENTAL ADMINISTR", macae: -574158.48, meb: 0, total: -574158.48, period: "s1" },
  { supplier: "DBR ENERGIES S/A", macae: 0, meb: -549492.89, total: -549492.89, period: "s1" },
];

// Period total: Total Acumulado (Jan a 20/02)
const top10Total: Top10Entry[] = [
  { supplier: "FLOW LATINO AMERICAN", macae: -1852105.09, meb: 0, total: -1852105.09, period: "total" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -1398782.08, total: -1398782.08, period: "total" },
  { supplier: "JOTUN BRASIL", macae: -1260520.34, meb: 0, total: -1260520.34, period: "total" },
  { supplier: "FLP TRANSPORTES DE M", macae: -1156230.06, meb: 0, total: -1156230.06, period: "total" },
  { supplier: "KROMINOX ACOS E META", macae: -1155346.05, meb: 0, total: -1155346.05, period: "total" },
  { supplier: "UPSTAR AVIATION", macae: 0, meb: -931000.00, total: -931000.00, period: "total" },
  { supplier: "PRINER LOCACAO DE EQ", macae: -875070.35, meb: 0, total: -875070.35, period: "total" },
  { supplier: "ALMEQ SERVICOS TECNI", macae: -846618.06, meb: 0, total: -846618.06, period: "total" },
  { supplier: "JOHN ZINK COMPANY LL", macae: -735476.35, meb: 0, total: -735476.35, period: "total" },
  { supplier: "CISARENTAL ADMINISTR", macae: -677283.12, meb: 0, total: -677283.12, period: "total" },
];

export const top10Data: Top10Entry[] = [...top10S1, ...top10Total];

// ── CC Mota Engil Brasil ───────────────────────────────────────────

// Period s1: Janeiro a 06/02
const ccMEBS1: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -354544.34, imposto: 0, outrosCustos: -347964.56, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -702508.90, period: "s1" },
  { cc: "10216", financiamento: 0, fornecedor: -15441.65, imposto: 0, outrosCustos: 0, outrosRecebimentos: 23264.29, recCliente: 0, salarios: 0, total: 7822.64, period: "s1" },
  { cc: "10242", financiamento: 0, fornecedor: -85872.81, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -85872.81, period: "s1" },
  { cc: "10243", financiamento: 0, fornecedor: -14727008.98, imposto: 0, outrosCustos: -3070.06, outrosRecebimentos: 0, recCliente: 6318339.18, salarios: 0, total: -8411739.86, period: "s1" },
  { cc: "10244", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1068.80, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1068.80, period: "s1" },
  { cc: "10248", financiamento: 0, fornecedor: -42882.29, imposto: 0, outrosCustos: -146323.56, outrosRecebimentos: 5000.00, recCliente: 0, salarios: -5648.01, total: -189853.86, period: "s1" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2423.55, outrosRecebimentos: 0, recCliente: 0, salarios: -1255.60, total: -3679.15, period: "s1" },
  { cc: "10252", financiamento: 0, fornecedor: -2312.00, imposto: 0, outrosCustos: -271.48, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2583.48, period: "s1" },
  { cc: "10253", financiamento: 0, fornecedor: -16070.53, imposto: 0, outrosCustos: -1014.69, outrosRecebimentos: 0, recCliente: 263370.35, salarios: 0, total: 246285.13, period: "s1" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -24.23, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -24.23, period: "s1" },
  { cc: "10257", financiamento: 0, fornecedor: -317438.39, imposto: 0, outrosCustos: -18358.33, outrosRecebimentos: 0, recCliente: 13384115.56, salarios: -104037.15, total: 12944281.69, period: "s1" },
  { cc: "10258", financiamento: 0, fornecedor: -2412150.13, imposto: -202528.12, outrosCustos: -258902.87, outrosRecebimentos: 410.20, recCliente: 9889988.56, salarios: -1902860.25, total: 5113957.39, period: "s1" },
  { cc: "10260", financiamento: 0, fornecedor: -578.00, imposto: 0, outrosCustos: -93351.92, outrosRecebimentos: 0, recCliente: 9948628.52, salarios: -711000.36, total: 9143698.24, period: "s1" },
  { cc: "20001", financiamento: 0, fornecedor: -1352985.59, imposto: 0, outrosCustos: -120695.41, outrosRecebimentos: 0, recCliente: 0, salarios: -725651.35, total: -2199332.35, period: "s1" },
  { cc: "20002", financiamento: 0, fornecedor: -241935.38, imposto: 0, outrosCustos: -16209.01, outrosRecebimentos: 0, recCliente: 0, salarios: -167865.62, total: -426010.01, period: "s1" },
  { cc: "20003", financiamento: 0, fornecedor: -480.56, imposto: 0, outrosCustos: -20014.58, outrosRecebimentos: 0, recCliente: 0, salarios: -98116.41, total: -118611.55, period: "s1" },
  { cc: "20004", financiamento: 0, fornecedor: -623815.02, imposto: 0, outrosCustos: -35331.14, outrosRecebimentos: 0, recCliente: 0, salarios: -326196.05, total: -985342.21, period: "s1" },
  { cc: "20005", financiamento: 0, fornecedor: -29207.37, imposto: 0, outrosCustos: -20708.89, outrosRecebimentos: 0, recCliente: 0, salarios: -172309.51, total: -222225.77, period: "s1" },
  { cc: "20006", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4134.77, outrosRecebimentos: 0, recCliente: 0, salarios: -89318.62, total: -93453.39, period: "s1" },
  { cc: "20008", financiamento: 0, fornecedor: -602654.46, imposto: -1507.15, outrosCustos: -14061.72, outrosRecebimentos: 0, recCliente: 0, salarios: -82844.82, total: -701068.15, period: "s1" },
  { cc: "20009", financiamento: 0, fornecedor: -2709.10, imposto: 0, outrosCustos: -17747.91, outrosRecebimentos: 0, recCliente: 0, salarios: -102539.47, total: -122996.48, period: "s1" },
  { cc: "20010", financiamento: 0, fornecedor: -124988.84, imposto: 0, outrosCustos: -10565.30, outrosRecebimentos: 0, recCliente: 0, salarios: -105084.63, total: -240638.77, period: "s1" },
  { cc: "20013", financiamento: 0, fornecedor: -2850.48, imposto: 0, outrosCustos: -2595.51, outrosRecebimentos: 0, recCliente: 0, salarios: -39812.00, total: -45257.99, period: "s1" },
  { cc: "20015", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1769.89, outrosRecebimentos: 0, recCliente: 0, salarios: -51591.05, total: -53360.94, period: "s1" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4087.94, outrosRecebimentos: 0, recCliente: 0, salarios: -32359.36, total: -36447.30, period: "s1" },
  { cc: "20020", financiamento: 0, fornecedor: -278.74, imposto: -30401.72, outrosCustos: -101260.36, outrosRecebimentos: 0, recCliente: 0, salarios: -150838.85, total: -282779.67, period: "s1" },
  { cc: "20021", financiamento: 0, fornecedor: -52855.74, imposto: 0, outrosCustos: -9288.37, outrosRecebimentos: 0, recCliente: 0, salarios: -71768.38, total: -133912.49, period: "s1" },
  { cc: "20022", financiamento: 0, fornecedor: -736.16, imposto: 0, outrosCustos: -1602.00, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2338.16, period: "s1" },
  { cc: "20023", financiamento: 0, fornecedor: -491774.10, imposto: 0, outrosCustos: -16525.08, outrosRecebimentos: 0, recCliente: 0, salarios: -136352.08, total: -644651.26, period: "s1" },
  { cc: "20024", financiamento: 0, fornecedor: -5314.41, imposto: 0, outrosCustos: -3281.82, outrosRecebimentos: 0, recCliente: 0, salarios: -101933.32, total: -110529.55, period: "s1" },
  { cc: "20029", financiamento: 0, fornecedor: -225477.01, imposto: -4290.74, outrosCustos: -41400.21, outrosRecebimentos: 0, recCliente: 0, salarios: -25281.62, total: -296449.58, period: "s1" },
  { cc: "20030", financiamento: 0, fornecedor: -1566391.77, imposto: 0, outrosCustos: -49772.93, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1616164.70, period: "s1" },
  { cc: "20031", financiamento: 0, fornecedor: -317898.00, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -317898.00, period: "s1" },
  { cc: "20032", financiamento: 0, fornecedor: -2075.64, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2075.64, period: "s1" },
  { cc: "20099", financiamento: 0, fornecedor: -328548.45, imposto: -29827.13, outrosCustos: -180987.06, outrosRecebimentos: 0, recCliente: 0, salarios: -39771.95, total: -579134.59, period: "s1" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -5114.93, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -5114.93, period: "s1" },
  { cc: "20102", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9417.00, total: -9417.00, period: "s1" },
  { cc: "20104", financiamento: 0, fornecedor: -986793.73, imposto: 0, outrosCustos: -19903.87, outrosRecebimentos: 0, recCliente: 0, salarios: -225451.81, total: -1232149.41, period: "s1" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4357.65, outrosRecebimentos: 0, recCliente: 0, salarios: -56774.58, total: -61132.23, period: "s1" },
  { cc: "20108", financiamento: 0, fornecedor: -13812.81, imposto: 0, outrosCustos: -42789.98, outrosRecebimentos: 0, recCliente: 0, salarios: -287945.53, total: -344548.32, period: "s1" },
  { cc: "20109", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3007.46, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3007.46, period: "s1" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3147.71, outrosRecebimentos: 0, recCliente: 0, salarios: -39233.79, total: -42381.50, period: "s1" },
  { cc: "30001", financiamento: 0, fornecedor: -70613.79, imposto: -4.67, outrosCustos: -34771.25, outrosRecebimentos: 0, recCliente: 0, salarios: -202882.19, total: -308271.90, period: "s1" },
  { cc: "30002", financiamento: 0, fornecedor: -346884.40, imposto: 0, outrosCustos: -218742.96, outrosRecebimentos: 0, recCliente: 0, salarios: -115106.95, total: -680734.31, period: "s1" },
  { cc: "30003", financiamento: 0, fornecedor: -30725.74, imposto: 0, outrosCustos: -36448.97, outrosRecebimentos: 0, recCliente: 0, salarios: -105022.55, total: -172197.26, period: "s1" },
  { cc: "30099", financiamento: 0, fornecedor: -84708.75, imposto: 0, outrosCustos: -42218.92, outrosRecebimentos: 0, recCliente: 0, salarios: -7299.11, total: -134226.78, period: "s1" },
  { cc: "30258", financiamento: 0, fornecedor: -594.00, imposto: -7.38, outrosCustos: -3204.10, outrosRecebimentos: 0, recCliente: 0, salarios: -160993.81, total: -164799.29, period: "s1" },
  { cc: "31001", financiamento: 0, fornecedor: -7224.85, imposto: 0, outrosCustos: -13798.49, outrosRecebimentos: 0, recCliente: 0, salarios: -34527.71, total: -55551.05, period: "s1" },
  { cc: "40001", financiamento: 26436883.05, fornecedor: -189080.15, imposto: -77620.89, outrosCustos: -51993.56, outrosRecebimentos: 134252.85, recCliente: 0, salarios: 0, total: 26252441.31, period: "s1" },
  { cc: "Outros", financiamento: 0, fornecedor: -17365656.39, imposto: -1911650.55, outrosCustos: -46511.56, outrosRecebimentos: 10263276.14, recCliente: 0, salarios: 0, total: -9060542.36, period: "s1" },
];

// Period total: Total Acumulado (Jan a 20/02)
const ccMEBTotal: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -605872.85, imposto: 0, outrosCustos: -429853.17, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1035726.02, period: "total" },
  { cc: "10216", financiamento: 0, fornecedor: -15441.65, imposto: 0, outrosCustos: 0, outrosRecebimentos: 23264.29, recCliente: 0, salarios: 0, total: 7822.64, period: "total" },
  { cc: "10242", financiamento: 0, fornecedor: -85872.81, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -85872.81, period: "total" },
  { cc: "10243", financiamento: 0, fornecedor: -32421932.93, imposto: 0, outrosCustos: -3070.06, outrosRecebimentos: 0, recCliente: 6318339.18, salarios: 0, total: -26106663.81, period: "total" },
  { cc: "10244", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1298.60, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1298.60, period: "total" },
  { cc: "10248", financiamento: 0, fornecedor: -43422.29, imposto: -4007.96, outrosCustos: -175297.39, outrosRecebimentos: 5000.00, recCliente: 0, salarios: -8793.80, total: -226521.44, period: "total" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3921.60, outrosRecebimentos: 0, recCliente: 0, salarios: -1255.60, total: -5177.20, period: "total" },
  { cc: "10252", financiamento: 0, fornecedor: -4624.00, imposto: 0, outrosCustos: -271.48, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4895.48, period: "total" },
  { cc: "10253", financiamento: 0, fornecedor: -94803.05, imposto: 0, outrosCustos: -1014.69, outrosRecebimentos: 0, recCliente: 354922.51, salarios: 0, total: 259104.77, period: "total" },
  { cc: "10254", financiamento: 0, fornecedor: -12831.11, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -12831.11, period: "total" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -24.23, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -24.23, period: "total" },
  { cc: "10257", financiamento: 0, fornecedor: -355111.26, imposto: -5943.07, outrosCustos: -25476.80, outrosRecebimentos: 0, recCliente: 132931131.36, salarios: -104037.15, total: 132440563.08, period: "total" },
  { cc: "10258", financiamento: 0, fornecedor: -3509672.58, imposto: -506253.16, outrosCustos: -364607.75, outrosRecebimentos: 410.20, recCliente: 9889988.56, salarios: -2457733.13, total: 3052132.14, period: "total" },
  { cc: "10260", financiamento: 0, fornecedor: -1806.39, imposto: -48368.29, outrosCustos: -127979.57, outrosRecebimentos: 0, recCliente: 10617792.03, salarios: -824333.77, total: 9615304.01, period: "total" },
  { cc: "20001", financiamento: 0, fornecedor: -1369690.71, imposto: -544.15, outrosCustos: -182922.21, outrosRecebimentos: 0, recCliente: 0, salarios: -725651.35, total: -2278808.42, period: "total" },
  { cc: "20002", financiamento: 0, fornecedor: -300821.94, imposto: -10755.57, outrosCustos: -19997.51, outrosRecebimentos: 0, recCliente: 0, salarios: -168725.98, total: -500301.00, period: "total" },
  { cc: "20003", financiamento: 0, fornecedor: -832.95, imposto: -6089.51, outrosCustos: -30191.94, outrosRecebimentos: 0, recCliente: 0, salarios: -98116.41, total: -135230.81, period: "total" },
  { cc: "20004", financiamento: 0, fornecedor: -686123.11, imposto: -20919.04, outrosCustos: -75901.46, outrosRecebimentos: 0, recCliente: 0, salarios: -373460.68, total: -1156404.29, period: "total" },
  { cc: "20005", financiamento: 0, fornecedor: -36424.37, imposto: -12994.21, outrosCustos: -36042.90, outrosRecebimentos: 0, recCliente: 0, salarios: -203625.74, total: -289087.22, period: "total" },
  { cc: "20006", financiamento: 0, fornecedor: 0, imposto: -5953.97, outrosCustos: -6274.92, outrosRecebimentos: 0, recCliente: 0, salarios: -89318.62, total: -101547.51, period: "total" },
  { cc: "20008", financiamento: 0, fornecedor: -958100.70, imposto: -8445.50, outrosCustos: -18046.68, outrosRecebimentos: 0, recCliente: 0, salarios: -86960.02, total: -1071552.90, period: "total" },
  { cc: "20009", financiamento: 0, fornecedor: -4914.94, imposto: -5492.66, outrosCustos: -23225.65, outrosRecebimentos: 2825.17, recCliente: 0, salarios: -108594.74, total: -139402.82, period: "total" },
  { cc: "20010", financiamento: 0, fornecedor: -148207.48, imposto: -5924.66, outrosCustos: -12351.95, outrosRecebimentos: 0, recCliente: 0, salarios: -106669.62, total: -273153.71, period: "total" },
  { cc: "20012", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1159.50, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1159.50, period: "total" },
  { cc: "20013", financiamento: 0, fornecedor: -5700.96, imposto: -2793.79, outrosCustos: -3438.01, outrosRecebimentos: 0, recCliente: 0, salarios: -39812.00, total: -51744.76, period: "total" },
  { cc: "20015", financiamento: 0, fornecedor: -2310.00, imposto: -951.43, outrosCustos: -2882.22, outrosRecebimentos: 0, recCliente: 0, salarios: -51591.05, total: -57734.70, period: "total" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: -1284.80, outrosCustos: -5193.39, outrosRecebimentos: 0, recCliente: 0, salarios: -35113.09, total: -41591.28, period: "total" },
  { cc: "20020", financiamento: 0, fornecedor: -203878.26, imposto: -30401.72, outrosCustos: -2668.84, outrosRecebimentos: 0, recCliente: 0, salarios: -150838.85, total: -387787.67, period: "total" },
  { cc: "20021", financiamento: 0, fornecedor: -89774.09, imposto: -1883.20, outrosCustos: -17862.57, outrosRecebimentos: 0, recCliente: 0, salarios: -85745.73, total: -195265.59, period: "total" },
  { cc: "20022", financiamento: 0, fornecedor: -736.16, imposto: 0, outrosCustos: -6102.33, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -6838.49, period: "total" },
  { cc: "20023", financiamento: 0, fornecedor: -502774.10, imposto: -18318.88, outrosCustos: -20339.72, outrosRecebimentos: 0, recCliente: 0, salarios: -137993.49, total: -679426.19, period: "total" },
  { cc: "20024", financiamento: 0, fornecedor: -5314.41, imposto: -4735.53, outrosCustos: -4646.07, outrosRecebimentos: 2198.93, recCliente: 0, salarios: -101933.32, total: -114430.40, period: "total" },
  { cc: "20029", financiamento: 0, fornecedor: -241289.50, imposto: -78491.24, outrosCustos: -41721.06, outrosRecebimentos: 854.36, recCliente: 0, salarios: -28029.79, total: -388677.23, period: "total" },
  { cc: "20030", financiamento: 0, fornecedor: -1882733.85, imposto: -80417.27, outrosCustos: -49772.93, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2012924.05, period: "total" },
  { cc: "20031", financiamento: 0, fornecedor: -317898.00, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -317898.00, period: "total" },
  { cc: "20032", financiamento: 0, fornecedor: -2075.64, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2075.64, period: "total" },
  { cc: "20099", financiamento: 0, fornecedor: -380775.78, imposto: -36178.90, outrosCustos: -182346.37, outrosRecebimentos: 0, recCliente: 0, salarios: -46363.14, total: -645664.19, period: "total" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: -245.20, outrosCustos: -5114.93, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -5360.13, period: "total" },
  { cc: "20102", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9417.00, total: -9417.00, period: "total" },
  { cc: "20104", financiamento: 0, fornecedor: -1071834.18, imposto: -25397.24, outrosCustos: -24629.25, outrosRecebimentos: 0, recCliente: 0, salarios: -242073.62, total: -1363934.29, period: "total" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: -8680.08, outrosCustos: -5548.46, outrosRecebimentos: 0, recCliente: 0, salarios: -61656.20, total: -75884.74, period: "total" },
  { cc: "20108", financiamento: 0, fornecedor: -26109.21, imposto: -17946.26, outrosCustos: -75058.89, outrosRecebimentos: 0, recCliente: 0, salarios: -301277.26, total: -420391.62, period: "total" },
  { cc: "20109", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3007.46, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3007.46, period: "total" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: -2282.26, outrosCustos: -60646.07, outrosRecebimentos: 0, recCliente: 0, salarios: -39233.79, total: -102162.12, period: "total" },
  { cc: "30001", financiamento: 0, fornecedor: -80235.53, imposto: -17446.42, outrosCustos: -38290.03, outrosRecebimentos: 1595.00, recCliente: 0, salarios: -227594.76, total: -361971.74, period: "total" },
  { cc: "30002", financiamento: -1948552.13, fornecedor: -543141.92, imposto: -139345.38, outrosCustos: -223656.41, outrosRecebimentos: 0, recCliente: 0, salarios: -132352.51, total: -2987048.35, period: "total" },
  { cc: "30003", financiamento: 0, fornecedor: -591865.76, imposto: -6378.95, outrosCustos: -68778.97, outrosRecebimentos: 400.00, recCliente: 0, salarios: -105022.55, total: -771646.23, period: "total" },
  { cc: "30099", financiamento: 0, fornecedor: -110572.74, imposto: -381.48, outrosCustos: -44735.09, outrosRecebimentos: 0, recCliente: 0, salarios: -10496.45, total: -166185.76, period: "total" },
  { cc: "30258", financiamento: 0, fornecedor: -694.00, imposto: -15772.60, outrosCustos: -6093.18, outrosRecebimentos: 0, recCliente: 0, salarios: -186694.68, total: -209254.46, period: "total" },
  { cc: "31001", financiamento: 0, fornecedor: -8056.49, imposto: -4410.54, outrosCustos: -24004.93, outrosRecebimentos: 0, recCliente: 0, salarios: -44829.63, total: -81301.59, period: "total" },
  { cc: "40001", financiamento: 146403512.32, fornecedor: -189080.15, imposto: -165035.90, outrosCustos: -73410.16, outrosRecebimentos: 450551.29, recCliente: 0, salarios: 0, total: 146426537.41, period: "total" },
  { cc: "Outros", financiamento: 0, fornecedor: -18300656.39, imposto: -2132484.82, outrosCustos: -7200.00, outrosRecebimentos: 10268600.47, recCliente: 0, salarios: 0, total: -10171740.74, period: "total" },
];

export const custoCentroMEBData: CustoCentroEntry[] = [...ccMEBS1, ...ccMEBTotal];

// ── CC Macaé ───────────────────────────────────────────────────────

// Period s1: Janeiro a 06/02
const ccMacaeS1: CustoCentroEntry[] = [
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -58279.31, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -58279.31, period: "s1" },
  { cc: "10234", financiamento: 0, fornecedor: -271447.62, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -271447.62, period: "s1" },
  { cc: "10241", financiamento: 0, fornecedor: -78039.31, imposto: 0, outrosCustos: -1000.00, outrosRecebimentos: 0, recCliente: 11531852.83, salarios: 0, total: 11452813.52, period: "s1" },
  { cc: "10251", financiamento: 0, fornecedor: -5719022.66, imposto: -126.34, outrosCustos: -2053946.85, outrosRecebimentos: 0, recCliente: 1096698.89, salarios: -8686335.90, total: -15362732.86, period: "s1" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9807.00, total: -9807.00, period: "s1" },
  { cc: "10256", financiamento: 0, fornecedor: -5028519.45, imposto: 0, outrosCustos: -2055717.45, outrosRecebimentos: 0, recCliente: 15050707.35, salarios: -9471240.11, total: -1504769.66, period: "s1" },
  { cc: "10259", financiamento: 0, fornecedor: -789272.45, imposto: 0, outrosCustos: -166264.71, outrosRecebimentos: 0, recCliente: 1448682.98, salarios: -827449.52, total: -334303.70, period: "s1" },
  { cc: "20001", financiamento: 0, fornecedor: -2404171.66, imposto: 0, outrosCustos: -172616.65, outrosRecebimentos: 16355.20, recCliente: 0, salarios: -489525.07, total: -3049958.18, period: "s1" },
  { cc: "40001", financiamento: -44051.36, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -44051.36, period: "s1" },
  { cc: "Outros", financiamento: -7569361.10, fornecedor: -1150000.00, imposto: -3774626.03, outrosCustos: -86044.93, outrosRecebimentos: 88227.83, recCliente: 0, salarios: -2528.20, total: -12494332.43, period: "s1" },
];

// Period total: Total Acumulado (Jan a 20/02)
const ccMacaeTotal: CustoCentroEntry[] = [
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -66558.62, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -66558.62, period: "total" },
  { cc: "10234", financiamento: 0, fornecedor: -542895.24, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -542895.24, period: "total" },
  { cc: "10241", financiamento: 0, fornecedor: -81078.96, imposto: 0, outrosCustos: -1000.00, outrosRecebimentos: 0, recCliente: 11531852.83, salarios: 0, total: 11449773.87, period: "total" },
  { cc: "10251", financiamento: 0, fornecedor: -7541818.44, imposto: -66076.65, outrosCustos: -3160953.64, outrosRecebimentos: 0, recCliente: 14801531.37, salarios: -9020214.09, total: -4987531.45, period: "total" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9807.00, total: -9807.00, period: "total" },
  { cc: "10256", financiamento: 0, fornecedor: -7113383.91, imposto: 0, outrosCustos: -3160177.77, outrosRecebimentos: 0, recCliente: 30061690.99, salarios: -9668863.19, total: 10119266.12, period: "total" },
  { cc: "10259", financiamento: 0, fornecedor: -922985.38, imposto: 0, outrosCustos: -270471.43, outrosRecebimentos: 0, recCliente: 3350869.27, salarios: -835551.76, total: 1321860.70, period: "total" },
  { cc: "20001", financiamento: 0, fornecedor: -2840557.79, imposto: -101972.51, outrosCustos: -283451.87, outrosRecebimentos: 32710.40, recCliente: 0, salarios: -510663.61, total: -3703935.38, period: "total" },
  { cc: "40001", financiamento: -44051.36, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -44051.36, period: "total" },
  { cc: "Outros", financiamento: -7569361.10, fornecedor: -1150000.00, imposto: -8293046.39, outrosCustos: -88472.13, outrosRecebimentos: 88227.83, recCliente: 0, salarios: -2528.20, total: -17015179.99, period: "total" },
];

export const custoCentroMacaeData: CustoCentroEntry[] = [...ccMacaeS1, ...ccMacaeTotal];

// ── Tipo de Pagamento/Recebimento por Empresa ──────────────────────

// Period s1: Janeiro a 06/02
const tipoS1: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -7569361.10, fornecedor: -15440473.15, imposto: -3774752.37, outrosCustos: -4593869.90, outrosRecebimentos: 104583.03, recCliente: 29127942.05, salarios: -19486885.80, total: -21632817.24, period: "s1" },
  { company: "Mota Engil Brasil", financiamento: 26436883.05, fornecedor: -42943570.79, imposto: -2257838.35, outrosCustos: -2170625.13, outrosRecebimentos: 10426203.48, recCliente: 39804442.17, salarios: -6489091.49, total: 22806402.95, period: "s1" },
];

// Period total: Total Acumulado (Jan a 20/02)
const tipoTotal: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -7613412.46, fornecedor: -20192719.72, imposto: -8461095.55, outrosCustos: -7031085.46, outrosRecebimentos: 120938.23, recCliente: 59745944.46, salarios: -20047627.85, total: -3479058.35, period: "total" },
  { company: "Mota Engil Brasil", financiamento: 144454960.19, fornecedor: -65114214.48, imposto: -3432955.64, outrosCustos: -2635877.17, outrosRecebimentos: 10755699.71, recCliente: 160112173.64, salarios: -7395345.52, total: 236744440.74, period: "total" },
];

export const tipoPagamentoData: TipoPagamentoEntry[] = [...tipoS1, ...tipoTotal];

// ── Utilitário para calcular período s2 (diferença total - s1) ────

const NUMERIC_CC_KEYS = ["financiamento", "fornecedor", "imposto", "outrosCustos", "outrosRecebimentos", "recCliente", "salarios", "total"] as const;

export function computeS2<T extends Record<string, any>>(
  allData: T[],
  keyField: string,
): T[] {
  const totalEntries = allData.filter(d => d.period === "total");
  const s1Entries = allData.filter(d => d.period === "s1");

  return totalEntries.map(te => {
    const s1e = s1Entries.find(s => s[keyField] === te[keyField]);
    const result: Record<string, any> = { ...te, period: "s2" };
    for (const k of NUMERIC_CC_KEYS) {
      if (k in te && typeof te[k] === "number") {
        result[k] = te[k] - (s1e?.[k] ?? 0);
      }
    }
    return result as T;
  });
}

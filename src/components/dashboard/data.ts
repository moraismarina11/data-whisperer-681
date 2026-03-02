import type { CustoCentroEntry, Top10Entry, TipoPagamentoEntry } from "./shared";

// ── Top 10 Pagamento de Fornecedor ─────────────────────────────────

// Period s1: Janeiro a 06/02
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

// Checkpoint: old total up to 20/02 (used to compute s2)
const top10OldTotal: Top10Entry[] = [
  { supplier: "FLOW LATINO AMERICAN", macae: -1852105.09, meb: 0, total: -1852105.09, period: "__s2total" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -1398782.08, total: -1398782.08, period: "__s2total" },
  { supplier: "JOTUN BRASIL", macae: -1260520.34, meb: 0, total: -1260520.34, period: "__s2total" },
  { supplier: "FLP TRANSPORTES DE M", macae: -1156230.06, meb: 0, total: -1156230.06, period: "__s2total" },
  { supplier: "KROMINOX ACOS E META", macae: -1155346.05, meb: 0, total: -1155346.05, period: "__s2total" },
  { supplier: "UPSTAR AVIATION", macae: 0, meb: -931000.00, total: -931000.00, period: "__s2total" },
  { supplier: "PRINER LOCACAO DE EQ", macae: -875070.35, meb: 0, total: -875070.35, period: "__s2total" },
  { supplier: "ALMEQ SERVICOS TECNI", macae: -846618.06, meb: 0, total: -846618.06, period: "__s2total" },
  { supplier: "JOHN ZINK COMPANY LL", macae: -735476.35, meb: 0, total: -735476.35, period: "__s2total" },
  { supplier: "CISARENTAL ADMINISTR", macae: -677283.12, meb: 0, total: -677283.12, period: "__s2total" },
];

// Period s3: 23/02 a 27/02
const top10S3: Top10Entry[] = [
  { supplier: "FLOW LATINO", macae: -1150000.00, meb: 0, total: -1150000.00, period: "s3" },
  { supplier: "PRINER LOCACAO DE EQ", macae: -967963.07, meb: 0, total: -967963.07, period: "s3" },
  { supplier: "CAIXA DE PREVIDENCIA DOS FUNCIONARI", macae: 0, meb: -380000.00, total: -380000.00, period: "s3" },
  { supplier: "RT-LEA - LOCACAO DE", macae: -244266.33, meb: 0, total: -244266.33, period: "s3" },
  { supplier: "TICKET SOLUCOES HDFGT S/A", macae: 0, meb: -194005.81, total: -194005.81, period: "s3" },
  { supplier: "FCC CIENCIA DOS MATE", macae: -174755.65, meb: 0, total: -174755.65, period: "s3" },
  { supplier: "NOVATA ENGENHARIA LTDA", macae: 0, meb: -169372.08, total: -169372.08, period: "s3" },
  { supplier: "KROMINOX ACOS E META", macae: -164883.48, meb: 0, total: -164883.48, period: "s3" },
  { supplier: "JLA CASAGRANDE SERVICOS E CONSULTOR", macae: 0, meb: -138786.31, total: -138786.31, period: "s3" },
  { supplier: "HYDRATIGHT EQUIPAMEN", macae: -132416.69, meb: 0, total: -132416.69, period: "s3" },
];

// New total acumulado (Jan a 27/02)
const top10NewTotal: Top10Entry[] = [
  { supplier: "FLOW LATINO AMERICAN", macae: -1853369.80, meb: 0, total: -1853369.80, period: "total" },
  { supplier: "PRINER LOCACAO DE EQ", macae: -1843033.42, meb: 0, total: -1843033.42, period: "total" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -1398782.08, total: -1398782.08, period: "total" },
  { supplier: "KROMINOX ACOS E META", macae: -1320229.53, meb: 0, total: -1320229.53, period: "total" },
  { supplier: "FLP TRANSPORTES DE M", macae: -1284970.66, meb: 0, total: -1284970.66, period: "total" },
  { supplier: "JOTUN BRASIL", macae: -1260520.34, meb: 0, total: -1260520.34, period: "total" },
  { supplier: "FLOW LATINO", macae: -1150000.00, meb: 0, total: -1150000.00, period: "total" },
  { supplier: "UPSTAR AVIATION", macae: 0, meb: -931000.00, total: -931000.00, period: "total" },
  { supplier: "ALMEQ SERVICOS TECNI", macae: -846618.06, meb: 0, total: -846618.06, period: "total" },
  { supplier: "JOHN ZINK COMPANY LL", macae: -735476.35, meb: 0, total: -735476.35, period: "total" },
];

export const top10Data: Top10Entry[] = [...top10S1, ...top10OldTotal, ...top10S3, ...top10NewTotal];

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

// Checkpoint: old total up to 20/02 (used to compute s2)
const ccMEBOldTotal: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -605872.85, imposto: 0, outrosCustos: -429853.17, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1035726.02, period: "__s2total" },
  { cc: "10216", financiamento: 0, fornecedor: -15441.65, imposto: 0, outrosCustos: 0, outrosRecebimentos: 23264.29, recCliente: 0, salarios: 0, total: 7822.64, period: "__s2total" },
  { cc: "10242", financiamento: 0, fornecedor: -85872.81, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -85872.81, period: "__s2total" },
  { cc: "10243", financiamento: 0, fornecedor: -32421932.93, imposto: 0, outrosCustos: -3070.06, outrosRecebimentos: 0, recCliente: 6318339.18, salarios: 0, total: -26106663.81, period: "__s2total" },
  { cc: "10244", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1298.60, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1298.60, period: "__s2total" },
  { cc: "10248", financiamento: 0, fornecedor: -43422.29, imposto: -4007.96, outrosCustos: -175297.39, outrosRecebimentos: 5000.00, recCliente: 0, salarios: -8793.80, total: -226521.44, period: "__s2total" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3921.60, outrosRecebimentos: 0, recCliente: 0, salarios: -1255.60, total: -5177.20, period: "__s2total" },
  { cc: "10252", financiamento: 0, fornecedor: -4624.00, imposto: 0, outrosCustos: -271.48, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4895.48, period: "__s2total" },
  { cc: "10253", financiamento: 0, fornecedor: -94803.05, imposto: 0, outrosCustos: -1014.69, outrosRecebimentos: 0, recCliente: 354922.51, salarios: 0, total: 259104.77, period: "__s2total" },
  { cc: "10254", financiamento: 0, fornecedor: -12831.11, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -12831.11, period: "__s2total" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -24.23, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -24.23, period: "__s2total" },
  { cc: "10257", financiamento: 0, fornecedor: -355111.26, imposto: -5943.07, outrosCustos: -25476.80, outrosRecebimentos: 0, recCliente: 132931131.36, salarios: -104037.15, total: 132440563.08, period: "__s2total" },
  { cc: "10258", financiamento: 0, fornecedor: -3509672.58, imposto: -506253.16, outrosCustos: -364607.75, outrosRecebimentos: 410.20, recCliente: 9889988.56, salarios: -2457733.13, total: 3052132.14, period: "__s2total" },
  { cc: "10260", financiamento: 0, fornecedor: -1806.39, imposto: -48368.29, outrosCustos: -127979.57, outrosRecebimentos: 0, recCliente: 10617792.03, salarios: -824333.77, total: 9615304.01, period: "__s2total" },
  { cc: "20001", financiamento: 0, fornecedor: -1369690.71, imposto: -544.15, outrosCustos: -182922.21, outrosRecebimentos: 0, recCliente: 0, salarios: -725651.35, total: -2278808.42, period: "__s2total" },
  { cc: "20002", financiamento: 0, fornecedor: -300821.94, imposto: -10755.57, outrosCustos: -19997.51, outrosRecebimentos: 0, recCliente: 0, salarios: -168725.98, total: -500301.00, period: "__s2total" },
  { cc: "20003", financiamento: 0, fornecedor: -832.95, imposto: -6089.51, outrosCustos: -30191.94, outrosRecebimentos: 0, recCliente: 0, salarios: -98116.41, total: -135230.81, period: "__s2total" },
  { cc: "20004", financiamento: 0, fornecedor: -686123.11, imposto: -20919.04, outrosCustos: -75901.46, outrosRecebimentos: 0, recCliente: 0, salarios: -373460.68, total: -1156404.29, period: "__s2total" },
  { cc: "20005", financiamento: 0, fornecedor: -36424.37, imposto: -12994.21, outrosCustos: -36042.90, outrosRecebimentos: 0, recCliente: 0, salarios: -203625.74, total: -289087.22, period: "__s2total" },
  { cc: "20006", financiamento: 0, fornecedor: 0, imposto: -5953.97, outrosCustos: -6274.92, outrosRecebimentos: 0, recCliente: 0, salarios: -89318.62, total: -101547.51, period: "__s2total" },
  { cc: "20008", financiamento: 0, fornecedor: -958100.70, imposto: -8445.50, outrosCustos: -18046.68, outrosRecebimentos: 0, recCliente: 0, salarios: -86960.02, total: -1071552.90, period: "__s2total" },
  { cc: "20009", financiamento: 0, fornecedor: -4914.94, imposto: -5492.66, outrosCustos: -23225.65, outrosRecebimentos: 2825.17, recCliente: 0, salarios: -108594.74, total: -139402.82, period: "__s2total" },
  { cc: "20010", financiamento: 0, fornecedor: -148207.48, imposto: -5924.66, outrosCustos: -12351.95, outrosRecebimentos: 0, recCliente: 0, salarios: -106669.62, total: -273153.71, period: "__s2total" },
  { cc: "20012", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1159.50, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1159.50, period: "__s2total" },
  { cc: "20013", financiamento: 0, fornecedor: -5700.96, imposto: -2793.79, outrosCustos: -3438.01, outrosRecebimentos: 0, recCliente: 0, salarios: -39812.00, total: -51744.76, period: "__s2total" },
  { cc: "20015", financiamento: 0, fornecedor: -2310.00, imposto: -951.43, outrosCustos: -2882.22, outrosRecebimentos: 0, recCliente: 0, salarios: -51591.05, total: -57734.70, period: "__s2total" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: -1284.80, outrosCustos: -5193.39, outrosRecebimentos: 0, recCliente: 0, salarios: -35113.09, total: -41591.28, period: "__s2total" },
  { cc: "20020", financiamento: 0, fornecedor: -203878.26, imposto: -30401.72, outrosCustos: -2668.84, outrosRecebimentos: 0, recCliente: 0, salarios: -150838.85, total: -387787.67, period: "__s2total" },
  { cc: "20021", financiamento: 0, fornecedor: -89774.09, imposto: -1883.20, outrosCustos: -17862.57, outrosRecebimentos: 0, recCliente: 0, salarios: -85745.73, total: -195265.59, period: "__s2total" },
  { cc: "20022", financiamento: 0, fornecedor: -736.16, imposto: 0, outrosCustos: -6102.33, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -6838.49, period: "__s2total" },
  { cc: "20023", financiamento: 0, fornecedor: -502774.10, imposto: -18318.88, outrosCustos: -20339.72, outrosRecebimentos: 0, recCliente: 0, salarios: -137993.49, total: -679426.19, period: "__s2total" },
  { cc: "20024", financiamento: 0, fornecedor: -5314.41, imposto: -4735.53, outrosCustos: -4646.07, outrosRecebimentos: 2198.93, recCliente: 0, salarios: -101933.32, total: -114430.40, period: "__s2total" },
  { cc: "20029", financiamento: 0, fornecedor: -241289.50, imposto: -78491.24, outrosCustos: -41721.06, outrosRecebimentos: 854.36, recCliente: 0, salarios: -28029.79, total: -388677.23, period: "__s2total" },
  { cc: "20030", financiamento: 0, fornecedor: -1882733.85, imposto: -80417.27, outrosCustos: -49772.93, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2012924.05, period: "__s2total" },
  { cc: "20031", financiamento: 0, fornecedor: -317898.00, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -317898.00, period: "__s2total" },
  { cc: "20032", financiamento: 0, fornecedor: -2075.64, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2075.64, period: "__s2total" },
  { cc: "20099", financiamento: 0, fornecedor: -380775.78, imposto: -36178.90, outrosCustos: -182346.37, outrosRecebimentos: 0, recCliente: 0, salarios: -46363.14, total: -645664.19, period: "__s2total" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: -245.20, outrosCustos: -5114.93, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -5360.13, period: "__s2total" },
  { cc: "20102", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9417.00, total: -9417.00, period: "__s2total" },
  { cc: "20104", financiamento: 0, fornecedor: -1071834.18, imposto: -25397.24, outrosCustos: -24629.25, outrosRecebimentos: 0, recCliente: 0, salarios: -242073.62, total: -1363934.29, period: "__s2total" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: -8680.08, outrosCustos: -5548.46, outrosRecebimentos: 0, recCliente: 0, salarios: -61656.20, total: -75884.74, period: "__s2total" },
  { cc: "20108", financiamento: 0, fornecedor: -26109.21, imposto: -17946.26, outrosCustos: -75058.89, outrosRecebimentos: 0, recCliente: 0, salarios: -301277.26, total: -420391.62, period: "__s2total" },
  { cc: "20109", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3007.46, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3007.46, period: "__s2total" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: -2282.26, outrosCustos: -60646.07, outrosRecebimentos: 0, recCliente: 0, salarios: -39233.79, total: -102162.12, period: "__s2total" },
  { cc: "30001", financiamento: 0, fornecedor: -80235.53, imposto: -17446.42, outrosCustos: -38290.03, outrosRecebimentos: 1595.00, recCliente: 0, salarios: -227594.76, total: -361971.74, period: "__s2total" },
  { cc: "30002", financiamento: -1948552.13, fornecedor: -543141.92, imposto: -139345.38, outrosCustos: -223656.41, outrosRecebimentos: 0, recCliente: 0, salarios: -132352.51, total: -2987048.35, period: "__s2total" },
  { cc: "30003", financiamento: 0, fornecedor: -591865.76, imposto: -6378.95, outrosCustos: -68778.97, outrosRecebimentos: 400.00, recCliente: 0, salarios: -105022.55, total: -771646.23, period: "__s2total" },
  { cc: "30099", financiamento: 0, fornecedor: -110572.74, imposto: -381.48, outrosCustos: -44735.09, outrosRecebimentos: 0, recCliente: 0, salarios: -10496.45, total: -166185.76, period: "__s2total" },
  { cc: "30258", financiamento: 0, fornecedor: -694.00, imposto: -15772.60, outrosCustos: -6093.18, outrosRecebimentos: 0, recCliente: 0, salarios: -186694.68, total: -209254.46, period: "__s2total" },
  { cc: "31001", financiamento: 0, fornecedor: -8056.49, imposto: -4410.54, outrosCustos: -24004.93, outrosRecebimentos: 0, recCliente: 0, salarios: -44829.63, total: -81301.59, period: "__s2total" },
  { cc: "40001", financiamento: 146403512.32, fornecedor: -189080.15, imposto: -165035.90, outrosCustos: -73410.16, outrosRecebimentos: 450551.29, recCliente: 0, salarios: 0, total: 146426537.41, period: "__s2total" },
  { cc: "Outros", financiamento: 0, fornecedor: -18300656.39, imposto: -2132484.82, outrosCustos: -7200.00, outrosRecebimentos: 10268600.47, recCliente: 0, salarios: 0, total: -10171740.74, period: "__s2total" },
];

// Period s3: 23/02 a 27/02
const ccMEBS3: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -41.56, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -41.56, period: "s3" },
  { cc: "10243", financiamento: 0, fornecedor: -8235363.62, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 17205648.81, salarios: 0, total: 8970285.19, period: "s3" },
  { cc: "10248", financiamento: 0, fornecedor: -12797.36, imposto: -5107.56, outrosCustos: -22974.46, outrosRecebimentos: 0, recCliente: 0, salarios: -7129.30, total: -48008.68, period: "s3" },
  { cc: "10253", financiamento: 0, fornecedor: -7144.17, imposto: 0, outrosCustos: -145.38, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -7289.55, period: "s3" },
  { cc: "10257", financiamento: 0, fornecedor: -660.00, imposto: 0, outrosCustos: -24969.39, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -25629.39, period: "s3" },
  { cc: "10258", financiamento: 0, fornecedor: -59429.79, imposto: 0, outrosCustos: -156429.25, outrosRecebimentos: 2362.25, recCliente: 0, salarios: -301804.81, total: -515301.60, period: "s3" },
  { cc: "10260", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -26535.65, outrosRecebimentos: 0, recCliente: 1560929.44, salarios: 0, total: 1534393.79, period: "s3" },
  { cc: "20001", financiamento: 0, fornecedor: -4219.32, imposto: 0, outrosCustos: -68166.90, outrosRecebimentos: 0, recCliente: 0, salarios: -76518.25, total: -148904.47, period: "s3" },
  { cc: "20002", financiamento: 0, fornecedor: -2100.61, imposto: 0, outrosCustos: -14258.67, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -16359.28, period: "s3" },
  { cc: "20003", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4523.60, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4523.60, period: "s3" },
  { cc: "20004", financiamento: 0, fornecedor: -163665.61, imposto: 0, outrosCustos: -20401.20, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -184066.81, period: "s3" },
  { cc: "20005", financiamento: 0, fornecedor: -112.56, imposto: 0, outrosCustos: -21884.36, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -21996.92, period: "s3" },
  { cc: "20006", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2787.94, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2787.94, period: "s3" },
  { cc: "20008", financiamento: 0, fornecedor: -106720.54, imposto: -1622.07, outrosCustos: -9341.46, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -117684.07, period: "s3" },
  { cc: "20009", financiamento: 0, fornecedor: -310.00, imposto: 0, outrosCustos: -8421.84, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -8731.84, period: "s3" },
  { cc: "20010", financiamento: 0, fornecedor: -156018.39, imposto: 0, outrosCustos: -7419.94, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -163438.33, period: "s3" },
  { cc: "20013", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2166.74, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2166.74, period: "s3" },
  { cc: "20015", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1237.00, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1237.00, period: "s3" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3535.94, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3535.94, period: "s3" },
  { cc: "20020", financiamento: 0, fornecedor: -2644.20, imposto: 0, outrosCustos: -945.72, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3589.92, period: "s3" },
  { cc: "20021", financiamento: 0, fornecedor: -0.34, imposto: 0, outrosCustos: -8527.65, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -8527.99, period: "s3" },
  { cc: "20023", financiamento: 0, fornecedor: -49990.01, imposto: 0, outrosCustos: -8773.86, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -58763.87, period: "s3" },
  { cc: "20024", financiamento: 0, fornecedor: -187.56, imposto: 0, outrosCustos: -3935.20, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4122.76, period: "s3" },
  { cc: "20029", financiamento: 0, fornecedor: -1360.20, imposto: 0, outrosCustos: -2507.36, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3867.56, period: "s3" },
  { cc: "20030", financiamento: 0, fornecedor: -12721.07, imposto: -17144.30, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -29865.37, period: "s3" },
  { cc: "20033", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -327.76, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -327.76, period: "s3" },
  { cc: "20099", financiamento: 0, fornecedor: -15420.29, imposto: 0, outrosCustos: -14691.54, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -30111.83, period: "s3" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2367.64, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2367.64, period: "s3" },
  { cc: "20104", financiamento: 0, fornecedor: -421010.45, imposto: -51648.76, outrosCustos: -15345.19, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -488004.40, period: "s3" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2166.74, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2166.74, period: "s3" },
  { cc: "20108", financiamento: 0, fornecedor: -1425.60, imposto: 0, outrosCustos: -5151.49, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -6577.09, period: "s3" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -48.46, outrosRecebimentos: 0, recCliente: 0, salarios: -27769.65, total: -27818.11, period: "s3" },
  { cc: "30001", financiamento: 0, fornecedor: -7177.27, imposto: 0, outrosCustos: -24583.47, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -31760.74, period: "s3" },
  { cc: "30002", financiamento: 0, fornecedor: -223215.74, imposto: 0, outrosCustos: -9400.00, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -232615.74, period: "s3" },
  { cc: "30003", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -9270.62, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -9270.62, period: "s3" },
  { cc: "30099", financiamento: 0, fornecedor: -24902.89, imposto: 0, outrosCustos: -928.46, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -25831.35, period: "s3" },
  { cc: "30258", financiamento: 0, fornecedor: -571.20, imposto: 0, outrosCustos: -13396.94, outrosRecebimentos: 0, recCliente: 0, salarios: -17838.75, total: -31806.89, period: "s3" },
  { cc: "31001", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2903.57, outrosRecebimentos: 220.34, recCliente: 0, salarios: 0, total: -2683.23, period: "s3" },
  { cc: "40001", financiamento: -18962582.91, fornecedor: -183862.44, imposto: -1062397.83, outrosCustos: -3431.50, outrosRecebimentos: 1254393.94, recCliente: 0, salarios: 0, total: -18957880.74, period: "s3" },
  { cc: "Outros", financiamento: 0, fornecedor: -2036307.57, imposto: 0, outrosCustos: -10189.53, outrosRecebimentos: 4018773.64, recCliente: 0, salarios: 0, total: 1972276.54, period: "s3" },
];

// New total acumulado (Jan a 27/02)
const ccMEBNewTotal: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -605872.85, imposto: 0, outrosCustos: -429894.73, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1035767.58, period: "total" },
  { cc: "10216", financiamento: 0, fornecedor: -15441.65, imposto: 0, outrosCustos: 0, outrosRecebimentos: 23264.29, recCliente: 0, salarios: 0, total: 7822.64, period: "total" },
  { cc: "10242", financiamento: 0, fornecedor: -85872.81, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -85872.81, period: "total" },
  { cc: "10243", financiamento: 0, fornecedor: -40657296.55, imposto: 0, outrosCustos: -3070.06, outrosRecebimentos: 0, recCliente: 23523987.99, salarios: 0, total: -17136378.62, period: "total" },
  { cc: "10244", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1298.60, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1298.60, period: "total" },
  { cc: "10248", financiamento: 0, fornecedor: -56219.65, imposto: -9115.52, outrosCustos: -198271.85, outrosRecebimentos: 5000.00, recCliente: 0, salarios: -15923.10, total: -274530.12, period: "total" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3921.60, outrosRecebimentos: 0, recCliente: 0, salarios: -1255.60, total: -5177.20, period: "total" },
  { cc: "10252", financiamento: 0, fornecedor: -4624.00, imposto: 0, outrosCustos: -271.48, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4895.48, period: "total" },
  { cc: "10253", financiamento: 0, fornecedor: -101947.22, imposto: 0, outrosCustos: -1160.07, outrosRecebimentos: 0, recCliente: 354922.51, salarios: 0, total: 251815.22, period: "total" },
  { cc: "10254", financiamento: 0, fornecedor: -12831.11, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -12831.11, period: "total" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -24.23, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -24.23, period: "total" },
  { cc: "10257", financiamento: 0, fornecedor: -355771.26, imposto: -5943.07, outrosCustos: -50446.19, outrosRecebimentos: 0, recCliente: 132931131.36, salarios: -104037.15, total: 132414933.69, period: "total" },
  { cc: "10258", financiamento: 0, fornecedor: -3569102.37, imposto: -506253.16, outrosCustos: -521037.00, outrosRecebimentos: 2772.45, recCliente: 9889988.56, salarios: -2759537.94, total: 2536830.54, period: "total" },
  { cc: "10260", financiamento: 0, fornecedor: -1806.39, imposto: -48368.29, outrosCustos: -154515.22, outrosRecebimentos: 0, recCliente: 12178721.47, salarios: -824333.77, total: 11149697.80, period: "total" },
  { cc: "20001", financiamento: 0, fornecedor: -1373910.03, imposto: -544.15, outrosCustos: -251089.11, outrosRecebimentos: 0, recCliente: 0, salarios: -802169.60, total: -2427712.89, period: "total" },
  { cc: "20002", financiamento: 0, fornecedor: -302922.55, imposto: -10755.57, outrosCustos: -34256.18, outrosRecebimentos: 0, recCliente: 0, salarios: -168725.98, total: -516660.28, period: "total" },
  { cc: "20003", financiamento: 0, fornecedor: -832.95, imposto: -6089.51, outrosCustos: -34715.54, outrosRecebimentos: 0, recCliente: 0, salarios: -98116.41, total: -139754.41, period: "total" },
  { cc: "20004", financiamento: 0, fornecedor: -849788.72, imposto: -20919.04, outrosCustos: -96302.66, outrosRecebimentos: 0, recCliente: 0, salarios: -373460.68, total: -1340471.10, period: "total" },
  { cc: "20005", financiamento: 0, fornecedor: -36536.93, imposto: -12994.21, outrosCustos: -57927.26, outrosRecebimentos: 0, recCliente: 0, salarios: -203625.74, total: -311084.14, period: "total" },
  { cc: "20006", financiamento: 0, fornecedor: 0, imposto: -5953.97, outrosCustos: -9062.86, outrosRecebimentos: 0, recCliente: 0, salarios: -89318.62, total: -104335.45, period: "total" },
  { cc: "20008", financiamento: 0, fornecedor: -1064821.24, imposto: -10067.57, outrosCustos: -27388.14, outrosRecebimentos: 0, recCliente: 0, salarios: -86960.02, total: -1189236.97, period: "total" },
  { cc: "20009", financiamento: 0, fornecedor: -5224.94, imposto: -5492.66, outrosCustos: -31647.49, outrosRecebimentos: 2825.17, recCliente: 0, salarios: -108594.74, total: -148134.66, period: "total" },
  { cc: "20010", financiamento: 0, fornecedor: -304225.87, imposto: -5924.66, outrosCustos: -19771.89, outrosRecebimentos: 0, recCliente: 0, salarios: -106669.62, total: -436592.04, period: "total" },
  { cc: "20012", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1159.50, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1159.50, period: "total" },
  { cc: "20013", financiamento: 0, fornecedor: -5700.96, imposto: -2793.79, outrosCustos: -5604.75, outrosRecebimentos: 0, recCliente: 0, salarios: -39812.00, total: -53911.50, period: "total" },
  { cc: "20015", financiamento: 0, fornecedor: -2310.00, imposto: -951.43, outrosCustos: -4119.22, outrosRecebimentos: 0, recCliente: 0, salarios: -51591.05, total: -58971.70, period: "total" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: -1284.80, outrosCustos: -8729.33, outrosRecebimentos: 0, recCliente: 0, salarios: -35113.09, total: -45127.22, period: "total" },
  { cc: "20020", financiamento: 0, fornecedor: -206522.46, imposto: -30401.72, outrosCustos: -3614.56, outrosRecebimentos: 0, recCliente: 0, salarios: -150838.85, total: -391377.59, period: "total" },
  { cc: "20021", financiamento: 0, fornecedor: -89774.43, imposto: -1883.20, outrosCustos: -26390.22, outrosRecebimentos: 0, recCliente: 0, salarios: -85745.73, total: -203793.58, period: "total" },
  { cc: "20022", financiamento: 0, fornecedor: -736.16, imposto: 0, outrosCustos: -6102.33, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -6838.49, period: "total" },
  { cc: "20023", financiamento: 0, fornecedor: -552764.11, imposto: -18318.88, outrosCustos: -29113.58, outrosRecebimentos: 0, recCliente: 0, salarios: -137993.49, total: -738190.06, period: "total" },
  { cc: "20024", financiamento: 0, fornecedor: -5501.97, imposto: -4735.53, outrosCustos: -8581.27, outrosRecebimentos: 2198.93, recCliente: 0, salarios: -101933.32, total: -118553.16, period: "total" },
  { cc: "20029", financiamento: 0, fornecedor: -242649.70, imposto: -78491.24, outrosCustos: -44228.42, outrosRecebimentos: 854.36, recCliente: 0, salarios: -28029.79, total: -392544.79, period: "total" },
  { cc: "20030", financiamento: 0, fornecedor: -1895454.92, imposto: -97561.57, outrosCustos: -49772.93, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2042789.42, period: "total" },
  { cc: "20031", financiamento: 0, fornecedor: -317898.00, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -317898.00, period: "total" },
  { cc: "20032", financiamento: 0, fornecedor: -2075.64, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2075.64, period: "total" },
  { cc: "20033", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -327.76, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -327.76, period: "total" },
  { cc: "20099", financiamento: 0, fornecedor: -396196.07, imposto: -36178.90, outrosCustos: -197037.91, outrosRecebimentos: 0, recCliente: 0, salarios: -46363.14, total: -675776.02, period: "total" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: -245.20, outrosCustos: -7482.57, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -7727.77, period: "total" },
  { cc: "20102", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9417.00, total: -9417.00, period: "total" },
  { cc: "20104", financiamento: 0, fornecedor: -1492844.63, imposto: -77046.00, outrosCustos: -39974.44, outrosRecebimentos: 0, recCliente: 0, salarios: -242073.62, total: -1851938.69, period: "total" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: -8680.08, outrosCustos: -7715.20, outrosRecebimentos: 0, recCliente: 0, salarios: -61656.20, total: -78051.48, period: "total" },
  { cc: "20108", financiamento: 0, fornecedor: -27534.81, imposto: -17946.26, outrosCustos: -80210.38, outrosRecebimentos: 0, recCliente: 0, salarios: -301277.26, total: -426968.71, period: "total" },
  { cc: "20109", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3007.46, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3007.46, period: "total" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: -2282.26, outrosCustos: -60694.53, outrosRecebimentos: 0, recCliente: 0, salarios: -67003.44, total: -129980.23, period: "total" },
  { cc: "30001", financiamento: 0, fornecedor: -87412.80, imposto: -17446.42, outrosCustos: -62873.50, outrosRecebimentos: 1595.00, recCliente: 0, salarios: -227594.76, total: -393732.48, period: "total" },
  { cc: "30002", financiamento: -1948552.13, fornecedor: -766357.66, imposto: -139345.38, outrosCustos: -233056.41, outrosRecebimentos: 0, recCliente: 0, salarios: -132352.51, total: -3219664.09, period: "total" },
  { cc: "30003", financiamento: 0, fornecedor: -591865.76, imposto: -6378.95, outrosCustos: -78049.59, outrosRecebimentos: 400.00, recCliente: 0, salarios: -105022.55, total: -780916.85, period: "total" },
  { cc: "30099", financiamento: 0, fornecedor: -135475.63, imposto: -381.48, outrosCustos: -45663.55, outrosRecebimentos: 0, recCliente: 0, salarios: -10496.45, total: -192017.11, period: "total" },
  { cc: "30258", financiamento: 0, fornecedor: -1265.20, imposto: -15772.60, outrosCustos: -19490.12, outrosRecebimentos: 0, recCliente: 0, salarios: -204533.43, total: -241061.35, period: "total" },
  { cc: "31001", financiamento: 0, fornecedor: -8056.49, imposto: -4410.54, outrosCustos: -26908.50, outrosRecebimentos: 220.34, recCliente: 0, salarios: -44829.63, total: -83984.82, period: "total" },
  { cc: "40001", financiamento: 127440929.41, fornecedor: -372942.59, imposto: -1227433.73, outrosCustos: -76841.66, outrosRecebimentos: 1704945.23, recCliente: 0, salarios: 0, total: 127468656.67, period: "total" },
  { cc: "Outros", financiamento: 0, fornecedor: -20336963.96, imposto: -2132484.82, outrosCustos: -17389.53, outrosRecebimentos: 14287374.11, recCliente: 0, salarios: 0, total: -8199464.20, period: "total" },
];

export const custoCentroMEBData: CustoCentroEntry[] = [...ccMEBS1, ...ccMEBOldTotal, ...ccMEBS3, ...ccMEBNewTotal];

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

// Checkpoint: old total up to 20/02 (used to compute s2)
const ccMacaeOldTotal: CustoCentroEntry[] = [
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -66558.62, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -66558.62, period: "__s2total" },
  { cc: "10234", financiamento: 0, fornecedor: -542895.24, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -542895.24, period: "__s2total" },
  { cc: "10241", financiamento: 0, fornecedor: -81078.96, imposto: 0, outrosCustos: -1000.00, outrosRecebimentos: 0, recCliente: 11531852.83, salarios: 0, total: 11449773.87, period: "__s2total" },
  { cc: "10251", financiamento: 0, fornecedor: -7541818.44, imposto: -66076.65, outrosCustos: -3160953.64, outrosRecebimentos: 0, recCliente: 14801531.37, salarios: -9020214.09, total: -4987531.45, period: "__s2total" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9807.00, total: -9807.00, period: "__s2total" },
  { cc: "10256", financiamento: 0, fornecedor: -7113383.91, imposto: 0, outrosCustos: -3160177.77, outrosRecebimentos: 0, recCliente: 30061690.99, salarios: -9668863.19, total: 10119266.12, period: "__s2total" },
  { cc: "10259", financiamento: 0, fornecedor: -922985.38, imposto: 0, outrosCustos: -270471.43, outrosRecebimentos: 0, recCliente: 3350869.27, salarios: -835551.76, total: 1321860.70, period: "__s2total" },
  { cc: "20001", financiamento: 0, fornecedor: -2840557.79, imposto: -101972.51, outrosCustos: -283451.87, outrosRecebimentos: 32710.40, recCliente: 0, salarios: -510663.61, total: -3703935.38, period: "__s2total" },
  { cc: "40001", financiamento: -44051.36, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -44051.36, period: "__s2total" },
  { cc: "Outros", financiamento: -7569361.10, fornecedor: -1150000.00, imposto: -8293046.39, outrosCustos: -88472.13, outrosRecebimentos: 88227.83, recCliente: 0, salarios: -2528.20, total: -17015179.99, period: "__s2total" },
];

// Period s3: 23/02 a 27/02
const ccMacaeS3: CustoCentroEntry[] = [
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -50000.00, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -50000.00, period: "s3" },
  { cc: "10241", financiamento: 0, fornecedor: -72050.58, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -72050.58, period: "s3" },
  { cc: "10251", financiamento: 0, fornecedor: -1432101.74, imposto: 0, outrosCustos: -988243.75, outrosRecebimentos: 0, recCliente: 0, salarios: -1377920.74, total: -3798266.23, period: "s3" },
  { cc: "10256", financiamento: 0, fornecedor: -937171.82, imposto: 0, outrosCustos: -1000088.58, outrosRecebimentos: 0, recCliente: 0, salarios: -113846.58, total: -2051106.98, period: "s3" },
  { cc: "10259", financiamento: 0, fornecedor: -1157832.80, imposto: 0, outrosCustos: -177111.03, outrosRecebimentos: 0, recCliente: 921561.59, salarios: -28205.03, total: -441587.27, period: "s3" },
  { cc: "20001", financiamento: -1103846.72, fornecedor: -142119.62, imposto: -1244783.71, outrosCustos: -86547.15, outrosRecebimentos: 0, recCliente: 0, salarios: -32482.51, total: -2609779.71, period: "s3" },
  { cc: "Outros", financiamento: 0, fornecedor: 0, imposto: -26546.59, outrosCustos: -764794.86, outrosRecebimentos: 0, recCliente: 0, salarios: -10087.99, total: -801429.44, period: "s3" },
];

// New total acumulado (Jan a 27/02)
const ccMacaeNewTotal: CustoCentroEntry[] = [
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -116558.62, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -116558.62, period: "total" },
  { cc: "10234", financiamento: 0, fornecedor: -542895.24, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -542895.24, period: "total" },
  { cc: "10241", financiamento: 0, fornecedor: -153129.54, imposto: 0, outrosCustos: -1000.00, outrosRecebimentos: 0, recCliente: 11531852.83, salarios: 0, total: 11377723.29, period: "total" },
  { cc: "10251", financiamento: 0, fornecedor: -8973920.18, imposto: -66076.65, outrosCustos: -4149197.39, outrosRecebimentos: 0, recCliente: 14801531.37, salarios: -10398134.83, total: -8785797.68, period: "total" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9807.00, total: -9807.00, period: "total" },
  { cc: "10256", financiamento: 0, fornecedor: -8050555.73, imposto: 0, outrosCustos: -4160266.35, outrosRecebimentos: 0, recCliente: 30061690.99, salarios: -9782709.77, total: 8068159.14, period: "total" },
  { cc: "10259", financiamento: 0, fornecedor: -2080818.18, imposto: 0, outrosCustos: -447582.46, outrosRecebimentos: 0, recCliente: 4272430.86, salarios: -863756.79, total: 880273.43, period: "total" },
  { cc: "20001", financiamento: -1103846.72, fornecedor: -2982677.41, imposto: -1346756.22, outrosCustos: -369999.02, outrosRecebimentos: 32710.40, recCliente: 0, salarios: -543146.12, total: -6313715.09, period: "total" },
  { cc: "40001", financiamento: -44051.36, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -44051.36, period: "total" },
  { cc: "Outros", financiamento: -7569361.10, fornecedor: -1150000.00, imposto: -8319592.98, outrosCustos: -853266.99, outrosRecebimentos: 88227.83, recCliente: 0, salarios: -12616.19, total: -17816609.43, period: "total" },
];

export const custoCentroMacaeData: CustoCentroEntry[] = [...ccMacaeS1, ...ccMacaeOldTotal, ...ccMacaeS3, ...ccMacaeNewTotal];

// ── Tipo de Pagamento/Recebimento por Empresa ──────────────────────

// Period s1: Janeiro a 06/02
const tipoS1: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -7569361.10, fornecedor: -15440473.15, imposto: -3774752.37, outrosCustos: -4593869.90, outrosRecebimentos: 104583.03, recCliente: 29127942.05, salarios: -19486885.80, total: -21632817.24, period: "s1" },
  { company: "Mota Engil Brasil", financiamento: 26436883.05, fornecedor: -42943570.79, imposto: -2257838.35, outrosCustos: -2170625.13, outrosRecebimentos: 10426203.48, recCliente: 39804442.17, salarios: -6489091.49, total: 22806402.95, period: "s1" },
];

// Checkpoint: old total up to 20/02 (used to compute s2)
const tipoOldTotal: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -7613412.46, fornecedor: -20192719.72, imposto: -8461095.55, outrosCustos: -7031085.46, outrosRecebimentos: 120938.23, recCliente: 59745944.46, salarios: -20047627.85, total: -3479058.35, period: "__s2total" },
  { company: "Mota Engil Brasil", financiamento: 144454960.19, fornecedor: -65114214.48, imposto: -3432955.64, outrosCustos: -2635877.17, outrosRecebimentos: 10755699.71, recCliente: 160112173.64, salarios: -7395345.52, total: 236744440.74, period: "__s2total" },
];

// Period s3: 23/02 a 27/02
const tipoS3: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -1103846.72, fornecedor: -3741276.56, imposto: -1271330.30, outrosCustos: -3066785.37, outrosRecebimentos: 0, recCliente: 921561.59, salarios: -1562542.85, total: -9824220.21, period: "s3" },
  { company: "Mota Engil Brasil", financiamento: -18962582.91, fornecedor: -11729338.80, imposto: -1137920.52, outrosCustos: -534133.98, outrosRecebimentos: 5275750.17, recCliente: 18766578.25, salarios: -431060.76, total: -8752708.55, period: "s3" },
];

// New total acumulado (Jan a 27/02)
const tipoNewTotal: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -8717259.18, fornecedor: -23933996.28, imposto: -9732425.85, outrosCustos: -10097870.83, outrosRecebimentos: 120938.23, recCliente: 60667506.05, salarios: -21610170.70, total: -13303278.56, period: "total" },
  { company: "Mota Engil Brasil", financiamento: 125492377.28, fornecedor: -76943353.04, imposto: -4570876.16, outrosCustos: -3070211.39, outrosRecebimentos: 16031449.88, recCliente: 178878751.89, salarios: -7826406.28, total: 227991732.19, period: "total" },
];

export const tipoPagamentoData: TipoPagamentoEntry[] = [...tipoS1, ...tipoOldTotal, ...tipoS3, ...tipoNewTotal];

// ── Utilitário para calcular período s2 (diferença checkpoint - s1) ────

const NUMERIC_CC_KEYS = ["financiamento", "fornecedor", "imposto", "outrosCustos", "outrosRecebimentos", "recCliente", "salarios", "total"] as const;

export function computeS2<T extends Record<string, any>>(
  allData: T[],
  keyField: string,
): T[] {
  const checkpointEntries = allData.filter(d => d.period === "__s2total");
  const s1Entries = allData.filter(d => d.period === "s1");

  return checkpointEntries.map(te => {
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

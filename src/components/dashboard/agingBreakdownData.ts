// ── Aging Fornecedores por Período ──
// Gerado automaticamente a partir das planilhas Excel

export interface AgingFornecedorEntry {
  empresa: string;
  valor: number;
  aVencer: number;
  ate30: number;
  de31a60: number;
  de61a90: number;
  de91a180: number;
  de181a360: number;
  mais360: number;
}

// ── JAN ──
export const agingFornecedoresData_jan: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -24039441.29, aVencer: -31700.75, ate30: -24006568.67, de31a60: -1171.87, de61a90: 0, de91a180: 0, de181a360: 0, mais360: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -2070387.47, aVencer: -45061.01, ate30: -3091.54, de31a60: -138763.46, de61a90: -3193.15, de91a180: -567431.8, de181a360: -324718.62, mais360: -988127.89 },
  { empresa: "MEBR", valor: -4205.61, aVencer: -3217.95, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "MOTA ENGIL ENGENHARIA", valor: -16367742.65, aVencer: -12444917.52, ate30: -3873899.32, de31a60: 0, de61a90: -48447.07, de91a180: 1707.8, de181a360: -307.38, mais360: -1879.16 },
  { empresa: "MOTA-ENGIL BRASIL S/A", valor: -12303720.91, aVencer: -9957385.35, ate30: -447856.05, de31a60: -137002.0, de61a90: -98914.97, de91a180: -75156.42, de181a360: -1075277.42, mais360: -512128.7 },
  { empresa: "REDUC", valor: -80627.33, aVencer: -2046.17, ate30: -4598.09, de31a60: -1000.0, de61a90: -21.66, de91a180: 0, de181a360: 0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1049589.76, aVencer: -94686.72, ate30: -461092.53, de31a60: -2527.58, de61a90: -5908.14, de91a180: -67898.29, de181a360: -64654.35, mais360: -352822.15 }
];

export const agingFornecedoresTotals_jan: AgingFornecedorEntry = {
  empresa: "Total Geral", valor: -55915715.02, aVencer: -22579015.47, ate30: -28797106.2, de31a60: -280464.91, de61a90: -156484.99, de91a180: -708778.71, de181a360: -1465585.01, mais360: -1928279.73
};

// ── S1_FEV (02-06/02) ──
export const agingFornecedoresData_s1_fev: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -27201041.81, aVencer: -26891702.16, ate30: -308979.23, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: 0, mais360: -360.42 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -2071716.71, aVencer: -45061.01, ate30: -4420.78, de31a60: -138763.46, de61a90: -3193.15, de91a180: -567431.8, de181a360: -324718.62, mais360: -988127.89 },
  { empresa: "MEBR", valor: -4194.66, aVencer: 0, ate30: -3217.95, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: -627.24, mais360: -349.47 },
  { empresa: "MOTA ENGIL ENGENHARIA", valor: -36463137.81, aVencer: -29563668.04, ate30: -3743205.28, de31a60: 0, de61a90: -48447.07, de91a180: 1710.8, de181a360: -3096574.57, mais360: -12953.65 },
  { empresa: "MOTA-ENGIL BRASIL S/A", valor: -11577276.54, aVencer: -8899992.4, ate30: -423686.26, de31a60: -241779.71, de61a90: -136470.87, de91a180: -99982.11, de181a360: -1083836.59, mais360: -691528.6 },
  { empresa: "REDUC", valor: -81676.89, aVencer: 0, ate30: -6744.26, de31a60: -1971.22, de61a90: 0, de91a180: 0, de181a360: 0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1790952.07, aVencer: -132725.62, ate30: -594460.66, de31a60: -115420.79, de61a90: -5185.96, de91a180: -536465.95, de181a360: -63473.68, mais360: -343219.41 }
];

export const agingFornecedoresTotals_s1_fev: AgingFornecedorEntry = {
  empresa: "Total Geral", valor: -79189996.49, aVencer: -65533149.23, ate30: -5084714.42, de31a60: -497935.18, de61a90: -193297.05, de91a180: -1202169.06, de181a360: -4569230.7, mais360: -2109500.85
};

// ── S2_FEV / S3_FEV (09-20/02) ──
export const agingFornecedoresData_s2_fev: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -13297168.44, aVencer: -12470805.12, ate30: -826363.32, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: 0, mais360: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -2072531.48, aVencer: -45061.01, ate30: -5235.55, de31a60: -81718.57, de61a90: -57044.89, de91a180: -570624.95, de181a360: -316650.96, mais360: -996195.55 },
  { empresa: "MEBR", valor: -6010.48, aVencer: 0, ate30: -5022.82, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "MOTA ENGIL ENGENHARIA", valor: -9027902.78, aVencer: 0, ate30: -3696440.69, de31a60: -2181851.35, de61a90: -10994.9, de91a180: -35741.37, de181a360: -3096388.19, mais360: -6486.28 },
  { empresa: "MOTA-ENGIL BRASIL S/A", valor: -8605616.67, aVencer: -6288039.5, ate30: -295534.87, de31a60: -181243.88, de61a90: -196679.46, de91a180: -51045.11, de181a360: -1080257.91, mais360: -512815.94 },
  { empresa: "REDUC", valor: -81698.55, aVencer: 0, ate30: -6744.26, de31a60: -1971.22, de61a90: -21.66, de91a180: 0, de181a360: 0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -976886.44, aVencer: -115730.76, ate30: -66744.12, de31a60: -286567.68, de61a90: -1828.64, de91a180: -86950.75, de181a360: -73221.14, mais360: -345843.35 }
];

export const agingFornecedoresTotals_s2_fev: AgingFornecedorEntry = {
  empresa: "Total Geral", valor: -34067814.84, aVencer: -18919636.39, ate30: -4902085.63, de31a60: -2733352.7, de61a90: -266569.55, de91a180: -744362.18, de181a360: -4567145.44, mais360: -1934662.95
};

export const agingFornecedoresData_s3_fev = agingFornecedoresData_s2_fev;
export const agingFornecedoresTotals_s3_fev = agingFornecedoresTotals_s2_fev;

// ── FEV / S4_FEV (23-27/02) ──
export const agingFornecedoresData_fev: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -12527248.52, aVencer: -11706286.92, ate30: -820961.6, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: 0, mais360: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -1160740.75, aVencer: 552167.83, ate30: -13746.68, de31a60: -81370.38, de61a90: -60383.94, de91a180: -475297.25, de181a360: -140914.78, mais360: -941195.55 },
  { empresa: "MEBR", valor: -987.66, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "MOTA ENGIL ENGENHARIA", valor: -19843276.75, aVencer: -11925916.44, ate30: -5598784.15, de31a60: -2181851.35, de61a90: -49165.0, de91a180: -79186.18, de181a360: -1988.09, mais360: -6385.54 },
  { empresa: "MOTA-ENGIL BRASIL S/A", valor: -9934625.07, aVencer: -8081056.55, ate30: -171919.61, de31a60: -23776.96, de61a90: -30643.71, de91a180: -34841.63, de181a360: -1080257.91, mais360: -512128.7 },
  { empresa: "REDUC", valor: -82734.75, aVencer: -992.88, ate30: -6665.92, de31a60: -1092.88, de61a90: -1021.66, de91a180: 0, de181a360: 0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1252552.76, aVencer: -295254.46, ate30: -188123.99, de31a60: -274719.22, de61a90: -6159.47, de91a180: -58961.19, de181a360: -77860.32, mais360: -351474.11 }
];

export const agingFornecedoresTotals_fev: AgingFornecedorEntry = {
  empresa: "Total Geral", valor: -44802166.26, aVencer: -31457339.42, ate30: -6800201.95, de31a60: -2562810.79, de61a90: -147373.78, de91a180: -648286.25, de181a360: -1301648.34, mais360: -1884505.73
};

export const agingFornecedoresData_s4_fev = agingFornecedoresData_fev;
export const agingFornecedoresTotals_s4_fev = agingFornecedoresTotals_fev;

// ── S4 ──
export const agingFornecedoresData_s4: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -7926480.4, aVencer: -7926480.4, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: 0, mais360: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -1986568.97, aVencer: 0, ate30: -16469.04, de31a60: -2990.86, de61a90: -138763.46, de91a180: -98855.01, de181a360: -788295.05, mais360: -941195.55 },
  { empresa: "MEBR", valor: -987.66, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "MOTA ENGIL ENGENHARIA", valor: -39651961.53, aVencer: -28918825.61, ate30: -3851025.57, de31a60: -3691317.88, de61a90: -4411.82, de91a180: -79186.18, de181a360: -3096388.19, mais360: -10806.28 },
  { empresa: "MOTA-ENGIL BRASIL S/A", valor: -8685705.1, aVencer: -6543281.52, ate30: -317663.17, de31a60: -160695.02, de61a90: -11605.35, de91a180: -59386.19, de181a360: -122022.76, mais360: -1471051.09 },
  { empresa: "REDUC", valor: -77161.71, aVencer: 0, ate30: -1136.2, de31a60: -1071.22, de61a90: -1971.22, de91a180: -21.66, de181a360: 0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1238646.1, aVencer: -136148.08, ate30: -322506.17, de31a60: -272147.97, de61a90: -5528.5, de91a180: -43439.51, de181a360: -113032.52, mais360: -345843.35 }
];

export const agingFornecedoresTotals_s4: AgingFornecedorEntry = {
  empresa: "Total Geral", valor: -59567511.47, aVencer: -43524735.61, ate30: -4508800.15, de31a60: -4128222.95, de61a90: -162280.35, de91a180: -280888.55, de181a360: -4120365.76, mais360: -2842218.1
};

// ── S5 ──
export const agingFornecedoresData_s5: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -5357553.35, aVencer: -5357553.35, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: 0, mais360: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -1164707.43, aVencer: -884.32, ate30: 806636.82, de31a60: -3350.86, de61a90: -81718.57, de91a180: -155899.9, de181a360: -788295.05, mais360: -941195.55 },
  { empresa: "MEBR", valor: -987.66, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "MOTA ENGIL ENGENHARIA", valor: -40340418.58, aVencer: -29507966.22, ate30: -3945358.81, de31a60: -3700712.9, de61a90: 0, de91a180: -84081.18, de181a360: -3091493.19, mais360: -10806.28 },
  { empresa: "MOTA-ENGIL BRASIL S/A", valor: -8972558.43, aVencer: -6992589.58, ate30: -263501.47, de31a60: -53069.17, de61a90: -10314.01, de91a180: -60677.53, de181a360: -122027.58, mais360: -1470379.09 },
  { empresa: "REDUC", valor: -151568.91, aVencer: -100000.0, ate30: -1014.54, de31a60: -1171.22, de61a90: -1992.88, de91a180: -21.66, de181a360: 0, mais360: -47368.61 },
  { empresa: "Tracevia Brasil", valor: -1805497.1, aVencer: -243268.17, ate30: -710521.99, de31a60: -343863.06, de61a90: -5528.5, de91a180: -32259.51, de181a360: -124212.52, mais360: -345843.35 }
];

export const agingFornecedoresTotals_s5: AgingFornecedorEntry = {
  empresa: "Total Geral", valor: -57793291.46, aVencer: -42202261.64, ate30: -4113759.99, de31a60: -4102167.21, de61a90: -99553.96, de91a180: -332939.78, de181a360: -4126655.58, mais360: -2815953.3
};

// ── S6 ──
export const agingFornecedoresData_s6: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -9487441.92, aVencer: -9482667.93, ate30: -4773.99, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: 0, mais360: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -1165800.27, aVencer: -14839.52, ate30: 819499.18, de31a60: -3350.86, de61a90: -81718.57, de91a180: -152028.25, de181a360: -792166.7, mais360: -941195.55 },
  { empresa: "MEBR", valor: -75729.7, aVencer: -1804.87, ate30: -72763.44, de31a60: -173.73, de61a90: 0, de91a180: 0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "MOTA ENGIL ENGENHARIA", valor: -21695552.91, aVencer: -15086427.81, ate30: -3382351.3, de31a60: -1590376.76, de61a90: -1578854.49, de91a180: -51631.27, de181a360: 4895.0, mais360: -10806.28 },
  { empresa: "MOTA-ENGIL BRASIL S/A", valor: -7457133.98, aVencer: -5725204.0, ate30: -803.98, de31a60: -73832.23, de61a90: -5506.2, de91a180: -59380.9, de181a360: -122027.58, mais360: -1470379.09 },
  { empresa: "REDUC", valor: -177161.71, aVencer: 0, ate30: -101036.2, de31a60: -1171.22, de61a90: -1971.22, de91a180: -21.66, de181a360: 0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1469231.5, aVencer: -128880.47, ate30: -522798.73, de31a60: -38515.17, de61a90: -274607.67, de91a180: -26991.53, de181a360: -127268.64, mais360: -350169.29 }
];

export const agingFornecedoresTotals_s6: AgingFornecedorEntry = {
  empresa: "Total Geral", valor: -41528051.99, aVencer: -30439824.6, ate30: -3265028.46, de31a60: -1707419.97, de61a90: -1942658.15, de91a180: -290053.61, de181a360: -1037195.16, mais360: -2845872.04
};

// ── S7 ──
export const agingFornecedoresData_s7: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -9365005.04, aVencer: -9364113.47, ate30: -891.57, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: 0, mais360: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -1167338.51, aVencer: -1561.8, ate30: 489792.23, de31a60: -3082.36, de61a90: -81370.38, de91a180: -67244.63, de181a360: -583357.44, mais360: -920514.13 },
  { empresa: "MEBR", valor: -115608.99, aVencer: -38801.62, ate30: -75645.98, de31a60: -173.73, de61a90: 0, de91a180: 0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "MOTA ENGIL ENGENHARIA", valor: -20798249.76, aVencer: -15435502.19, ate30: -5305205.02, de31a60: 0, de61a90: 0, de91a180: -51631.27, de181a360: 4895.0, mais360: -10806.28 },
  { empresa: "MOTA-ENGIL BRASIL S/A", valor: -8280252.28, aVencer: -6209909.5, ate30: -302858.76, de31a60: -69700.25, de61a90: -18096.2, de91a180: -87280.9, de181a360: -122022.76, mais360: -1470383.91 },
  { empresa: "REDUC", valor: -177161.71, aVencer: 0, ate30: -101036.2, de31a60: -1071.22, de61a90: -1071.22, de91a180: -1021.66, de181a360: 0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1479558.26, aVencer: -446941.85, ate30: -461494.51, de31a60: -42718.06, de61a90: -26789.76, de91a180: -17971.53, de181a360: -112125.94, mais360: -371516.61 }
];

export const agingFornecedoresTotals_s7: AgingFornecedorEntry = {
  empresa: "Total Geral", valor: -41383174.55, aVencer: -31496830.43, ate30: -5757339.81, de31a60: -116745.62, de61a90: -127327.56, de91a180: -225149.99, de181a360: -813238.38, mais360: -2846542.76
};

// Março = snapshot S7
export const agingFornecedoresData_mar = agingFornecedoresData_s7;
export const agingFornecedoresTotals_mar = agingFornecedoresTotals_s7;

// ── S8 (28-31/03), S8_ABR (01-03/04) = dados reais 04/04 ──
export const agingFornecedoresData_s8: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -17894842.89, aVencer: -17307136.89, ate30: -587706.0, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: 0, mais360: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -551326.81, aVencer: -343.26, ate30: 0, de31a60: -2722.36, de61a90: -2990.86, de91a180: -88579.26, de181a360: -425110.2, mais360: -31580.87 },
  { empresa: "MEBR - Part. Consultoria", valor: -534347.37, aVencer: -529969.6, ate30: 0, de31a60: -3140.11, de61a90: -250.0, de91a180: 0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "MOTA-ENGIL BRASIL S/A", valor: -7627857.29, aVencer: -5591454.85, ate30: -87968.05, de31a60: -244787.83, de61a90: -51586.98, de91a180: -61945.47, de181a360: -119730.2, mais360: -1470383.91 },
  { empresa: "Mota Engil Engenharia", valor: -23389061.21, aVencer: -17910792.87, ate30: -5388275.88, de31a60: -32449.91, de61a90: 0, de91a180: -51631.27, de181a360: 4895.0, mais360: -10806.28 },
  { empresa: "REDUC", valor: -75375.51, aVencer: 0, ate30: -271.66, de31a60: -2042.44, de61a90: -100.0, de91a180: 0, de181a360: 0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1137462.49, aVencer: -168757.84, ate30: -412234.91, de31a60: -38748.58, de61a90: -16107.08, de91a180: -17971.53, de181a360: -112907.65, mais360: -370734.9 }
];

export const agingFornecedoresTotals_s8: AgingFornecedorEntry = {
  empresa: "Total Geral", valor: -51210273.57, aVencer: -41508455.31, ate30: -6476456.5, de31a60: -323891.23, de61a90: -71034.92, de91a180: -220127.53, de181a360: -653480.29, mais360: -1956827.79
};

export const agingFornecedoresData_s8_abr = agingFornecedoresData_s8;
export const agingFornecedoresTotals_s8_abr = agingFornecedoresTotals_s8;

// ── S9_ABR (06-10/04) = dados reais 10/04 ──
export const agingFornecedoresData_s9_abr: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -17426113.85, aVencer: -13717431.13, ate30: -3708682.72, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: 0, mais360: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -551326.81, aVencer: -343.26, ate30: 0, de31a60: -2722.36, de61a90: -2990.86, de91a180: -88579.26, de181a360: -425110.2, mais360: -31580.87 },
  { empresa: "MEBR - Part. Consultoria", valor: -534260.75, aVencer: -492712.5, ate30: -36996.75, de31a60: -3313.84, de61a90: -250.0, de91a180: 0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "MOTA-ENGIL BRASIL S/A", valor: -7670173.57, aVencer: -4177349.64, ate30: -1504525.8, de31a60: -251517.38, de61a90: -51586.98, de91a180: -61945.47, de181a360: -117228.93, mais360: -1506019.37 },
  { empresa: "Mota Engil Engenharia", valor: -20512320.23, aVencer: -12953348.04, ate30: -7468979.73, de31a60: -32449.91, de61a90: 0, de91a180: -51631.27, de181a360: 4895.0, mais360: -10806.28 },
  { empresa: "REDUC", valor: -75375.51, aVencer: 0, ate30: -271.66, de31a60: -971.22, de61a90: -1171.22, de91a180: 0, de181a360: 0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1086247.67, aVencer: -85927.08, ate30: -325036.11, de31a60: -157094.07, de61a90: -16576.33, de91a180: -17971.53, de181a360: -120458.41, mais360: -363184.14 }
];

export const agingFornecedoresTotals_s9_abr: AgingFornecedorEntry = {
  empresa: "Total Geral", valor: -47855818.39, aVencer: -31427111.65, ate30: -13044492.77, de31a60: -448068.78, de61a90: -72575.39, de91a180: -220127.53, de181a360: -658529.78, mais360: -1984912.49
};

// ABR mês completo e Total Acumulado = última semana (S9_ABR)
export const agingFornecedoresData_abr = agingFornecedoresData_s9_abr;
export const agingFornecedoresTotals_abr = agingFornecedoresTotals_s9_abr;
export const agingFornecedoresData_total = agingFornecedoresData_s9_abr;
export const agingFornecedoresTotals_total = agingFornecedoresTotals_s9_abr;



// ── Aging Clientes por Período ──

export interface AgingClienteBreakdownEntry {
  empresa: string;
  aReceber: number;
  aVencer: number;
  ate30: number;
  de31a60: number;
  de61a90: number;
  de91a180: number;
  de181a1ano: number;
  de1a2anos: number;
  de2a3anos: number;
  mais3anos: number;
}

// ── JAN ──
export const agingClientesData_jan: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", aReceber: 2576515.2, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 22267.7, de1a2anos: 315.0, de2a3anos: 2553932.5, mais3anos: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", aReceber: 13760067.91, aVencer: 0, ate30: 13760067.91, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 36979065.53, aVencer: 33486386.22, ate30: 541296.57, de31a60: 855444.73, de61a90: 62379.48, de91a180: 623646.69, de181a1ano: 307149.88, de1a2anos: 0, de2a3anos: 304801.68, mais3anos: 797960.28 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 132479722.87, aVencer: 122702178.34, ate30: 0, de31a60: 7119529.44, de61a90: 1403043.19, de91a180: 0, de181a1ano: 87644.08, de1a2anos: 622575.46, de2a3anos: 0, mais3anos: 544752.36 },
  { empresa: "REDUC", aReceber: 309375.88, aVencer: 5566.28, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 3834.42, de1a2anos: 66592.62, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "Tracevia Brasil", aReceber: 1805146.57, aVencer: 183905.15, ate30: 595105.14, de31a60: 0, de61a90: 971.82, de91a180: 62583.62, de181a1ano: 99241.14, de1a2anos: 182350.54, de2a3anos: 491363.17, mais3anos: 189625.99 }
];

export const agingClientesTotals_jan = {
  empresa: "Total Geral", aReceber: 187909893.96, aVencer: 156378035.99, ate30: 14896469.62, de31a60: 7974974.17, de61a90: 1466394.49, de91a180: 686230.31, de181a1ano: 520137.22, de1a2anos: 871833.62, de2a3anos: 3460995.64, mais3anos: 1654822.9
};

// ── S1_FEV (02-06/02) ──
export const agingClientesData_s1_fev: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", aReceber: 7636.0, aVencer: 7636.0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", aReceber: 26284602.92, aVencer: 14524602.92, ate30: 0, de31a60: 11760000.0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 36622851.46, aVencer: 34287185.37, ate30: 386852.31, de31a60: 498317.28, de61a90: 29003.93, de91a180: 127419.03, de181a1ano: 191311.58, de1a2anos: 0, de2a3anos: 304801.68, mais3anos: 797960.28 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 24444821.4, aVencer: 23189849.5, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87644.08, de1a2anos: 622575.46, de2a3anos: 0, mais3anos: 544752.36 },
  { empresa: "REDUC", aReceber: 309615.88, aVencer: 5806.28, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "Tracevia Brasil", aReceber: 1916935.56, aVencer: 890799.28, ate30: 0, de31a60: 0, de61a90: 971.82, de91a180: 62583.62, de181a1ano: 99241.14, de1a2anos: 182350.54, de2a3anos: 491363.15, mais3anos: 189626.01 }
];

export const agingClientesTotals_s1_fev = {
  empresa: "Total Geral", aReceber: 89586463.22, aVencer: 72905879.35, ate30: 386852.31, de31a60: 12258317.28, de61a90: 29975.75, de91a180: 190002.65, de181a1ano: 381160.98, de1a2anos: 872388.86, de2a3anos: 907063.12, mais3anos: 1654822.92
};

// ── S2_FEV / S3_FEV (09-20/02) ──
export const agingClientesData_s2_fev: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", aReceber: 7636.0, aVencer: 7636.0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", aReceber: 26284602.92, aVencer: 14524602.92, ate30: 0, de31a60: 11760000.0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 36622851.46, aVencer: 34040142.96, ate30: 479684.75, de31a60: 432986.73, de61a90: 246718.32, de91a180: 116362.16, de181a1ano: 204194.58, de1a2anos: 0, de2a3anos: 304801.68, mais3anos: 797960.28 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 24444821.4, aVencer: 23189849.5, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87644.08, de1a2anos: 622575.46, de2a3anos: 0, mais3anos: 544752.36 },
  { empresa: "REDUC", aReceber: 309615.88, aVencer: 1458.0, ate30: 4348.28, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "Tracevia Brasil", aReceber: 1916935.56, aVencer: 8096.49, ate30: 882702.79, de31a60: 0, de61a90: 0, de91a180: 46857.92, de181a1ano: 101685.82, de1a2anos: 196603.38, de2a3anos: 491363.15, mais3anos: 189626.01 }
];

export const agingClientesTotals_s2_fev = {
  empresa: "Total Geral", aReceber: 89586463.22, aVencer: 71771785.87, ate30: 1366735.82, de31a60: 12192986.73, de61a90: 246718.32, de91a180: 163220.08, de181a1ano: 396488.66, de1a2anos: 886641.7, de2a3anos: 907063.12, mais3anos: 1654822.92
};

export const agingClientesData_s3_fev = agingClientesData_s2_fev;
export const agingClientesTotals_s3_fev = agingClientesTotals_s2_fev;

// ── FEV / S4_FEV (23-27/02) ──
export const agingClientesData_fev: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", aReceber: 7636.0, aVencer: 7636.0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", aReceber: 26284602.92, aVencer: 14524602.92, ate30: 0, de31a60: 11760000.0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 36622851.46, aVencer: 33533600.91, ate30: 984098.26, de31a60: 435115.27, de61a90: 219540.52, de91a180: 143539.96, de181a1ano: 204194.58, de1a2anos: 0, de2a3anos: 304801.68, mais3anos: 797960.28 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 24444821.4, aVencer: 23189849.5, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87644.08, de1a2anos: 622575.46, de2a3anos: 0, mais3anos: 544752.36 },
  { empresa: "REDUC", aReceber: 309615.88, aVencer: 240.0, ate30: 5566.28, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "Tracevia Brasil", aReceber: 1916935.56, aVencer: 8096.49, ate30: 882702.79, de31a60: 0, de61a90: 0, de91a180: 46857.92, de181a1ano: 101685.82, de1a2anos: 196603.38, de2a3anos: 491363.15, mais3anos: 189626.01 }
];

export const agingClientesTotals_fev = {
  empresa: "Total Geral", aReceber: 89586463.22, aVencer: 71264025.82, ate30: 1872367.33, de31a60: 12195115.27, de61a90: 219540.52, de91a180: 190397.88, de181a1ano: 396488.66, de1a2anos: 886641.7, de2a3anos: 907063.12, mais3anos: 1654822.92
};

export const agingClientesData_s4_fev = agingClientesData_fev;
export const agingClientesTotals_s4_fev = agingClientesTotals_fev;


// ── S4 ──
export const agingClientesData_s4: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", aReceber: 7636.0, aVencer: 0, ate30: 7636.0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", aReceber: 26284602.92, aVencer: 11760000.0, ate30: 2764602.92, de31a60: 0, de61a90: 12209764.6, de91a180: -449764.6, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 37807500.8, aVencer: 33821435.79, ate30: 1089488.37, de31a60: 273192.52, de61a90: 440436.96, de91a180: 143539.96, de181a1ano: 155128.44, de1a2anos: 0, de2a3anos: 302922.53, mais3anos: 1581356.23 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 24554990.95, aVencer: 6410511.91, ate30: 16804838.69, de31a60: -847226.16, de61a90: 0, de91a180: 0, de181a1ano: 87644.08, de1a2anos: 298764.82, de2a3anos: 416661.07, mais3anos: 1383796.54 },
  { empresa: "REDUC", aReceber: 309615.88, aVencer: 0, ate30: 5806.28, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "Tracevia Brasil", aReceber: 1915963.74, aVencer: 8096.49, ate30: 882702.79, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 133682.81, de1a2anos: 210492.49, de2a3anos: 491363.15, mais3anos: 189626.01 }
];

export const agingClientesTotals_s4 = {
  empresa: "Total Geral", aReceber: 90880310.29, aVencer: 52000044.19, ate30: 21555075.05, de31a60: -574033.64, de61a90: 12650201.56, de91a180: -306224.64, de181a1ano: 379419.51, de1a2anos: 576720.17, de2a3anos: 1321845.04, mais3anos: 3277263.05
};

// ── S5 ──
export const agingClientesData_s5: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", aReceber: 84160.0, aVencer: 75620.0, ate30: 8540.0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", aReceber: 27097858.01, aVencer: 813255.09, ate30: 14524602.92, de31a60: 0, de61a90: 12209764.6, de91a180: -449764.6, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 69740595.31, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 7188.0, de91a180: 49285.97, de181a1ano: 13182960.07, de1a2anos: 55835858.49, de2a3anos: 657626.13, mais3anos: 7676.65 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 139260847.26, aVencer: 136640126.0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87644.08, de1a2anos: 732619.57, de2a3anos: 416661.07, mais3anos: 1383796.54 },
  { empresa: "REDUC", aReceber: 309615.88, aVencer: 0, ate30: 5806.28, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "Tracevia Brasil", aReceber: 1917821.38, aVencer: 0, ate30: 892656.92, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 133682.81, de1a2anos: 210492.49, de2a3anos: 491363.15, mais3anos: 189626.01 }
];

export const agingClientesTotals_s5 = {
  empresa: "Total Geral", aReceber: 238410897.84, aVencer: 137529001.09, ate30: 15431606.12, de31a60: 0, de61a90: 12216952.6, de91a180: -400478.63, de181a1ano: 13407251.14, de1a2anos: 56846433.41, de2a3anos: 1676548.64, mais3anos: 1703583.47
};

// ── S6 ──
export const agingClientesData_s6: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", aReceber: 46384.0, aVencer: 7064.0, ate30: 39320.0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", aReceber: 27097858.01, aVencer: 813255.09, ate30: 14524602.92, de31a60: 0, de61a90: 11760000.0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 72046622.29, aVencer: 68670551.6, ate30: 516934.02, de31a60: 327555.16, de61a90: 313598.04, de91a180: 189580.12, de181a1ano: 142245.44, de1a2anos: 0, de2a3anos: 304801.68, mais3anos: 1581356.23 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 136656546.49, aVencer: 134035825.23, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87644.08, de1a2anos: 732619.57, de2a3anos: 416661.07, mais3anos: 1383796.54 },
  { empresa: "REDUC", aReceber: 309615.88, aVencer: 0, ate30: 1458.0, de31a60: 4348.28, de61a90: 0, de91a180: 0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "Tracevia Brasil", aReceber: 2337515.98, aVencer: 456330.99, ate30: 857878.17, de31a60: -1857.64, de61a90: 0, de91a180: 0, de181a1ano: 133682.81, de1a2anos: 210492.49, de2a3anos: 491363.15, mais3anos: 189626.01 }
];

export const agingClientesTotals_s6 = {
  empresa: "Total Geral", aReceber: 238494542.65, aVencer: 203983026.91, ate30: 15940193.11, de31a60: 330045.8, de61a90: 12073598.04, de91a180: 189580.12, de181a1ano: 366536.51, de1a2anos: 1010574.92, de2a3anos: 1323724.19, mais3anos: 3277263.05
};

// ── S7 ──
export const agingClientesData_s7: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", aReceber: 26452.0, aVencer: 7064.0, ate30: 19388.0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", aReceber: 27097858.01, aVencer: 813255.09, ate30: 14524602.92, de31a60: 0, de61a90: 11760000.0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 48128724.34, aVencer: 44902380.26, ate30: 351720.97, de31a60: 437329.18, de61a90: 219310.46, de91a180: 189580.12, de181a1ano: 142245.44, de1a2anos: 0, de2a3anos: 304801.68, mais3anos: 1581356.23 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 53287104.28, aVencer: 50666383.02, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87644.08, de1a2anos: 732619.57, de2a3anos: 416661.07, mais3anos: 1383796.54 },
  { empresa: "REDUC", aReceber: 309615.88, aVencer: 0, ate30: 240.0, de31a60: 5566.28, de61a90: 0, de91a180: 0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "Tracevia Brasil", aReceber: 2337515.98, aVencer: 456330.99, ate30: 857878.17, de31a60: -1857.64, de61a90: 0, de91a180: 0, de181a1ano: 133682.81, de1a2anos: 210492.49, de2a3anos: 491363.15, mais3anos: 189626.01 }
];

export const agingClientesTotals_s7 = {
  empresa: "Total Geral", aReceber: 131187270.49, aVencer: 96845413.36, ate30: 15753830.06, de31a60: 441037.82, de61a90: 11979310.46, de91a180: 189580.12, de181a1ano: 366536.51, de1a2anos: 1010574.92, de2a3anos: 1323724.19, mais3anos: 3277263.05
};

// Março = snapshot S7
export const agingClientesData_mar = agingClientesData_s7;
export const agingClientesTotals_mar = agingClientesTotals_s7;

// ── Aging Clientes S8/S8_ABR = dados reais 04/04 ──
export const agingClientesData_s8: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", aReceber: 16304.0, aVencer: 9240.0, ate30: 7064.0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", aReceber: 27097858.01, aVencer: 0, ate30: 12573255.09, de31a60: 2764602.92, de61a90: 0, de91a180: 11760000.0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 47592555.74, aVencer: 41966134.14, ate30: 2695665.1, de31a60: 466084.49, de61a90: 145646.54, de91a180: 294935.51, de181a1ano: 137932.05, de1a2anos: 0, de2a3anos: 304801.68, mais3anos: 1581356.23 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 100232897.12, aVencer: 97612175.86, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87644.08, de1a2anos: 732619.57, de2a3anos: 416661.07, mais3anos: 1383796.54 },
  { empresa: "REDUC", aReceber: 305267.6, aVencer: 0, ate30: 240.0, de31a60: 1218.0, de61a90: 0, de91a180: 0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "Tracevia Brasil", aReceber: 2411202.46, aVencer: 530017.47, ate30: 857878.17, de31a60: -1857.64, de61a90: 0, de91a180: 0, de181a1ano: 133682.81, de1a2anos: 202383.78, de2a3anos: 499471.86, mais3anos: 189626.01 }
];

export const agingClientesTotals_s8 = {
  empresa: "Total Geral", aReceber: 177656084.93, aVencer: 140117567.47, ate30: 16134102.36, de31a60: 3230047.77, de61a90: 145646.54, de91a180: 12054935.51, de181a1ano: 362223.12, de1a2anos: 1002466.21, de2a3anos: 1331832.9, mais3anos: 3277263.05
};

export const agingClientesData_s8_abr = agingClientesData_s8;
export const agingClientesTotals_s8_abr = agingClientesTotals_s8;

// ── S9_ABR (06-10/04) = dados reais 10/04 ──
export const agingClientesData_s9_abr: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", aReceber: 236138.0, aVencer: 226898.0, ate30: 9240.0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", aReceber: 27097858.01, aVencer: 0, ate30: 813255.09, de31a60: 14524602.92, de61a90: 0, de91a180: 11760000.0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 65017485.43, aVencer: 59237149.26, ate30: 2893643.83, de31a60: 330738.22, de61a90: 191168.21, de91a180: 324488.18, de181a1ano: 154137.82, de1a2anos: 0, de2a3anos: 304801.68, mais3anos: 1581358.23 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 52741056.86, aVencer: 3262186.84, ate30: 46945792.84, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 732619.57, de2a3anos: 416661.07, mais3anos: 1383796.54 },
  { empresa: "Tracevia Brasil", aReceber: 2412174.28, aVencer: 456330.99, ate30: 931564.65, de31a60: -1857.64, de61a90: 0, de91a180: 971.82, de181a1ano: 122295.18, de1a2anos: 217375.27, de2a3anos: 495868.0, mais3anos: 189626.01 }
];

export const agingClientesTotals_s9_abr = {
  empresa: "Total Geral", aReceber: 147504712.58, aVencer: 63182565.09, ate30: 51593496.41, de31a60: 14853483.5, de61a90: 191168.21, de91a180: 12085460.0, de181a1ano: 276433.0, de1a2anos: 949994.84, de2a3anos: 1217330.75, mais3anos: 3154780.78
};

// ABR mês completo e Total Acumulado = última semana (S9_ABR)
export const agingClientesData_abr = agingClientesData_s9_abr;
export const agingClientesTotals_abr = agingClientesTotals_s9_abr;
export const agingClientesData_total = agingClientesData_s9_abr;
export const agingClientesTotals_total = agingClientesTotals_s9_abr;


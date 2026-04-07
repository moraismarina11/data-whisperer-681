// ── Aging Fornecedores por Período ──
// Gerado a partir das abas Aging Fornecedores_DDMM
 
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
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -27201041.81, aVencer: -26891702.16, ate30: -308979.23, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a360: 0.0, mais360: -360.42 },
  { empresa: "MEBR - Part. Consultoria", valor: -4194.66, aVencer: 0.0, ate30: -3217.95, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a360: -627.24, mais360: -349.47 },
  { empresa: "MEFB", valor: -2071716.71, aVencer: -45061.01, ate30: -4420.78, de31a60: -138763.46, de61a90: -3193.15, de91a180: -567431.8, de181a360: -324718.62, mais360: -988127.89 },
  { empresa: "MOTA ENGIL - MACAE", valor: -36463137.81, aVencer: -29563668.04, ate30: -3743205.28, de31a60: 0.0, de61a90: -48447.07, de91a180: 1710.8, de181a360: -3096574.57, mais360: -12953.65 },
  { empresa: "Mota-Engil Brasil", valor: -11591964.54, aVencer: -8914844.2, ate30: -423522.46, de31a60: -241779.71, de61a90: -136470.87, de91a180: -99982.11, de181a360: -1083836.59, mais360: -691528.6 },
  { empresa: "REDUC", valor: -81676.89, aVencer: 0.0, ate30: -6744.26, de31a60: -1971.22, de61a90: 0.0, de91a180: 0.0, de181a360: 0.0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1790952.07, aVencer: -135416.07, ate30: -591770.21, de31a60: -115420.79, de61a90: -5185.96, de91a180: -536465.95, de181a360: -63473.68, mais360: -343219.41 },
];
 
export const agingFornecedoresTotals_jan: AgingFornecedorEntry = {
  empresa: "Total Geral",
  valor: -79204684.49, aVencer: -65550691.48, ate30: -5081860.17,
  de31a60: -497935.18, de61a90: -193297.05, de91a180: -1202169.06,
  de181a360: -4569230.7, mais360: -2109500.85,
};
 
// ── FEV ──
export const agingFornecedoresData_fev: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -11467811.59, aVencer: -346979.61, ate30: -10466065.05, de31a60: 0.0, de61a90: -654766.93, de91a180: 0.0, de181a360: 0.0, mais360: 0.0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -1970099.93, aVencer: 0.0, ate30: -182815.36, de31a60: -84563.53, de61a90: -60383.94, de91a180: -496454.69, de181a360: -183422.85, mais360: -962459.56 },
  { empresa: "MEBR - Part. Consultoria", valor: -987.66, aVencer: 0.0, ate30: 0.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "Mota Engil Engenharia", valor: -39462396.26, aVencer: -28974708.54, ate30: -5151905.63, de31a60: -2181851.35, de61a90: 0.0, de91a180: -46736.27, de181a360: -3096388.19, mais360: -10806.28 },
  { empresa: "Mota-Engil Brasil", valor: -9331407.41, aVencer: -663682.34, ate30: -3344409.08, de31a60: -431998.21, de61a90: -8488.96, de91a180: -490619.0, de181a360: -3832127.77, mais360: -560082.05 },
  { empresa: "REDUC", valor: -77161.71, aVencer: -992.88, ate30: -1092.88, de31a60: -1092.88, de61a90: -1021.66, de91a180: 0.0, de181a360: 0.0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1414895.98, aVencer: -278212.4, ate30: -319261.82, de31a60: -282746.02, de61a90: 0.0, de91a180: -61937.65, de181a360: -78893.97, mais360: -393844.12 },
];
 
export const agingFornecedoresTotals_fev: AgingFornecedorEntry = {
  empresa: "Total Geral",
  valor: -63724760.54, aVencer: -30264575.77, ate30: -19465549.82,
  de31a60: -2982251.99, de61a90: -724661.49, de91a180: -1095747.61,
  de181a360: -7191460.02, mais360: -2000513.84,
};
 
// ── S4 ──
export const agingFornecedoresData_s4: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -7926480.4, aVencer: -7926480.4, ate30: 0.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a360: 0.0, mais360: 0.0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -1986568.97, aVencer: 0.0, ate30: -16469.04, de31a60: -2990.86, de61a90: -138763.46, de91a180: -98855.01, de181a360: -788295.05, mais360: -941195.55 },
  { empresa: "MEBR - Part. Consultoria", valor: -987.66, aVencer: 0.0, ate30: 0.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "Mota Engil Engenharia", valor: -39651961.53, aVencer: -28918825.61, ate30: -3851025.57, de31a60: -3691317.88, de61a90: -4411.82, de91a180: -79186.18, de181a360: -3096388.19, mais360: -10806.28 },
  { empresa: "Mota-Engil Brasil", valor: -8685705.1, aVencer: -6551361.01, ate30: -309583.68, de31a60: -160695.02, de61a90: -11605.35, de91a180: -59386.19, de181a360: -122022.76, mais360: -1471051.09 },
  { empresa: "REDUC", valor: -77161.71, aVencer: 0.0, ate30: -1136.2, de31a60: -1071.22, de61a90: -1971.22, de91a180: -21.66, de181a360: 0.0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1238646.1, aVencer: -222723.21, ate30: -235931.04, de31a60: -272147.97, de61a90: -5528.5, de91a180: -43439.51, de181a360: -113032.52, mais360: -345843.35 },
];
 
export const agingFornecedoresTotals_s4: AgingFornecedorEntry = {
  empresa: "Total Geral",
  valor: -59567511.47, aVencer: -43619390.23, ate30: -4414145.53,
  de31a60: -4128222.95, de61a90: -162280.35, de91a180: -280888.55,
  de181a360: -4120365.76, mais360: -2842218.1,
};
 
// ── S5 ──
export const agingFornecedoresData_s5: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -5357553.35, aVencer: -5357553.35, ate30: 0.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a360: 0.0, mais360: 0.0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -1164707.43, aVencer: -884.32, ate30: 806636.82, de31a60: -3350.86, de61a90: -81718.57, de91a180: -155899.9, de181a360: -788295.05, mais360: -941195.55 },
  { empresa: "MEBR - Part. Consultoria", valor: -987.66, aVencer: 0.0, ate30: 0.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "Mota Engil Engenharia", valor: -40340418.58, aVencer: -29524700.19, ate30: -3928624.84, de31a60: -3700712.9, de61a90: 0.0, de91a180: -84081.18, de181a360: -3091493.19, mais360: -10806.28 },
  { empresa: "Mota-Engil Brasil", valor: -8972558.43, aVencer: -7225848.06, ate30: -30242.99, de31a60: -53069.17, de61a90: -10314.01, de91a180: -60677.53, de181a360: -122027.58, mais360: -1470379.09 },
  { empresa: "REDUC", valor: -151568.91, aVencer: -100000.0, ate30: -1014.54, de31a60: -1171.22, de61a90: -1992.88, de91a180: -21.66, de181a360: 0.0, mais360: -47368.61 },
  { empresa: "Tracevia Brasil", valor: -1805497.1, aVencer: -248371.2, ate30: -705418.96, de31a60: -343863.06, de61a90: -5528.5, de91a180: -32259.51, de181a360: -124212.52, mais360: -345843.35 },
];
 
export const agingFornecedoresTotals_s5: AgingFornecedorEntry = {
  empresa: "Total Geral",
  valor: -57793291.46, aVencer: -42457357.12, ate30: -3858664.51,
  de31a60: -4102167.21, de61a90: -99553.96, de91a180: -332939.78,
  de181a360: -4126655.58, mais360: -2815953.3,
};
 
// ── S6 ──
export const agingFornecedoresData_s6: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -9487441.92, aVencer: -9487441.92, ate30: 0.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a360: 0.0, mais360: 0.0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -1165800.27, aVencer: -14839.52, ate30: 819499.18, de31a60: -3350.86, de61a90: -81718.57, de91a180: -152028.25, de181a360: -792166.7, mais360: -941195.55 },
  { empresa: "MEBR - Part. Consultoria", valor: -75729.7, aVencer: -71217.73, ate30: -3350.58, de31a60: -173.73, de61a90: 0.0, de91a180: 0.0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "Mota Engil Engenharia", valor: -21695552.91, aVencer: -15086427.81, ate30: -3382351.3, de31a60: -1590376.76, de61a90: -1578854.49, de91a180: -51631.27, de181a360: 4895.0, mais360: -10806.28 },
  { empresa: "Mota-Engil Brasil", valor: -7457133.98, aVencer: -5725204.0, ate30: -803.98, de31a60: -73832.23, de61a90: -5506.2, de91a180: -59380.9, de181a360: -122027.58, mais360: -1470379.09 },
  { empresa: "REDUC", valor: -177161.71, aVencer: -100000.0, ate30: -1036.2, de31a60: -1171.22, de61a90: -1971.22, de91a180: -21.66, de181a360: 0.0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1469231.5, aVencer: -141893.53, ate30: -509785.67, de31a60: -38515.17, de61a90: -274607.67, de91a180: -26991.53, de181a360: -127268.64, mais360: -350169.29 },
];
 
export const agingFornecedoresTotals_s6: AgingFornecedorEntry = {
  empresa: "Total Geral",
  valor: -41528051.99, aVencer: -30627024.51, ate30: -3077828.55,
  de31a60: -1707419.97, de61a90: -1942658.15, de91a180: -290053.61,
  de181a360: -1037195.16, mais360: -2845872.04,
};
 
// ── S7 ──
export const agingFornecedoresData_s7: AgingFornecedorEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -9365005.04, aVencer: -9364113.47, ate30: -891.57, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a360: 0.0, mais360: 0.0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -1167338.51, aVencer: -1561.8, ate30: 489792.23, de31a60: -3082.36, de61a90: -81370.38, de91a180: -67244.63, de181a360: -583357.44, mais360: -920514.13 },
  { empresa: "MEBR - Part. Consultoria", valor: -115608.99, aVencer: -38801.62, ate30: -75645.98, de31a60: -173.73, de61a90: 0.0, de91a180: 0.0, de181a360: -627.24, mais360: -360.42 },
  { empresa: "Mota Engil Engenharia", valor: -20798249.76, aVencer: -16693122.52, ate30: -4047584.69, de31a60: 0.0, de61a90: 0.0, de91a180: -51631.27, de181a360: 4895.0, mais360: -10806.28 },
  { empresa: "Mota-Engil Brasil", valor: -8280252.28, aVencer: -6209909.5, ate30: -302858.76, de31a60: -69700.25, de61a90: -18096.2, de91a180: -87280.9, de181a360: -122022.76, mais360: -1470383.91 },
  { empresa: "REDUC", valor: -177161.71, aVencer: 0.0, ate30: -101036.2, de31a60: -1071.22, de61a90: -1071.22, de91a180: -1021.66, de181a360: 0.0, mais360: -72961.41 },
  { empresa: "Tracevia Brasil", valor: -1479558.26, aVencer: -449602.93, ate30: -458833.43, de31a60: -42718.06, de61a90: -26789.76, de91a180: -17971.53, de181a360: -112125.94, mais360: -371516.61 },
];
 
export const agingFornecedoresTotals_s7: AgingFornecedorEntry = {
  empresa: "Total Geral",
  valor: -41383174.55, aVencer: -32757111.84, ate30: -4497058.4,
  de31a60: -116745.62, de61a90: -127327.56, de91a180: -225149.99,
  de181a360: -813238.38, mais360: -2846542.76,
};
 
// Março e Total Acumulado = snapshot S7
export const agingFornecedoresData_mar = agingFornecedoresData_s7;
export const agingFornecedoresTotals_mar = agingFornecedoresTotals_s7;
export const agingFornecedoresData_total = agingFornecedoresData_s7;
export const agingFornecedoresTotals_total = agingFornecedoresTotals_s7;

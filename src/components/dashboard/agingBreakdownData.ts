// ── Aging Fornecedores por Período ──
// Gerado automaticamente a partir das abas Aging Fornecedores_DDMM
 
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
  { empresa: "ME BRASIL", aReceber: 189112306.83, aVencer: 34293877.29, ate30: 116623083.22, de31a60: 70124.98, de61a90: 8650122.01, de91a180: 16232.5, de181a1ano: 2752488.01, de1a2anos: 16432760.76, de2a3anos: 8874380.58, mais3anos: 1399237.48 },
  { empresa: "MOTA ENGIL MACAE", aReceber: 53604810.64, aVencer: 34036442.37, ate30: 414306.29, de31a60: 1371473.41, de61a90: 1089463.74, de91a180: 1690025.34, de181a1ano: 3214317.71, de1a2anos: 2988058.03, de2a3anos: 7219365.52, mais3anos: 1581358.23 },
  { empresa: "MOTA FUNDAÇOES", aReceber: 30298879.08, aVencer: 16538811.17, ate30: 0.0, de31a60: 14209832.51, de61a90: 0.0, de91a180: -449764.6, de181a1ano: 0.0, de1a2anos: 0.0, de2a3anos: 0.0, mais3anos: 0.0 },
  { empresa: "REDUC", aReceber: 309715.88, aVencer: 5806.28, ate30: 100.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "TRACEVIA", aReceber: 2561884.47, aVencer: 894212.91, ate30: 626942.44, de31a60: 4019.25, de61a90: 971.82, de91a180: 62583.62, de181a1ano: 99241.14, de1a2anos: 192924.13, de2a3anos: 491363.15, mais3anos: 189626.01 },
];

export const agingClientesTotals_jan: AgingClienteBreakdownEntry = {
  empresa: "Total Geral", aReceber: 275887596.9, aVencer: 85769150.02, ate30: 117664431.95, de31a60: 15655450.15, de61a90: 9740557.57, de91a180: 1319076.86, de181a1ano: 6069011.04, de1a2anos: 19681205.78, de2a3anos: 16696007.54, mais3anos: 3292705.99
};

// ── FEV ──
export const agingClientesData_fev: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSORCIO ALSUB", aReceber: 26076.0, aVencer: 7912.0, ate30: 18164.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 0.0, de1a2anos: 0.0, de2a3anos: 0.0, mais3anos: 0.0 },
  { empresa: "MOTA ENGIL BRASIL S/A", aReceber: 41408453.09, aVencer: 39221586.58, ate30: 0.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 87644.08, de1a2anos: 298764.82, de2a3anos: 416661.07, mais3anos: 1383796.54 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 36459217.0, aVencer: 31817220.42, ate30: 1792689.85, de31a60: 461469.89, de61a90: 150837.27, de91a180: 143539.96, de181a1ano: 209180.85, de1a2anos: 0.0, de2a3anos: 302922.53, mais3anos: 1581356.23 },
  { empresa: "MOTA ENGIL FUNDAÇÕES", aReceber: 30298879.08, aVencer: 16538811.17, ate30: 0.0, de31a60: 13760067.91, de61a90: 0.0, de91a180: 0.0, de181a1ano: 0.0, de1a2anos: 0.0, de2a3anos: 0.0, mais3anos: 0.0 },
  { empresa: "REDUC", aReceber: 309615.88, aVencer: 240.0, ate30: 5566.28, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "TRACEVIA", aReceber: 2637816.91, aVencer: 718404.25, ate30: 882702.79, de31a60: 0.0, de61a90: 0.0, de91a180: 46857.92, de181a1ano: 101685.82, de1a2anos: 207176.97, de2a3anos: 491363.15, mais3anos: 189626.01 },
];

export const agingClientesTotals_fev: AgingClienteBreakdownEntry = {
  empresa: "Total Geral", aReceber: 111140057.96, aVencer: 88304174.42, ate30: 2699122.92, de31a60: 14221537.8, de61a90: 150837.27, de91a180: 190397.88, de181a1ano: 401474.93, de1a2anos: 573404.65, de2a3anos: 1321845.04, mais3anos: 3277263.05
};

// ── S4 ──
export const agingClientesData_s4: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSORCIO ALSUB", aReceber: 7636.0, aVencer: 0.0, ate30: 7636.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 0.0, de1a2anos: 0.0, de2a3anos: 0.0, mais3anos: 0.0 },
  { empresa: "MOTA ENGIL BRASIL S/A", aReceber: 24554990.95, aVencer: 6410511.91, ate30: 16804838.69, de31a60: -847226.16, de61a90: 0.0, de91a180: 0.0, de181a1ano: 87644.08, de1a2anos: 298764.82, de2a3anos: 416661.07, mais3anos: 1383796.54 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 37807500.8, aVencer: 33821435.79, ate30: 1089488.37, de31a60: 273192.52, de61a90: 440436.96, de91a180: 143539.96, de181a1ano: 155128.44, de1a2anos: 0.0, de2a3anos: 302922.53, mais3anos: 1581356.23 },
  { empresa: "MOTA ENGIL FUNDAÇÕES", aReceber: 26284602.92, aVencer: 11760000.0, ate30: 2764602.92, de31a60: 0.0, de61a90: 12209764.6, de91a180: -449764.6, de181a1ano: 0.0, de1a2anos: 0.0, de2a3anos: 0.0, mais3anos: 0.0 },
  { empresa: "REDUC", aReceber: 309615.88, aVencer: 0.0, ate30: 5806.28, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "TRACEVIA", aReceber: 1915963.74, aVencer: 8096.49, ate30: 882702.79, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 133682.81, de1a2anos: 210492.49, de2a3anos: 491363.15, mais3anos: 189626.01 },
];

export const agingClientesTotals_s4: AgingClienteBreakdownEntry = {
  empresa: "Total Geral", aReceber: 90880310.29, aVencer: 52000044.19, ate30: 21555075.05, de31a60: -574033.64, de61a90: 12650201.56, de91a180: -306224.64, de181a1ano: 379419.51, de1a2anos: 576720.17, de2a3anos: 1321845.04, mais3anos: 3277263.05
};

// ── S5 ──
export const agingClientesData_s5: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ALSUB", aReceber: 84160.0, aVencer: 75620.0, ate30: 8540.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 0.0, de1a2anos: 0.0, de2a3anos: 0.0, mais3anos: 0.0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 69740595.31, aVencer: 0.0, ate30: 0.0, de31a60: 0.0, de61a90: 7188.0, de91a180: 49285.97, de181a1ano: 13182960.07, de1a2anos: 55835858.49, de2a3anos: 657626.13, mais3anos: 7676.65 },
  { empresa: "MOTA ENGIL FUNDAÇÕES", aReceber: 27097858.01, aVencer: 813255.09, ate30: 14524602.92, de31a60: 0.0, de61a90: 12209764.6, de91a180: -449764.6, de181a1ano: 0.0, de1a2anos: 0.0, de2a3anos: 0.0, mais3anos: 0.0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 139260847.26, aVencer: 136640126.0, ate30: 0.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 87644.08, de1a2anos: 732619.57, de2a3anos: 416661.07, mais3anos: 1383796.54 },
  { empresa: "REDUC", aReceber: 309615.88, aVencer: 0.0, ate30: 5806.28, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "TRACEVIA", aReceber: 1917821.38, aVencer: 0.0, ate30: 892656.92, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 133682.81, de1a2anos: 210492.49, de2a3anos: 491363.15, mais3anos: 189626.01 },
];

export const agingClientesTotals_s5: AgingClienteBreakdownEntry = {
  empresa: "Total Geral", aReceber: 238410897.84, aVencer: 137529001.09, ate30: 15431606.12, de31a60: 0.0, de61a90: 12216952.6, de91a180: -400478.63, de181a1ano: 13407251.14, de1a2anos: 56846433.41, de2a3anos: 1676548.64, mais3anos: 1703583.47
};

// ── S6 ──
export const agingClientesData_s6: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", aReceber: 46384.0, aVencer: 7064.0, ate30: 39320.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 0.0, de1a2anos: 0.0, de2a3anos: 0.0, mais3anos: 0.0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", aReceber: 27097858.01, aVencer: 813255.09, ate30: 14524602.92, de31a60: 0.0, de61a90: 11760000.0, de91a180: 0.0, de181a1ano: 0.0, de1a2anos: 0.0, de2a3anos: 0.0, mais3anos: 0.0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 72046622.29, aVencer: 68670551.6, ate30: 516934.02, de31a60: 327555.16, de61a90: 313598.04, de91a180: 189580.12, de181a1ano: 142245.44, de1a2anos: 0.0, de2a3anos: 304801.68, mais3anos: 1581356.23 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 136656546.49, aVencer: 134035825.23, ate30: 0.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 87644.08, de1a2anos: 732619.57, de2a3anos: 416661.07, mais3anos: 1383796.54 },
  { empresa: "REDUC", aReceber: 309615.88, aVencer: 0.0, ate30: 1458.0, de31a60: 4348.28, de61a90: 0.0, de91a180: 0.0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "Tracevia Brasil", aReceber: 2337515.98, aVencer: 456330.99, ate30: 857878.17, de31a60: -1857.64, de61a90: 0.0, de91a180: 0.0, de181a1ano: 133682.81, de1a2anos: 210492.49, de2a3anos: 491363.15, mais3anos: 189626.01 },
];

export const agingClientesTotals_s6: AgingClienteBreakdownEntry = {
  empresa: "Total Geral", aReceber: 238494542.65, aVencer: 203983026.91, ate30: 15940193.11, de31a60: 330045.8, de61a90: 12073598.04, de91a180: 189580.12, de181a1ano: 366536.51, de1a2anos: 1010574.92, de2a3anos: 1323724.19, mais3anos: 3277263.05
};

// ── S7 ──
export const agingClientesData_s7: AgingClienteBreakdownEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", aReceber: 26452.0, aVencer: 7064.0, ate30: 19388.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 0.0, de1a2anos: 0.0, de2a3anos: 0.0, mais3anos: 0.0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", aReceber: 27097858.01, aVencer: 813255.09, ate30: 14524602.92, de31a60: 0.0, de61a90: 11760000.0, de91a180: 0.0, de181a1ano: 0.0, de1a2anos: 0.0, de2a3anos: 0.0, mais3anos: 0.0 },
  { empresa: "MOTA ENGIL ENGENHARIA", aReceber: 48128724.34, aVencer: 44902380.26, ate30: 351720.97, de31a60: 437329.18, de61a90: 219310.46, de91a180: 189580.12, de181a1ano: 142245.44, de1a2anos: 0.0, de2a3anos: 304801.68, mais3anos: 1581356.23 },
  { empresa: "MOTA-ENGIL BRASIL S/A", aReceber: 53287104.28, aVencer: 50666383.02, ate30: 0.0, de31a60: 0.0, de61a90: 0.0, de91a180: 0.0, de181a1ano: 87644.08, de1a2anos: 732619.57, de2a3anos: 416661.07, mais3anos: 1383796.54 },
  { empresa: "REDUC", aReceber: 309615.88, aVencer: 0.0, ate30: 240.0, de31a60: 5566.28, de61a90: 0.0, de91a180: 0.0, de181a1ano: 2964.18, de1a2anos: 67462.86, de2a3anos: 110898.29, mais3anos: 122484.27 },
  { empresa: "Tracevia Brasil", aReceber: 2337515.98, aVencer: 456330.99, ate30: 857878.17, de31a60: -1857.64, de61a90: 0.0, de91a180: 0.0, de181a1ano: 133682.81, de1a2anos: 210492.49, de2a3anos: 491363.15, mais3anos: 189626.01 },
];

export const agingClientesTotals_s7: AgingClienteBreakdownEntry = {
  empresa: "Total Geral", aReceber: 131187270.49, aVencer: 96845413.36, ate30: 15753830.06, de31a60: 441037.82, de61a90: 11979310.46, de91a180: 189580.12, de181a1ano: 366536.51, de1a2anos: 1010574.92, de2a3anos: 1323724.19, mais3anos: 3277263.05
};

// Março e Total Acumulado = snapshot S7
export const agingClientesData_mar = agingClientesData_s7;
export const agingClientesTotals_mar = agingClientesTotals_s7;
export const agingClientesData_total = agingClientesData_s7;
export const agingClientesTotals_total = agingClientesTotals_s7;

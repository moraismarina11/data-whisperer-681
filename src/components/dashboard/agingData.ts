// ── Posição Fornecedores ──────────────────────────────────────────

export interface FornecedorEntry {
  name: string;
  value: number;
}

export interface FornecedorCompany {
  company: string;
  color: string;
  total: number;
  topLabel: string;
  entries: FornecedorEntry[];
}

// Dados iguais em s1 e s2 (sem variação entre períodos)
const fornecedoresBase: FornecedorCompany[] = [
  {
    company: "Consórcio Alsub",
    color: "hsl(210, 70%, 50%)",
    total: 13154056.99,
    topLabel: "Top 7",
    entries: [
      { name: "NFX COMBUSTIVEIS MARITIMOS", value: 7788350.26 },
      { name: "BRAM OFFSHORE TRANSP. MARITIMOS", value: 3875831.63 },
      { name: "TOKIO MARINE SEGURADORA", value: 1309533.86 },
      { name: "SEVEN SEAS ENGENHARIA", value: 61434.21 },
      { name: "RIOLOG TRANSPORTES", value: 47614.51 },
      { name: "PETROVERA DERIVADOS DE PETROLEO", value: 41450.00 },
      { name: "MMG SOLUCOES EM METROLOGIA", value: 29842.52 },
    ],
  },
  {
    company: "MEBR",
    color: "hsl(340, 60%, 50%)",
    total: 6010.48,
    topLabel: "Top 5",
    entries: [
      { name: "EDIFICIO BENEDITO LAPIN", value: 3217.95 },
      { name: "MUNICIPIO DE SAO PAULO", value: 1804.87 },
      { name: "SECRETARIA FAZENDA", value: 465.88 },
      { name: "COLLEGE ENGLISH SCHOOL", value: 360.42 },
      { name: "PREFEITURA MUNICIPAL BH", value: 161.36 },
    ],
  },
  {
    company: "MEFB",
    color: "hsl(150, 60%, 40%)",
    total: 1966740.52,
    topLabel: "Top 7",
    entries: [
      { name: "MOTA-ENGIL BRASIL S/A", value: 607167.83 },
      { name: "VEBER IND. METAL MECANICA", value: 598732.88 },
      { name: "MOP Y C SA", value: 400792.83 },
      { name: "MOTA-ENGIL LATIN AMERICA BV", value: 270938.03 },
      { name: "SHARE LOGISTICS LTDA", value: 41755.89 },
      { name: "COMPANHIA SEGUROS ALIANCA DA BAH", value: 33840.35 },
      { name: "FERRAMENTAS GERAIS COM.", value: 13512.71 },
    ],
  },
  {
    company: "Macaé",
    color: "hsl(40, 90%, 50%)",
    total: 9022734.30,
    topLabel: "Top 5",
    entries: [
      { name: "UNIMED DE MACAE", value: 4365248.31 },
      { name: "HOMY SRL", value: 3096388.19 },
      { name: "TICKET SERVIÇOS SA", value: 1509466.53 },
      { name: "TECH OIL SERVICES", value: 37452.17 },
      { name: "BRAZIL FASTENERS COM.", value: 14179.10 },
    ],
  },
  {
    company: "Mota-Engil Brasil",
    color: "hsl(25, 90%, 55%)",
    total: 5894499.94,
    topLabel: "Top 11",
    entries: [
      { name: "NOVATA ENGENHARIA", value: 2680361.92 },
      { name: "MILLS LOCAÇÃO E LOGISTICA", value: 1344537.66 },
      { name: "DELL COMPUTADORES", value: 280357.57 },
      { name: "LUIS FELIPE EBOLI IABRUDI", value: 266534.32 },
      { name: "TOKIO MARINE SEGURADORA", value: 258005.17 },
      { name: "VIA APIA SERVIÇOS ESPECIAIS", value: 229314.37 },
      { name: "S.N. REFEIÇÕES E BUFFET", value: 187232.50 },
      { name: "PROJECT CORP COMERCIAL", value: 184352.36 },
      { name: "GIOVANI GONÇALVES CHAVES", value: 159253.64 },
      { name: "OPUS LOCAÇÕES E CONSTRUÇÕES", value: 154580.40 },
      { name: "EMBRATOP GEO TECNOLOGIAS", value: 149970.03 },
    ],
  },
  {
    company: "Tracevia",
    color: "hsl(270, 50%, 55%)",
    total: 752060.69,
    topLabel: "Top 10",
    entries: [
      { name: "RBR SECURITY COM. EQUIPAMENTOS", value: 269748.28 },
      { name: "PGL PRIME AGENCIAMENTO", value: 228698.45 },
      { name: "AMBITO CONCRETO E ARTEFATOS", value: 51600.00 },
      { name: "BANCO CNH CAPITAL S/A", value: 50176.80 },
      { name: "MOTA-ENGIL GLOBAL SERV.", value: 37816.98 },
      { name: "BRADESCO SAUDE S/A", value: 31925.88 },
      { name: "NOTRE DAME INTERMEDICA", value: 26112.92 },
      { name: "PGL EXPRESS SERVICE", value: 22835.49 },
      { name: "MUNICIPIO DE SAO PAULO", value: 19103.73 },
      { name: "Q-FREE BRISTOL UK LIMITED", value: 14042.16 },
    ],
  },
  {
    company: "REDUC",
    color: "hsl(190, 60%, 45%)",
    total: 81698.55,
    topLabel: "Top 6",
    entries: [
      { name: "ENGEDRILL ENGENHARIA", value: 47368.61 },
      { name: "VBC TECNOLOGIA LTDA", value: 25592.80 },
      { name: "MUNICIPIO DE MACAE", value: 5573.04 },
      { name: "NOTRE DAME INTERMEDICA", value: 1942.44 },
      { name: "JUNTA COMERCIAL DO ESTADO", value: 1200.00 },
      { name: "TOKIO MARINE SEGURADORA", value: 21.66 },
    ],
  },
];

// Fornecedores s2 / Total Acumulado (06/02 a 20/02 = Total)
export const fornecedoresData = fornecedoresBase;

// Fornecedores s1 (Janeiro a 06/02) — extraído do relatório de 09/02
export const fornecedoresDataS1: FornecedorCompany[] = [
  {
    company: "Consórcio Alsub",
    color: "hsl(210, 70%, 50%)",
    total: 26822283.54,
    topLabel: "Top 3",
    entries: [
      { name: "BRAM OFFSHORE TRANSP. MARITIMOS", value: 15694989.33 },
      { name: "NFX COMBUSTIVEIS MARITIMOS", value: 9817760.35 },
      { name: "TOKIO MARINE SEGURADORA", value: 1309533.86 },
    ],
  },
  {
    company: "MEBR",
    color: "hsl(340, 60%, 50%)",
    total: 4205.61,
    topLabel: "Top 4",
    entries: [
      { name: "EDIFICIO BENEDITO LAPIN", value: 3217.95 },
      { name: "MUNICIPIO DE SAO PAULO", value: 0 },
      { name: "SECRETARIA FAZENDA", value: 465.88 },
      { name: "COLLEGE ENGLISH SCHOOL", value: 360.42 },
      { name: "PREFEITURA MUNICIPAL BH", value: 161.36 },
    ],
  },
  {
    company: "MEFB",
    color: "hsl(150, 60%, 40%)",
    total: 1965939.58,
    topLabel: "Top 5",
    entries: [
      { name: "MOTA-ENGIL BRASIL S/A", value: 607167.83 },
      { name: "VEBER IND. METAL MECANICA", value: 598732.88 },
      { name: "MOP Y C SA", value: 400792.83 },
      { name: "MOTA-ENGIL LATIN AMERICA BV", value: 270938.03 },
      { name: "MOTA-ENGIL GLOBAL SERV.", value: 88308.01 },
    ],
  },
  {
    company: "Macaé",
    color: "hsl(40, 90%, 50%)",
    total: 31892397.19,
    topLabel: "Top 15",
    entries: [
      { name: "HOMY SRL", value: 19353767.59 },
      { name: "HYDRATIGHT EQUIPAMEN.", value: 3326786.08 },
      { name: "UNIMED DE MACAE", value: 2181851.35 },
      { name: "PRINER LOCAÇÃO DE EQUIP.", value: 1843033.42 },
      { name: "TICKET SERVIÇOS SA", value: 1509466.53 },
      { name: "FLP TRANSPORTES", value: 1336587.60 },
      { name: "ASSISLANI LOCAÇÃO", value: 648455.68 },
      { name: "JOTUN BRASIL", value: 486027.81 },
      { name: "ALMED SERVIÇOS TÉCNICOS", value: 261979.89 },
      { name: "ACOS VITAL COM. DE TUBOS", value: 206122.22 },
      { name: "EDFER COMERCIO DE FERRO", value: 184050.83 },
      { name: "FCC CIÊNCIA DOS MATERIAIS", value: 174755.65 },
      { name: "CIL CONEXÕES E VÁLVULAS", value: 171921.90 },
      { name: "JJ SOLDAS FERRAMENTAS", value: 104466.00 },
      { name: "CISARENTAL ADMINISTR.", value: 103124.64 },
    ],
  },
  {
    company: "Mota-Engil Brasil",
    color: "hsl(25, 90%, 55%)",
    total: 8317939.99,
    topLabel: "Top 22",
    entries: [
      { name: "NOVATA ENGENHARIA", value: 2680361.92 },
      { name: "MILLS LOCAÇÃO E LOGISTICA", value: 1344537.66 },
      { name: "UPSTAR AVIATION S/A", value: 651000.00 },
      { name: "DELL COMPUTADORES", value: 380709.47 },
      { name: "OPUS LOCAÇÕES E CONSTRUÇÕES", value: 346662.89 },
      { name: "ITAMIX LTDA", value: 277165.09 },
      { name: "LUIS FELIPE EBOLI IABRUDI", value: 266534.32 },
      { name: "TOKIO MARINE SEGURADORA", value: 258098.71 },
      { name: "ARDEIRA SALLES ADVOGADOS", value: 250851.76 },
      { name: "CHB LOCAÇÕES E SERVIÇOS", value: 257041.90 },
      { name: "VIA APIA SERVIÇOS ESPECIAIS", value: 229314.37 },
      { name: "S.N. REFEIÇÕES E BUFFET", value: 187232.50 },
      { name: "PROJECT CORP COMERCIAL", value: 184352.36 },
      { name: "GIOVANI GONÇALVES CHAVES", value: 159253.64 },
      { name: "EMBRATOP GEO TECNOLOGIAS", value: 149970.03 },
      { name: "JANUÁRIA LOCAÇÕES E TRANSP.", value: 147984.17 },
      { name: "BLUEPRINT CONSTRUTORA", value: 117000.01 },
      { name: "DRAFT SOLUTIONS CONSULTORIA", value: 114187.50 },
      { name: "FROTA CAR LTDA", value: 103702.85 },
      { name: "LOCALIZA FLEET S.A.", value: 97535.07 },
      { name: "LOCALIZA RENT A CAR", value: 60082.50 },
      { name: "ALELIO INSTRUÇÃO PAGAMENTO", value: 54361.27 },
    ],
  },
  {
    company: "Tracevia",
    color: "hsl(270, 50%, 55%)",
    total: 1278262.87,
    topLabel: "Top 4",
    entries: [
      { name: "PGL PRIME AGENCIAMENTO", value: 446543.84 },
      { name: "NOVACOS CO. LTD", value: 446253.30 },
      { name: "RBR SECURITY COM. EQUIPAMENTOS", value: 269748.28 },
      { name: "PREXX COMÉRCIO E IMPORTAÇÃO", value: 115717.45 },
    ],
  },
];

// ── Posição Clientes ─────────────────────────────────────────────

export interface ClienteEntry {
  name: string;
  value: number;
}

export interface ClienteCompany {
  company: string;
  color: string;
  aberto: number;
  caucao?: number;
  multa?: number;
  entries: ClienteEntry[];
}

// s2 / total (06/02 a 20/02 = Total Acumulado)
export const clientesData: ClienteCompany[] = [
  {
    company: "MEFB",
    color: "hsl(150, 60%, 40%)",
    aberto: 30298879.08,
    entries: [
      { name: "BESIX-ECB SPE LTDA", value: 30298879.08 },
    ],
  },
  {
    company: "Consórcio Alsub",
    color: "hsl(210, 70%, 50%)",
    aberto: 26076.00,
    entries: [
      { name: "ECOLOGIKA AMBIENTAL TRANSPORTE", value: 26076.00 },
    ],
  },
  {
    company: "Mota-Engil Brasil",
    color: "hsl(25, 90%, 55%)",
    aberto: 41408453.09,
    caucao: 27553970.76,
    entries: [
      { name: "Petrobras", value: 34286993.58 },
      { name: "VALE SA", value: 5866487.61 },
      { name: "GUARA-NORTE OPER. MARITIMAS", value: 549487.21 },
      { name: "AUTOPISTA FERNÃO DIAS", value: 544752.36 },
      { name: "TUPI NORDESTE OPER. MARITIMAS", value: 160732.33 },
    ],
  },
  {
    company: "Tracevia",
    color: "hsl(270, 50%, 55%)",
    aberto: 2637816.91,
    caucao: 35856.55,
    entries: [
      { name: "CONC. RODOVIA NOVA 381", value: 710307.76 },
      { name: "CONC. ROTA DO OESTE S.A.", value: 698797.64 },
      { name: "VELSIS SIST. E TEC. VIÁRIA", value: 425009.98 },
      { name: "CONC. RODOVIAS NOROESTE", value: 239357.99 },
      { name: "VIABAHIA CONCESSIONÁRIA", value: 228724.07 },
      { name: "CONC. ECOVIAS", value: 121539.98 },
      { name: "LABOR ENG. E TECNOLOGIA", value: 66353.17 },
      { name: "ECO101 CONC. DE RODOVIAS", value: 51897.79 },
      { name: "CONC. RODOVIA NOVA 364", value: 46857.92 },
      { name: "COLOMBIA ME SAS", value: 24685.88 },
      { name: "EPR VIA MINEIRA S.A.", value: 8096.49 },
      { name: "CONC. DAS RODOVIAS", value: 7465.47 },
      { name: "ECORODOVIAS CONC. E SERVIÇOS", value: 5250.02 },
      { name: "VIAPAULISTA S.A.", value: 3472.75 },
    ],
  },
  {
    company: "Macaé",
    color: "hsl(40, 90%, 50%)",
    aberto: 36459217.00,
    caucao: 10789160.46,
    multa: 6438733.72,
    entries: [
      { name: "Petrobrás / 251", value: 31545063.42 },
      { name: "Petrobrás / 256", value: 1837598.80 },
      { name: "Petrobrás / 259", value: 1192276.02 },
      { name: "Petrobrás / 232", value: 1135315.68 },
      { name: "Petrobrás / 241", value: 435580.03 },
      { name: "Outros Clientes / Base", value: 313383.05 },
    ],
  },
  {
    company: "REDUC",
    color: "hsl(190, 60%, 45%)",
    aberto: 309615.88,
    entries: [
      { name: "PETROLEO BRASILEIRO", value: 229612.06 },
      { name: "ECBSA UO BC LOTE 3", value: 68824.12 },
      { name: "MOTA ENGIL ENGENHARIA", value: 11179.70 },
    ],
  },
];

// s1 (Janeiro a 06/02) — dados extraídos do relatório de 09/02
export const clientesDataS1: ClienteCompany[] = [
  {
    company: "MEFB",
    color: "hsl(150, 60%, 40%)",
    aberto: 30298879.08,
    entries: [
      { name: "BESIX-ECB SPE LTDA", value: 30298879.08 },
    ],
  },
  {
    company: "Mota-Engil Brasil",
    color: "hsl(25, 90%, 55%)",
    aberto: 161558336.07,
    caucao: 27553970.76,
    entries: [
      { name: "Petrobras", value: 160211812.01 },
      { name: "GUARA-NORTE OPER. MARITIMAS", value: 549487.21 },
      { name: "AUTOPISTA FERNÃO DIAS", value: 544752.36 },
      { name: "TUPI NORDESTE OPER. MARITIMAS", value: 160732.33 },
      { name: "ALFA LULA", value: 91552.16 },
    ],
  },
  {
    company: "Tracevia",
    color: "hsl(270, 50%, 55%)",
    aberto: 2526053.61,
    caucao: 35856.55,
    entries: [
      { name: "CONC. RODOVIA NOVA 381", value: 710307.76 },
      { name: "CONC. ROTA DO OESTE S.A.", value: 595105.14 },
      { name: "VELSIS SIST. E TEC. VIÁRIA", value: 425009.98 },
      { name: "VIABAHIA CONCESSIONÁRIA", value: 235391.23 },
      { name: "CONC. RODOVIAS NOROESTE", value: 232690.83 },
      { name: "CONC. ECOVIAS", value: 121539.98 },
      { name: "LABOR ENG. E TECNOLOGIA", value: 66353.17 },
      { name: "ECO101 CONC. DE RODOVIAS", value: 51897.79 },
      { name: "CONC. RODOVIA NOVA 364", value: 46857.92 },
      { name: "COLOMBIA ME SAS", value: 24685.88 },
      { name: "CONC. DAS RODOVIAS", value: 7465.47 },
      { name: "ECORODOVIAS CONC. E SERVIÇOS", value: 5250.02 },
      { name: "VIAPAULISTA S.A.", value: 3472.75 },
      { name: "EPR VIA MINEIRA S.A.", value: 25.49 },
    ],
  },
  {
    company: "Macaé",
    color: "hsl(40, 90%, 50%)",
    aberto: 36989736.19,
    caucao: 10176340.73,
    multa: 6438733.72,
    entries: [
      { name: "Petrobrás / 251", value: 32881336.13 },
      { name: "Petrobrás / 256", value: 2102212.80 },
      { name: "Petrobrás / 232", value: 1135315.68 },
      { name: "Petrobrás / 241", value: 435580.03 },
      { name: "Outros Clientes / Base", value: 313383.05 },
      { name: "Petrobrás / 259", value: 121908.50 },
    ],
  },
];

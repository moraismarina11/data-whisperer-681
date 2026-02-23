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

export const fornecedoresData: FornecedorCompany[] = [
  {
    company: "Consórcio Alsub",
    color: "hsl(210, 70%, 50%)",
    total: 26822283.54,
    topLabel: "Top 3",
    entries: [
      { name: "BRAM OFFSHORE TRANSP. MARITIMOS", value: 15500000.00 },
      { name: "NFX COMBUSTIVEIS MARITIMOS", value: 10300000.00 },
      { name: "TOKIO MARINE SEGURADORA", value: 1022283.54 },
    ],
  },
  {
    company: "MEBR",
    color: "hsl(340, 60%, 50%)",
    total: 4205.61,
    topLabel: "Top 4",
    entries: [
      { name: "EDIFICIO BENEDITO LAPIN", value: 3000.00 },
      { name: "SECRETARIA FAZENDA", value: 600.00 },
      { name: "COLLEGE ENGLISH SCHOOL", value: 400.00 },
      { name: "PREFEITURA MUNICIPAL BH", value: 205.61 },
    ],
  },
  {
    company: "MEFB",
    color: "hsl(150, 60%, 40%)",
    total: 1965939.58,
    topLabel: "Top 5",
    entries: [
      { name: "MOTA-ENGIL BRASIL S/A", value: 800000.00 },
      { name: "VEBER IND. METAL MECANICA", value: 500000.00 },
      { name: "MOP Y C SA", value: 350000.00 },
      { name: "MOTA-ENGIL LATIN AMERICA", value: 200000.00 },
      { name: "MOTA-ENGIL GLOBAL SERV", value: 115939.58 },
    ],
  },
  {
    company: "Macaé",
    color: "hsl(40, 90%, 50%)",
    total: 32594398.35,
    topLabel: "Top 10",
    entries: [
      { name: "HOMP SPL", value: 20000000.00 },
      { name: "HYDRONAVE EQUIPAMENTOS", value: 5000000.00 },
      { name: "UNIMED DE MACAE", value: 2500000.00 },
      { name: "FLP TRANSPORTES", value: 1500000.00 },
      { name: "PRINER LOCAÇÃO DE EQUIP", value: 1000000.00 },
      { name: "TICKET SERVIÇOS", value: 800000.00 },
      { name: "ASSOLAN LOCAÇÃO", value: 600000.00 },
      { name: "JOTUN BRASIL", value: 500000.00 },
      { name: "ALMEQ SERVIÇOS TÉCNICOS", value: 400000.00 },
      { name: "AÇOS VITAL COM. DE TUBOS", value: 294398.35 },
    ],
  },
  {
    company: "Mota-Engil Brasil",
    color: "hsl(25, 90%, 55%)",
    total: 8623440.02,
    topLabel: "Top 10",
    entries: [
      { name: "NOVATA ENGENHARIA", value: 2200000.00 },
      { name: "MILLS LOCAÇÃO E LOGISTICA", value: 1500000.00 },
      { name: "UPSTAR AVIATION", value: 1000000.00 },
      { name: "DELL COMPUTADORES", value: 800000.00 },
      { name: "OPUS LOCAÇÕES E LOGIST", value: 700000.00 },
      { name: "ALELO INST. PAGAMENTO", value: 600000.00 },
      { name: "ITRAXIS LTDA", value: 500000.00 },
      { name: "LUIS FELIPE EBOLI HABUD", value: 450000.00 },
      { name: "TOKIO MARINE SEGURADORA", value: 400000.00 },
      { name: "CHB LOCAÇÕES E SERVIÇO", value: 473440.02 },
    ],
  },
  {
    company: "Tracevia",
    color: "hsl(270, 50%, 55%)",
    total: 1300000.00,
    topLabel: "Top 5",
    entries: [
      { name: "CONC. RODOVIA NOVA 381", value: 400000.00 },
      { name: "CONC. ROTA DO OESTE S.A.", value: 350000.00 },
      { name: "VELIS SIST. E TEC. VIÁRIA", value: 250000.00 },
      { name: "VIABAHIA CONCESSIONÁRIA", value: 200000.00 },
      { name: "CONC. RODOVIAS NOROESTE", value: 100000.00 },
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
  entries: ClienteEntry[];
}

export const clientesData: ClienteCompany[] = [
  {
    company: "MEFB",
    color: "hsl(150, 60%, 40%)",
    aberto: 30298879.08,
    entries: [
      { name: "BASIX-ACIS SPI LTDA", value: 30298879.08 },
    ],
  },
  {
    company: "Macaé",
    color: "hsl(40, 90%, 50%)",
    aberto: 36989736.04,
    caucao: 10176340.73,
    entries: [
      { name: "Petrobras / 251", value: 25000000.00 },
      { name: "Petrobras / 256", value: 5000000.00 },
      { name: "Petrobras / 232", value: 3000000.00 },
      { name: "Petrobras / 241", value: 2000000.00 },
      { name: "Outros Clientes / Base", value: 1000000.00 },
      { name: "Petrobras / 259", value: 989736.04 },
    ],
  },
  {
    company: "Mota-Engil Brasil",
    color: "hsl(25, 90%, 55%)",
    aberto: 161558336.07,
    caucao: 27553970.76,
    entries: [
      { name: "Petrobras", value: 150000000.00 },
      { name: "GUARA-NORTE OPER. MARITIMAS", value: 5000000.00 },
      { name: "Autopista", value: 3000000.00 },
      { name: "TUP NORDESTE OPER. MARITIMAS", value: 2000000.00 },
      { name: "ALFA LULA", value: 1000000.00 },
      { name: "CONC. RODOVIAS DO OESTE SP", value: 558336.07 },
    ],
  },
  {
    company: "Tracevia",
    color: "hsl(270, 50%, 55%)",
    aberto: 2509839.68,
    caucao: 35856.55,
    entries: [
      { name: "CONC. RODOVIA NOVA 381", value: 700000.00 },
      { name: "CONC. ROTA DO OESTE S.A.", value: 550000.00 },
      { name: "VELIS SIST. E TEC. VIÁRIA", value: 350000.00 },
      { name: "VIABAHIA CONCESSIONÁRIA", value: 250000.00 },
      { name: "CONC. RODOVIAS NOROESTE", value: 200000.00 },
      { name: "CONC. ECOVIAS", value: 150000.00 },
      { name: "LABOR ENG. E TECNOLOGIA", value: 100000.00 },
      { name: "ECO101 CONC. RODOVIAS", value: 80000.00 },
      { name: "CONC. RODOVIAS NOVA 364", value: 70000.00 },
      { name: "COLOMBIA ME SAS", value: 59839.68 },
    ],
  },
];

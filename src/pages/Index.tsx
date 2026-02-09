import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";

const COMPANY_COLORS: Record<string, string> = {
  "Consórcio Alsub": "hsl(210, 70%, 50%)",
  "MEBR": "hsl(340, 60%, 50%)",
  "MEFB": "hsl(150, 60%, 40%)",
  "Mota-Engil Brasil": "hsl(30, 80%, 50%)",
  "Tracevia": "hsl(270, 50%, 55%)",
};

const allData: { company: string; supplier: string; value: number }[] = [
  { company: "Consórcio Alsub", supplier: "BRAM OFFSHORE TRANSP. MARÍTIMOS", value: 15694989.33 },
  { company: "Consórcio Alsub", supplier: "NFX COMBUSTÍVEIS MARÍTIMOS", value: 9817760.35 },
  { company: "Consórcio Alsub", supplier: "TOKIO MARINE SEGURADORA", value: 1309533.86 },
  { company: "MEBR", supplier: "COLLEGE ENGLISH SCHOOL", value: 360.42 },
  { company: "MEBR", supplier: "EDIFÍCIO BENEDITO LAPIN", value: 3217.95 },
  { company: "MEBR", supplier: "PREFEITURA MUNICIPAL BH", value: 161.36 },
  { company: "MEBR", supplier: "SECRETARIA FAZENDA", value: 465.88 },
  { company: "MEFB", supplier: "MOTA ENGIL - MACAÉ", value: 36463137.81 },
  { company: "MEFB", supplier: "HOMY SRL", value: 19363767.59 },
  { company: "MEFB", supplier: "HYDRATIGHT EQUIPAMENTOS", value: 3326786.80 },
  { company: "MEFB", supplier: "UNIMED DE MACAÉ", value: 2181851.35 },
  { company: "MEFB", supplier: "FLP TRANSPORTES", value: 1936587.60 },
  { company: "MEFB", supplier: "PRINER LOCAÇÃO DE EQUIP.", value: 1843033.42 },
  { company: "MEFB", supplier: "TICKET SERVIÇOS", value: 1509466.53 },
  { company: "MEFB", supplier: "VEBER IND. METAL MECÂNICA", value: 598732.88 },
  { company: "MEFB", supplier: "MOTA-ENGIL BRASIL S/A", value: 607167.83 },
  { company: "MEFB", supplier: "JOTUN BRASIL", value: 486027.81 },
  { company: "MEFB", supplier: "ASSISLANI LOCAÇÃO", value: 648455.22 },
  { company: "MEFB", supplier: "MOP Y C SA", value: 400792.83 },
  { company: "MEFB", supplier: "ALMEQ SERVIÇOS TÉCNICOS", value: 351979.89 },
  { company: "MEFB", supplier: "MOTA-ENGIL LATIN AMERICA", value: 270938.03 },
  { company: "MEFB", supplier: "AÇOS VITAL COM. DE TUBOS", value: 208122.22 },
  { company: "MEFB", supplier: "EDFER COMÉRCIO DE FERRO", value: 184050.83 },
  { company: "MEFB", supplier: "FCC CIÊNCIA DOS MATERIAIS", value: 174755.65 },
  { company: "MEFB", supplier: "CIL CONEXÕES E VÁLVULAS", value: 171921.90 },
  { company: "MEFB", supplier: "JJ SOLDAS FERRAMENTAS", value: 104466.90 },
  { company: "MEFB", supplier: "CISARENTAL ADMINISTRADORA", value: 103124.64 },
  { company: "MEFB", supplier: "MOTA-ENGIL GLOBAL SERV.", value: 88308.01 },
  { company: "Mota-Engil Brasil", supplier: "NOVATA ENGENHARIA", value: 2680361.92 },
  { company: "Mota-Engil Brasil", supplier: "MILLS LOCAÇÃO E LOGÍSTICA", value: 1344537.66 },
  { company: "Mota-Engil Brasil", supplier: "UPSTAR AVIATION", value: 661000.00 },
  { company: "Mota-Engil Brasil", supplier: "DELL COMPUTADORES", value: 380709.47 },
  { company: "Mota-Engil Brasil", supplier: "OPUS LOCAÇÕES E CONSTRUÇÕES", value: 346662.89 },
  { company: "Mota-Engil Brasil", supplier: "ALELO INST. PAGAMENTO", value: 343861.27 },
  { company: "Mota-Engil Brasil", supplier: "ITAMIX LTDA", value: 277165.09 },
  { company: "Mota-Engil Brasil", supplier: "LUIS FELIPE EBOLI IABRUDI", value: 266534.32 },
  { company: "Mota-Engil Brasil", supplier: "TOKIO MARINE SEGURADORA", value: 258098.71 },
  { company: "Mota-Engil Brasil", supplier: "CHB LOCAÇÕES E SERVIÇOS", value: 257041.90 },
  { company: "Mota-Engil Brasil", supplier: "AROEIRA SALLES ADVOGADOS", value: 250851.76 },
  { company: "Mota-Engil Brasil", supplier: "VIA APIA SERV. ESPECIAIS", value: 229314.37 },
  { company: "Mota-Engil Brasil", supplier: "S.N. REFEIÇÕES E BUFFET", value: 187232.50 },
  { company: "Mota-Engil Brasil", supplier: "PROJECT CORP COMERCIAL", value: 184352.36 },
  { company: "Mota-Engil Brasil", supplier: "GIOVANI GONÇALVES CHAVES", value: 159253.64 },
  { company: "Mota-Engil Brasil", supplier: "EMBRATOP GEO TECNOLOGIAS", value: 149970.03 },
  { company: "Mota-Engil Brasil", supplier: "JANUÁRIA LOCAÇÕES", value: 147984.17 },
  { company: "Mota-Engil Brasil", supplier: "BLUEPRINT CONSTRUTORA", value: 117000.01 },
  { company: "Mota-Engil Brasil", supplier: "DRAFT SOLUTIONS", value: 114187.50 },
  { company: "Mota-Engil Brasil", supplier: "FROTA CAR LTDA", value: 109702.88 },
  { company: "Mota-Engil Brasil", supplier: "LOCALIZA FLEET", value: 97535.07 },
  { company: "Mota-Engil Brasil", supplier: "LOCALIZA RENT A CAR", value: 60082.50 },
  { company: "Tracevia", supplier: "PGL PRIME AGENCIAMENTO", value: 446543.89 },
  { company: "Tracevia", supplier: "NOVACOS CO. LTD", value: 446253.30 },
  { company: "Tracevia", supplier: "RBR SECURITY COMÉRCIO", value: 269748.28 },
  { company: "Tracevia", supplier: "PREXX COMÉRCIO E IMPORT.", value: 115717.45 },
];

const companies = Object.keys(COMPANY_COLORS);

const formatCurrency = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

const formatShort = (v: number) => {
  if (v >= 1_000_000) return `R$ ${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `R$ ${(v / 1_000).toFixed(0)}k`;
  return `R$ ${v.toFixed(0)}`;
};

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
      <p className="font-semibold text-card-foreground text-sm">{d.supplier}</p>
      <p className="text-primary font-bold mt-1">{formatCurrency(d.value)}</p>
    </div>
  );
};

const Index = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const visibleCompanies = selected ? [selected] : companies;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Fornecedores por Empresa
          </h1>
          <p className="text-muted-foreground mt-1">Valores de contas a pagar</p>
        </header>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelected(null)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              !selected
                ? "bg-foreground text-background border-foreground"
                : "bg-card text-muted-foreground border-border hover:border-foreground/30"
            }`}
          >
            Todas
          </button>
          {companies.map((c) => (
            <button
              key={c}
              onClick={() => setSelected(selected === c ? null : c)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors flex items-center gap-2 ${
                selected === c
                  ? "border-foreground text-foreground"
                  : "bg-card text-muted-foreground border-border hover:border-foreground/30"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: COMPANY_COLORS[c] }} />
              {c}
            </button>
          ))}
        </div>

        {/* Charts per company */}
        <div className="space-y-6">
          {visibleCompanies.map((company) => {
            const companyData = allData
              .filter((d) => d.company === company)
              .sort((a, b) => b.value - a.value);
            const color = COMPANY_COLORS[company];
            const total = companyData.reduce((s, d) => s + d.value, 0);
            const chartHeight = Math.max(200, companyData.length * 40 + 40);

            return (
              <div key={company} className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-3.5 h-3.5 rounded-full" style={{ background: color }} />
                    <h2 className="text-lg font-semibold text-card-foreground">{company}</h2>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {companyData.length} fornecedores
                    </span>
                  </div>
                  <span className="text-sm font-bold text-card-foreground">
                    Total: {formatCurrency(total)}
                  </span>
                </div>

                <ResponsiveContainer width="100%" height={chartHeight}>
                  <BarChart data={companyData} layout="vertical" margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                    <XAxis
                      type="number"
                      tickFormatter={formatShort}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                    />
                    <YAxis
                      type="category"
                      dataKey="supplier"
                      width={200}
                      tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
                    <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24}>
                      {companyData.map((_, i) => (
                        <Cell key={i} fill={color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;

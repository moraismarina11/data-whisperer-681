import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

const COMPANY_COLORS: Record<string, string> = {
  "Consórcio Alsub": "hsl(210, 70%, 50%)",
  "MEFB": "hsl(150, 60%, 40%)",
  "Mota-Engil Brasil": "hsl(30, 80%, 50%)",
  "MEBR": "hsl(340, 60%, 50%)",
  "Tracevia": "hsl(270, 50%, 55%)",
};

const top10 = [
  { supplier: "MOTA ENGIL - MACAE", company: "MEFB", value: 36463137.81 },
  { supplier: "HOMY SRL", company: "MEFB", value: 19363767.59 },
  { supplier: "BRAM OFFSHORE", company: "Consórcio Alsub", value: 15694989.33 },
  { supplier: "NFX COMBUSTIVEIS", company: "Consórcio Alsub", value: 9817760.35 },
  { supplier: "HYDRATIGHT EQUIP.", company: "MEFB", value: 3326786.80 },
  { supplier: "NOVATA ENGENHARIA", company: "Mota-Engil Brasil", value: 2680361.92 },
  { supplier: "UNIMED DE MACAE", company: "MEFB", value: 2181851.35 },
  { supplier: "FLP TRANSPORTES", company: "MEFB", value: 1936587.60 },
  { supplier: "PRINER LOCACAO", company: "MEFB", value: 1843033.42 },
  { supplier: "TICKET SERVICOS", company: "MEFB", value: 1509466.53 },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

const formatMillions = (value: number) =>
  `R$ ${(value / 1_000_000).toFixed(1)}M`;

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
      <p className="font-semibold text-card-foreground text-sm">{d.supplier}</p>
      <p className="text-muted-foreground text-xs">{d.company}</p>
      <p className="text-primary font-bold mt-1">{formatCurrency(d.value)}</p>
    </div>
  );
};

const Index = () => {
  const companies = Object.keys(COMPANY_COLORS);

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Top 10 Fornecedores por Valor
          </h1>
          <p className="text-muted-foreground mt-1">Análise de contas a pagar por empresa</p>
        </header>

        <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
          <div className="flex flex-wrap gap-4 mb-6">
            {companies.map((c) => (
              <div key={c} className="flex items-center gap-2 text-sm text-card-foreground">
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: COMPANY_COLORS[c] }} />
                {c}
              </div>
            ))}
          </div>

          <ResponsiveContainer width="100%" height={460}>
            <BarChart data={top10} layout="vertical" margin={{ left: 20, right: 30, top: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
              <XAxis type="number" tickFormatter={formatMillions} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
              <YAxis
                type="category"
                dataKey="supplier"
                width={160}
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.5)" }} />
              <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={28}>
                {top10.map((entry, i) => (
                  <Cell key={i} fill={COMPANY_COLORS[entry.company]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Index;

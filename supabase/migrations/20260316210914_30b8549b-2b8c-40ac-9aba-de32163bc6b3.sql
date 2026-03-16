
-- Financial records table for Make.com integration
CREATE TABLE public.financial_records (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  company TEXT NOT NULL,
  cost_center TEXT,
  type TEXT NOT NULL,
  amount NUMERIC NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.financial_records ENABLE ROW LEVEL SECURITY;

-- Public read access (dashboard is public)
CREATE POLICY "Anyone can read financial records"
  ON public.financial_records FOR SELECT USING (true);

-- Insert via service role only (edge function uses service role key)
CREATE POLICY "Service role can insert financial records"
  ON public.financial_records FOR INSERT WITH CHECK (true);

-- Allow delete for cleanup
CREATE POLICY "Service role can delete financial records"
  ON public.financial_records FOR DELETE USING (true);

-- Index for common queries
CREATE INDEX idx_financial_records_date ON public.financial_records (date);
CREATE INDEX idx_financial_records_company ON public.financial_records (company);
CREATE INDEX idx_financial_records_type ON public.financial_records (type);

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceKey);

  try {
    if (req.method === "POST") {
      const body = await req.json();

      // Accept either a single record or an array
      const records: Array<{
        date: string;
        company: string;
        cost_center?: string;
        type: string;
        amount: number;
      }> = Array.isArray(body) ? body : body.records ? body.records : [body];

      // Validate
      for (const r of records) {
        if (!r.date || !r.company || !r.type || r.amount === undefined) {
          return new Response(
            JSON.stringify({
              error: "Each record must have: date, company, type, amount",
            }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
      }

      const rows = records.map((r) => ({
        date: r.date,
        company: r.company,
        cost_center: r.cost_center || null,
        type: r.type,
        amount: r.amount,
      }));

      const { data, error } = await supabase
        .from("financial_records")
        .insert(rows)
        .select();

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(
        JSON.stringify({ success: true, inserted: data?.length ?? 0 }),
        { status: 201, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (req.method === "GET") {
      // Return all records, optionally filtered by query params
      const url = new URL(req.url);
      const company = url.searchParams.get("company");
      const dateFrom = url.searchParams.get("date_from");
      const dateTo = url.searchParams.get("date_to");
      const type = url.searchParams.get("type");

      let query = supabase
        .from("financial_records")
        .select("*")
        .order("date", { ascending: true });

      if (company) query = query.eq("company", company);
      if (type) query = query.eq("type", type);
      if (dateFrom) query = query.gte("date", dateFrom);
      if (dateTo) query = query.lte("date", dateTo);

      const { data, error } = await query;

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ data }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (req.method === "DELETE") {
      // Delete records, optionally filtered
      const url = new URL(req.url);
      const company = url.searchParams.get("company");
      const dateFrom = url.searchParams.get("date_from");
      const dateTo = url.searchParams.get("date_to");

      let query = supabase.from("financial_records").delete();

      if (company) query = query.eq("company", company);
      if (dateFrom) query = query.gte("date", dateFrom);
      if (dateTo) query = query.lte("date", dateTo);

      // If no filters, delete all
      if (!company && !dateFrom && !dateTo) {
        query = query.gte("id", "00000000-0000-0000-0000-000000000000");
      }

      const { error } = await query;

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(
        JSON.stringify({ success: true, message: "Records deleted" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

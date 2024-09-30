import { createClient as createClientPrimitive } from "@supabase/supabase-js";

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

export function createClient() {
  const supabase = createClientPrimitive(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  return supabase;
}

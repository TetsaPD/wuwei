import { createClient } from "@supabase/supabase-js";

const ENV_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const ENV_SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

export default async function yogatechnique() {
  const supabase = await createClient(ENV_SUPABASE_URL, ENV_SUPABASE_KEY);

  const {
    data: { technique },
  } = await supabase.from("yogadata").select("*");

  return <div>{technique}</div>;
}

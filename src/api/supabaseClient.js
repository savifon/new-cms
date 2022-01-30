import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://foayfxthducabvtxjvdn.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzUyNDg2MSwiZXhwIjoxOTU5MTAwODYxfQ.wlAOyrbmETyJvJZDMM6P4pahyP4pvgCfRV3UTAlOPIE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

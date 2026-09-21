
import { supabase } from "./lib/supabase";

async function testSupabase() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .limit(5);

  if (error) {
    console.error("Error de Supabase:", error.message);
    return;
  }

  console.log("¡Conexión correcta!");
  console.table(data);
}

testSupabase();
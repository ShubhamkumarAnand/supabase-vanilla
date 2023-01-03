import "dotenv/config"
import { createClient } from '@supabase/supabase-js';

console.log("Running...");

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

console.log("\------------Reading posts------------------\n")

//* Reading Data From the Supabase Client
const { data: read_posts, read_error } = await supabase
  .from('posts')
  .select('*')

console.log(read_posts)
console.log(read_error);

console.log("\n-----------------Inserting posts----------------------\n")

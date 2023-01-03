import "dotenv/config"
import { createClient } from '@supabase/supabase-js';

console.log("Running...");

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const { data: post, error } = await supabase
  .from('posts')
  .delete()
  .eq('id',15)

console.log("Data Deleted Successfully")

import "dotenv/config"
import { createClient } from '@supabase/supabase-js';

console.log("Running...");

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

//^ User Authentication in the database

let { user, error } = await supabase.auth.signInWithPassword({
  email: 'the.anand3099+test011@gmail.com',
  password: 'the.anand30'
})

console.log(user)
console.log(error)

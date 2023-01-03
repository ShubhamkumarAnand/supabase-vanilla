import "dotenv/config"
import { createClient } from '@supabase/supabase-js';

console.log("Running...");

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

//^ User Authentication in the database

const { user, error } = await supabase.auth.signUp({
  email: 'example+test011@gmail.com',
  password: 'password123'
})

console.log(user)
console.log(error)

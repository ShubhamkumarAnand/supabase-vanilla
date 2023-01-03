import "dotenv/config"
import { createClient } from '@supabase/supabase-js';

console.log("Running...");

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

//* Reading Data From the Supabase Client
const posts = supabase.channel('custom-insert-channel')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'posts' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()

console.log("Done")

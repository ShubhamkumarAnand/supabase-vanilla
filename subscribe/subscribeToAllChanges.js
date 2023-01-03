import "dotenv/config"
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const posts = supabase.channel('custom-all-channel')
.on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'posts' },
    (payload) => {
      console.log('Change received!', payload)
    }
    )
    .subscribe()


console.log("Running...");

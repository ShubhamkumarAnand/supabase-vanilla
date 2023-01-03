import "dotenv/config"
import { createClient } from '@supabase/supabase-js';

console.log("Running...");

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

//& Updating a new post in the database
const { data: update_posts, update_error } = await supabase
  .from('posts')
  .update([
    {
      likes_count: 7,
    }
  ])
  .eq('id', 11)

console.log(update_posts)
console.log(update_error)

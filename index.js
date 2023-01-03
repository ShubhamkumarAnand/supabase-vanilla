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
//^ Inserting a new post in the database
const { data: insert_posts, insert_error } = await supabase
  .from('posts')
  .insert([
    {
      body: 'This is a second post from the Js Client',
      likes_count: 1,
      username: 'imskanand',
    }
  ])

console.log(insert_posts)
console.log(insert_error)
console.log("\n-----------------Updating posts----------------------\n")
//^ Inserting a new post in the database
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

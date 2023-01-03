import "dotenv/config"
import { createClient } from '@supabase/supabase-js';

console.log("Running...");

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

//^ Inserting a new post in the database

const { data: insert_posts, insert_error } = await supabase
  .from('posts')
  .insert([
    {
      body: 'This is a post from the Js Client to Fire the subscription',
      likes_count: 11,
      username: 'imskanand',
    }
  ])

console.log(insert_posts)
console.log(insert_error)

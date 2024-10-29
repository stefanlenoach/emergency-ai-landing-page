// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

if (!import.meta.env.VITE_SUPABASE_URL) {
  throw new Error('Missing env.VITE_SUPABASE_URL')
}
if (!import.meta.env.VITE_SUPABASE_KEY) {
  throw new Error('Missing env.VITE_SUPABASE_KEY')
}

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)
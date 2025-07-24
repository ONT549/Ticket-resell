import { serve } from 'https://deno.land/std@0.192.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')
const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')
const supabase = createClient(supabaseUrl, supabaseKey)

serve(async (req) => {
  const { searchParams } = new URL(req.url)
  const team = searchParams.get('team')
  const stadium = searchParams.get('stadium')
  const page = parseInt(searchParams.get('page') ?? '1')
  const pageSize = parseInt(searchParams.get('page_size') ?? '10')

  let query = supabase
    .from('tickets')
    .select('*', { count: 'exact' })
    .order('match_date', { ascending: true })

  if (team) {
    query = query.eq('team', team)
  }
  if (stadium) {
    query = query.eq('stadium', stadium)
  }

  const from = (page - 1) * pageSize
  const to = from + pageSize - 1
  query = query.range(from, to)

  const { data, error, count } = await query

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return new Response(JSON.stringify({ data, count }), {
    headers: { 'Content-Type': 'application/json' }
  })
})

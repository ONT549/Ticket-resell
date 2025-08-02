
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm';
// `env.js` is ignored by Git. Copy `env.js.example` locally and provide the file
// separately when deploying to production.
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './env.js';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

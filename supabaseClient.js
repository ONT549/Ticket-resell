
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const supabase = createClient(
  'https://dbdnvjbkotlyarsfmtjn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiZG52amJrb3RseWFyc2ZtdGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NTUxNTUsImV4cCI6MjA2MjUzMTE1NX0.cQXd9NQQbEQ5tWAeQ2pJWIoGkQjAbVs4tOQAUeDCET0'
);

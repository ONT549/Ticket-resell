import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dbdnvjbkotlyarsfmtjn.supabase.co';  // ← 실제 프로젝트 URL로 교체
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiZG52amJrb3RseWFyc2ZtdGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NTUxNTUsImV4cCI6MjA2MjUzMTE1NX0.cQXd9NQQbEQ5tWAeQ2pJWIoGkQjAbVs4tOQAUeDCET0';                    // ← 실제 키로 교체

export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co';  // ← 실제 프로젝트 URL로 교체
const supabaseKey = 'your-anon-key';                    // ← 실제 키로 교체

export const supabase = createClient(supabaseUrl, supabaseKey);

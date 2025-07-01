import { supabase } from './supabaseClient.js';

supabase.auth.getUser().then((res) => {
  console.log('User:', res.data.user);
});

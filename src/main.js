import './style.css';
import { supabase } from './supabaseClient';

console.log('Main JS loaded');

supabase.auth.getUser().then((res) => {
  console.log('현재 로그인된 사용자:', res.data.user);
});

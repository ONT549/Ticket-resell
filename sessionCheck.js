
import { supabase } from './supabaseClient.js';

window.addEventListener('DOMContentLoaded', async () => {
  const loginBtn = document.getElementById("login-button");

  if (!loginBtn) return;

  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    loginBtn.textContent = "마이페이지";
    loginBtn.href = "mypage.html";
  } else {
    loginBtn.textContent = "로그인 / 회원가입";
    loginBtn.href = "auth.html";
  }
});

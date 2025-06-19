
import { supabase } from './supabaseClient.js';

window.addEventListener('DOMContentLoaded', async () => {
  const loginBtn = document.getElementById("login-button");

  if (!loginBtn) {
    console.log("⚠️ login-button 요소가 없습니다.");
    return;
  }

  console.log("🔍 로그인 상태 확인 중...");

  const { data: { user }, error } = await supabase.auth.getUser();

  if (error) {
    console.error("❌ 유저 정보 가져오기 실패:", error.message);
  } else if (user) {
    console.log("✅ 로그인된 유저:", user.email);
    loginBtn.textContent = "마이페이지";
    loginBtn.href = "mypage.html";
  } else {
    console.log("🔓 로그인되지 않음");
    loginBtn.textContent = "로그인 / 회원가입";
    loginBtn.href = "auth.html";
  }
});

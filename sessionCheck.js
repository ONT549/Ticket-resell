
import { supabase } from './supabaseClient.js';

window.addEventListener('DOMContentLoaded', async () => {
  const loginBtn = document.getElementById("login-button");

  console.log("🔍 로그인 상태 확인 중...");

  if (!loginBtn) {
    console.log("⚠️ login-button 요소가 없습니다.");
    return;
  }

  const { data: { user }, error } = await supabase.auth.getUser();

  if (error) {
    console.error("❌ 유저 정보 가져오기 실패:", error.message);
  } else if (user) {
    console.log("✅ 로그인된 유저:", user.email);

    // 확실히 버튼이 갱신되도록 DOM 변경 로그 추가
    loginBtn.textContent = "마이페이지";
    loginBtn.setAttribute("href", "mypage.html");
    loginBtn.style.backgroundColor = "#28a745";
    loginBtn.style.color = "white";
    loginBtn.style.fontWeight = "bold";
  } else {
    console.log("🔓 로그인되지 않음");

    loginBtn.textContent = "로그인 / 회원가입";
    loginBtn.setAttribute("href", "login.html");
    loginBtn.style.backgroundColor = "#007BFF";
    loginBtn.style.color = "white";
    loginBtn.style.fontWeight = "normal";
  }
});

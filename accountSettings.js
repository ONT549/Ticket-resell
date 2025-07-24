import { supabase } from './supabaseClient.js';

const passwordForm = document.getElementById('password-form');
const deleteForm = document.getElementById('delete-form');

passwordForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const result = document.getElementById('password-result');

  if (newPassword !== confirmPassword) {
    result.textContent = '❌ 비밀번호가 일치하지 않습니다.';
    return;
  }

  const { error } = await supabase.auth.updateUser({ password: newPassword });
  result.textContent = error ? `❌ ${error.message}` : '✅ 비밀번호가 변경되었습니다.';
});

deleteForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!confirm('정말로 계정을 삭제하시겠습니까? 이 동작은 되돌릴 수 없습니다.')) return;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const result = document.getElementById('delete-result');
  if (error || !user) {
    result.textContent = '❌ 사용자 정보를 확인할 수 없습니다.';
    return;
  }

  const { error: delError } = await supabase.auth.admin.deleteUser(user.id);
  if (delError) {
    result.textContent = `❌ ${delError.message}`;
    return;
  }

  await supabase.auth.signOut();
  result.textContent = '✅ 계정이 삭제되었습니다.';
  window.location.href = 'index.html';
});

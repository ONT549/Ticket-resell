// notice.js  (변경 버전)
document.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('noticeBar');
  if (!bar) return;

  /* ① 저장된 만료 시각 가져오기 */
  const expires = localStorage.getItem('hideNoticeUntil');

  /* ② 아직 만료 안 됐으면 숨김 */
  if (expires && Date.now() < Number(expires)) {
    bar.style.display = 'none';
    return;
  }

  /* ③ X 버튼: '오늘 하루' 숨기기 (24h) */
  bar.querySelector('button').addEventListener('click', () => {
    bar.style.display = 'none';
    /* 24시간 = 86_400_000 ms, 필요하면 7일 등으로 변경 */
    const tomorrow = Date.now() + 10;
    localStorage.setItem('hideNoticeUntil', String(tomorrow));
  });
});

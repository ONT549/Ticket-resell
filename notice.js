// notice.js
document.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('noticeBar');
  if (!bar) return;

  /* ① 만료 시각 읽기 */
  const expires = Number(localStorage.getItem('hideNoticeUntil'));

  /* ② 아직 만료 안 됐으면 숨김 + 다시 표시 예약 */
  if (expires && Date.now() < expires) {
    bar.style.display = 'none';
    setTimeout(() => { bar.style.display = ''; }, expires - Date.now());
  }

  /* ③ X 버튼 클릭 → 1 시간(3 600 000 ms) 동안 숨김 */
  bar.querySelector('button').addEventListener('click', () => {
    bar.style.display = 'none';
    const ONE_HOUR = 3_600_000;                // ← 1시간(ms)
    const nextTime = Date.now() + ONE_HOUR;    // 만료 시각 계산
    localStorage.setItem('hideNoticeUntil', String(nextTime));
    setTimeout(() => { bar.style.display = ''; }, ONE_HOUR);
  });
});


// notice.js
document.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('noticeBar');
  if (!bar) return;

  /* ① 저장된 만료 시각을 읽음 */
  const expires = Number(localStorage.getItem('hideNoticeUntil'));   // ← 이 줄이 빠져 있었음

  /* ② 만료 전이면 바로 숨기고, 만료 순간에 다시 보여 주도록 예약 */
  if (expires && Date.now() < expires) {
    bar.style.display = 'none';

    // 만료까지 남은 시간(ms)만큼 딱 한 번 타이머 설정
    setTimeout(() => { bar.style.display = ''; }, expires - Date.now());
  }

  /* ③ X 버튼: 10 ms 동안만 숨기기(테스트용) */
  bar.querySelector('button').addEventListener('click', () => {
    bar.style.display = 'none';
    const nextTime = Date.now() + 10;            // 10 ms 뒤 만료
    localStorage.setItem('hideNoticeUntil', String(nextTime));

    // 10 ms 뒤에 다시 나타나도록 타이머
    setTimeout(() => { bar.style.display = ''; }, 10);
  });
});


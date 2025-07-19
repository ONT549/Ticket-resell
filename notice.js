// notice.js
document.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('noticeBar');
  if (!bar) return;

  // 이미 'hideNotice=true' 로 저장돼 있으면 바로 숨김
  if (localStorage.getItem('hideNotice') === 'true') {
    bar.style.display = 'none';
    return;
  }

  // X 버튼 클릭 시 오늘 하루 숨김
  bar.querySelector('button').addEventListener('click', () => {
    bar.style.display = 'none';
    localStorage.setItem('hideNotice', 'true');
  });
});

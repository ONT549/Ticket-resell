import { supabase } from './supabaseClient.js';   // ← 경로/파일명 그대로 맞춰 주세요
/* -------------------------------------------------- */

document.addEventListener('DOMContentLoaded', async () => {

  /* ② (기존) 드롭다운 확장/접기 */
  document.querySelectorAll('.expand').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const sub      = document.getElementById(targetId);
      if (sub) sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    });
  });

  /* ③ (신규) ‘퀵 칩스’ 자동 생성 */
  const chipBox = document.getElementById('quickChips');
  if (!chipBox) return;                       // 해당 영역이 없으면 패스

  try {
    /* a) tickets 테이블에서 team 컬럼만 조회 */
    const { data, error } = await supabase.from('tickets').select('team');
    if (error) throw error;

    /* b) 팀별 등록 건수 집계 */
    const counts = {};
    data.forEach(({ team }) => {
      if (team) counts[team] = (counts[team] || 0) + 1;
    });

    /* c) 등록 수 TOP 5 추출 */
    const top5 = Object.entries(counts)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 5)
                  .map(([team]) => team);

    if (!top5.length) {
      chipBox.style.display = 'none';
      return;
    }

    /* d) 칩 DOM 생성 + 클릭 시 검색 실행 */
    top5.forEach(team => {
      const chip = document.createElement('span');
      chip.className     = 'chip';
      chip.textContent   = team;
      chip.dataset.query = team;

      chip.addEventListener('click', () => {
        const input = document.getElementById('searchInput');
        if (input) input.value = team;
        if (typeof triggerSearch === 'function') triggerSearch(team); // 검색 함수 이름 맞추기
      });

      chipBox.appendChild(chip);
    });
  } catch (e) {
    console.error('Quick-chips 오류:', e);
    chipBox.style.display = 'none';
  }
});

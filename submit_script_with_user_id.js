
<script type="module">
  import { supabase } from './supabaseClient.js';
  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiZG52amJrb3RseWFyc2ZtdGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NTUxNTUsImV4cCI6MjA2MjUzMTE1NX0.cQXd9NQQbEQ5tWAeQ2pJWIoGkQjAbVs4tOQAUeDCET0';
  const form = document.getElementById('ticketForm');
  const result = document.getElementById('result');

  const sportSelect = document.getElementById('sport_type');
  const teamSelect = document.getElementById('team');
  const stadiumSelect = document.getElementById('stadium_select');
  const stadiumInput = document.getElementById('stadium_input');

  const teams = {
    '야구': ['-- 팀을 선택하세요 --', '두산 베어스', 'LG 트윈스', 'KT wiz', '삼성 라이온즈', 'SSG 랜더스', '한화 이글스', 'NC 다이노스', '롯데 자이언츠', '키움 히어로즈', 'KIA 타이거즈'],
    '축구': ['-- 팀을 선택하세요 --', 'FC 서울', '수원 삼성', '울산 현대', '전북 현대', '포항 스틸러스', '대구 FC', '광주 FC', '제주 유나이티드', '인천 유나이티드', '강원 FC']
  };

  const stadiums = {
    '두산 베어스': ['잠실야구장(주중)', '잠실야구장(금토일/공휴일)'],
    'LG 트윈스': ['잠실야구장(주중)', '잠실야구장(금토일/공휴일)'],
    'KT wiz': ['수원 위즈 파크(주중)', '수원 위즈 파크(금토일/공휴일)'],
    '삼성 라이온즈': ['대구 라이온즈 파크(주중)', '대구 라이온즈 파크(금토일/공휴일)', '포항 야구장'],
    'SSG 랜더스': ['인천 SSG 랜더스필드(주중)', '인천 SSG 랜더스필드(금토일/공휴일)'],
    '한화 이글스': ['대전 한화생명 볼파크(주중)', '대전 한화생명 볼파크(금토일/공휴일)', '청주 야구장'],
    'NC 다이노스': ['울산 문수 야구장(주중)', '울산 문수 야구장(금토일/공휴일)', '창원 NC 파크'],
    '롯데 자이언츠': ['부산 사직 야구장(주중)', '부산 사직 야구장(금토일/공휴일)', '울산 문수 야구장'],
    '키움 히어로즈': ['고척 돔 야구장(주중)', '고척 돔 야구장(금토일/공휴일)'],
    'KIA 타이거즈': ['광주 챔피언스 필드(주중)', '광주 챔피언스 필드(금토일/공휴일)']
  };

  sportSelect.addEventListener('change', () => {
    teamSelect.innerHTML = '';
    const sport = sportSelect.value;
    if (teams[sport]) {
      teams[sport].forEach(team => {
        const opt = document.createElement('option');
        opt.value = team;
        opt.textContent = team;
        teamSelect.appendChild(opt);
      });
    }

    if (sport === '야구') {
      stadiumSelect.style.display = 'inline';
      stadiumInput.style.display = 'none';
    } else {
      stadiumSelect.style.display = 'none';
      stadiumInput.style.display = 'inline';
    }
  });

  teamSelect.addEventListener('change', () => {
    const team = teamSelect.value;
    if (stadiums[team]) {
      stadiumSelect.innerHTML = '';
      stadiums[team].forEach(stadium => {
        const opt = document.createElement('option');
        opt.value = stadium;
        opt.textContent = stadium;
        stadiumSelect.appendChild(opt);
      });
      stadiumSelect.style.display = 'inline';
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { data: sessionData } = await supabase.auth.getUser();
    const userId = sessionData?.user?.id;

    if (!userId) {
      alert("로그인 후 등록할 수 있습니다.");
      return;
    }

    const sport_type = sportSelect.value;
    const team = teamSelect.value;
    const stadium = sport_type === '야구' ? stadiumSelect.value : stadiumInput.value;
    const match_date = document.getElementById('match_date').value;
    const match_time = document.getElementById('match_time').value;
    const seat_grade = document.getElementById('seat_grade').value;
    const seat_number = document.getElementById('seat_number').value;
    const price = parseInt(document.getElementById('price').value);
    const contact_method = document.getElementById('contact_method').value;
    const ticket_count = parseInt(document.getElementById('ticket_count').value);
    const additional_info = document.getElementById('additional_info').value;

    const { data, error } = await supabase
      .from('tickets')
      .insert([{
        sport_type,
        team,
        stadium,
        match_date,
        match_time,
        seat_grade,
        seat_number,
        price,
        contact_method,
        ticket_count,
        additional_info,
        user_id: userId  // 👈 추가됨!
      }]);

    if (error) {
      console.error(error);
      result.textContent = '❌ 티켓 등록 중 오류가 발생했습니다.';
    } else {
      result.textContent = '✅ 티켓이 성공적으로 등록되었습니다!';
      form.reset();
      stadiumSelect.style.display = 'none';
      stadiumInput.style.display = 'none';
      teamSelect.innerHTML = '';
    }
  });
</script>

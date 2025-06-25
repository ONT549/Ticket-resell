
export const stadiumSeats = {
  "잠실야구장": [
    "중앙석(프리미엄/VIP)", "1루 테이블석", "3루 테이블석", "1루 익사이팅존", "3루 익사이팅존",
    "1루 블루석", "3루 블루석", "1루 오렌지석 (응원석)", "3루 오렌지석 (응원석)",
    "1루 레드석", "3루 레드석", "1루 네이비석", "3루 네이비석", "중앙 네이비석", "1루 외야석", "3루 외야석"
  ],
  "고척 돔 야구장": [
    "로얄다이아몬드클럽(R.d-club)", "1층 테이블석", "2층 테이블석", "1루 내야커플석", "3루 내야커플석",
    "1루 외야커플석", "3루 외야커플석", "1루 다크버건디석", "3루 다크버건디석", "1루 버건디석", "3루 버건디석",
    "3층 1루 지정석", "3층 3루 지정석", "3층 중앙 지정석", "4층 1루 지정석", "4층 3루 지정석", "4층 중앙 지정석",
    "1루 외야 일반석", "3루 외야 일반석", "중앙 외야일반석", "외야 패밀리석 (4인)", "외야 패밀리석 (5인)",
    "외야 유아동반석 (2인)", "1루 스카이박스", "3루 스카이박스"
  ],
  "수원 위즈 파크": [
    "포수 뒤 테이블석", "중앙 테이블석", "중앙지정석", "1루 내야테이블석", "3루 내야테이블석",
    "1루 익사이팅석", "3루 익사이팅석", "1루 응원지정석", "3루 응원지정석", "1루 스카이존", "3루 스카이존",
    "외야테이블석", "캠핑존", "1루 외야잔디석", "3루 외야잔디석", "스카이박스"
  ]
};

export function updateSeatOptions(stadiumSelectId, seatSelectId) {
  const stadiumSelect = document.getElementById(stadiumSelectId);
  const seatSelect = document.getElementById(seatSelectId);

  stadiumSelect.addEventListener("change", () => {
    const name = stadiumSelect.value.replace(/\(.*?\)/g, "").trim();
    seatSelect.innerHTML = "";
    if (stadiumSeats[name]) {
      stadiumSeats[name].forEach(seat => {
        const opt = document.createElement("option");
        opt.value = seat;
        opt.textContent = seat;
        seatSelect.appendChild(opt);
      });
    } else {
      seatSelect.innerHTML = '<option value="">선택 가능한 좌석 없음</option>';
    }
  });
}

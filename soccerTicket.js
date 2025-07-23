export function createSoccerTicket(ticket) {
  const container = document.createElement('div');
  container.className = 'ticket';

  const fields = [
    ['경기 날짜:', ticket.match_date],
    ['경기 시간:', ticket.match_time],
    ['경기장:', ticket.stadium],
    ['좌석 등급:', ticket.seat_grade],
    ['좌석 번호:', ticket.seat_number],
    ['티켓 당 가격:', `${ticket.price}원`],
    ['판매 수량:', `${ticket.ticket_count}장`],
    ['연락처:', ticket.contact_method],
    ['추가 설명:', ticket.additional_info || '없음']
  ];

  fields.forEach(([label, value], index) => {
    const strong = document.createElement('strong');
    strong.textContent = label;
    container.appendChild(strong);
    container.append(` ${value}`);
    if (index < fields.length - 1) {
      container.appendChild(document.createElement('br'));
    }
  });

  return container;
}

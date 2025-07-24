export function createTicketCard(ticket) {
  const card = document.createElement('div');
  card.className = 'ticket-card';

  const opponent = document.createElement('div');
  opponent.className = 'ticket-opponent_team';
  opponent.textContent = `vs ${ticket.opponent_team}`;
  card.appendChild(opponent);

  const location = document.createElement('div');
  location.className = 'ticket-location';
  location.textContent = `${ticket.section} | ${ticket.row}열`;
  card.appendChild(location);

  const matchInfo = document.createElement('div');
  matchInfo.className = 'ticket-subinfo';
  matchInfo.textContent = `${ticket.match_date} ${ticket.match_time}`;
  card.appendChild(matchInfo);

  const seatInfo = document.createElement('div');
  seatInfo.className = 'ticket-subinfo';
  seatInfo.textContent = `${ticket.seat_grade} / ${ticket.ticket_count}매 / ${ticket.trade_method}`;
  card.appendChild(seatInfo);

  const price = document.createElement('div');
  price.className = 'ticket-price';
  price.textContent = `${ticket.price.toLocaleString()}원`;
  card.appendChild(price);

  card.addEventListener('click', () => {
    window.location.href = `/payment.html?ticket_id=${ticket.id}`;
  });

  return card;
}

export function createInfoCard(ticket) {
  const card = document.createElement('div');
  card.className = 'ticket-card';

  const title = document.createElement('h3');
  title.textContent = `${ticket.match_date} ${ticket.match_time}`;
  card.appendChild(title);

  const fields = [
    ['좌석 등급:', ticket.seat_grade],
    ['구역:', ticket.section],
    ['열:', ticket.row],
    ['가격:', `${ticket.price.toLocaleString()}원`],
    ['판매 수량:', `${ticket.ticket_count || '-'}장`],
    ['거래 방식:', ticket.trade_method],
    ['설명:', ticket.trade_description || '없음']
  ];

  fields.forEach(([label, value]) => {
    const p = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = label;
    p.appendChild(strong);
    p.append(` ${value}`);
    card.appendChild(p);
  });

  return card;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createTicketCard, createInfoCard };
}

/**
 * @jest-environment jsdom
 */
import { createTicketCard } from '../ticketCard.js';
import { createSoccerTicket } from '../soccerTicket.js';

describe('createTicketCard', () => {
  test('generates correct DOM structure', () => {
    const ticket = {
      id: 1,
      opponent_team: 'Giants',
      section: 'A',
      row: 10,
      match_date: '2024-08-01',
      match_time: '18:00',
      seat_grade: 'VIP',
      ticket_count: 2,
      trade_method: '직거래',
      price: 50000
    };
    const card = createTicketCard(ticket);
    expect(card.className).toBe('ticket-card');
    const texts = Array.from(card.children).map(c => c.textContent);
    expect(texts).toEqual([
      'vs Giants',
      'A | 10열',
      '2024-08-01 18:00',
      'VIP / 2매 / 직거래',
      '50,000원'
    ]);
  });
});

describe('createSoccerTicket', () => {
  test('generates correct DOM elements', () => {
    const ticket = {
      match_date: '2024-08-01',
      match_time: '18:00',
      stadium: 'Seoul',
      seat_grade: 'A',
      seat_number: '1',
      price: 10000,
      ticket_count: 1,
      contact_method: 'email',
      additional_info: 'N/A'
    };
    const div = createSoccerTicket(ticket);
    expect(div.className).toBe('ticket');
    const strongs = Array.from(div.querySelectorAll('strong')).map(el => el.textContent);
    expect(strongs).toEqual([
      '경기 날짜:',
      '경기 시간:',
      '경기장:',
      '좌석 등급:',
      '좌석 번호:',
      '티켓 당 가격:',
      '판매 수량:',
      '연락처:',
      '추가 설명:'
    ]);
  });
});

import { supabase } from './supabaseClient.js';
// `paymentConfig.js` is ignored by Git. Copy `paymentConfig.js.example` locally and provide your own key.
import { PAYMENT_CLIENT_KEY } from './paymentConfig.js';

async function loadTicket() {
  const params = new URLSearchParams(window.location.search);
  const ticketId = params.get('ticket_id');
  const infoDiv = document.getElementById('ticket-info');
  const purchaseBtn = document.getElementById('purchase-btn');

  if (!ticketId) {
    infoDiv.textContent = '티켓 정보가 없습니다.';
    return;
  }

  const { data, error } = await supabase
    .from('tickets')
    .select('*')
    .eq('id', ticketId)
    .single();

  if (error || !data) {
    infoDiv.textContent = '티켓을 불러오는 중 오류가 발생했습니다.';
    return;
  }

  infoDiv.innerHTML = `
    <h2>${data.team} vs ${data.opponent_team}</h2>
    <p>${data.stadium}</p>
    <p>${data.match_date} ${data.match_time}</p>
    <p>${data.seat_grade} / ${data.section} / ${data.row}</p>
    <p><strong>${Number(data.price).toLocaleString()}원</strong></p>
  `;

  purchaseBtn.style.display = 'inline-block';
  purchaseBtn.addEventListener('click', () => requestPayment(data));
}

async function createOrder(ticket) {
  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ticketId: ticket.id, amount: ticket.price })
    });
    if (!res.ok) throw new Error('network');
    const { orderId } = await res.json();
    return orderId;
  } catch (e) {
    console.error('주문 생성 실패:', e);
  }
}

export async function verifyOrder(orderId, paymentKey, amount) {
  try {
    const res = await fetch('/api/orders/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId, paymentKey, amount })
    });
    if (!res.ok) throw new Error('network');
    return await res.json();
  } catch (e) {
    console.error('결제 검증 실패:', e);
  }
}

function requestPayment(ticket) {
  if (!window.TossPayments) {
    alert('결제 모듈을 불러오지 못했습니다.');
    return;
  }

  createOrder(ticket).then(orderId => {
    if (!orderId) return;

    const toss = window.TossPayments(PAYMENT_CLIENT_KEY);
    toss.requestPayment('카드', {
      amount: ticket.price,
      orderId,
      orderName: `${ticket.team} vs ${ticket.opponent_team}`,
      successUrl: `${window.location.origin}/verified.html`,
      failUrl: window.location.href
    }).catch(e => {
      console.error('결제 실패:', e);
    });
  });
}

document.addEventListener('DOMContentLoaded', loadTicket);

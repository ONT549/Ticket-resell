export function validateTicketInputs(priceValue, countValue, resultEl) {
  const price = parseInt(priceValue, 10);
  if (Number.isNaN(price) || price <= 0) {
    resultEl.textContent = '❌ 가격은 양의 정수를 입력해주세요.';
    return false;
  }

  const ticket_count = parseInt(countValue, 10);
  if (Number.isNaN(ticket_count) || ticket_count <= 0) {
    resultEl.textContent = '❌ 수량은 양의 정수를 입력해주세요.';
    return false;
  }

  return { price, ticket_count };
}

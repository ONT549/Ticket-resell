import { validateTicketInputs } from '../validateTicketInputs.js';

describe('validateTicketInputs', () => {
  let resultEl;

  beforeEach(() => {
    resultEl = { textContent: '' };
  });

  test('shows error when price is empty', () => {
    const valid = validateTicketInputs('', '1', resultEl);
    expect(valid).toBe(false);
    expect(resultEl.textContent).toBe('❌ 가격은 양의 정수를 입력해주세요.');
  });

  test('shows error when price contains letters', () => {
    const valid = validateTicketInputs('abc', '1', resultEl);
    expect(valid).toBe(false);
    expect(resultEl.textContent).toBe('❌ 가격은 양의 정수를 입력해주세요.');
  });

  test('shows error when ticket count is empty', () => {
    const valid = validateTicketInputs('1000', '', resultEl);
    expect(valid).toBe(false);
    expect(resultEl.textContent).toBe('❌ 수량은 양의 정수를 입력해주세요.');
  });

  test('shows error when ticket count contains letters', () => {
    const valid = validateTicketInputs('1000', 'abc', resultEl);
    expect(valid).toBe(false);
    expect(resultEl.textContent).toBe('❌ 수량은 양의 정수를 입력해주세요.');
  });
});

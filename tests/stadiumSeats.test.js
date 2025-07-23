/**
 * @jest-environment jsdom
 */
const { updateSeatOptions, stadiumSeats } = require('../stadiumSeats');

describe('updateSeatOptions', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <select id="stadium">
        <option value="잠실야구장">잠실야구장</option>
      </select>
      <select id="seat"></select>
    `;
    updateSeatOptions('stadium', 'seat');
  });

  test('selecting a stadium populates seat options', () => {
    const stadiumSelect = document.getElementById('stadium');
    const seatSelect = document.getElementById('seat');

    stadiumSelect.value = '잠실야구장';
    stadiumSelect.dispatchEvent(new Event('change'));

    const seatTexts = Array.from(seatSelect.querySelectorAll('option')).map(opt => opt.textContent);
    expect(seatTexts).toEqual(stadiumSeats['잠실야구장']);
  });
});

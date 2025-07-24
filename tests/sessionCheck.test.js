/**
 * @jest-environment jsdom
 */
import { jest } from '@jest/globals';

const mockGetUser = jest.fn();
jest.mock('../supabaseClient.js', () => ({
  __esModule: true,
  supabase: { auth: { getUser: mockGetUser } }
}));

describe('sessionCheck', () => {
  beforeEach(() => {
    document.body.innerHTML = '<a id="login-button"></a>';
    jest.resetModules();
  });

  test('shows mypage when logged in', async () => {
    mockGetUser.mockResolvedValue({ data: { user: { email: 'test@test.com' } } });
    await import('../sessionCheck.js');
    window.dispatchEvent(new Event('DOMContentLoaded'));
    await Promise.resolve();
    const btn = document.getElementById('login-button');
    expect(btn.textContent).toBe('마이페이지');
    expect(btn.getAttribute('href')).toBe('mypage.html');
  });

  test('shows login when not authenticated', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null } });
    await import('../sessionCheck.js');
    window.dispatchEvent(new Event('DOMContentLoaded'));
    await Promise.resolve();
    const btn = document.getElementById('login-button');
    expect(btn.textContent).toBe('로그인 / 회원가입');
    expect(btn.getAttribute('href')).toBe('login.html');
  });
});

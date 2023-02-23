/**
 * Convenience functions for centralized routing
 * NOTE: These are represented as functions to handle optional route and query params if/when needed
 */
export type LogoutReason = 'auth_error' | 'auth_timeout';

// Public Routes
export const login = (): string => '/api/auth/login';
export const logout = (reason?: LogoutReason) : string => `/api/auth/logout${reason ? `?reason=${encodeURIComponent(reason)}` : ''}`;
export const loggedOut = (): string => '/logged-out';
export const authenticationFailed = (): string => '/authentication-failed';
export const authenticationTimeout = (): string => '/authentication-timeout';

// Authenticated Routes
export const home = (): string => '/';

export default {
  login,
  logout,
  loggedOut,
  authenticationFailed,
  authenticationTimeout,
  home,
};

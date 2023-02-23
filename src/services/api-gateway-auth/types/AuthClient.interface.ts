import { AuthToken } from './AuthToken';
/**
 * AuthCLient interface consumed by API Clients
 */
export interface AuthClient {
  /**
   * Bearer token value
   */
  token?: AuthToken;
  /**
   * Whether the client is authenticated or not
   */
  isAuthenticated: () => boolean;
  /**
   * Function to handle authenticating.
   * Returns bearer token object.
   */
  authenticate: () => Promise<AuthToken> | AuthToken;
}

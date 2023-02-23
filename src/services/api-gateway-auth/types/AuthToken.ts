/* eslint-disable camelcase */
export interface AuthToken {
  access_token: string;
  token_type?: string; // NOTE: enum?
  expires_in?: number;
  scope?: string;
}

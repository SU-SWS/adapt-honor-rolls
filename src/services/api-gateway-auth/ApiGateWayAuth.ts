import axios, { AxiosResponse } from 'axios';
import { AuthClient, AuthTokenDto, AuthToken } from './types';

export interface ApiGatewayAuthConfig {
  url?: string;
  clientId?: string;
  clientSecret?: string;
  token?: AuthToken;
}

export class ApiGatewayAuth implements AuthClient {
  private url: string;

  private clientId: string;

  private clientSecret: string;

  private grantType: string;

  public token?: AuthToken;

  constructor(config: ApiGatewayAuthConfig = {}) {
    this.url = config.url || process.env.API_GATEWAY_AUTH_URL || 'http://localhost:8001/mock-auth';
    this.clientId = config.clientId || process.env.API_GATEWAY_AUTH_CLIENT_ID;
    this.clientSecret = config.clientSecret || process.env.API_GATEWAY_AUTH_CLIENT_SECRET;
    this.token = config.token;
    // NOTE: Configurable?
    this.grantType = 'client_credentials';
  }

  // NOTE: Store authentication time and compare against token.expires_in?
  public isAuthenticated = (): boolean => !!this.token;

  public authenticate = async (): Promise<AuthToken> => {
    const params = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: this.grantType,
    };

    const result: AxiosResponse<AuthToken, any> = await axios.post<AuthTokenDto>(this.url, new URLSearchParams(params));
    this.token = result.data;

    return this.token;
  };
}

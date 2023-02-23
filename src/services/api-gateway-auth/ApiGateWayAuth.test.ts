import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { AuthToken } from './types';
import { ApiGatewayAuth } from './ApiGateWayAuth';

describe('services/api-gateway-auth', () => {
  const url = 'https://www.wherever.com/oauth/token';
  const clientId = 'mock-client-id';
  const clientSecret = 'mock-client-secret';
  const token: AuthToken = { access_token: 'mock-bearer-token' };
  const config = { url, clientId, clientSecret };
  let clientMock: MockAdapter;

  beforeEach(() => {
    clientMock = new MockAdapter(axios);
    clientMock.onAny().reply(200, token);
  });

  it('should authenticate as configured', async () => {
    const client = new ApiGatewayAuth(config);

    expect(client.isAuthenticated()).toBeFalsy();
    const result = await client.authenticate();
    expect(clientMock.history.post).toHaveLength(1);
    expect(clientMock.history.post[0]).toHaveProperty('url', url);
    const params = clientMock.history.post[0].data;
    expect(params).toContain(`client_id=${clientId}`);
    expect(params).toContain(`client_secret=${clientSecret}`);
    expect(result).toEqual(token);
    expect(client.isAuthenticated()).toBeTruthy();
  });

  it('should preload tokens correctly', () => {
    const client = new ApiGatewayAuth({ ...config, token });

    expect(client.token).toEqual(token);
    expect(client.isAuthenticated()).toBeTruthy();
  });
});

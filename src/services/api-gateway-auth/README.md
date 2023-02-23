# API Gateway Auth Client

Basic Auth client for API Gateway

## Usage

Import and instantiate ApiGatewayAuth clients in any server side code to access the API.

```typescript
import { ApiGatewayAuth } from './api-gateway-auth';

const auth = new ApiGatewayAuth({
  url: 'htps://api-dev.stanford.edu/oauth2provider/token',
  clientId: 'application-client-id',
  clientSecret: 'application-client-secret',
  /*
  You can additionally preload the authClient with a pre-fetched bearer token o avoid additional authenticate requests
  token: accessToken,
  */
});

const main = async () => {
  const accessToken = await auth.authenticate();
  
  console.log(auth.isAuthenticated());
  // true
  console.log(auth.token);
  // { token: 'bearer-access-token', expires_in: 86400, token_type: 'Bearer' }
}
```

## Configuration

Configuration for ApiGatewayAuth client can be done globally through the env or on a per-instance level with config objects.

### Global Configuration

```bash
# .env
API_GATEWAY_AUTH_URL="htps://api-dev.stanford.edu/oauth2provider/token"
API_GATEWAY_AUTH_CLIENT_ID="application-client-id"
API_GATEWAY_AUTH_CLIENT_SECRET="application-client-secret"
```

### Per-instance configuration

Pass config values to the constructor when creating a new ApiGatewayAuth instance ([See usage](#usage)).
Instance level configuration overrides global configuration for that instance.

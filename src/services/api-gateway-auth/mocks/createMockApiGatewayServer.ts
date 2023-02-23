/* eslint-disable no-console */
import express from 'express';
import { AuthTokenDto } from '../types/Auth.dto';
import { logger } from '../../megaprofile/scripts/logger';

/**
 * Mock API Gateway auth
 */
export const createMockApiGatewayServer = async (router: express.Router) => {
  // Mock the api-gateway auth endpoint
  router.post('/auth', express.json(), (req, res) => {
    logger.debug('mock authenticating...');
    const data: AuthTokenDto = {
      access_token: 'mock-bearer-token',
      token_type: 'bearer',
      expires_in: 60 * 60 * 24,
      scope: 'mock:scope:read',
    };
    res.json(data);
  });

  return router;
};

import { defineConfig } from 'cypress';

const { AdaptAuth } = require('adapt-auth-sdk');
require('dotenv').config();

export default defineConfig({
  projectId: 'adapt-honor-rolls',
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  numTestsKeptInMemory: 10,
  viewportHeight: 900,
  viewportWidth: 1440,
  video: true,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/test-results.xml',
  },
  retries: {
    runMode: 2,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('task', {
        // Sign jwt token for mocking auth session
        signToken: (user) => {
          const auth = new AdaptAuth();
          const token = auth.signToken(user);
          return token;
        },
      });
    },
  },
});

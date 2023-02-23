Localhost set up
---

# Set up your localhost

Please follow the following steps.

```
git clone git@github.com:SU-SWS/adapt-honor-rolls
cd adapt-honor-rolls
nvm install # First time only
nvm use
npm ci
cp example.env .env
--- Manually add the vault client and secret to the .env file ---
npm run vault:local
npm run dev
```

# Changing Megaprofile API Gateway source

TBD

# Changing SSO login provider from dev to prod

TBD

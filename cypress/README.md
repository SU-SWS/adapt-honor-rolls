# Cypress Integration Testing

We're currently using [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress) for our applications
integration test suite. Please see the Cypress documentation to discover their testing [commands API](https://docs.cypress.io/api/commands/and)
as well as [example recipes](https://docs.cypress.io/examples/examples/recipes) of how to write effective integration tests.


## Local Configuration

To run cypress tests locally you'll need to setup your environment in a specific way.

```bash
# .env
NEXT_PUBLIC_CYPRESS_INTEGRATION="true"
IDCS_URL="http://localhost:8001/idcs"
MEGAPROFILE_URL="http://localhost:8001/megaprofile
ADAPT_AUTH_SESSION_SECRET="CYPRESS_JWT_SECRET"
```

This will ensure that the mocked auth login command
in the cypress environment aligns with what our adapt-auth-sdk expects for its session secret.

Now you'll need to run the following commands:
```shell
# Start next and our mock-server
> npm run dev-mock
# Open Cypress
> npm run cy
```

This will start up our mock-server, the next app that will now integrate with our mock-server and
the Cypress console to run our integration tests.

## Github Workflow

Integration tests run as a [github workflow](../.github/workflows/integration.yml) for all pull_requests.
Our integration tests will create video and screenshot artifacts that get saved to the workflow for viewing
in case any of the tests fail. These artifacts are available from the Integration workflow summary page in github.
NOTE: Screenshot artifacts are only created when integration tests fail.

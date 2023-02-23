import React from 'react';
import {
  Container,
  Cta,
  Heading,
  Paragraph,
} from '../components';
import { useAuth } from '../hooks/useAuth';
import routes from '../routes';

const AuthTimeout = () => {
  // Redirect authenticated users
  useAuth({ authenticatedRedirect: routes.home() });

  return (
    <Container className="su-flex su-justify-center su-text-center">
      <div className="su-rs-mt-9 su-rs-mb-10">
        <Paragraph
          className="su-text-17 md:su-text-20 su-my-0"
        >
          Session expired
        </Paragraph>
        <Heading
          as="h1"
          size={2}
          font="serif"
          className="su-mt-6 su-rs-mb-neg2"
        >
          You’ve been logged out.
        </Heading>
        <Paragraph variant="card" className="su-my-0">
          Your session has now ended for your security. <br className="su-hidden sm:su-block" />Please log in again to continue.
        </Paragraph>

        <Cta
          variant="red"
          href={routes.home()}
          icon="external"
          animate="top-right"
          size="logInButton"
          className="!su-bg-digital-red hocus:!su-bg-digital-red-dark su-inline-block su-rs-mt-2"
        >
          Log in
        </Cta>
      </div>
    </Container>
  );
};

export default AuthTimeout;

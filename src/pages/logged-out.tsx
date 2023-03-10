import React from 'react';
import { Container } from '../components/Container';
import { Paragraph } from '../components/Typography/Paragraph';
import { MainLayout } from '../components/Layout/MainLayout';

const LoggedOut = () => (
  <Container width="honor">
    <MainLayout
      title="Logged Out"
      heading="You are now logged out of Honor Rolls"
      className="su-rs-pt-9"
    >
      <Paragraph variant="ma-intro" className="su-max-w-prose-wide">
        Thank you for visiting. We&lrquo;ll see you next time.
      </Paragraph>
      <Paragraph variant="ma-intro" className="su-max-w-prose-wide">
        Your Stanford Pass session will remain active to allow you to visit other alumni and donor properties.
        To completely log out, please quit your browser application.
      </Paragraph>
    </MainLayout>
  </Container>
);

export default LoggedOut;

import React from 'react';
import {
  Container,
  Cta,
  Heading,
  Paragraph,
} from '../components';
import { commonExternalLinks as links } from '../utils/variables';
import routes from '../routes';

const AuthenticationFailedPage = () => (
  <Container width="honor" className="su-grid su-grid-cols-12 su-rs-pt-9 su-rs-pb-10 su-bg-[url('/images/403.jpg')] su-bg-no-repeat su-bg-cover su-bg-left su-items-start su-grow">
    <div className="su-bg-gradient-to-r su-from-[#070B0A] su-to-[#070B0A99] su-rs-mb-8 md:su-mb-0 sm:su-rs-mt-6 md:su-rs-mt-2 su-col-span-12 sm:su-col-span-9 md:su-col-span-6 xl:su-col-span-5 2xl:su-col-span-4 su-rs-p-3">
      <Heading
        as="h1"
        size={2}
        weight="semibold"
        className="su-text-white"
      >
        403 access denied
      </Heading>
      <Paragraph variant="ma-intro" className="su-text-white">
        Sorry, the page you are trying to access requires authorization but something went wrong.
      </Paragraph>

      <Paragraph variant="ma-intro" className="su-text-white su-mb-0">
        You can try again or, if you feel you’re viewing this message in error, you can&nbsp;
        <Cta
          href={links.ticket}
          variant="link"
          iconProps={{ className: 'su-text-lagunita-40' }}
          className="hocus:su-no-underline !su-text-lagunita-40"
        >
          submit a help ticket
        </Cta>
      </Paragraph>

      <Cta
        variant="back"
        href={routes.home()}
        icon="arrow-left"
        iconPosition="left"
        animate="left"
        size="text-18"
        iconProps={{ className: '!su-text-digital-red-light' }}
        className="!su-font-normal !su-text-white su-rs-mt-4 su-inline-block"
      >
        Go back home
      </Cta>
    </div>
  </Container>
);

export default AuthenticationFailedPage;

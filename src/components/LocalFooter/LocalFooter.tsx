import React from 'react';
import { Cta } from '../Cta';
import { Container } from '../Container/Container';
import { Grid } from '../Grid/Grid';
import { Link } from '../Link/Link';
import { SAALogo } from '../Logo/SAALogo';
import * as links from './LocalFooterLinkGroups';
import routes from '../../routes';
import * as styles from './LocalFooter.styles';

export const LocalFooter = () => (
  <div className={styles.root}>
    <Container width="honor">
      <Link href={routes.home()} className={styles.logoLink}>
        <div className={styles.saaLogoWrapper}>
          <SAALogo width="230" height="34" />
        </div>
        <span className={styles.honorLogo}>Honor</span>
      </Link>
    </Container>
    <Container
      as="nav"
      width="honor"
      aria-label="local footer menu"
      className={styles.contentWrapper}
    >
      <Grid lg={2} className={styles.grid}>
        <ul className={styles.linkList}>
          {links.callToActionLinks.map(({ text, href }) => (
            <li key={text}>
              <Cta
                href={href}
                variant="footer-featured"
                icon="arrow-right"
                animate="right"
              >
                {text}
              </Cta>
            </li>
          ))}
        </ul>
        <div>
          <Grid sm={2} gap="none" className="sm:su-gap-xs lg:su-gap-lg xl:su-gap-xl 2xl:su-gap-2xl">
            <ul className={styles.linkList}>
              {links.featureLinks.map(({ text, href }) => (
                <li key={text}>
                  <Cta
                    variant="footer"
                    icon={null}
                    href={href}
                    className={styles.link}
                  >
                    {text}
                  </Cta>
                </li>
              ))}
            </ul>
            <ul className={styles.linkList}>
              {links.stanfordSchoolLinks.map(({ text, href }) => (
                <li key={text}>
                  <Cta
                    variant="footer"
                    icon={null}
                    href={href}
                    className={styles.link}
                  >
                    {text}
                  </Cta>
                </li>
              ))}
            </ul>
          </Grid>
          <ul className={styles.legalLinkList}>
            {links.legalLinks.map(({ text, href }) => (
              <li key={text} className={styles.legalListItem}>
                <Cta
                  variant="footer"
                  icon={null}
                  href={href}
                  className={styles.link}
                >
                  {text}
                </Cta>
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    </Container>
  </div>
);

import React from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import { Cta } from '../Cta/Cta';
import { FlexBox } from '../FlexBox/FlexBox';
import { commonExternalLinks as links } from '../../utils/variables';
import * as styles from './UtilityNav.styles';

export type UtilityNavProps = {
  className?: ClassValue;
};

export const UtilityNav = ({ className, ...rest }: UtilityNavProps) => (
  <FlexBox
    as="nav"
    aria-label="Utility Menu"
    alignItems="center"
    className={dcnb(styles.root, styles.mobileRoot, className)}
    {...rest}
  >
    <ul className={dcnb(styles.menu, styles.mobileMenu)}>
      <li className={styles.menuItem}>
        <Cta
          variant="masthead"
          href={links.saaCheckEmail}
          icon="external"
        >
          Email
        </Cta>
      </li>
      <li className={styles.menuItem}>
        <Cta
          variant="masthead"
          href={links.uatMyAccount}
          icon="external"
        >
          My Account
        </Cta>
      </li>
    </ul>
  </FlexBox>
);

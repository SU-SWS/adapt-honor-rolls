import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { SAALogo } from '../Logo/SAALogo';
import { FlexBox } from '../FlexBox/FlexBox';
import { Link } from '../Link/Link';
import { UtilityNav } from '../UtilityNav/UtilityNav';
import { UserMenu } from '../UserMenu/UserMenu';
import routes from '../../routes';
import * as styles from './Masthead.styles';

export const Masthead = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="su-bg-saa-black">
      <UtilityNav className={styles.utilityNavMobile} />
      <FlexBox
        as="header"
        justifyContent="between"
        className={styles.root}
      >
        <FlexBox className={styles.logoBlock}>
          <Link href={routes.home()} className={styles.logoLink}>
            <FlexBox className={styles.saaLogoBlock}>
              <FlexBox className={styles.saaLogoWrapper}>
                <SAALogo width="230" height="34" />
              </FlexBox>
            </FlexBox>
            <FlexBox className={styles.honorLogoWrapper}>
              Honor Rolls
            </FlexBox>
          </Link>
        </FlexBox>
        <FlexBox alignItems="center" className={styles.blackWrapper}>
          <UtilityNav className={styles.utilityNav} />
          {isAuthenticated && (
            <UserMenu className={styles.userMenu} />
          )}
        </FlexBox>
      </FlexBox>
    </div>
  );
};

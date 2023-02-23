import React from 'react';
import { deleteCookie } from 'cookies-next';
import { Cta, CtaGroup } from '../Cta';
import { FlexBox } from '../FlexBox';
import { Text } from '../Typography';
import { UserProfileImage } from '../UserProfileImage';
import { useAuth, useContact } from '../../hooks';
import { commonExternalLinks as links } from '../../utils/variables';
import * as styles from './UserMenu.styles';
import { contactDigitalName } from '../../utils/contact';

type UserMenuContentProps = {
  handleMenuClose: () => void;
};

export const UserMenuContent = ({ handleMenuClose }: UserMenuContentProps) => {
  const { contact, isLoading } = useContact();
  const { logout } = useAuth();
  const username: string = contact && !isLoading ? contactDigitalName(contact) : '';

  const handleLogout = () => {
    logout();
    deleteCookie('coveo-search-token');
    handleMenuClose();
  };

  return (
    <nav aria-label="User menu">
      <FlexBox alignItems="center" className={styles.menuHeader}>
        <div className={styles.circleInMenu}>
          <UserProfileImage
            aria-hidden
            contact={contact}
            imageColor="digital-red-xlight"
            initialColor="digital-red-xlight"
            initialSize="userMenu"
            sizes="54px"
          />
        </div>
        <div>
          <Text variant="ma-big" weight="semibold" className={styles.nameInMenu}>
            {username}
          </Text>
          <CtaGroup variant="profile" className={styles.ctaGroup}>
            <Cta
              href="directory.alumni.stanford.edu/profiles/me"
              onClick={handleMenuClose}
              variant="user-header"
              icon={null}
            >
              View profile
            </Cta>
            <Cta
              href={links.uatMyAccountEditProfile}
              onClick={handleMenuClose}
              variant="user-header"
              icon={null}
            >
              Edit
            </Cta>
          </CtaGroup>
        </div>
      </FlexBox>
      <ul className={styles.menu}>
        <li>
          <Cta
            href={links.uatMyAccount}
            onClick={handleMenuClose}
            variant="user"
            icon="arrow-right"
            animate="right"
          >
            My Account
          </Cta>
        </li>
        <li>
          <Cta
            href={links.webGivingHistory}
            onClick={handleMenuClose}
            variant="user"
            icon="arrow-right"
            animate="right"
          >
            My Giving
          </Cta>
        </li>
      </ul>
      <ul className={styles.menu2}>
        <li>
          <Cta
            href={links.saaHelp}
            onClick={handleMenuClose}
            variant="user-light"
            icon={null}
          >
            Help
          </Cta>
        </li>
        <li>
          <Cta
            onClick={handleLogout}
            variant="user-light"
          >
            Log out
          </Cta>
        </li>
      </ul>
    </nav>
  );
};

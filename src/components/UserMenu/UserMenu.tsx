import React, { useState, useRef } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import MUISwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Cta } from '../Cta/Cta';
import { Text } from '../Typography';
import { UserProfileImage } from '../UserProfileImage';
import { UserMenuContent } from './UserMenuContent';
import {
  useContact,
  useEscape,
  useMediaQuery,
  useOnClickOutside,
} from '../../hooks';
import { breakpoints } from '../../utils/variables';
import * as styles from './UserMenu.styles';
import { contactDigitalName } from '../../utils/contact';

export interface UserMenuProps {
  className?: ClassValue;
}

export const UserMenu = ({ className }: UserMenuProps) => {
  const { contact, isLoading } = useContact();
  const digitalName: string = contact && !isLoading ? contactDigitalName(contact) : '';
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const toggleMenu = (): void => setMenuOpened(!menuOpened);
  const handleMenuClose = () => setMenuOpened(false);
  const showGreeting: boolean = useMediaQuery(`(min-width: ${breakpoints.xl}px)`);
  // For a11y and speech input, the aria label should start with the visible text,
  // ie, the greeting when it becomes visible at XL breaipoint
  const buttonAriaLabel: string = `${showGreeting ? `Hi, ${digitalName} - ` : ''}${menuOpened ? 'Close' : 'Open'} user menu`;
  const isDesktop: boolean = useMediaQuery(`(min-width: ${breakpoints.lg}px)`);

  useOnClickOutside(menuRef, () => setMenuOpened(false));

  // If menu is open, close on escape and return focus to the button
  useEscape(() => {
    if (isDesktop && menuOpened) {
      setMenuOpened(false);
      buttonRef.current?.focus();
    }
  });

  if (!contact || isLoading) {
    return null;
  }

  return (
    <>
      <div ref={isDesktop ? menuRef : null} className={dcnb(styles.root, className)}>
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpened}
          aria-label={buttonAriaLabel}
          className={styles.button}
          ref={isDesktop ? buttonRef : null}
        >
          <Text as="span" variant="ma-body" color="black-10" className={styles.greeting}>
            Hi, {digitalName}
          </Text>
          <div className={styles.circle}>
            <UserProfileImage
              aria-hidden
              contact={contact}
              sizes="32px"
              imageColor="digital-red-xlight"
              initialColor="digital-red-xlight"
              initialSize="masthead"
            />
          </div>
        </button>
        {/* Render regular dropdown menu on desktop */}
        {isDesktop && (
          <div
            className={styles.menuWrapper({ menuOpened })}
            aria-hidden={!menuOpened}
          >
            <UserMenuContent handleMenuClose={handleMenuClose} />
          </div>
        )}
      </div>
      {/* Render menu content inside Drawer on mobile */}
      {!isDesktop && (
        <MUISwipeableDrawer
          anchor="right"
          open={menuOpened}
          onOpen={() => setMenuOpened(true)}
          onClose={() => setMenuOpened(false)}
          classes={{ paper: styles.drawer }}
        >
          <div className={styles.closeButtonWrapper}>
            <Cta
              variant="close-x"
              onClick={() => setMenuOpened(false)}
              className={styles.closeButton}
            />
          </div>
          <div className={styles.menuWrapperMobile}>
            <UserMenuContent handleMenuClose={handleMenuClose} />
          </div>
        </MUISwipeableDrawer>
      )}
    </>
  );
};

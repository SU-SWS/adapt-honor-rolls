import React from 'react';
import { GlobalFooter } from '../GlobalFooter';
import { LocalFooter } from '../LocalFooter';
import { useAuth } from '../../hooks/useAuth';

export const Footer = () => {
  const { isAuthenticated } = useAuth();

  return (
    <footer className="su-relative su-w-full su-grow-0">
      {isAuthenticated && <LocalFooter />}
      <GlobalFooter />
    </footer>
  );
};

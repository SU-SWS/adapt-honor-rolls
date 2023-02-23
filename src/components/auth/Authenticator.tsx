import React, { ReactNode } from 'react';
import Cookies from 'js-cookie';
import { useAuth } from '../../hooks/useAuth';
import { AuthIdleTimeoutOverlay } from './AuthIdleTimeoutOverlay';

export interface AuthenticatorProps {
  children?: ReactNode;
}

/**
 * Simple auth wrapper to initialize auth
 * NOTE: This component consumes redux context and thus must live below the redux Provider in the component hierarchy
 */
export const Authenticator = ({ children }: AuthenticatorProps) => {
  console.log('All the cookies to authenticator', Cookies.get());
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated && <AuthIdleTimeoutOverlay />}
      {children}
    </>
  );
};

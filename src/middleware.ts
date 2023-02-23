/* eslint-disable no-console */
/* eslint-disable consistent-return */
import { NextMiddleware, NextResponse } from 'next/server';
import { validateSessionCookie } from 'adapt-auth-sdk/dist/jwt';

export const middleware: NextMiddleware = async (req, ...rest) => {
  // NOTE: Bypass middleware auth during integration testing
  if (process.env.NEXT_PUBLIC_CYPRESS_INTEGRATION === 'true') {
    return null;
  }

  // Pages only
  // NOTE: We could do more investigation regarding preserving NextRequest objects between
  // middleware calls and potentially remove our reliance on next-connect for authorization
  const {
    pathname,
    search,
    hash,
  } = req.nextUrl;
  const fullPath = `${pathname}${search}${hash}`;
  if (!/(^\/(api|_next|static|image|favicon)|\.(.*)$)/.test(pathname)) {
    // Only redirect unauthorized on "non-public" routes
    const publicRoutes = [
      '/auth',
      '/authentication-failed',
      '/authentication-timeout',
      '/logged-out',
      '/403',
      '/404',
    ];

    if (!publicRoutes.includes(pathname)) {
      try {
        await validateSessionCookie(req);
      } catch (err) {
        console.error('Unauthorized User in Middleware', err);
        // Unauthorized!
        const url = req.nextUrl.clone();
        url.pathname = '/api/auth/login';
        url.search = `?final_destination=${encodeURIComponent(fullPath)}`;
        return NextResponse.redirect(url);
      }
    }
  }
};

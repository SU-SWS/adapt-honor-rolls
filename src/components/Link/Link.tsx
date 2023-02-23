import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

/**
 * Simple Next Link Wrapper
 */

export type LinkProps = NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      // Destructure NextLinkProps
      href,
      as,
      replace,
      scroll,
      shallow,
      passHref,
      prefetch,
      locale,
      children,
      // And pass the rest to the anchor
      ...anchorProps
    },
    ref
  ) => (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      ref={ref}
      {...anchorProps}
    >
      {children}
    </NextLink>
  )
);

import React from 'react';
import Image, { ImageProps } from 'next/legacy/image';
import saaLogo from '../../images/saa-logo-white.svg';

export type SAALogoProps = Omit<ImageProps, 'src' | 'alt' | 'priority'> & {
  className?: string;
}

export const SAALogo = ({
  className,
  ...rest
}: SAALogoProps) => (
  <Image
    {...rest}
    priority
    src={saaLogo}
    alt="Stanford Alumni Association Logo"
    className={className}
  />
);

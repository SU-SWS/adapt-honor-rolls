import React, { HTMLAttributes, ReactNode } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';

export interface CardProps {
  as?: keyof HTMLElementTagNameMap;
  rounded?: boolean;
  color?: 'fog-light' | 'white';
  children?: ReactNode;
  className?: ClassValue;
}

export const Card = ({
  as = 'div',
  rounded = true,
  color = 'white',
  children,
  className,
  ...props
}: CardProps & HTMLAttributes<HTMLElement>) => React.createElement(
  as,
  {
    className: dcnb(
      'su-card su-border su-border-black-10 su-break-words',
      rounded ? 'su-rounded' : '',
      color === 'white' ? 'su-bg-white' : 'su-bg-fog-light',
      className
    ),
    ...props,
  },
  children
);

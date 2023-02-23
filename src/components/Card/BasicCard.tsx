import React from 'react';
import { Card, CardProps } from './Card';

export interface BasicCardProps extends CardProps {}

/**
 * Basic card component extends our existing card with more default style props
 */
export const BasicCard = ({ className, ...rest }: BasicCardProps) => (
  <Card
    {...rest}
    className={`${className} su-rounded su-rs-py-1 su-rs-px-2 su-shadow-md`}
  />
);

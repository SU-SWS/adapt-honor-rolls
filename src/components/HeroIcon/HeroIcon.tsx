import React from 'react';
import { ClassValue, dcnb } from 'cnbuilder';
import { SrOnlyText } from '../SrOnlyText';
import { iconMap, iconBaseStyle } from './HeroIcon.styles';

export type IconType = keyof typeof iconMap | null;

export type HeroIconProps = {
  icon?: IconType;
  noBaseStyle?: boolean;
  srText?: string;
  className?: ClassValue;
};

export const HeroIcon = ({
  icon = null,
  noBaseStyle,
  srText,
  className,
  ...props
}: HeroIconProps & React.ComponentProps<'svg'>) => {
  const Icon = icon && iconMap[icon];

  // Set default base style so icon has reasonable size if used out of the box
  // noBaseStyle boolean allows for user to not attach any base styles if needed
  const baseStyle = noBaseStyle ? '' : iconBaseStyle[icon] || iconBaseStyle.default;
  const heroIconStyle = dcnb('su-transition', baseStyle);

  return icon && (
    <>
      <Icon aria-hidden className={dcnb(heroIconStyle, className)} {...props} />
      {srText && <SrOnlyText srText={srText} />}
    </>
  );
};

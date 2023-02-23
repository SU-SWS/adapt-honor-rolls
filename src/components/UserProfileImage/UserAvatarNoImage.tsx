import React from 'react';
import { dcnb } from 'cnbuilder';
import { FlexBox } from '../FlexBox';
import { SrOnlyText } from '../SrOnlyText';
import * as styles from './UserProfileImage.style';

export interface UserAvatarNoImageProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: string;
  borderWidth?: styles.BorderWidthType;
  initialColor?: styles.InitialColorType;
  initialSize?: styles.InitialSizeType;
  onClick?: () => void;
  className?: string;
  srText?: string;
}

export const UserAvatarNoImage = ({
  initial = '?',
  borderWidth = 2,
  initialColor = 'grey',
  initialSize = 'personCard',
  onClick,
  className,
  srText,
  ...rest
}: UserAvatarNoImageProps) => (
  <FlexBox
    alignItems="center"
    justifyContent="center"
    className={dcnb(styles.initialCircle({ borderWidth, initialColor }), className)}
    {...rest}
  >
    <div className={styles.initialText(initialColor, initialSize)}>{initial}</div>
    {srText && (
      <SrOnlyText srText={srText} />
    )}
  </FlexBox>
);

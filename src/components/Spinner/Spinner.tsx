import React from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material';
import { FlexBox } from '../FlexBox';
import { ColorVariant } from './Spinner.levers';
import * as styles from './Spinner.style';

export interface SpinnerProps extends Pick<CircularProgressProps, 'size'> {
  color?: ColorVariant;
}

/**
 * Basic loading spinner
 */
export const Spinner = ({
  color = 'default',
  size = 36,
  ...rest
}: SpinnerProps) => (
  <FlexBox className={styles.wrapper} aria-hidden>
    <CircularProgress
      variant="determinate"
      className={styles.background}
      size={size}
      thickness={9}
      value={100}
      aria-hidden
    />
    <CircularProgress
      {...rest}
      className={styles.root({ color })}
      size={size}
      thickness={9}
      aria-hidden
    />
  </FlexBox>
);

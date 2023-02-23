import React from 'react';
import { Overlay, OverlayProps } from './Overlay';
import { Modal } from './Modal';
import { Spinner, SpinnerProps } from '../Spinner';
import { FlexBox } from '../FlexBox';
import { Text } from '../Typography';
import * as styles from './LoadingOverlay.style';

export interface LoadingOverlayProps extends OverlayProps {
  label?: string;
  size?: SpinnerProps['size'];
  color?: SpinnerProps['color'];
}

export const LoadingOverlay = ({
  label = 'Loading...',
  size = 36,
  color = 'default',
  ...rest
}: LoadingOverlayProps) => (
  <Overlay ariaLabelledBy="loading-modal-label" {...rest}>
    <Modal data-test="loadingOverlay" padding="small">
      <FlexBox alignItems="center" justifyContent="center">
        <Spinner size={size} color={color} />
        {label && (
          <Text variant="ma-intro" className={styles.label} id="loading-modal-label">{label}</Text>
        )}
      </FlexBox>
    </Modal>
  </Overlay>
);

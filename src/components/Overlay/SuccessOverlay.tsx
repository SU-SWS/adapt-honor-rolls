import React from 'react';
import { useRouter } from 'next/router';
import { Cta, CtaGroup } from '../Cta';
import { FlexBox } from '../FlexBox';
import { HeroIcon } from '../HeroIcon/HeroIcon';
import { Heading, Paragraph } from '../Typography';
import { Overlay } from './Overlay';
import { Modal } from './Modal';
import * as styles from './SuccessOverlay.style';

export interface SuccessOverlayProps {
  /**
   * Success message content
   */
  message?: React.ReactNode;
  /**
   * Whether to display an additional message warning the user of a delay in updating their Honor profile
   */
  showDelayWarning?: boolean;
  /**
   * Acknolwedge button label
   */
  label?: React.ReactNode
  /**
   * Whether to display the success overlay or not
   */
  open?: boolean;
  /**
   * Close handler for overlay
   */
  onAcknowledgeSuccess?: () => void;
  /**
   * Custom close handler if different from onAcknowledgeSuccess
   */
  onClose?: () => void;
  /**
   * Optional close timeout (in milliseconds)
   */
  closeTimeout?: number;
}

/**
 * Basic success acknowlegement overlay.
 */
export const SuccessOverlay = ({
  message = 'Your information successfully updated!',
  showDelayWarning,
  label = 'Okay, thanks',
  open,
  onAcknowledgeSuccess = () => undefined,
  onClose = () => undefined,
  closeTimeout,
}: SuccessOverlayProps) => {
  const { pathname } = useRouter();

  // If a user makes an edit on the Profile page, we display the Honor site update delay warning
  if (pathname.endsWith('profile')) {
    showDelayWarning = true;
  }

  return (
    <Overlay
      closeTimeout={closeTimeout}
      open={open}
      onClose={onAcknowledgeSuccess || onClose}
      closeOnEsc
      closeOnClickOverlay
      ariaLabelledBy="success-overlay-message"
    >
      <Modal data-test="successOverlay" onClose={onAcknowledgeSuccess || onClose}>
        <FlexBox alignItems="start" justifyContent="center">
          <FlexBox alignItems="center" justifyContent="center" className={styles.icon}>
            <HeroIcon icon="check" />
          </FlexBox>
          <div>
            <Heading
              variant="ma-intro"
              weight="regular"
              tracking="normal"
              align="left"
              className={styles.heading}
              id="success-overlay-message"
            >
              {message}
            </Heading>
            {showDelayWarning && (
              <Paragraph align="left" variant="ma-intro" weight="semibold" className={styles.delay}>
                Please note, your changes may take up to 5min to be visible in the Alumni Honor.
              </Paragraph>
            )}
          </div>
        </FlexBox>
        <CtaGroup variant="modal">
          <Cta data-test="acknowledgeBtn" onClick={onAcknowledgeSuccess || onClose}>
            {label}
          </Cta>
        </CtaGroup>
      </Modal>
    </Overlay>
  );
};

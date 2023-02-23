import React from 'react';
import { Cta, CtaGroup } from '../Cta';
import { Modal } from './Modal';
import { Overlay } from './Overlay';
import { Text } from '../Typography';

export interface FailureOverlayProps {
  /**
   * Failure message heading
   */
  title?: React.ReactNode;
  /**
   * Id for the failure message heading
   */
  titleId?: string | null;
  /**
   * Failure message content
   */
  message?: React.ReactNode;
  /**
   * Continue button label
   */
  label?: string
  /**
  * Whether to display the failure overlay or not
  */
  open?: boolean;
  /**
  * Close handler for overlay
  */
  onClose?: () => void;
  /**
    * Optional close timeout (in milliseconds)
    */
  closeTimeout?: number;
  /**
    * Click handler for try again
    */
  onTryAgain?: () => void;
  tryAgainLabel?: string;
}

/**
 * Basic failure acknowlegement overlay.
 */
export const FailureOverlay = ({
  open,
  onClose = () => undefined,
  closeTimeout,
  title = 'Something went wrong.',
  titleId = title ? 'failure-overlay-heading' : null,
  message = 'Your information was not updated correctly.',
  label = 'Continue',
  onTryAgain,
  tryAgainLabel = 'Try Again?',
}: FailureOverlayProps) => (
  <Overlay
    open={open}
    onClose={onClose}
    closeTimeout={closeTimeout}
    closeOnEsc
    ariaLabelledBy={titleId}
    ariaDescribedBy="failure-overlay-message"
  >
    <Modal
      data-test="failureOverlay"
      title={title}
      titleId={titleId}
      onClose={onClose}
    >
      <Text variant="ma-intro" id="failure-overlay-message">{message}</Text>
      <CtaGroup variant="modal">
        {onTryAgain ? (
          <Cta onClick={onTryAgain}>
            {tryAgainLabel}
          </Cta>
        ) : (
          <Cta data-test="closeBtn" onClick={onClose}>
            {label}
          </Cta>
        )}
      </CtaGroup>
    </Modal>
  </Overlay>
);

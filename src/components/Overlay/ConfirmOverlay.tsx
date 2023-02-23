import React from 'react';
import { Cta, CtaGroup } from '../Cta';
import { Modal } from './Modal';
import { Overlay, OverlayProps } from './Overlay';
import { ContentAlignType } from './Modal.styles';
import { Text } from '../Typography';

export interface ConfirmOverlayProps extends Omit<OverlayProps, 'onClose'> {
  /**
   * onConfirm handler
   */
  onConfirm?: () => any;
  /**
   * Use this instead of onConfirm if the CTA is a link instead of a function
   */
  onConfirmHref?: string;
  /**
   * onCancel handler
   */
  onCancel?: () => any;
  /**
   * Explicit onClose handler for top-right close button.
   * Will default to onCancel handler. Pass `false` to prevent rendering
   */
  onClose?: (() => any) | false;
  /**
   * Text label for cancel button
   */
  cancelLabel?: string
  /**
   * Text label for confirm button
   */
  confirmLabel?: string;
  /**
   * Disable action buttons
   */
  disabled?: boolean;
  contentAlign?: ContentAlignType;
}

/**
 * Basic confirm overlay with confirm/cancel actions
 */
export const ConfirmOverlay = ({
  children,
  onConfirm,
  onConfirmHref,
  onCancel,
  onClose,
  cancelLabel = 'Go Back',
  confirmLabel = 'Continue',
  disabled,
  contentAlign = 'center',
  ...rest
}: ConfirmOverlayProps) => {
  const showCloseBtn: boolean = onClose !== false;
  const onCloseHandler: () => any = (onClose || onCancel);

  return (
    <Overlay
      ariaDescribedBy="confirm-overlay-message"
      onClose={onCloseHandler}
      {...rest}
    >
      <Modal
        data-test="confirmOverlay"
        onClose={showCloseBtn ? onCloseHandler : null}
        disabled={disabled}
        contentAlign={contentAlign}
      >
        <Text variant="ma-intro" id="confirm-overlay-message">{children}</Text>
        {(onCancel || onConfirm || onConfirmHref) && (
          <CtaGroup variant="modal">
            {onCancel && (
              <Cta
                data-test="confirmOverlayCancelBtn"
                onClick={onCancel}
                variant="secondary"
                disabled={disabled}
              >
                {cancelLabel}
              </Cta>
            )}
            {(onConfirm || onConfirmHref) && (
              <Cta
                data-test="confirmOverlayConfirmBtn"
                onClick={onConfirm}
                href={onConfirmHref}
                disabled={disabled}
                variant="primary"
              >
                {confirmLabel}
              </Cta>
            )}
          </CtaGroup>
        )}
      </Modal>
    </Overlay>
  );
};

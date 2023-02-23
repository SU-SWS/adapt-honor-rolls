import React, { useEffect, useRef } from 'react';
import MUIModal from '@mui/material/Modal';
import * as styles from './Overlay.style';

export interface OverlayProps {
  // Optional className for root node
  className?: string;
  // Overlay content
  children?: React.ReactNode;
  // Whether the overlay is open or not
  open?: boolean;
  // Close handler
  onClose?: () => void;
  // Automatically close overlay after timeout (milliseconds)
  closeTimeout?: number;
  // Fire onClose when clicking overlay
  closeOnClickOverlay?: boolean;
  // Fire onClose when esc key hit
  closeOnEsc?: boolean;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
}

/**
 * Overlay component with basic behavioral props. Use as basis for composed overlay components.
 */
export const Overlay = ({
  className,
  children,
  open = false,
  onClose = () => undefined,
  closeOnEsc = false,
  closeOnClickOverlay = false,
  closeTimeout,
  ariaLabelledBy,
  ariaDescribedBy,
}: OverlayProps) => {
  // Handle close timeout
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const clearTimeout = () => window.clearTimeout(timeoutRef.current);
  useEffect(() => {
    clearTimeout();
    // Set timeout when opened
    if (open && closeTimeout) {
      timeoutRef.current = setTimeout(onClose, closeTimeout);
    }

    // Always clear on unmount/change
    return clearTimeout;
  }, [open, closeTimeout, onClose]);

  return (
    <MUIModal
      className={styles.root({ className })}
      open={open}
      disableEscapeKeyDown={!closeOnEsc}
      onClose={onClose}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      slotProps={{ backdrop: {
        onClick: closeOnClickOverlay ? onClose : undefined,
        className: styles.backdrop,
      } }}
    >
      <div>{children}</div>
    </MUIModal>
  );
};

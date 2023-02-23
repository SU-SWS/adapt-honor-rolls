import React from 'react';
import { dcnb } from 'cnbuilder';
import { BasicCard } from '../Card';
import { Cta } from '../Cta';
import { FlexBox } from '../FlexBox';
import { Heading } from '../Typography';
import * as styles from './Modal.styles';

export interface ModalProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  /**
   * Add an id to the modal heading so it can be referenced in the overlay with aria-labelledby
   */
  titleId?: string;
  onClose?: (() => void) | (() => any) | null;
  className?: string;
  // Use small padding for modal with 1-liner content, e.g., the loading/processing overlay
  padding?: styles.PaddingType;
  contentAlign?: styles.ContentAlignType;
  /**
   * Disable close button
   */
  disabled?: boolean;
}

export const Modal = ({
  title,
  titleId,
  padding = 'default',
  contentAlign = 'center',
  onClose,
  className,
  children,
  disabled,
  ...rest
}: ModalProps) => (
  <BasicCard
    color="white"
    className={dcnb(
      styles.root,
      styles.padding[padding],
      className
    )}
    {...rest}
  >
    {onClose && (
      <FlexBox justifyContent="end" className={styles.closeBtn}>
        <Cta
          variant="close"
          onClick={onClose}
          data-test="modalCloseBtn"
          disabled={disabled}
        >
          Close
        </Cta>
      </FlexBox>
    )}
    <div className={styles.contentAlign[contentAlign]}>
      {title && (
        <Heading size={2} className={styles.heading} id={titleId}>{title}</Heading>
      )}
      {children}
    </div>
  </BasicCard>
);

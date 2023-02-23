import React from 'react';
import { Overlay, OverlayProps } from './Overlay';
import { Modal } from './Modal';
import { Heading, Text } from '../Typography';
import { Cta } from '../Cta';
import { FlexBox } from '../FlexBox';
import { commonExternalLinks as links } from '../../utils/variables';

export const ProfileUpdateOverlay = ({
  onClose,
  ...rest
}: OverlayProps) => (
  <Overlay
    ariaLabelledBy="profile-update-modal-label"
    className="su-max-w-[50ch]"
    onClose={onClose}
    closeOnEsc
    closeOnClickOverlay
    {...rest}
  >
    <Modal
      data-test="profileUpdategOverlay"
      className="su-relative su-max-w-[65ch]"
      padding="updateProfile"
    >
      <FlexBox justifyContent="end" className="su-w-full">
        <Cta
          variant="close-x"
          onClick={onClose}
          aria-label="Dismiss modal"
          className="su-text-black hocus:su-text-digital-red-light"
        />
      </FlexBox>

      <FlexBox
        direction="col"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          id="profile-update-modal-label"
          as="h3"
          font="serif"
          size={3}
          className="su-mb-10 su-rs-mt-1"
        >
          Is your Honor profile up to date?
        </Heading>
        <Text
          variant="subheading"
          font="sans"
        >
          Keep your Honor profile up to date to make relevant connections within the Stanford community.
        </Text>

        <Cta
          className="su-rs-mt-2 su-mb-12"
          variant="red"
          icon="external"
          animate="top-right"
          href={links.uatMyAccountEditProfile}
        >
          Update your Alumni profile
        </Cta>

        <button
          type="button"
          className="su-font-sans su-text-digital-red-light su-text-21 hover:su-cursor-pointer hocus:su-text-black"
          onClick={onClose}
        >
          No, thanks.
        </button>
      </FlexBox>
    </Modal>
  </Overlay>
);

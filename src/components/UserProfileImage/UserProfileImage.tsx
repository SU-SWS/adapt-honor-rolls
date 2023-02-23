import React from 'react';
import Image from 'next/legacy/image';
import { dcnb } from 'cnbuilder';
import { PrivateImage } from '../PrivateImage';
import { UserAvatarNoImage } from './UserAvatarNoImage';
import { Contact } from '../../pages/api/contact';
import { firstInitial } from '../../utils/format';
import * as styles from './UserProfileImage.style';

export interface UserProfileImageProps extends React.HTMLAttributes<HTMLDivElement> {
  // User contact object
  contact?: Contact;
  // Private profile image URL if provided directly instead of from contact object
  privateImageURL?: string;
  // Optional src url for overriding contact
  src?: string;
  // Initial if provided directly instead of from contact object
  initial?: string;
  // Defaults to 100vw for next/image when used with layout="fill"
  // Need to manaully add sizes attribute for rendering smaller image if 100vw is not desired
  sizes?: string;
  // Whether the image has a border
  border?: boolean;
  borderWidth?: styles.BorderWidthType;
  imageColor?: styles.ImageColorType;
  initialColor?: styles.InitialColorType;
  initialSize?: styles.InitialSizeType;
  // Leave alt as empty when it doesn't needed to be read out to screen readers
  alt?: string;
  initialClassName?: string;
}

/**
 * UserProfileImage Component
 * Will extract profile photo image from contact object and render when present.
 * Defaults to first initial when no profile photo found.
 *
 * Notes:
 *  - Needs to pass along classes to provide custom styling
 *  - Render first initial when no profile image available
 */
export const UserProfileImage = ({
  contact,
  privateImageURL,
  src: srcOverride,
  initial,
  sizes, // For the srcset sizes attribute
  border = true,
  borderWidth = 2,
  imageColor = 'digital-red-xlight',
  initialColor = 'grey',
  initialSize = 'personCard',
  initialClassName,
  alt = '',
  ...divProps
}: UserProfileImageProps) => {
  const profileImage: string = privateImageURL || contact?.profilePhotoURL;
  const init: string = initial || firstInitial(contact);

  return (
    <div className={dcnb(styles.root, divProps.className)} {...divProps}>
      {(profileImage || srcOverride) ? (
        <div className={styles.imageCircle({ border, borderWidth, imageColor })}>
          {srcOverride ? (
            <Image
              priority
              src={srcOverride}
              sizes={sizes}
              alt={alt}
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <PrivateImage
              priority
              src={profileImage}
              sizes={sizes}
              alt={alt}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
      ) : (
        <UserAvatarNoImage
          initial={init}
          borderWidth={borderWidth}
          initialColor={initialColor}
          initialSize={initialSize}
          data-test="avatarNoImage"
          className={initialClassName}
        />
      )}
    </div>
  );
};

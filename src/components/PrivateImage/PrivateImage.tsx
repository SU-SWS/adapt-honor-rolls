import React from 'react';
import { Skeleton } from '@mui/material';
import Image, { ImageProps, ImageLoader } from 'next/legacy/image';
import { useGetAssetQuery } from '../../redux/slices/honorApi';
/**
 * Loads images through our Stanford asset proxy sized as necessary
 */
export const privateImageLoader: ImageLoader = ({ src, width }) => {
  if (width >= 256) {
    return (`https://assets.stanford.edu/p/${width}x0/${encodeURIComponent(src)}`);
  }

  return (`https://assets.stanford.edu/p/256x0/${encodeURIComponent(src)}`);
};

declare type SafeNumber = number | `${number}`;

export interface PrivateImageProps extends ImageProps {
  src: string;
  width?: SafeNumber;
  height?: SafeNumber;
  loaderVariant?: 'circular' | 'rectangular';
}

/**
 * PrivateImage component.
 */
export const PrivateImage = ({
  src: privateSrc,
  width,
  height,
  loaderVariant = 'circular',
  ...rest
}: PrivateImageProps) => {
  const { data } = useGetAssetQuery(privateSrc);

  const signedUrl: string = data?.signedUrl;

  if (signedUrl) {
    return (
      <Image
        {...rest}
        width={width}
        height={height}
        src={signedUrl}
        loader={privateImageLoader}
      />
    );
  }

  return <Skeleton width={width} height={height} variant={loaderVariant} />;
};

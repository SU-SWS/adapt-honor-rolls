/* eslint-disable no-undef */
import React, { useEffect } from 'react';

export const useOnClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement>,
  handler: (value: React.SetStateAction<boolean>) => void
) => {
  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    document.addEventListener('keyup', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
      document.addEventListener('keyup', listener);
    };
  }, [ref, handler]);
};

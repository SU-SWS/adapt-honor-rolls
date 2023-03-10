/* eslint-disable no-undef */
import { useEffect } from 'react';

export const useEscape = (onEscape: () => void) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) onEscape();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onEscape]);
};

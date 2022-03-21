import { RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<HTMLDivElement>, onClickOutside: () => void, open: boolean) => {
  useEffect(() => {
    const checkIfClickedOutside = (event: MouseEvent) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target) && open) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => document.removeEventListener('mousedown', checkIfClickedOutside);
  }, [ref, onClickOutside, open]);
};

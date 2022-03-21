import { useEffect } from 'react';

export const useKeyboardDown = (keyName: string, onKeyboardDown: () => void) => {
  useEffect(() => {
    const checkIfKeyboardDown = (event: KeyboardEvent) => {
      if (event.key === keyName) onKeyboardDown();
    };

    document.addEventListener('keydown', checkIfKeyboardDown);
    return () => document.removeEventListener('keydown', checkIfKeyboardDown);
  }, [keyName, onKeyboardDown]);
};

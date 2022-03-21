import { useClickOutside } from '../../hooks';
import './AutosuggestionSelect.scss';
import { Dropdown, FilterBox } from './components';
import React, { useCallback, useRef, useState } from 'react';

interface PropsInterface {
  onChange: (value: string[]) => void;
}

export const AutosuggestionSelect: React.FC<PropsInterface> = ({ onChange }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  const toggle = useCallback(() => setOpen((open) => !open), [setOpen]);
  const handleChange = useCallback(
    (value) => {
      onChange(value);
      setCounter(value.length);
    },
    [onChange, setCounter],
  );

  useClickOutside(ref, toggle, open);

  return (
    <div ref={ref} className="d-flex flex-column justify--center autosuggestion-select">
      <FilterBox name="Universities" counter={counter} toggle={toggle} open={open} />
      <Dropdown open={open} setOpen={setOpen} onResultListChange={handleChange} />
    </div>
  );
};

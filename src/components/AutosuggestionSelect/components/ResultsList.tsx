import { InputCheckbox } from '../../InputCheckbox';
import { University } from '../types';
import './ResultsList.scss';
import React, { useCallback, useEffect, useState } from 'react';

interface PropsInterface {
  data: University[];
  onChange: (value: string[]) => void;
}
export const ResultsList: React.FC<PropsInterface> = ({ data, onChange }) => {
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([]);

  useEffect(() => {
    onChange(selectedUniversities);
  }, [selectedUniversities, onChange]);

  const handleChange = useCallback(
    (event) => {
      const { checked, value } = event.target;
      if (checked && !selectedUniversities.includes(value)) {
        setSelectedUniversities((values) => [...values, value]);
      }

      if (!checked && selectedUniversities.includes(value)) {
        const values = selectedUniversities.filter((v) => v !== value);
        setSelectedUniversities(values);
      }
    },
    [selectedUniversities, setSelectedUniversities],
  );

  const onReset = useCallback(() => {
    setSelectedUniversities([]);
  }, [setSelectedUniversities]);

  return (
    <>
      <ul className="results-list d-flex flex-column">
        {selectedUniversities.map((name) => (
          <InputCheckbox key={name} onChange={handleChange} checked={true} label={name} id={name} />
        ))}
        {data
          .filter((el) => !selectedUniversities.includes(el.name))
          .map((el, index) => (
            <InputCheckbox
              key={index}
              onChange={handleChange}
              checked={selectedUniversities.includes(el.name)}
              label={el.name}
              id={el.name}
            />
          ))}
      </ul>
      <button
        className="button button--primary results-list__button"
        disabled={!selectedUniversities.length}
        onClick={onReset}
      >
        Reset
      </button>
    </>
  );
};

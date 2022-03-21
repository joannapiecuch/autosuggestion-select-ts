import {ChangeEvent, memo} from 'react';
import classNames from 'classnames';
import './InputCheckbox.scss';
import * as React from "react";

interface PropsInterface {
    checked: boolean
    id: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    label: string
}
export const InputCheckboxComponent: React.FC<PropsInterface> = ({ checked, id, onChange, label }) => (
  <label
    data-testid='input-checkbox-label'
    className={classNames('input-checkbox d-flex justify--space-between align--center', {
      'input-checkbox--checked': checked
    })}>
    <input
      data-testid='input-checkbox'
      type='checkbox'
      hidden
      id={id}
      checked={checked}
      value={id}
      onChange={onChange}
    />
    <span className='input-checkbox__label'>{label}</span>
  </label>
);

export const InputCheckbox = memo(InputCheckboxComponent);

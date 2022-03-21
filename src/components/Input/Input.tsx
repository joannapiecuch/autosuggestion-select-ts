import './Input.scss';
import * as React from "react";
import {ChangeEvent} from "react";

interface PropsInterface {
    placeholder: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<PropsInterface> = ({ placeholder, onChange, value }) => (
  <div className='input'>
    <input
      data-testid='input-field'
      type='text'
      placeholder={placeholder}
      value={value}
      className='input__field'
      onChange={onChange}
    />
  </div>
);

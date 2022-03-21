import { IconSearch } from '../Icons';
import { Input } from '../Input';
import './SearchInput.scss';
import * as React from "react";
import {ChangeEvent} from "react";

interface PropsInterface {
    placeholder: string
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput: React.FC<PropsInterface> = ({ placeholder, onChange, value }) => (
  <div className='search-input'>
    <div className='search-input__icon'>
      <IconSearch />
    </div>
    <Input onChange={onChange} placeholder={placeholder} value={value} />
  </div>
);

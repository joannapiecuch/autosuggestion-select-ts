import { IconChevron } from '../../Icons';
import './FilterBox.scss';
import classNames from 'classnames';
import React from 'react';

interface PropsInterface {
  name: string;
  counter: number;
  toggle: () => void;
  open: boolean;
}

export const FilterBox: React.FC<PropsInterface> = ({ name, counter, open, toggle }) => (
  <button
    onClick={toggle}
    className={classNames('filter-box', {
      'filter-box--active': counter > 0,
      'filter-box--open': open,
    })}
  >
    <h3 className="filter-box__name">{name}</h3>
    {counter > 0 && <div className="filter-box__counter d-flex justify--center align--center">{counter}</div>}
    <div className="filter-box__icon d-flex align--center">
      <IconChevron direction={open ? 'up' : 'down'} />
    </div>
  </button>
);

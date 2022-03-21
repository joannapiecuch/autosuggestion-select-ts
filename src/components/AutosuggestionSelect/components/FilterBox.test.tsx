import { FilterBox } from './FilterBox';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('FilterBox', () => {
  test('Opens dropdown', () => {
    const open = false;
    const toggle = jest.fn();

    const { getByRole } = render(<FilterBox name="" toggle={toggle} open={open} counter={0} />);
    userEvent.click(getByRole('button'));
    expect(toggle).toHaveBeenCalled();
  });
});

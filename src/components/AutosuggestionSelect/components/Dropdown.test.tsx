import { Dropdown } from './Dropdown';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Dropdown', () => {
  test('Dropdown should be visible', () => {
    const setOpen = jest.fn();
    const onChange = jest.fn();
    const { container } = render(<Dropdown setOpen={setOpen} open={true} onResultListChange={onChange} />);

    expect(container).toBeVisible();
  });

  test('Calls setOpen on close', () => {
    const setOpen = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(<Dropdown setOpen={setOpen} open={true} onResultListChange={onChange} />);
    userEvent.click(getByRole('dropdown-button'));
    expect(setOpen).toHaveBeenCalledWith(false);
  });
});

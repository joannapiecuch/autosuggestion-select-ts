import { ResultsList } from './ResultsList';
import { fireEvent, render } from '@testing-library/react';

const mockData = [{ name: 'TestName1' }, { name: 'TestName2' }, { name: 'TestName3' }];

describe('ResultList', () => {
  test('Calls onChange', () => {
    const onChange = jest.fn();
    const { container, getByRole } = render(<ResultsList onChange={onChange} data={mockData} />);
    const checkbox = container.querySelector('#TestName1') as Element;

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(['TestName1']);

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith([]);
  });

  test('Resets value', () => {
    const onChange = jest.fn();
    const { container, getByRole } = render(<ResultsList onChange={onChange} data={mockData} />);
    const checkbox = container.querySelector('#TestName1') as Element;
    const button = getByRole('button', { name: 'Reset' });

    fireEvent.click(checkbox);
    fireEvent.click(button);
    expect(onChange).toHaveBeenCalledWith([]);
  });
});

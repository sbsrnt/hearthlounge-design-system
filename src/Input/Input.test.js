import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from '.';

describe('Input Component', () => {
  test('renders correctly', () => {
    const { container } = render(<Input />);

    expect(container).not.toBeNull();
  });

  test('has "error" class on error', () => {
    const { getByTestId } = render(<Input error="foo" />);
    const input = getByTestId('input');
    expect(input.classList.contains('input__error')).toBeTruthy();
  });

  test('has "disabled" class on disabled', () => {
    const { getByTestId } = render(<Input disabled />);
    const input = getByTestId('input');
    expect(input.classList.contains('input__disabled')).toBeTruthy();
  });

  test('fires onChange explicitly', async done => {
    const handleChange = (name, value) => {
      expect(name).toEqual('foo');
      expect(value).toEqual('23');
      done();
    };
    const { getByTestId } = render(
      <Input onChange={handleChange} name="foo" />
    );
    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: '23' } });
  });
});

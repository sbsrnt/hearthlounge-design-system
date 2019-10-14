import React from 'react';
import { render } from '@testing-library/react';

import Loader from '.';

describe('Loader Component', () => {
  test('renders correctly', () => {
    const { container } = render(<Loader />);

    expect(container).not.toBeNull();
  });

  test('has proper aria label', () => {
    const { getByLabelText } = render(<Loader />);
    const label = getByLabelText('loader');

    expect(label).toBeTruthy();
  });

  test('renders different size properly', () => {
    const { getByLabelText } = render(<Loader size={50} />);
    const container = getByLabelText('loader');

    expect(container).toHaveStyle('height: 50px');
    expect(container).toHaveStyle('width: 50px');
  });

  test('renders different thickness properly', () => {
    const { getByLabelText } = render(<Loader thickness={5} />);
    const container = getByLabelText('loader');

    expect(container).toHaveStyle('border-width: 5px');
  });

  test('renders different size and thickness properly', () => {
    const { getByLabelText } = render(<Loader thickness={5} size={10} />);
    const container = getByLabelText('loader');

    expect(container).toHaveStyle('border-width: 5px');
    expect(container).toHaveStyle('height: 10px');
    expect(container).toHaveStyle('width: 10px');
  });
});

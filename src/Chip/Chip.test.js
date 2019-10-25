import React from 'react';
import { render } from '@testing-library/react';

import { Chip } from '.';

describe('Chip Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<Chip />);

    expect(container).not.toBeNull();
  });

  test('on "brColor" has blue background', async () => {
    const { container } = render(<Chip bgColor="blue" />);
    expect(container.firstChild).toHaveStyle('background-color: blue;');
  });

  test('on "textColor" has blue text and border', async () => {
    const { container } = render(<Chip bgColor="white" textColor="blue" />);

    expect(container.firstChild).toHaveStyle('color: blue;');
    expect(container.firstChild).toHaveStyle('border-color: blue;');
  });
});

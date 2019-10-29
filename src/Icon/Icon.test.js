import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '.';

describe('Icon Component', () => {
  test('renders correctly', () => {
    const { container } = render(<Icon name="close" />);

    expect(container).not.toBeNull();
  });
});

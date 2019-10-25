import React from 'react';
import { render } from '@testing-library/react';

import { Card } from '.';

describe('Card Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<Card />);

    expect(container).not.toBeNull();
  });
});

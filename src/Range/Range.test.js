import React from 'react';
import { render } from '@testing-library/react';

import Range from '.';

describe('Range Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<Range />);

    expect(container).not.toBeNull();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import { Slider } from '.';

describe('Slider Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<Slider />);

    expect(container).not.toBeNull();
  });
});

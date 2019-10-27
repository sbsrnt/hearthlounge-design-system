import React from 'react';
import { render } from '@testing-library/react';

import { StrikeBehind } from '.';

describe('StrikeBehind Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<StrikeBehind />);

    expect(container).not.toBeNull();
  });
});

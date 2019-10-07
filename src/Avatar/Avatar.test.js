import React from 'react';
import { render } from '@testing-library/react';

import Avatar from '.';

test('renders correctly', () => {
  const { container } = render(<Avatar />);
  expect(container).not.toBeNull();
});

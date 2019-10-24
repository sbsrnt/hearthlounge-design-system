import React from 'react';
import { render } from '@testing-library/react';
import Avatar from '.';

test('renders correctly', function() {
  const _render = render(React.createElement(Avatar, null));
  const { container } = _render;

  expect(container).not.toBeNull();
});

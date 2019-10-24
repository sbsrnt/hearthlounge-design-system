import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from '.';
test('renders correctly', function() {
  var _render = render(React.createElement(Avatar, null)),
    container = _render.container;

  expect(container).not.toBeNull();
});

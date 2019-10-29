import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '.';
describe('Icon Component', function () {
  test('renders correctly', function () {
    var _render = render(React.createElement(Icon, {
      name: "close"
    })),
        container = _render.container;

    expect(container).not.toBeNull();
  });
});
import React from 'react';
import { render } from '@testing-library/react';
import AnimatedList from '.';

describe('AnimatedList component', function() {
  const items = [
    {
      value: 'foo',
    },
    {
      value: 'bar',
    },
  ];
  test('renders correctly', function() {
    const _render = render(
      React.createElement(AnimatedList, {
        items,
        name: 'test',
      })
    );
    const { container } = _render;

    expect(container).not.toBeNull();
  });
  test('renders item component correctly', function() {
    const _render2 = render(
      React.createElement(
        AnimatedList,
        {
          name: 'test',
          items,
        },
        function(_ref) {
          const { meta } = _ref;
          return React.createElement('p', null, meta.value);
        }
      )
    );
    const { container } = _render2;

    expect(container.firstChild.firstChild).not.toBeNull();
    expect(container.firstChild.childNodes.length).toEqual(2);
  });
});

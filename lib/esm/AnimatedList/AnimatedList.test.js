import React from 'react';
import { render } from '@testing-library/react';
import { AnimatedList } from '.';
describe('AnimatedList component', function () {
  var items = [{
    value: 'foo'
  }, {
    value: 'bar'
  }];
  test('renders correctly', function () {
    var _render = render(React.createElement(AnimatedList, {
      items: items,
      name: "test"
    })),
        container = _render.container;

    expect(container).not.toBeNull();
  });
  test('renders item component correctly', function () {
    var _render2 = render(React.createElement(AnimatedList, {
      name: "test",
      items: items
    }, function (_ref) {
      var meta = _ref.meta;
      return React.createElement("p", null, meta.value);
    })),
        container = _render2.container;

    expect(container.firstChild.firstChild).not.toBeNull();
    expect(container.firstChild.childNodes.length).toEqual(2);
  });
});
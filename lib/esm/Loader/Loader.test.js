import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from '.';
describe('Loader Component', function () {
  test('renders correctly', function () {
    var _render = render(React.createElement(Loader, null)),
        container = _render.container;

    expect(container).not.toBeNull();
  });
  test('has proper aria label', function () {
    var _render2 = render(React.createElement(Loader, null)),
        getByLabelText = _render2.getByLabelText;

    var label = getByLabelText('loader');
    expect(label).toBeTruthy();
  });
  test('renders different size properly', function () {
    var _render3 = render(React.createElement(Loader, {
      size: 50
    })),
        getByLabelText = _render3.getByLabelText;

    var container = getByLabelText('loader');
    expect(container).toHaveStyle('height: 50px');
    expect(container).toHaveStyle('width: 50px');
  });
  test('renders different thickness properly', function () {
    var _render4 = render(React.createElement(Loader, {
      thickness: 5
    })),
        getByLabelText = _render4.getByLabelText;

    var container = getByLabelText('loader');
    expect(container).toHaveStyle('border-width: 5px');
  });
  test('renders different size and thickness properly', function () {
    var _render5 = render(React.createElement(Loader, {
      thickness: 5,
      size: 10
    })),
        getByLabelText = _render5.getByLabelText;

    var container = getByLabelText('loader');
    expect(container).toHaveStyle('border-width: 5px');
    expect(container).toHaveStyle('height: 10px');
    expect(container).toHaveStyle('width: 10px');
  });
});
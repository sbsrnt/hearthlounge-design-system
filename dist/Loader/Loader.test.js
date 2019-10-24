import React from 'react';
import { render } from '@testing-library/react';
import Loader from '.';

describe('Loader Component', function() {
  test('renders correctly', function() {
    const _render = render(React.createElement(Loader, null));
    const { container } = _render;

    expect(container).not.toBeNull();
  });
  test('has proper aria label', function() {
    const _render2 = render(React.createElement(Loader, null));
    const { getByLabelText } = _render2;

    const label = getByLabelText('loader');
    expect(label).toBeTruthy();
  });
  test('renders different size properly', function() {
    const _render3 = render(
      React.createElement(Loader, {
        size: 50,
      })
    );
    const { getByLabelText } = _render3;

    const container = getByLabelText('loader');
    expect(container).toHaveStyle('height: 50px');
    expect(container).toHaveStyle('width: 50px');
  });
  test('renders different thickness properly', function() {
    const _render4 = render(
      React.createElement(Loader, {
        thickness: 5,
      })
    );
    const { getByLabelText } = _render4;

    const container = getByLabelText('loader');
    expect(container).toHaveStyle('border-width: 5px');
  });
  test('renders different size and thickness properly', function() {
    const _render5 = render(
      React.createElement(Loader, {
        thickness: 5,
        size: 10,
      })
    );
    const { getByLabelText } = _render5;

    const container = getByLabelText('loader');
    expect(container).toHaveStyle('border-width: 5px');
    expect(container).toHaveStyle('height: 10px');
    expect(container).toHaveStyle('width: 10px');
  });
});

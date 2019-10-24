import React from 'react';
import { render } from '@testing-library/react';
import Modal from '.';

describe('Modal Component', function() {
  test('renders correctly', function() {
    const _render = render(
      React.createElement(
        Modal,
        {
          ariaHideApp: false,
          header: 'header',
        },
        'foo'
      )
    );
    const { container } = _render;

    expect(container).not.toBeNull();
  });
  test('renders content/body correctly', function() {
    const _render2 = render(
      React.createElement(
        Modal,
        {
          isOpen: true,
          ariaHideApp: false,
          header: 'foo',
          footer: React.createElement('p', null, 'baz'),
        },
        'bar'
      )
    );
    const { queryByText } = _render2;

    const body = queryByText('bar');
    expect(body).not.toBeNull();
  });
  test('renders footer correctly', function() {
    const _render3 = render(
      React.createElement(
        Modal,
        {
          isOpen: true,
          ariaHideApp: false,
          header: 'foo',
          footer: React.createElement('p', null, 'baz'),
        },
        'bar'
      )
    );
    const { getByTestId } = _render3;

    const footer = getByTestId('modal-footer');
    expect(footer).not.toBeNull();
  });
});

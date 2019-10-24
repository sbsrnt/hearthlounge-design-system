import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from '.';
describe('Modal Component', function () {
  test('renders correctly', function () {
    var _render = render(React.createElement(Modal, {
      ariaHideApp: false,
      header: "header"
    }, "foo")),
        container = _render.container;

    expect(container).not.toBeNull();
  });
  test('renders content/body correctly', function () {
    var _render2 = render(React.createElement(Modal, {
      isOpen: true,
      ariaHideApp: false,
      header: "foo",
      footer: React.createElement("p", null, "baz")
    }, "bar")),
        queryByText = _render2.queryByText;

    var body = queryByText('bar');
    expect(body).not.toBeNull();
  });
  test('renders footer correctly', function () {
    var _render3 = render(React.createElement(Modal, {
      isOpen: true,
      ariaHideApp: false,
      header: "foo",
      footer: React.createElement("p", null, "baz")
    }, "bar")),
        getByTestId = _render3.getByTestId;

    var footer = getByTestId('modal-footer');
    expect(footer).not.toBeNull();
  });
});
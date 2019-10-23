import React from 'react';
import { render } from '@testing-library/react';

import Modal from '.';

describe('Modal Component', () => {
  test('renders correctly', () => {
    const { container } = render(
      <Modal ariaHideApp={false} header="header">
        foo
      </Modal>
    );

    expect(container).not.toBeNull();
  });

  test('renders content/body correctly', () => {
    const { queryByText } = render(
      <Modal isOpen ariaHideApp={false} header="foo" footer={<p>baz</p>}>
        bar
      </Modal>
    );
    const body = queryByText('bar');

    expect(body).not.toBeNull();
  });

  test('renders footer correctly', () => {
    const { getByTestId } = render(
      <Modal isOpen ariaHideApp={false} header="foo" footer={<p>baz</p>}>
        bar
      </Modal>
    );
    const footer = getByTestId('modal-footer');

    expect(footer).not.toBeNull();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import Header from '.';

describe('Header Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<Header />);

    expect(container).not.toBeNull();
  });

  test('renders as "h3" by default', async () => {
    const { container } = render(<Header />);

    expect(container.firstChild.nodeName).toBe('H3');
  });

  test('renders as "h1"', async () => {
    const { container } = render(<Header as="h1" />);

    expect(container.firstChild.nodeName).toBe('H1');
  });

  test('renders as "h6"', async () => {
    const { container } = render(<Header as="h6" />);

    expect(container.firstChild.nodeName).toBe('H6');
  });

  test('renders children correctly', async () => {
    const { getByText } = render(<Header>foo</Header>);
    const text = await getByText('foo');

    expect(text).not.toBeNull();
  });

  test('has classname prop', async () => {
    const { container } = render(<Header className="foo" />);

    expect(container.firstChild.classList.contains('foo')).toBe(true);
  });
});

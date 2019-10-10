import React from 'react';
import { render } from '@testing-library/react';

import Paragraph from '.';

describe('Paragraph Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<Paragraph />);

    expect(container).not.toBeNull();
  });

  test('renders children correctly', async () => {
    const { getByText } = render(<Paragraph>foo</Paragraph>);
    const text = await getByText('foo');

    expect(text).not.toBeNull();
  });

  test('has classname prop', async () => {
    const { container } = render(<Paragraph className="foo" />);

    expect(container.firstChild.classList.contains('foo')).toBe(true);
  });
});

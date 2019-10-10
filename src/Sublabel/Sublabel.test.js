import React from 'react';
import { render } from '@testing-library/react';

import Sublabel from '.';

describe('Paragraph Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<Sublabel />);

    expect(container).not.toBeNull();
  });

  test('renders children correctly', async () => {
    const { getByText } = render(<Sublabel>foo</Sublabel>);
    const text = await getByText('foo');

    expect(text).not.toBeNull();
  });

  test('has classname prop', async () => {
    const { container } = render(<Sublabel className="foo" />);

    expect(container.firstChild.classList.contains('foo')).toBe(true);
  });

  test('has aria-label prop (via {...props})', async () => {
    const { getByLabelText } = render(<Sublabel aria-label="bar" />);
    const label = getByLabelText('bar');

    expect(label).not.toBeNull();
  });
});

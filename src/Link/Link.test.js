import React from 'react';
import { render } from '@testing-library/react';

import Link from '.';

describe('Link Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<Link to="foo">foo</Link>);

    expect(container).not.toBeNull();
  });

  test('renders as button if needed', async () => {
    const { getByText } = render(
      <Link as="button" to="foo">
        foo
      </Link>
    );

    const el = getByText('foo').nodeName;
    expect(el).toBe('BUTTON');
  });

  test('redirects correctly', async () => {
    const { getByText } = render(<Link to="foo">foo</Link>);
    const el = getByText('foo').getAttribute('href');
    expect(el).toEqual('foo');
  });

  test('has classname prop', async () => {
    const { container } = render(
      <Link className="foo" to="bar">
        baz
      </Link>
    );

    expect(container.firstChild.classList.contains('foo')).toBe(true);
  });

  test('has aria-label prop (via {...props})', async () => {
    const { getByLabelText } = render(
      <Link aria-label="foo" to="bar">
        baz
      </Link>
    );
    const label = getByLabelText('foo');

    expect(label).not.toBeNull();
  });
});

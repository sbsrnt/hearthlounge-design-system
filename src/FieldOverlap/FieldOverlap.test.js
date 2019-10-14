import React from 'react';
import { render } from '@testing-library/react';

import FieldOverlap from '.';

describe('FieldOverlap Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<FieldOverlap />);

    expect(container).not.toBeNull();
  });

  test('renders children correctly', async () => {
    const { getByText } = render(<FieldOverlap>foo</FieldOverlap>);
    const children = getByText('foo');

    expect(children).not.toBeNull();
  });

  test('renders label correctly', async () => {
    const { queryByText } = render(
      <FieldOverlap label="bar">foo</FieldOverlap>
    );
    const label = queryByText('bar');

    expect(label).not.toBeNull();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { Styled } from '.';

describe('Styled Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<Styled>foo</Styled>);

    expect(container).not.toBeNull();
  });
});

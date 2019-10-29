import React from 'react';
import { render } from '@testing-library/react';
import { Styled } from '.';

describe('Styled Component', () => {
  test('renders correctly', async () => {
    const { container } = render(
      <Styled>
        <p>foo</p>
      </Styled>
    );

    expect(container).not.toBeNull();
  });
});

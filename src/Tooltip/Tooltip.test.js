import React from 'react';
import { render } from '@testing-library/react';

import { Tooltip } from '.';

import styles from './styles.module.scss';

describe('Tooltip Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<Tooltip text="foo">bar</Tooltip>);

    expect(container).not.toBeNull();
  });

  test('has tooltipText class on applyChildStyles prop', async () => {
    const { container } = render(
      <Tooltip text="foo" applyStylesToChild>
        bar
      </Tooltip>
    );

    expect(
      container.firstChild.classList.contains(styles.tooltipText)
    ).toBeTruthy();
  });
});

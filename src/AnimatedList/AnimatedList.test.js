import React from 'react';
import { render } from '@testing-library/react';

import { AnimatedList } from '.';

describe('AnimatedList component', () => {
  const items = [{ value: 'foo' }, { value: 'bar' }];

  test('renders correctly', () => {
    const { container } = render(<AnimatedList items={items} name="test" />);
    expect(container).not.toBeNull();
  });

  test('renders item component correctly', () => {
    const { container } = render(
      <AnimatedList name="test" items={items}>
        {({ meta }) => <p>{meta.value}</p>}
      </AnimatedList>
    );
    expect(container.firstChild.firstChild).not.toBeNull();
    expect(container.firstChild.childNodes.length).toEqual(2);
  });
});

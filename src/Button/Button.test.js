import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';

import styles from './styles.module.scss';

describe('Button Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<Button />);

    expect(container).not.toBeNull();
  });

  test('renders children correctly', async () => {
    const { getByText } = render(<Button>foo</Button>);
    const text = await getByText('foo');

    expect(text).not.toBeNull();
  });

  test('has "button" class', async () => {
    const { container } = render(<Button />);
    const className = container.firstChild.classList.contains(styles.button);

    expect(className).toBe(true);
  });

  test('has className prop', async () => {
    const { container } = render(<Button className="foo" />);
    const className = container.firstChild.classList.contains('foo');

    expect(className).toBe(true);
  });

  describe('has size', () => {
    test('small', async () => {
      const { container } = render(<Button size="small" />);
      const className = container.firstChild.classList.contains(styles.small);

      expect(className).toBe(true);
    });

    test('secondary', async () => {
      const { container } = render(<Button theme="secondary" />);
      const className = container.firstChild.classList.contains(
        styles.secondary
      );

      expect(className).toBe(true);
    });
  });

  describe('has theme', () => {
    test('primary by default', async () => {
      const { container } = render(<Button />);
      const className = container.firstChild.classList.contains(
        styles.secondary
      );

      expect(className).not.toBe(true);
    });

    test('secondary', async () => {
      const { container } = render(<Button theme="secondary" />);
      const className = container.firstChild.classList.contains(
        styles.secondary
      );

      expect(className).toBe(true);
    });
  });

  describe('is disabled', () => {
    test('when loading prep is present', async () => {
      const { container } = render(<Button loading />);
      const className = container.firstChild.classList.contains(styles.loading);

      expect(className).toBe(true);
    });

    test('with disabled prop', async () => {
      const { container } = render(<Button disabled />);

      expect(container.firstChild.disabled).toBe(true);
    });
  });

  describe('type', () => {
    test('has type=button by default', async () => {
      const { container } = render(<Button />);
      const btn = container.firstElementChild.getAttribute('type');

      expect(btn).toBe('button');
    });

    test('has type=submit', async () => {
      const { container } = render(<Button type="submit" />);
      const btn = container.firstElementChild.getAttribute('type');

      expect(btn).toBe('submit');
    });
  });

  test('fires onClick event', done => {
    const handleClick = () => done();
    const { getByText } = render(<Button onClick={handleClick}>foo</Button>);
    const btn = getByText('foo');

    fireEvent.click(btn);
  });

  test('has aria-label prop (via {...props})', async () => {
    const { getByLabelText } = render(<Button aria-label="bar" />);
    const label = getByLabelText('bar');

    expect(label).not.toBeNull();
  });
});

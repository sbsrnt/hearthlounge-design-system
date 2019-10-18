import React from 'react';
import { render } from '@testing-library/react';

import FieldOverlap from '.';

import styles from './styles.module.scss';

describe('FieldOverlap Component', () => {
  test('renders correctly', () => {
    const { container } = render(<FieldOverlap />);

    expect(container).not.toBeNull();
  });

  test('renders children correctly', () => {
    const { getByText } = render(<FieldOverlap>foo</FieldOverlap>);
    const children = getByText('foo');

    expect(children).not.toBeNull();
  });

  test('renders label correctly', () => {
    const { queryByText } = render(
      <FieldOverlap label="bar">foo</FieldOverlap>
    );
    const label = queryByText('bar');

    expect(label).not.toBeNull();
  });

  test('has red border and label color on error', () => {
    const { container, getByTestId } = render(
      <FieldOverlap label="bar" error="baz">
        foo
      </FieldOverlap>
    );

    const label = getByTestId('label');

    expect(container.firstChild.classList.contains(styles.error)).toBeTruthy();
    expect(label.classList.contains(styles.error)).toBeTruthy();
  });

  test('has error icon on error state', () => {
    const { queryByTestId } = render(
      <FieldOverlap label="bar" error="error msg">
        foo
      </FieldOverlap>
    );
    const loaderIcon = queryByTestId('loader icon');
    const errorIcon = queryByTestId('important icon');

    expect(errorIcon).not.toBeNull();
    expect(loaderIcon).toBeNull();
  });

  test('has loader icon on loading state', () => {
    const { queryByTestId } = render(
      <FieldOverlap label="bar" loading>
        foo
      </FieldOverlap>
    );
    const loaderIcon = queryByTestId('loader icon');
    const errorIcon = queryByTestId('important icon');

    expect(loaderIcon).not.toBeNull();
    expect(errorIcon).toBeNull();
  });

  test('with "disabled" prop', () => {
    const { container } = render(<FieldOverlap disabled>foo</FieldOverlap>);
    const wrapperClasses = container.firstChild.classList;

    expect(wrapperClasses.contains(styles.disabled)).toBeTruthy();
  });

  describe('has "childrenWithIcon" class with one icon', () => {
    test('as loading icon', async () => {
      const { getByLabelText } = render(
        <FieldOverlap label="bar" loading>
          foo
        </FieldOverlap>
      );
      const icons = getByLabelText('field overlap elements');
      expect(icons.classList.contains('childrenWithIcon')).toBeTruthy();
      expect(icons.classList.contains('childrenWithDoubleIcon')).toBeFalsy();
    });

    test('as error icon', async () => {
      const { getByLabelText } = render(
        <FieldOverlap label="bar" error="foo">
          foo
        </FieldOverlap>
      );
      const icons = getByLabelText('field overlap elements');
      expect(icons.classList.contains('childrenWithIcon')).toBeTruthy();
      expect(icons.classList.contains('childrenWithDoubleIcon')).toBeFalsy();
    });

    test('as reset icon', async () => {
      const { getByLabelText } = render(
        <FieldOverlap label="bar" resetIcon>
          foo
        </FieldOverlap>
      );
      const icons = getByLabelText('field overlap elements');
      expect(icons.classList.contains('childrenWithIcon')).toBeTruthy();
      expect(icons.classList.contains('childrenWithDoubleIcon')).toBeFalsy();
    });

    test('as loading and error icon', async () => {
      const { getByLabelText } = render(
        <FieldOverlap label="bar" loading error="foo">
          foo
        </FieldOverlap>
      );
      const icons = getByLabelText('field overlap elements');
      expect(icons.classList.contains('childrenWithIcon')).toBeFalsy();
      expect(icons.classList.contains('childrenWithDoubleIcon')).toBeFalsy();
    });
  });

  describe('has "childrenWithDoubleIcon" class with two icon', () => {
    test('as error & reset icon', async () => {
      const { getByLabelText } = render(
        <FieldOverlap label="bar" resetIcon error="foo">
          foo
        </FieldOverlap>
      );
      const icons = getByLabelText('field overlap elements');
      expect(icons.classList.contains('childrenWithIcon')).toBeTruthy();
    });

    test('as loading & reset icon', async () => {
      const { getByLabelText } = render(
        <FieldOverlap label="bar" loading resetIcon>
          foo
        </FieldOverlap>
      );
      const icons = getByLabelText('field overlap elements');
      expect(icons.classList.contains('childrenWithIcon')).toBeTruthy();
    });
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { listHidden, listVisible } from './styles.module.scss';

import Select from '.';

describe('Select Component', () => {
  const items = [{ value: 'foo' }, { value: 'bar' }];

  test('renders correctly', () => {
    const { container } = render(<Select />);

    expect(container).not.toBeNull();
  });

  test('has select input rendered as input', () => {
    const { getByTestId } = render(<Select />);
    const input = getByTestId('select input');

    expect(input.nodeName).toBe('INPUT');
  });

  describe('list', () => {
    test('is hidden by default', () => {
      const { getByTestId } = render(<Select items={items} />);
      const list = getByTestId('list');
      const listHiddenClass = list.classList.contains(listHidden);
      const listVisibleClass = list.classList.contains(listVisible);

      expect(listHiddenClass).toBeTruthy();
      expect(listVisibleClass).toBeFalsy();
    });

    describe('is visible', () => {
      const commonExpects = (getByTestId, selector) => {
        const list = getByTestId('list');
        const hiddenTrue = list.classList.contains(listHidden);
        const visibleFalse = list.classList.contains(listVisible);

        expect(hiddenTrue).toBeTruthy();
        expect(visibleFalse).toBeFalsy();

        fireEvent.click(selector);
        const hiddenFalse = list.classList.contains(listHidden);
        const visibleTrue = list.classList.contains(listVisible);

        expect(hiddenFalse).toBeFalsy();
        expect(visibleTrue).toBeTruthy();
      };

      test('on label click', () => {
        const { getByTestId } = render(<Select items={items} />);
        const label = getByTestId('label');
        commonExpects(getByTestId, label);
      });

      test('on input click', () => {
        const { getByTestId } = render(<Select items={items} />);
        const input = getByTestId('select input');
        commonExpects(getByTestId, input);
      });

      test('on icon click', () => {
        const { getByTestId } = render(<Select items={items} />);
        const icon = getByTestId('select icon');
        commonExpects(getByTestId, icon);
      });
    });

    test('fires onSelect', async done => {
      const handleSelect = (name, value) => {
        expect(name).toEqual('bar');
        expect(value).toEqual('foo');
        done();
      };
      const { getByTestId } = render(
        <Select items={items} name="bar" onSelect={handleSelect} />
      );
      const list = getByTestId('list');

      fireEvent.click(list);
      fireEvent.click(list.firstChild);
    });

    // FIXME: expected behaviour is to stay visible on item click
    test('closes on list item click', async done => {
      const handleSelect = () => done();
      const { getByTestId } = render(
        <Select items={items} name="bar" onSelect={handleSelect} />
      );
      const list = getByTestId('list');

      fireEvent.click(list);
      fireEvent.click(list.firstChild);
      expect(list.classList.contains(listHidden)).toBeTruthy();
    });
  });
});

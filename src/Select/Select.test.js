import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  disabled,
  listHidden,
  listVisible,
  listWithIcon,
  listWithDoubleIcon,
} from '../common-components/Select/styles.module.scss';

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

  describe('disabled', () => {
    test('has "disabled" class', () => {
      const { getByLabelText } = render(<Select items={items} disabled />);
      const input = getByLabelText('input');

      expect(input.classList.contains(disabled)).toBeTruthy();
    });
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

    describe('className', () => {
      const fireInputChange = getByTestId => {
        fireEvent.change(getByTestId('select input'), {
          target: { value: '10' },
        });
      };
      describe('is "listWithIcon" with one icon', () => {
        const checkWithOneIcon = getByTestId => {
          const list = getByTestId('list');
          expect(list.classList.contains(listWithIcon)).toBeTruthy();
          expect(list.classList.contains(listWithDoubleIcon)).toBeFalsy();
        };

        test('as error', () => {
          const { getByTestId } = render(<Select items={items} error="foo" />);
          const list = getByTestId('list');

          expect(list.classList.contains(listWithIcon)).toBeTruthy();
          expect(list.classList.contains(listWithDoubleIcon)).toBeFalsy();
        });

        test('as loader', () => {
          const { getByTestId } = render(<Select items={items} loading />);

          checkWithOneIcon(getByTestId);
        });

        test('as loader and error', () => {
          const { getByTestId } = render(
            <Select items={items} loading error="foo" />
          );
          const list = getByTestId('list');

          expect(list.classList.contains(listWithIcon)).toBeFalsy();
          expect(list.classList.contains(listWithDoubleIcon)).toBeFalsy();
        });

        test('as reset', () => {
          const { getByTestId } = render(<Select items={items} />);
          fireInputChange(getByTestId);

          checkWithOneIcon(getByTestId);
        });
      });

      describe('is "listWithDoubleIcon" with two icons', () => {
        const checkWithDoubleIcon = getByTestId => {
          const list = getByTestId('list');
          expect(list.classList.contains(listWithDoubleIcon)).toBeTruthy();
        };

        test('as loading and reset', () => {
          const { getByTestId } = render(<Select items={items} loading />);

          fireInputChange(getByTestId);
          checkWithDoubleIcon(getByTestId);
        });

        test('as error and reset', () => {
          const { getByTestId } = render(<Select items={items} error="foo" />);

          fireInputChange(getByTestId);
          checkWithDoubleIcon(getByTestId);
        });
      });
    });

    describe('events', () => {
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

      test('fires onInputReset', done => {
        const handleReset = (name, value) => {
          expect(name).toEqual('bar');
          expect(value).toEqual('');
          done();
        };

        const { getByTestId, getByLabelText } = render(
          <Select items={items} name="bar" onInputReset={handleReset} />
        );
        const input = getByTestId('select input');

        fireEvent.change(input, { target: { value: '10' } });
        expect(input.value).toBe('10');
        const resetIcon = getByLabelText('reset input value icon');
        fireEvent.click(resetIcon);
      });

      // FIXME: expected behaviour is to stay visible on item click
      test('closes on list item click', done => {
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
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  disabled,
  listHidden,
  listVisible,
  listWithIcon,
  listWithDoubleIcon,
} from '../common-components/Select/styles.module.scss';

import MultiSelect from '.';

describe('MultiSelect Component', () => {
  const options = [{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }];
  const selectedOptions = [{ value: 'foo' }, { value: 'bar' }];

  test('renders correctly', () => {
    const { container } = render(<MultiSelect />);

    expect(container).not.toBeNull();
  });

  test('has select input rendered as input', () => {
    const { getByTestId } = render(<MultiSelect />);
    const input = getByTestId('select input');

    expect(input.nodeName).toBe('INPUT');
  });

  describe('disabled', () => {
    test('has "disabled" class', () => {
      const { getByLabelText } = render(
        <MultiSelect options={options} disabled />
      );
      const input = getByLabelText('input');

      expect(input.classList.contains(disabled)).toBeTruthy();
    });
  });

  describe('list', () => {
    test('is hidden by default', () => {
      const { getByTestId } = render(<MultiSelect options={options} />);
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
        const { getByTestId } = render(<MultiSelect options={options} />);
        const label = getByTestId('label');
        commonExpects(getByTestId, label);
      });

      test('on input click', () => {
        const { getByTestId } = render(<MultiSelect options={options} />);
        const input = getByTestId('select input');
        commonExpects(getByTestId, input);
      });

      test('on icon click', () => {
        const { getByTestId } = render(<MultiSelect options={options} />);
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
          const { getByTestId } = render(
            <MultiSelect options={options} error="foo" />
          );
          const list = getByTestId('list');

          expect(list.classList.contains(listWithIcon)).toBeTruthy();
          expect(list.classList.contains(listWithDoubleIcon)).toBeFalsy();
        });

        test('as loader', () => {
          const { getByTestId } = render(
            <MultiSelect options={options} loading />
          );

          checkWithOneIcon(getByTestId);
        });

        test('as loader and error', () => {
          const { getByTestId } = render(
            <MultiSelect options={options} loading error="foo" />
          );
          const list = getByTestId('list');

          expect(list.classList.contains(listWithIcon)).toBeFalsy();
          expect(list.classList.contains(listWithDoubleIcon)).toBeFalsy();
        });

        test('as reset', () => {
          const { getByTestId } = render(<MultiSelect options={options} />);
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
          const { getByTestId } = render(
            <MultiSelect options={options} loading />
          );

          fireInputChange(getByTestId);
          checkWithDoubleIcon(getByTestId);
        });

        test('as error and reset', () => {
          const { getByTestId } = render(
            <MultiSelect options={options} error="foo" />
          );

          fireInputChange(getByTestId);
          checkWithDoubleIcon(getByTestId);
        });
      });
    });

    test('renders "selectedOptions" properly', () => {
      const { getByTestId } = render(
        <MultiSelect
          options={options}
          name="bar"
          selectedOptions={selectedOptions}
        />
      );
      const chipList = getByTestId('chipList');
      const list = getByTestId('list');
      expect(chipList.childNodes.length).toEqual(2);
      expect(list.childNodes.length).toEqual(1);
    });

    describe('events', () => {
      test('fires onSelect', async done => {
        const handleSelect = (name, value) => {
          expect(name).toEqual('bar');
          expect(value).toEqual('foo');
          done();
        };
        const { getByTestId } = render(
          <MultiSelect options={options} name="bar" onSelect={handleSelect} />
        );
        const list = getByTestId('list');

        fireEvent.click(list);
        console.log(list);
        fireEvent.click(list.firstChild);
      });

      describe('fires onResetSelection', () => {
        test('without preselected options', done => {
          const handleReset = (name, value) => {
            expect(name).toEqual('bar');
            expect(value).toEqual([]);
            done();
          };

          const { getByTestId, getByLabelText } = render(
            <MultiSelect
              options={options}
              name="bar"
              onResetSelection={handleReset}
            />
          );
          const input = getByTestId('select input');

          fireEvent.change(input, { target: { value: '10' } });
          expect(input.value).toBe('10');
          const resetIcon = getByLabelText('reset input value icon');
          fireEvent.click(resetIcon);
          const chipList = getByTestId('chipList');
          const list = getByTestId('list');
          expect(chipList.childNodes.length).toEqual(0);
          expect(list.childNodes.length).toEqual(3);
        });

        describe('with preselected options', () => {
          test('default', done => {
            const handleReset = (name, value) => {
              expect(name).toEqual('bar');
              expect(value).toEqual([]);
              done();
            };

            const { getByTestId, getByLabelText } = render(
              <MultiSelect
                options={options}
                name="bar"
                selectedOptions={selectedOptions}
                onResetSelection={handleReset}
              />
            );
            const input = getByTestId('select input');

            fireEvent.change(input, { target: { value: '10' } });
            expect(input.value).toBe('10');
            const resetIcon = getByLabelText('reset input value icon');
            fireEvent.click(resetIcon);
            const chipList = getByTestId('chipList');
            const list = getByTestId('list');
            expect(chipList.childNodes.length).toEqual(0);
            expect(list.childNodes.length).toEqual(3);
          });
          test('add to ChipList then reset', done => {
            const handleReset = (name, value) => {
              expect(name).toEqual('bar');
              expect(value).toEqual([]);
              done();
            };

            const { getByTestId, getByLabelText } = render(
              <MultiSelect
                options={options}
                name="bar"
                selectedOptions={selectedOptions}
                onResetSelection={handleReset}
              />
            );
            const chipList = getByTestId('chipList');
            const list = getByTestId('list');

            fireEvent.click(list.firstChild);
            expect(chipList.childNodes.length).toEqual(3);
            const resetIcon = getByLabelText('reset input value icon');
            fireEvent.click(resetIcon);
            expect(chipList.childNodes.length).toEqual(0);
            expect(list.childNodes.length).toEqual(3);
          });
          test('remove from ChipList then reset', done => {
            const handleReset = (name, value) => {
              expect(name).toEqual('bar');
              expect(value).toEqual([]);
              done();
            };

            const { getByTestId, getByLabelText } = render(
              <MultiSelect
                options={options}
                name="bar"
                selectedOptions={selectedOptions}
                onResetSelection={handleReset}
              />
            );
            const chipList = getByTestId('chipList');
            const list = getByTestId('list');

            fireEvent.click(chipList.firstChild.firstChild);
            expect(chipList.childNodes.length).toEqual(1);
            const resetIcon = getByLabelText('reset input value icon');
            fireEvent.click(resetIcon);
            expect(chipList.childNodes.length).toEqual(0);
            expect(list.childNodes.length).toEqual(3);
          });
        });
      });

      // FIXME: expected behaviour is to stay visible on item click
      test('closes on list item click', done => {
        const handleSelect = () => done();
        const { getByTestId } = render(
          <MultiSelect options={options} name="bar" onSelect={handleSelect} />
        );
        const list = getByTestId('list');

        fireEvent.click(list);
        fireEvent.click(list.firstChild);
        expect(list.classList.contains(listHidden)).toBeTruthy();
      });

      describe('adds item to ChipList', () => {
        test('without preselectedOptions', done => {
          const handleSelect = () => done();
          const { getByTestId } = render(
            <MultiSelect options={options} name="bar" onSelect={handleSelect} />
          );
          const list = getByTestId('list');
          const chipList = getByTestId('chipList');

          fireEvent.click(list);
          fireEvent.click(list.firstChild);
          expect(list.classList.contains(listHidden)).toBeTruthy();
          expect(chipList.childNodes.length).toEqual(1);
          expect(list.childNodes.length).toEqual(2);
          fireEvent.click(list);
          fireEvent.click(list.firstChild);
          expect(chipList.childNodes.length).toEqual(2);
          expect(list.childNodes.length).toEqual(1);
        });

        test('with preselectedOptions', done => {
          const handleSelect = () => done();
          const { getByTestId } = render(
            <MultiSelect
              options={options}
              name="bar"
              selectedOptions={selectedOptions}
              onSelect={handleSelect}
            />
          );
          const list = getByTestId('list');
          const chipList = getByTestId('chipList');

          fireEvent.click(list);
          fireEvent.click(list.firstChild);
          expect(list.classList.contains(listHidden)).toBeTruthy();
          expect(chipList.childNodes.length).toEqual(3);
          expect(list.childNodes.length).toEqual(0);
        });
      });

      test('removes item from ChipList', () => {
        const { getByTestId } = render(
          <MultiSelect
            options={options}
            name="bar"
            selectedOptions={selectedOptions}
          />
        );
        const list = getByTestId('list');
        const chipList = getByTestId('chipList');
        fireEvent.click(chipList.firstChild.firstChild);
        expect(chipList.childNodes.length).toEqual(1);
        expect(list.childNodes.length).toEqual(2);
      });
    });
  });
});

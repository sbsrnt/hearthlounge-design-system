import _regeneratorRuntime from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
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

describe('MultiSelect Component', function() {
  const options = [
    {
      value: 'foo',
    },
    {
      value: 'bar',
    },
    {
      value: 'baz',
    },
  ];
  const selectedOptions = [
    {
      value: 'foo',
    },
    {
      value: 'bar',
    },
  ];
  test('renders correctly', function() {
    const _render = render(React.createElement(MultiSelect, null));
    const { container } = _render;

    expect(container).not.toBeNull();
  });
  test('has select input rendered as input', function() {
    const _render2 = render(React.createElement(MultiSelect, null));
    const { getByTestId } = _render2;

    const input = getByTestId('select input');
    expect(input.nodeName).toBe('INPUT');
  });
  describe('disabled', function() {
    test('has "disabled" class', function() {
      const _render3 = render(
        React.createElement(MultiSelect, {
          options,
          disabled: true,
        })
      );
      const { getByLabelText } = _render3;

      const input = getByLabelText('input');
      expect(input.classList.contains(disabled)).toBeTruthy();
    });
  });
  describe('list', function() {
    test('is hidden by default', function() {
      const _render4 = render(
        React.createElement(MultiSelect, {
          options,
        })
      );
      const { getByTestId } = _render4;

      const list = getByTestId('list');
      const listHiddenClass = list.classList.contains(listHidden);
      const listVisibleClass = list.classList.contains(listVisible);
      expect(listHiddenClass).toBeTruthy();
      expect(listVisibleClass).toBeFalsy();
    });
    describe('is visible', function() {
      const commonExpects = function commonExpects(getByTestId, selector) {
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

      test('on label click', function() {
        const _render5 = render(
          React.createElement(MultiSelect, {
            options,
          })
        );
        const { getByTestId } = _render5;

        const label = getByTestId('label');
        commonExpects(getByTestId, label);
      });
      test('on input click', function() {
        const _render6 = render(
          React.createElement(MultiSelect, {
            options,
          })
        );
        const { getByTestId } = _render6;

        const input = getByTestId('select input');
        commonExpects(getByTestId, input);
      });
      test('on icon click', function() {
        const _render7 = render(
          React.createElement(MultiSelect, {
            options,
          })
        );
        const { getByTestId } = _render7;

        const icon = getByTestId('select icon');
        commonExpects(getByTestId, icon);
      });
    });
    describe('className', function() {
      const fireInputChange = function fireInputChange(getByTestId) {
        fireEvent.change(getByTestId('select input'), {
          target: {
            value: '10',
          },
        });
      };

      describe('is "listWithIcon" with one icon', function() {
        const checkWithOneIcon = function checkWithOneIcon(getByTestId) {
          const list = getByTestId('list');
          expect(list.classList.contains(listWithIcon)).toBeTruthy();
          expect(list.classList.contains(listWithDoubleIcon)).toBeFalsy();
        };

        test('as error', function() {
          const _render8 = render(
            React.createElement(MultiSelect, {
              options,
              error: 'foo',
            })
          );
          const { getByTestId } = _render8;

          const list = getByTestId('list');
          expect(list.classList.contains(listWithIcon)).toBeTruthy();
          expect(list.classList.contains(listWithDoubleIcon)).toBeFalsy();
        });
        test('as loader', function() {
          const _render9 = render(
            React.createElement(MultiSelect, {
              options,
              loading: true,
            })
          );
          const { getByTestId } = _render9;

          checkWithOneIcon(getByTestId);
        });
        test('as loader and error', function() {
          const _render10 = render(
            React.createElement(MultiSelect, {
              options,
              loading: true,
              error: 'foo',
            })
          );
          const { getByTestId } = _render10;

          const list = getByTestId('list');
          expect(list.classList.contains(listWithIcon)).toBeFalsy();
          expect(list.classList.contains(listWithDoubleIcon)).toBeFalsy();
        });
        test('as reset', function() {
          const _render11 = render(
            React.createElement(MultiSelect, {
              options,
            })
          );
          const { getByTestId } = _render11;

          fireInputChange(getByTestId);
          checkWithOneIcon(getByTestId);
        });
      });
      describe('is "listWithDoubleIcon" with two icons', function() {
        const checkWithDoubleIcon = function checkWithDoubleIcon(getByTestId) {
          const list = getByTestId('list');
          expect(list.classList.contains(listWithDoubleIcon)).toBeTruthy();
        };

        test('as loading and reset', function() {
          const _render12 = render(
            React.createElement(MultiSelect, {
              options,
              loading: true,
            })
          );
          const { getByTestId } = _render12;

          fireInputChange(getByTestId);
          checkWithDoubleIcon(getByTestId);
        });
        test('as error and reset', function() {
          const _render13 = render(
            React.createElement(MultiSelect, {
              options,
              error: 'foo',
            })
          );
          const { getByTestId } = _render13;

          fireInputChange(getByTestId);
          checkWithDoubleIcon(getByTestId);
        });
      });
    });
    test('renders "selectedOptions" properly', function() {
      const _render14 = render(
        React.createElement(MultiSelect, {
          options,
          name: 'bar',
          selectedOptions,
        })
      );
      const { getByTestId } = _render14;

      const chipList = getByTestId('chipList');
      const list = getByTestId('list');
      expect(chipList.childNodes.length).toEqual(2);
      expect(list.childNodes.length).toEqual(1);
    });
    describe('events', function() {
      test(
        'fires onSelect',
        /*#__PURE__*/
        (function() {
          const _ref = _asyncToGenerator(
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee(done) {
              let handleSelect;
              let _render15;
              let getByTestId;
              let list;

              return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      handleSelect = function handleSelect(name, value) {
                        expect(name).toEqual('bar');
                        expect(value).toEqual('foo');
                        done();
                      };

                      (_render15 = render(
                        React.createElement(MultiSelect, {
                          options,
                          name: 'bar',
                          onSelect: handleSelect,
                        })
                      )),
                        (getByTestId = _render15.getByTestId);
                      list = getByTestId('list');
                      fireEvent.click(list);
                      fireEvent.click(list.firstChild);

                    case 5:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );

          return function(_x) {
            return _ref.apply(this, arguments);
          };
        })()
      );
      describe('fires onResetSelection', function() {
        test('without preselected options', function(done) {
          const handleReset = function handleReset(name, value) {
            expect(name).toEqual('bar');
            expect(value).toEqual([]);
            done();
          };

          const _render16 = render(
            React.createElement(MultiSelect, {
              options,
              name: 'bar',
              onResetSelection: handleReset,
            })
          );
          const { getByTestId } = _render16;
          const { getByLabelText } = _render16;

          const input = getByTestId('select input');
          fireEvent.change(input, {
            target: {
              value: '10',
            },
          });
          expect(input.value).toBe('10');
          const resetIcon = getByLabelText('reset input value icon');
          fireEvent.click(resetIcon);
          const chipList = getByTestId('chipList');
          const list = getByTestId('list');
          expect(chipList.childNodes.length).toEqual(0);
          expect(list.childNodes.length).toEqual(3);
        });
        describe('with preselected options', function() {
          test('default', function(done) {
            const handleReset = function handleReset(name, value) {
              expect(name).toEqual('bar');
              expect(value).toEqual([]);
              done();
            };

            const _render17 = render(
              React.createElement(MultiSelect, {
                options,
                name: 'bar',
                selectedOptions,
                onResetSelection: handleReset,
              })
            );
            const { getByTestId } = _render17;
            const { getByLabelText } = _render17;

            const input = getByTestId('select input');
            fireEvent.change(input, {
              target: {
                value: '10',
              },
            });
            expect(input.value).toBe('10');
            const resetIcon = getByLabelText('reset input value icon');
            fireEvent.click(resetIcon);
            const chipList = getByTestId('chipList');
            const list = getByTestId('list');
            expect(chipList.childNodes.length).toEqual(0);
            expect(list.childNodes.length).toEqual(3);
          });
          test('add to ChipList then reset', function(done) {
            const handleReset = function handleReset(name, value) {
              expect(name).toEqual('bar');
              expect(value).toEqual([]);
              done();
            };

            const _render18 = render(
              React.createElement(MultiSelect, {
                options,
                name: 'bar',
                selectedOptions,
                onResetSelection: handleReset,
              })
            );
            const { getByTestId } = _render18;
            const { getByLabelText } = _render18;

            const chipList = getByTestId('chipList');
            const list = getByTestId('list');
            fireEvent.click(list.firstChild);
            expect(chipList.childNodes.length).toEqual(3);
            const resetIcon = getByLabelText('reset input value icon');
            fireEvent.click(resetIcon);
            expect(chipList.childNodes.length).toEqual(0);
            expect(list.childNodes.length).toEqual(3);
          });
          test('remove from ChipList then reset', function(done) {
            const handleReset = function handleReset(name, value) {
              expect(name).toEqual('bar');
              expect(value).toEqual([]);
              done();
            };

            const _render19 = render(
              React.createElement(MultiSelect, {
                options,
                name: 'bar',
                selectedOptions,
                onResetSelection: handleReset,
              })
            );
            const { getByTestId } = _render19;
            const { getByLabelText } = _render19;

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
      }); // FIXME: expected behaviour is to stay visible on item click

      test('closes on list item click', function(done) {
        const handleSelect = function handleSelect() {
          return done();
        };

        const _render20 = render(
          React.createElement(MultiSelect, {
            options,
            name: 'bar',
            onSelect: handleSelect,
          })
        );
        const { getByTestId } = _render20;

        const list = getByTestId('list');
        fireEvent.click(list);
        fireEvent.click(list.firstChild);
        expect(list.classList.contains(listHidden)).toBeTruthy();
      });
      describe('adds item to ChipList', function() {
        test('without preselectedOptions', function(done) {
          const handleSelect = function handleSelect() {
            return done();
          };

          const _render21 = render(
            React.createElement(MultiSelect, {
              options,
              name: 'bar',
              onSelect: handleSelect,
            })
          );
          const { getByTestId } = _render21;

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
        test('with preselectedOptions', function(done) {
          const handleSelect = function handleSelect() {
            return done();
          };

          const _render22 = render(
            React.createElement(MultiSelect, {
              options,
              name: 'bar',
              selectedOptions,
              onSelect: handleSelect,
            })
          );
          const { getByTestId } = _render22;

          const list = getByTestId('list');
          const chipList = getByTestId('chipList');
          fireEvent.click(list);
          fireEvent.click(list.firstChild);
          expect(list.classList.contains(listHidden)).toBeTruthy();
          expect(chipList.childNodes.length).toEqual(3);
          expect(list.childNodes.length).toEqual(0);
        });
      });
      test('removes item from ChipList', function() {
        const _render23 = render(
          React.createElement(MultiSelect, {
            options,
            name: 'bar',
            selectedOptions,
          })
        );
        const { getByTestId } = _render23;

        const list = getByTestId('list');
        const chipList = getByTestId('chipList');
        fireEvent.click(chipList.firstChild.firstChild);
        expect(chipList.childNodes.length).toEqual(1);
        expect(list.childNodes.length).toEqual(2);
      });
    });
  });
});

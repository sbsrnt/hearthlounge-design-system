import _regeneratorRuntime from '@babel/runtime/regenerator';
import _asyncToGenerator from '@babel/runtime/helpers/esm/asyncToGenerator';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Select } from '.';
describe('Select Component', function() {
  var items = [
    {
      value: 'foo',
    },
    {
      value: 'bar',
    },
  ];
  var disabled = 'select__disabled';
  var listHidden = 'select__list--hidden';
  var listVisible = 'select__list--visible';
  var listWithIcon = 'select__list--withIcon';
  var listWithDoubleIcon = 'select__list--withDoubleIcon';
  test('renders correctly', function() {
    var _render = render(React.createElement(Select, null)),
      container = _render.container;

    expect(container).not.toBeNull();
  });
  test('has select input rendered as input', function() {
    var _render2 = render(React.createElement(Select, null)),
      getByTestId = _render2.getByTestId;

    var input = getByTestId('select input');
    expect(input.nodeName).toBe('INPUT');
  });
  describe('disabled', function() {
    test('has "disabled" class', function() {
      var _render3 = render(
          React.createElement(Select, {
            items: items,
            disabled: true,
          })
        ),
        getByLabelText = _render3.getByLabelText;

      var input = getByLabelText('input');
      expect(input.classList.contains(disabled)).toBeTruthy();
    });
  });
  describe('list', function() {
    test('is hidden by default', function() {
      var _render4 = render(
          React.createElement(Select, {
            items: items,
          })
        ),
        getByTestId = _render4.getByTestId;

      var list = getByTestId('list');
      var listHiddenClass = list.classList.contains(listHidden);
      var listVisibleClass = list.classList.contains(listVisible);
      expect(listHiddenClass).toBeTruthy();
      expect(listVisibleClass).toBeFalsy();
    });
    describe('is visible', function() {
      var commonExpects = function commonExpects(getByTestId, selector) {
        var list = getByTestId('list');
        var hiddenTrue = list.classList.contains(listHidden);
        var visibleFalse = list.classList.contains(listVisible);
        expect(hiddenTrue).toBeTruthy();
        expect(visibleFalse).toBeFalsy();
        fireEvent.click(selector);
        var hiddenFalse = list.classList.contains(listHidden);
        var visibleTrue = list.classList.contains(listVisible);
        expect(hiddenFalse).toBeFalsy();
        expect(visibleTrue).toBeTruthy();
      };

      test('on label click', function() {
        var _render5 = render(
            React.createElement(Select, {
              items: items,
            })
          ),
          getByTestId = _render5.getByTestId;

        var label = getByTestId('label');
        commonExpects(getByTestId, label);
      });
      test('on input click', function() {
        var _render6 = render(
            React.createElement(Select, {
              items: items,
            })
          ),
          getByTestId = _render6.getByTestId;

        var input = getByTestId('select input');
        commonExpects(getByTestId, input);
      });
      test('on icon click', function() {
        var _render7 = render(
            React.createElement(Select, {
              items: items,
            })
          ),
          getByTestId = _render7.getByTestId;

        var icon = getByTestId('select icon');
        commonExpects(getByTestId, icon);
      });
    });
    describe('className', function() {
      var fireInputChange = function fireInputChange(getByTestId) {
        fireEvent.change(getByTestId('select input'), {
          target: {
            value: '10',
          },
        });
      };

      describe('is "listWithIcon" with one icon', function() {
        var checkWithOneIcon = function checkWithOneIcon(getByTestId) {
          var list = getByTestId('list');
          expect(list.classList.contains(listWithIcon)).toBeTruthy();
          expect(list.classList.contains(listWithDoubleIcon)).toBeFalsy();
        };

        test('as error', function() {
          var _render8 = render(
              React.createElement(Select, {
                items: items,
                error: 'foo',
              })
            ),
            getByTestId = _render8.getByTestId;

          var list = getByTestId('list');
          expect(list.classList.contains(listWithIcon)).toBeTruthy();
          expect(list.classList.contains(listWithDoubleIcon)).toBeFalsy();
        });
        test('as loader', function() {
          var _render9 = render(
              React.createElement(Select, {
                items: items,
                loading: true,
              })
            ),
            getByTestId = _render9.getByTestId;

          checkWithOneIcon(getByTestId);
        });
        test('as loader and error', function() {
          var _render10 = render(
              React.createElement(Select, {
                items: items,
                loading: true,
                error: 'foo',
              })
            ),
            getByTestId = _render10.getByTestId;

          var list = getByTestId('list');
          expect(list.classList.contains(listWithIcon)).toBeFalsy();
          expect(list.classList.contains(listWithDoubleIcon)).toBeFalsy();
        });
        test('as reset', function() {
          var _render11 = render(
              React.createElement(Select, {
                items: items,
              })
            ),
            getByTestId = _render11.getByTestId;

          fireInputChange(getByTestId);
          checkWithOneIcon(getByTestId);
        });
      });
      describe('is "listWithDoubleIcon" with two icons', function() {
        var checkWithDoubleIcon = function checkWithDoubleIcon(getByTestId) {
          var list = getByTestId('list');
          expect(list.classList.contains(listWithDoubleIcon)).toBeTruthy();
        };

        test('as loading and reset', function() {
          var _render12 = render(
              React.createElement(Select, {
                items: items,
                loading: true,
              })
            ),
            getByTestId = _render12.getByTestId;

          fireInputChange(getByTestId);
          checkWithDoubleIcon(getByTestId);
        });
        test('as error and reset', function() {
          var _render13 = render(
              React.createElement(Select, {
                items: items,
                error: 'foo',
              })
            ),
            getByTestId = _render13.getByTestId;

          fireInputChange(getByTestId);
          checkWithDoubleIcon(getByTestId);
        });
      });
    });
    describe('events', function() {
      test(
        'fires onSelect',
        /*#__PURE__*/
        (function() {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee(done) {
              var handleSelect, _render14, getByTestId, list;

              return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      handleSelect = function handleSelect(name, value) {
                        expect(name).toEqual('bar');
                        expect(value).toEqual('foo');
                        done();
                      };

                      (_render14 = render(
                        React.createElement(Select, {
                          items: items,
                          name: 'bar',
                          onSelect: handleSelect,
                        })
                      )),
                        (getByTestId = _render14.getByTestId);
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
      test('fires onInputReset', function(done) {
        var handleReset = function handleReset(name, value) {
          expect(name).toEqual('bar');
          expect(value).toEqual('');
          done();
        };

        var _render15 = render(
            React.createElement(Select, {
              items: items,
              name: 'bar',
              onInputReset: handleReset,
            })
          ),
          getByTestId = _render15.getByTestId,
          getByLabelText = _render15.getByLabelText;

        var input = getByTestId('select input');
        fireEvent.change(input, {
          target: {
            value: '10',
          },
        });
        expect(input.value).toBe('10');
        var resetIcon = getByLabelText('reset input value icon');
        fireEvent.click(resetIcon);
      }); // FIXME: expected behaviour is to stay visible on item click

      test('closes on list item click', function(done) {
        var handleSelect = function handleSelect() {
          return done();
        };

        var _render16 = render(
            React.createElement(Select, {
              items: items,
              name: 'bar',
              onSelect: handleSelect,
            })
          ),
          getByTestId = _render16.getByTestId;

        var list = getByTestId('list');
        fireEvent.click(list);
        fireEvent.click(list.firstChild);
        expect(list.classList.contains(listHidden)).toBeTruthy();
      });
    });
  });
});

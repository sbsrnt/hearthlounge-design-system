import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from '.';
describe('Checkbox Component', function () {
  test('renders correctly',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee() {
    var _render, container;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = render(React.createElement(Checkbox, null)), container = _render.container;
            expect(container).not.toBeNull();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('has checked classes when checked prop is provided',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2() {
    var _render2, getByTestId, checkboxContainer, checkmark;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = render(React.createElement(Checkbox, {
              checked: true
            })), getByTestId = _render2.getByTestId;
            checkboxContainer = getByTestId('checkbox-container');
            checkmark = getByTestId('checkmark');
            expect(checkboxContainer.classList.contains('checkbox__container--checked')).toBeTruthy();
            expect(checkmark.classList.contains('checkbox__checkmark--checked')).toBeTruthy();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('has disabled class when disabled prop is provided',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee3() {
    var _render3, getByTestId, checkboxContainer;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _render3 = render(React.createElement(Checkbox, {
              disabled: true
            })), getByTestId = _render3.getByTestId;
            checkboxContainer = getByTestId('checkbox-container');
            expect(checkboxContainer.classList.contains('checkbox__container--disabled')).toBeTruthy();

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  describe('handle onClick', function () {
    test('when checked is false',
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee4(done) {
        var handleClick, _render4, getByTestId, checkboxContainer;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                handleClick = function handleClick(name, value) {
                  expect(name).toEqual('foo');
                  expect(value).toEqual(true);
                  done();
                };

                _render4 = render(React.createElement(Checkbox, {
                  name: "foo",
                  onClick: handleClick
                })), getByTestId = _render4.getByTestId;
                checkboxContainer = getByTestId('checkbox-container');
                fireEvent.click(checkboxContainer);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());
    test('when checked is true',
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee5(done) {
        var handleClick, _render5, getByTestId, checkboxContainer;

        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                handleClick = function handleClick(name, value) {
                  expect(name).toEqual('foo');
                  expect(value).toEqual(false);
                  done();
                };

                _render5 = render(React.createElement(Checkbox, {
                  name: "foo",
                  onClick: handleClick,
                  checked: true
                })), getByTestId = _render5.getByTestId;
                checkboxContainer = getByTestId('checkbox-container');
                fireEvent.click(checkboxContainer);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
  describe('handle onKeyPress', function () {
    var spacebar = {
      key: 'Spacebar',
      keyCode: 32,
      charCode: 32
    };
    test('when checked is false',
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee6(done) {
        var handleKeyPress, _render6, getByTestId, checkboxContainer;

        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                handleKeyPress = function handleKeyPress(name, value) {
                  expect(name).toEqual('foo');
                  expect(value).toEqual(true);
                  done();
                };

                _render6 = render(React.createElement(Checkbox, {
                  name: "foo",
                  onKeyPress: handleKeyPress
                })), getByTestId = _render6.getByTestId;
                checkboxContainer = getByTestId('checkbox-container');
                fireEvent.keyPress(checkboxContainer, spacebar);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }());
    test('when checked is true',
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee7(done) {
        var handleKeyPress, _render7, getByTestId, checkboxContainer;

        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                handleKeyPress = function handleKeyPress(name, value) {
                  expect(name).toEqual('foo');
                  expect(value).toEqual(false);
                  done();
                };

                _render7 = render(React.createElement(Checkbox, {
                  name: "foo",
                  onKeyPress: handleKeyPress,
                  checked: true
                })), getByTestId = _render7.getByTestId;
                checkboxContainer = getByTestId('checkbox-container');
                fireEvent.keyPress(checkboxContainer, spacebar);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x4) {
        return _ref7.apply(this, arguments);
      };
    }());
  });
});
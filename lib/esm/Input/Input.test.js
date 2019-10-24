import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from '.';
describe('Input Component', function () {
  test('renders correctly', function () {
    var _render = render(React.createElement(Input, null)),
        container = _render.container;

    expect(container).not.toBeNull();
  });
  test('has "error" class on error', function () {
    var _render2 = render(React.createElement(Input, {
      error: "foo"
    })),
        getByTestId = _render2.getByTestId;

    var input = getByTestId('input');
    expect(input.classList.contains('input__error')).toBeTruthy();
  });
  test('has "disabled" class on disabled', function () {
    var _render3 = render(React.createElement(Input, {
      disabled: true
    })),
        getByTestId = _render3.getByTestId;

    var input = getByTestId('input');
    expect(input.classList.contains('input__disabled')).toBeTruthy();
  });
  test('fires onChange implicitly',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee() {
    var _render4, getByTestId, input;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render4 = render(React.createElement(Input, null)), getByTestId = _render4.getByTestId;
            input = getByTestId('input');
            fireEvent.change(input, {
              target: {
                value: '23'
              }
            });
            expect(input.value).toBe('23');

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('fires onChange explicitly',
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2(done) {
      var handleChange, _render5, getByTestId, input;

      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              handleChange = function handleChange(name, value) {
                expect(name).toEqual('foo');
                expect(value).toEqual('23');
                done();
              };

              _render5 = render(React.createElement(Input, {
                onChange: handleChange,
                name: "foo"
              })), getByTestId = _render5.getByTestId;
              input = getByTestId('input');
              fireEvent.change(input, {
                target: {
                  value: '23'
                }
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
});
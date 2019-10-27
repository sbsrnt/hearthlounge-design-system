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
  test('fires onChange explicitly',
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(done) {
      var handleChange, _render4, getByTestId, input;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              handleChange = function handleChange(name, value) {
                expect(name).toEqual('foo');
                expect(value).toEqual('23');
                done();
              };

              _render4 = render(React.createElement(Input, {
                onChange: handleChange,
                name: "foo"
              })), getByTestId = _render4.getByTestId;
              input = getByTestId('input');
              fireEvent.change(input, {
                target: {
                  value: '23'
                }
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});
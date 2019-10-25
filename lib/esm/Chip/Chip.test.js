import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import React from 'react';
import { render } from '@testing-library/react';
import { Chip } from '.';
describe('Chip Component', function () {
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
            _render = render(React.createElement(Chip, null)), container = _render.container;
            expect(container).not.toBeNull();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('on "brColor" has blue background',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2() {
    var _render2, container;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = render(React.createElement(Chip, {
              bgColor: "blue"
            })), container = _render2.container;
            expect(container.firstChild).toHaveStyle('background-color: blue;');

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('on "textColor" has blue text and border',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee3() {
    var _render3, container;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _render3 = render(React.createElement(Chip, {
              bgColor: "white",
              textColor: "blue"
            })), container = _render3.container;
            expect(container.firstChild).toHaveStyle('color: blue;');
            expect(container.firstChild).toHaveStyle('border-color: blue;');

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});
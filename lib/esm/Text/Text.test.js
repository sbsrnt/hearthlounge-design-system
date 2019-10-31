import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import React from 'react';
import { render } from '@testing-library/react';
import { Text } from '.';
describe('Text Component', function () {
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
            _render = render(React.createElement(Text, null)), container = _render.container;
            expect(container).not.toBeNull();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('renders children correctly',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2() {
    var _render2, getByText, text;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = render(React.createElement(Text, null, "foo")), getByText = _render2.getByText;
            _context2.next = 3;
            return getByText('foo');

          case 3:
            text = _context2.sent;
            expect(text).not.toBeNull();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('has classname prop',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee3() {
    var _render3, container;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _render3 = render(React.createElement(Text, {
              className: "foo"
            })), container = _render3.container;
            expect(container.firstChild.classList.contains('foo')).toBe(true);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test('has aria-label prop (via {...props})',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee4() {
    var _render4, getByLabelText, label;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _render4 = render(React.createElement(Text, {
              "aria-label": "bar"
            })), getByLabelText = _render4.getByLabelText;
            label = getByLabelText('bar');
            expect(label).not.toBeNull();

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import React from 'react';
import { render } from '@testing-library/react';
import { Tooltip } from '.';
describe('Tooltip Component', function () {
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
            _render = render(React.createElement(Tooltip, {
              text: "foo"
            }, "bar")), container = _render.container;
            expect(container).not.toBeNull();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('has tooltipText class on applyChildStyles prop',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2() {
    var _render2, container;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = render(React.createElement(Tooltip, {
              text: "foo",
              applyStylesToChild: true
            }, "bar")), container = _render2.container;
            expect(container.firstChild.classList.contains('tooltip__text')).toBeTruthy();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
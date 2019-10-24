import _regeneratorRuntime from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';

describe('Header Component', function() {
  test(
    'renders correctly',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        let _render;
        let container;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                (_render = render(React.createElement(Header, null))),
                  (container = _render.container);
                expect(container).not.toBeNull();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    )
  );
  test(
    'renders as "h3" by default',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2() {
        let _render2;
        let container;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                (_render2 = render(React.createElement(Header, null))),
                  (container = _render2.container);
                expect(container.firstChild.nodeName).toBe('H3');

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    )
  );
  test(
    'renders as "h1"',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee3() {
        let _render3;
        let container;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                (_render3 = render(
                  React.createElement(Header, {
                    as: 'h1',
                  })
                )),
                  (container = _render3.container);
                expect(container.firstChild.nodeName).toBe('H1');

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3);
      })
    )
  );
  test(
    'renders as "h5"',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee4() {
        let _render4;
        let container;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                (_render4 = render(
                  React.createElement(Header, {
                    as: 'h5',
                  })
                )),
                  (container = _render4.container);
                expect(container.firstChild.nodeName).toBe('H5');

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4);
      })
    )
  );
  test(
    'renders children correctly',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee5() {
        let _render5;
        let getByText;
        let text;

        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                (_render5 = render(React.createElement(Header, null, 'foo'))),
                  (getByText = _render5.getByText);
                _context5.next = 3;
                return getByText('foo');

              case 3:
                text = _context5.sent;
                expect(text).not.toBeNull();

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5);
      })
    )
  );
  test(
    'has classname prop',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee6() {
        let _render6;
        let container;

        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                (_render6 = render(
                  React.createElement(Header, {
                    className: 'foo',
                  })
                )),
                  (container = _render6.container);
                expect(container.firstChild.classList.contains('foo')).toBe(
                  true
                );

              case 2:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6);
      })
    )
  );
  test(
    'has aria-label prop (via {...props})',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee7() {
        let _render7;
        let getByLabelText;
        let label;

        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch ((_context7.prev = _context7.next)) {
              case 0:
                (_render7 = render(
                  React.createElement(Header, {
                    'aria-label': 'bar',
                  })
                )),
                  (getByLabelText = _render7.getByLabelText);
                label = getByLabelText('bar');
                expect(label).not.toBeNull();

              case 3:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7);
      })
    )
  );
});

import _regeneratorRuntime from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import React from 'react';
import { render } from '@testing-library/react';
import Link from '.';

describe('Link Component', function() {
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
                (_render = render(
                  React.createElement(
                    Link,
                    {
                      to: 'foo',
                    },
                    'foo'
                  )
                )),
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
    'renders as button if needed',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2() {
        let _render2;
        let getByText;
        let el;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                (_render2 = render(
                  React.createElement(
                    Link,
                    {
                      as: 'button',
                      to: 'foo',
                    },
                    'foo'
                  )
                )),
                  (getByText = _render2.getByText);
                el = getByText('foo').nodeName;
                expect(el).toBe('BUTTON');

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    )
  );
  test(
    'redirects correctly',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee3() {
        let _render3;
        let getByText;
        let el;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                (_render3 = render(
                  React.createElement(
                    Link,
                    {
                      to: 'foo',
                    },
                    'foo'
                  )
                )),
                  (getByText = _render3.getByText);
                el = getByText('foo').getAttribute('href');
                expect(el).toEqual('foo');

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3);
      })
    )
  );
  test(
    'has classname prop',
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
                  React.createElement(
                    Link,
                    {
                      className: 'foo',
                      to: 'bar',
                    },
                    'baz'
                  )
                )),
                  (container = _render4.container);
                expect(container.firstChild.classList.contains('foo')).toBe(
                  true
                );

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
    'has aria-label prop (via {...props})',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee5() {
        let _render5;
        let getByLabelText;
        let label;

        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                (_render5 = render(
                  React.createElement(
                    Link,
                    {
                      'aria-label': 'foo',
                      to: 'bar',
                    },
                    'baz'
                  )
                )),
                  (getByLabelText = _render5.getByLabelText);
                label = getByLabelText('foo');
                expect(label).not.toBeNull();

              case 3:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5);
      })
    )
  );
});

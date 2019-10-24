import _regeneratorRuntime from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';
import styles from './styles.module.scss';

describe('Button Component', function() {
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
                (_render = render(React.createElement(Button, null))),
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
    'renders children correctly',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2() {
        let _render2;
        let getByText;
        let text;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                (_render2 = render(React.createElement(Button, null, 'foo'))),
                  (getByText = _render2.getByText);
                _context2.next = 3;
                return getByText('foo');

              case 3:
                text = _context2.sent;
                expect(text).not.toBeNull();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    )
  );
  test(
    'has "button" class',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee3() {
        let _render3;
        let container;
        let className;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                (_render3 = render(React.createElement(Button, null))),
                  (container = _render3.container);
                className = container.firstChild.classList.contains(
                  styles.button
                );
                expect(className).toBe(true);

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
    'has className prop',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee4() {
        let _render4;
        let container;
        let className;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                (_render4 = render(
                  React.createElement(Button, {
                    className: 'foo',
                  })
                )),
                  (container = _render4.container);
                className = container.firstChild.classList.contains('foo');
                expect(className).toBe(true);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4);
      })
    )
  );
  describe('has size', function() {
    test(
      'small',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee5() {
          let _render5;
          let container;
          let className;

          return _regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch ((_context5.prev = _context5.next)) {
                case 0:
                  (_render5 = render(
                    React.createElement(Button, {
                      size: 'small',
                    })
                  )),
                    (container = _render5.container);
                  className = container.firstChild.classList.contains(
                    styles.small
                  );
                  expect(className).toBe(true);

                case 3:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5);
        })
      )
    );
    test(
      'secondary',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee6() {
          let _render6;
          let container;
          let className;

          return _regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch ((_context6.prev = _context6.next)) {
                case 0:
                  (_render6 = render(
                    React.createElement(Button, {
                      theme: 'secondary',
                    })
                  )),
                    (container = _render6.container);
                  className = container.firstChild.classList.contains(
                    styles.secondary
                  );
                  expect(className).toBe(true);

                case 3:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6);
        })
      )
    );
  });
  describe('has theme', function() {
    test(
      'primary by default',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee7() {
          let _render7;
          let container;
          let className;

          return _regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch ((_context7.prev = _context7.next)) {
                case 0:
                  (_render7 = render(React.createElement(Button, null))),
                    (container = _render7.container);
                  className = container.firstChild.classList.contains(
                    styles.secondary
                  );
                  expect(className).not.toBe(true);

                case 3:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7);
        })
      )
    );
    test(
      'secondary',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee8() {
          let _render8;
          let container;
          let className;

          return _regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch ((_context8.prev = _context8.next)) {
                case 0:
                  (_render8 = render(
                    React.createElement(Button, {
                      theme: 'secondary',
                    })
                  )),
                    (container = _render8.container);
                  className = container.firstChild.classList.contains(
                    styles.secondary
                  );
                  expect(className).toBe(true);

                case 3:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8);
        })
      )
    );
  });
  describe('is disabled', function() {
    test(
      'when loading prep is present',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee9() {
          let _render9;
          let container;
          let className;

          return _regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch ((_context9.prev = _context9.next)) {
                case 0:
                  (_render9 = render(
                    React.createElement(Button, {
                      loading: true,
                    })
                  )),
                    (container = _render9.container);
                  className = container.firstChild.classList.contains(
                    styles.loading
                  );
                  expect(className).toBe(true);

                case 3:
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9);
        })
      )
    );
    test(
      'with disabled prop',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee10() {
          let _render10;
          let container;

          return _regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch ((_context10.prev = _context10.next)) {
                case 0:
                  (_render10 = render(
                    React.createElement(Button, {
                      disabled: true,
                    })
                  )),
                    (container = _render10.container);
                  expect(container.firstChild.disabled).toBe(true);

                case 2:
                case 'end':
                  return _context10.stop();
              }
            }
          }, _callee10);
        })
      )
    );
  });
  describe('type', function() {
    test(
      'has type=button by default',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee11() {
          let _render11;
          let container;
          let btn;

          return _regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch ((_context11.prev = _context11.next)) {
                case 0:
                  (_render11 = render(React.createElement(Button, null))),
                    (container = _render11.container);
                  btn = container.firstElementChild.getAttribute('type');
                  expect(btn).toBe('button');

                case 3:
                case 'end':
                  return _context11.stop();
              }
            }
          }, _callee11);
        })
      )
    );
    test(
      'has type=submit',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee12() {
          let _render12;
          let container;
          let btn;

          return _regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch ((_context12.prev = _context12.next)) {
                case 0:
                  (_render12 = render(
                    React.createElement(Button, {
                      type: 'submit',
                    })
                  )),
                    (container = _render12.container);
                  btn = container.firstElementChild.getAttribute('type');
                  expect(btn).toBe('submit');

                case 3:
                case 'end':
                  return _context12.stop();
              }
            }
          }, _callee12);
        })
      )
    );
  });
  test('fires onClick event', function(done) {
    const handleClick = function handleClick() {
      return done();
    };

    const _render13 = render(
      React.createElement(
        Button,
        {
          onClick: handleClick,
        },
        'foo'
      )
    );
    const { getByText } = _render13;

    const btn = getByText('foo');
    fireEvent.click(btn);
  });
  test(
    'has aria-label prop (via {...props})',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee13() {
        let _render14;
        let getByLabelText;
        let label;

        return _regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch ((_context13.prev = _context13.next)) {
              case 0:
                (_render14 = render(
                  React.createElement(Button, {
                    'aria-label': 'bar',
                  })
                )),
                  (getByLabelText = _render14.getByLabelText);
                label = getByLabelText('bar');
                expect(label).not.toBeNull();

              case 3:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13);
      })
    )
  );
});

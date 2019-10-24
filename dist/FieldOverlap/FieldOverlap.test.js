import _regeneratorRuntime from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import React from 'react';
import { render } from '@testing-library/react';
import FieldOverlap from '.';
import styles from './styles.module.scss';

describe('FieldOverlap Component', function() {
  test('renders correctly', function() {
    const _render = render(React.createElement(FieldOverlap, null));
    const { container } = _render;

    expect(container).not.toBeNull();
  });
  test('renders children correctly', function() {
    const _render2 = render(React.createElement(FieldOverlap, null, 'foo'));
    const { getByText } = _render2;

    const children = getByText('foo');
    expect(children).not.toBeNull();
  });
  test('renders label correctly', function() {
    const _render3 = render(
      React.createElement(
        FieldOverlap,
        {
          label: 'bar',
        },
        'foo'
      )
    );
    const { queryByText } = _render3;

    const label = queryByText('bar');
    expect(label).not.toBeNull();
  });
  test('has red border and label color on error', function() {
    const _render4 = render(
      React.createElement(
        FieldOverlap,
        {
          label: 'bar',
          error: 'baz',
        },
        'foo'
      )
    );
    const { container } = _render4;
    const { getByTestId } = _render4;

    const label = getByTestId('label');
    expect(container.firstChild.classList.contains(styles.error)).toBeTruthy();
    expect(label.classList.contains(styles.error)).toBeTruthy();
  });
  test('has error icon on error state', function() {
    const _render5 = render(
      React.createElement(
        FieldOverlap,
        {
          label: 'bar',
          error: 'error msg',
        },
        'foo'
      )
    );
    const { queryByTestId } = _render5;

    const loaderIcon = queryByTestId('loader icon');
    const errorIcon = queryByTestId('important icon');
    expect(errorIcon).not.toBeNull();
    expect(loaderIcon).toBeNull();
  });
  test('has loader icon on loading state', function() {
    const _render6 = render(
      React.createElement(
        FieldOverlap,
        {
          label: 'bar',
          loading: true,
        },
        'foo'
      )
    );
    const { queryByTestId } = _render6;

    const loaderIcon = queryByTestId('loader icon');
    const errorIcon = queryByTestId('important icon');
    expect(loaderIcon).not.toBeNull();
    expect(errorIcon).toBeNull();
  });
  describe('is disabled', function() {
    test('with "disabled" prop', function() {
      const _render7 = render(
        React.createElement(
          FieldOverlap,
          {
            disabled: true,
          },
          'foo'
        )
      );
      const { container } = _render7;
    });
  });
  describe('has "childrenWithIcon" class with one icon', function() {
    test(
      'as loading icon',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee() {
          let _render8;
          let getByLabelText;
          let icons;

          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  (_render8 = render(
                    React.createElement(
                      FieldOverlap,
                      {
                        label: 'bar',
                        loading: true,
                      },
                      'foo'
                    )
                  )),
                    (getByLabelText = _render8.getByLabelText);
                  icons = getByLabelText('field overlap elements');
                  expect(
                    icons.classList.contains('childrenWithIcon')
                  ).toBeTruthy();
                  expect(
                    icons.classList.contains('childrenWithDoubleIcon')
                  ).toBeFalsy();

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        })
      )
    );
    test(
      'as error icon',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee2() {
          let _render9;
          let getByLabelText;
          let icons;

          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  (_render9 = render(
                    React.createElement(
                      FieldOverlap,
                      {
                        label: 'bar',
                        error: 'foo',
                      },
                      'foo'
                    )
                  )),
                    (getByLabelText = _render9.getByLabelText);
                  icons = getByLabelText('field overlap elements');
                  expect(
                    icons.classList.contains('childrenWithIcon')
                  ).toBeTruthy();
                  expect(
                    icons.classList.contains('childrenWithDoubleIcon')
                  ).toBeFalsy();

                case 4:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2);
        })
      )
    );
    test(
      'as reset icon',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee3() {
          let _render10;
          let getByLabelText;
          let icons;

          return _regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  (_render10 = render(
                    React.createElement(
                      FieldOverlap,
                      {
                        label: 'bar',
                        resetIcon: true,
                      },
                      'foo'
                    )
                  )),
                    (getByLabelText = _render10.getByLabelText);
                  icons = getByLabelText('field overlap elements');
                  expect(
                    icons.classList.contains('childrenWithIcon')
                  ).toBeTruthy();
                  expect(
                    icons.classList.contains('childrenWithDoubleIcon')
                  ).toBeFalsy();

                case 4:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3);
        })
      )
    );
    test(
      'as loading and error icon',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee4() {
          let _render11;
          let getByLabelText;
          let icons;

          return _regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  (_render11 = render(
                    React.createElement(
                      FieldOverlap,
                      {
                        label: 'bar',
                        loading: true,
                        error: 'foo',
                      },
                      'foo'
                    )
                  )),
                    (getByLabelText = _render11.getByLabelText);
                  icons = getByLabelText('field overlap elements');
                  expect(
                    icons.classList.contains('childrenWithIcon')
                  ).toBeFalsy();
                  expect(
                    icons.classList.contains('childrenWithDoubleIcon')
                  ).toBeFalsy();

                case 4:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4);
        })
      )
    );
  });
  describe('has "childrenWithDoubleIcon" class with two icon', function() {
    test(
      'as error & reset icon',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee5() {
          let _render12;
          let getByLabelText;
          let icons;

          return _regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch ((_context5.prev = _context5.next)) {
                case 0:
                  (_render12 = render(
                    React.createElement(
                      FieldOverlap,
                      {
                        label: 'bar',
                        resetIcon: true,
                        error: 'foo',
                      },
                      'foo'
                    )
                  )),
                    (getByLabelText = _render12.getByLabelText);
                  icons = getByLabelText('field overlap elements');
                  expect(
                    icons.classList.contains('childrenWithIcon')
                  ).toBeTruthy();

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
      'as loading & reset icon',
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee6() {
          let _render13;
          let getByLabelText;
          let icons;

          return _regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch ((_context6.prev = _context6.next)) {
                case 0:
                  (_render13 = render(
                    React.createElement(
                      FieldOverlap,
                      {
                        label: 'bar',
                        loading: true,
                        resetIcon: true,
                      },
                      'foo'
                    )
                  )),
                    (getByLabelText = _render13.getByLabelText);
                  icons = getByLabelText('field overlap elements');
                  expect(
                    icons.classList.contains('childrenWithIcon')
                  ).toBeTruthy();

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
});

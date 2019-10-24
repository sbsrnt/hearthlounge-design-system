import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import React from 'react';
import { render } from '@testing-library/react';
import FieldOverlap from '.';
describe('FieldOverlap Component', function () {
  test('renders correctly', function () {
    var _render = render(React.createElement(FieldOverlap, null)),
        container = _render.container;

    expect(container).not.toBeNull();
  });
  test('renders children correctly', function () {
    var _render2 = render(React.createElement(FieldOverlap, null, "foo")),
        getByText = _render2.getByText;

    var children = getByText('foo');
    expect(children).not.toBeNull();
  });
  test('renders label correctly', function () {
    var _render3 = render(React.createElement(FieldOverlap, {
      label: "bar"
    }, "foo")),
        queryByText = _render3.queryByText;

    var label = queryByText('bar');
    expect(label).not.toBeNull();
  });
  test('has red border and label color on error', function () {
    var _render4 = render(React.createElement(FieldOverlap, {
      label: "bar",
      error: "baz"
    }, "foo")),
        container = _render4.container,
        getByTestId = _render4.getByTestId;

    var label = getByTestId('label');
    expect(container.firstChild.classList.contains('fieldOverlap__error')).toBeTruthy();
    expect(label.classList.contains('fieldOverlap__error')).toBeTruthy();
  });
  test('has error icon on error state', function () {
    var _render5 = render(React.createElement(FieldOverlap, {
      label: "bar",
      error: "error msg"
    }, "foo")),
        queryByTestId = _render5.queryByTestId;

    var loaderIcon = queryByTestId('loader icon');
    var errorIcon = queryByTestId('important icon');
    expect(errorIcon).not.toBeNull();
    expect(loaderIcon).toBeNull();
  });
  test('has loader icon on loading state', function () {
    var _render6 = render(React.createElement(FieldOverlap, {
      label: "bar",
      loading: true
    }, "foo")),
        queryByTestId = _render6.queryByTestId;

    var loaderIcon = queryByTestId('loader icon');
    var errorIcon = queryByTestId('important icon');
    expect(loaderIcon).not.toBeNull();
    expect(errorIcon).toBeNull();
  });
  test('with "disabled" prop', function () {
    var _render7 = render(React.createElement(FieldOverlap, {
      disabled: true
    }, "foo")),
        container = _render7.container;

    var wrapperClasses = container.firstChild.classList;
    expect(wrapperClasses.contains('fieldOverlap__disabled')).toBeTruthy();
  });
  describe('has "childrenWithIcon" class with one icon', function () {
    test('as loading icon',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var _render8, getByLabelText, icons;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _render8 = render(React.createElement(FieldOverlap, {
                label: "bar",
                loading: true
              }, "foo")), getByLabelText = _render8.getByLabelText;
              icons = getByLabelText('field overlap elements');
              expect(icons.classList.contains('fieldOverlap__childrenWrapper--withIcon')).toBeTruthy();
              expect(icons.classList.contains('fieldOverlap__childrenWrapper--withDoubleIcon')).toBeFalsy();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    test('as error icon',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      var _render9, getByLabelText, icons;

      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _render9 = render(React.createElement(FieldOverlap, {
                label: "bar",
                error: "foo"
              }, "foo")), getByLabelText = _render9.getByLabelText;
              icons = getByLabelText('field overlap elements');
              expect(icons.classList.contains('fieldOverlap__childrenWrapper--withIcon')).toBeTruthy();
              expect(icons.classList.contains('fieldOverlap__childrenWrapper--withDoubleIcon')).toBeFalsy();

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    test('as reset icon',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3() {
      var _render10, getByLabelText, icons;

      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _render10 = render(React.createElement(FieldOverlap, {
                label: "bar",
                resetIcon: true
              }, "foo")), getByLabelText = _render10.getByLabelText;
              icons = getByLabelText('field overlap elements');
              expect(icons.classList.contains('fieldOverlap__childrenWrapper--withIcon')).toBeTruthy();
              expect(icons.classList.contains('fieldOverlap__childrenWrapper--withDoubleIcon')).toBeFalsy();

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    test('as loading and error icon',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee4() {
      var _render11, getByLabelText, icons;

      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _render11 = render(React.createElement(FieldOverlap, {
                label: "bar",
                loading: true,
                error: "foo"
              }, "foo")), getByLabelText = _render11.getByLabelText;
              icons = getByLabelText('field overlap elements');
              expect(icons.classList.contains('fieldOverlap__childrenWrapper--withIcon')).toBeFalsy();
              expect(icons.classList.contains('fieldOverlap__childrenWrapper--withDoubleIcon')).toBeFalsy();

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
  describe('has "childrenWithDoubleIcon" class with two icon', function () {
    test('as error & reset icon',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee5() {
      var _render12, getByLabelText, icons;

      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _render12 = render(React.createElement(FieldOverlap, {
                label: "bar",
                resetIcon: true,
                error: "foo"
              }, "foo")), getByLabelText = _render12.getByLabelText;
              icons = getByLabelText('field overlap elements');
              expect(icons.classList.contains('fieldOverlap__childrenWrapper--withIcon')).toBeTruthy();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    test('as loading & reset icon',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee6() {
      var _render13, getByLabelText, icons;

      return _regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _render13 = render(React.createElement(FieldOverlap, {
                label: "bar",
                loading: true,
                resetIcon: true
              }, "foo")), getByLabelText = _render13.getByLabelText;
              icons = getByLabelText('field overlap elements');
              expect(icons.classList.contains('fieldOverlap__childrenWrapper--withIcon')).toBeTruthy();

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
  });
});
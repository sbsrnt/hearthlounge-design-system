import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { node, string, bool, oneOfType, oneOf } from 'prop-types';
import cx from 'classnames';

var Column = function Column(_ref) {
  var _cx;

  var children = _ref.children,
      className = _ref.className,
      lg = _ref.lg,
      md = _ref.md,
      sm = _ref.sm,
      xs = _ref.xs,
      props = _objectWithoutProperties(_ref, ["children", "className", "lg", "md", "sm", "xs"]);

  var columnClasses = cx((_cx = {}, _defineProperty(_cx, "col-xs-".concat(xs), xs), _defineProperty(_cx, "col-sm-".concat(sm), sm), _defineProperty(_cx, "col-md-".concat(md), md), _defineProperty(_cx, "col-lg-".concat(lg), lg), _defineProperty(_cx, 'col-xs', typeof xs === 'boolean' && xs), _defineProperty(_cx, 'col-sm', typeof sm === 'boolean' && sm), _defineProperty(_cx, 'col-md', typeof md === 'boolean' && md), _defineProperty(_cx, 'col-lg', typeof lg === 'boolean' && lg), _defineProperty(_cx, className, className), _cx));
  return React.createElement("div", _extends({
    className: columnClasses
  }, props), children);
};

var COLUMN_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
Column.propTypes = {
  /** Any node(s) to be displayed as children */
  children: node,

  /** Any additional classNames to specify on the element */
  className: string,

  /** Column width at the large viewport width */
  lg: oneOfType([oneOf(COLUMN_NUMBERS), bool]),

  /** Column width at the medium viewport width */
  md: oneOfType([oneOf(COLUMN_NUMBERS), bool]),

  /** Column width at the small viewport width */
  sm: oneOfType([oneOf(COLUMN_NUMBERS), bool]),

  /** Column width at the extra small viewport width */
  xs: oneOfType([oneOf(COLUMN_NUMBERS), bool])
};
Column.defaultProps = {
  children: null,
  className: null,
  lg: null,
  md: null,
  sm: null,
  xs: 12
};
export { Column };
export default Column;
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import cx from 'classnames';
import { node, string } from 'prop-types';

var Chip = function Chip(_ref) {
  var children = _ref.children,
      className = _ref.className,
      bgColor = _ref.bgColor,
      textColor = _ref.textColor,
      props = _objectWithoutProperties(_ref, ["children", "className", "bgColor", "textColor"]);

  var styles = {
    backgroundColor: bgColor,
    color: textColor,
    borderColor: textColor
  };
  return React.createElement("div", _extends({
    className: cx('chip py-1 px-3', className),
    style: bgColor ? styles : null
  }, props), React.createElement("span", null, children));
};

Chip.propTypes = {
  /** Chip background color */
  bgColor: string,

  /** Any node(s) to be displayed as children */
  children: node,

  /** Any additional classNames to specify on the element */
  className: string,

  /** Responsible for text color */
  textColor: string
};
Chip.defaultProps = {
  bgColor: null,
  children: null,
  className: null,
  textColor: null
};
export { Chip };
export default Chip;
import React from 'react';
import cx from 'classnames';
import { node, string } from 'prop-types';

var Chip = function Chip(_ref) {
  var children = _ref.children,
      className = _ref.className,
      bgColor = _ref.bgColor,
      textColor = _ref.textColor;
  var styles = {
    backgroundColor: bgColor,
    color: textColor,
    borderColor: textColor
  };
  return React.createElement("div", {
    className: cx('chip py-1 px-3', className),
    style: bgColor ? styles : null
  }, React.createElement("span", null, children));
};

Chip.propTypes = {
  bgColor: string,
  children: node,
  className: string,
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
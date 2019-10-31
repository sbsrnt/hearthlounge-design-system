import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { node, oneOf, string } from 'prop-types';

var Header = function Header(_ref) {
  var T = _ref.as,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["as", "children", "className"]);

  return React.createElement(T, _extends({
    className: className
  }, props), children);
};

var supportedHeaderLevels = ['h1', 'h2', 'h3', 'h4', 'h5'];
Header.propTypes = {
  /** Levels of header */
  as: oneOf(supportedHeaderLevels),

  /** Any node(s) to be displayed as children */
  children: node,

  /** Any additional classNames to specify on the element */
  className: string
};
Header.defaultProps = {
  as: 'h3',
  children: null,
  className: null
};
export { Header };
export default Header;
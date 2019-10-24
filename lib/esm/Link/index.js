import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { node, string } from 'prop-types';

var Link = function Link(_ref) {
  var T = _ref.as,
      to = _ref.to,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["as", "to", "children", "className"]);

  return React.createElement(T, _extends({
    href: to,
    className: className
  }, props), children);
};

Link.propTypes = {
  as: string,
  children: node.isRequired,
  className: string,
  to: string.isRequired
};
Link.defaultProps = {
  as: 'a',
  className: null
};
export { Link };
export default Link;
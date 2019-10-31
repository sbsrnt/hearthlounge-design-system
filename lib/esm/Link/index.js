import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import cx from 'classnames';
import { node, string } from 'prop-types';

var Link = function Link(_ref) {
  var T = _ref.as,
      to = _ref.to,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["as", "to", "children", "className"]);

  return React.createElement(T, _extends({
    href: to,
    className: cx('link', className)
  }, props), children);
};

Link.propTypes = {
  /** The tag of the element */
  as: string,

  /** Any node(s) to be displayed as children */
  children: node.isRequired,

  /** Any additional classNames to specify on the element */
  className: string,

  /** Redirection path */
  to: string.isRequired
};
Link.defaultProps = {
  as: 'a',
  className: null
};
export { Link };
export default Link;
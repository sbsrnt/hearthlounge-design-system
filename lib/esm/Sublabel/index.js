import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import cx from 'classnames';
import { node, oneOf, string } from 'prop-types';

var Sublabel = function Sublabel(_ref) {
  var T = _ref.as,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["as", "children", "className"]);

  return React.createElement(T, _extends({
    className: cx('sublabel', className)
  }, props), children);
};

var supportedNodes = ['div', 'label'];
Sublabel.propTypes = {
  /** The tag of the element */
  as: oneOf(supportedNodes),

  /** Any node(s) to be displayed as children */
  children: node,

  /** Any additional classNames to specify on the element */
  className: string
};
Sublabel.defaultProps = {
  as: 'div',
  children: null,
  className: null
};
export { Sublabel };
export default Sublabel;
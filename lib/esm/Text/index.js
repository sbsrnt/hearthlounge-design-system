import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { node, string } from 'prop-types';

var Text = function Text(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return React.createElement("p", _extends({
    className: className
  }, props), children);
};

Text.propTypes = {
  /** Any node(s) to be displayed as children */
  children: node,

  /** Any additional classNames to specify on the element */
  className: string
};
Text.defaultProps = {
  children: null,
  className: null
};
export { Text };
export default Text;
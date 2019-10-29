import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import cx from 'classnames';
import { node, oneOf, string } from 'prop-types';

var StrikeBehind = function StrikeBehind(_ref) {
  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["children", "className", "size"]);

  var classes = {
    'strike-behind': true,
    'strike-behind__small': size === 'small'
  };
  return React.createElement("div", _extends({
    className: cx(classes, className)
  }, props), React.createElement("span", {
    className: "px-1"
  }, children));
};

var supportedSizes = ['small', 'medium'];
StrikeBehind.propTypes = {
  children: node,
  className: string,
  size: oneOf(supportedSizes)
};
StrikeBehind.defaultProps = {
  children: null,
  className: null,
  size: 'medium'
};
export { StrikeBehind };
export default StrikeBehind;
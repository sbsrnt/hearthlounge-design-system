import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import cx from 'classnames';
import { node, string } from 'prop-types';

var StrikeBehind = function StrikeBehind(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return React.createElement("div", _extends({
    className: cx('strike-behind', className)
  }, props), React.createElement("span", {
    className: "px-1"
  }, children));
};

StrikeBehind.propTypes = {
  children: node,
  className: string
};
StrikeBehind.defaultProps = {
  children: null,
  className: null
};
export { StrikeBehind };
export default StrikeBehind;
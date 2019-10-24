import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import cx from 'classnames';
import { number, string } from 'prop-types';

var Loader = function Loader(_ref) {
  var size = _ref.size,
      thickness = _ref.thickness,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["size", "thickness", "className"]);

  var loaderStyles = {
    width: size,
    height: size,
    borderWidth: thickness
  };
  return React.createElement("div", _extends({
    className: cx('loader', className),
    style: loaderStyles,
    "aria-label": "loader"
  }, props));
};

Loader.propTypes = {
  className: string,
  size: number,
  thickness: number
};
Loader.defaultProps = {
  className: '',
  size: 30,
  thickness: 3
};
export { Loader };
export default Loader;
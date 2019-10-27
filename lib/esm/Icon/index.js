import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { bool, number, string } from 'prop-types';
import cx from 'classnames';
import { icons } from '../icons';

var Icon = function Icon(_ref) {
  var name = _ref.name,
      block = _ref.block,
      visible = _ref.visible,
      className = _ref.className,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["name", "block", "visible", "className", "size"]);

  var _icons$find = icons.find(function (i) {
    return i.tags[1] === name;
  }),
      paths = _icons$find.paths;

  var iconClasses = {
    icon: true,
    visible: visible,
    notVisible: !visible,
    icon__block: block
  };
  return React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 1024 1024",
    className: cx(iconClasses, className)
  }, props), paths && paths.map(function (path, i) {
    return React.createElement("path", {
      className: "icon__path",
      key: "path_".concat(name, "_").concat(i),
      d: path
    });
  }));
};

Icon.propTypes = {
  className: string,
  name: string.isRequired,
  block: bool,
  size: number,
  visible: bool
};
Icon.defaultProps = {
  className: null,
  block: false,
  size: 24,
  visible: true
};
export { Icon };
export default Icon;
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { bool, number, oneOfType, oneOf, string } from 'prop-types';
import cx from 'classnames';
import { icons } from '../icons';

var Icon = function Icon(_ref) {
  var name = _ref.name,
      block = _ref.block,
      className = _ref.className,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["name", "block", "className", "size"]);

  var _icons$find = icons.find(function (i) {
    return i.tags[1] === name;
  }),
      paths = _icons$find.paths;

  var iconClasses = {
    icon: true,
    icon__block: block
  };

  var getSize = function getSize() {
    switch (size) {
      case 'xs':
        return 16;

      case 'md':
        return 24;

      case 'lg':
        return 35;

      default:
        return size;
    }
  };

  return React.createElement("svg", _extends({
    width: getSize(),
    height: getSize(),
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

var staticSizes = ['xs'];
Icon.propTypes = {
  block: bool,

  /** Any additional classNames to specify on the element */
  className: string,

  /** Name of the icon to be rendered */
  name: string.isRequired,

  /** Size of the icon */
  size: oneOfType([oneOf(staticSizes), number])
};
Icon.defaultProps = {
  block: false,
  className: null,
  size: 24
};
export { Icon };
export default Icon;
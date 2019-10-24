import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import RcRange from 'rc-slider/lib/Range';
import { arrayOf, func, number, string } from 'prop-types';
import 'rc-slider/assets/index.css';

var Range = function Range(_ref) {
  var name = _ref.name,
      onChange = _ref.onChange,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["name", "onChange", "value"]);

  var handleChange = function handleChange(v) {
    return onChange(name, v);
  };

  var props = _objectSpread({
    name: name,
    onChange: onChange ? handleChange : null
  }, value && {
    value: value
  }, {}, rest);

  return React.createElement(RcRange, props);
};

Range.propTypes = {
  name: string,
  onChange: func.isRequired,
  value: arrayOf(number)
};
Range.defaultProps = {
  name: 'range',
  value: [0, 10]
};
export { Range };
export default Range;
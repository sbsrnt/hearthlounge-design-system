import _defineProperty from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

import React from 'react';
import RcRange from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

const Range = function Range(_ref) {
  const { name } = _ref;
  const { onChange } = _ref;
  const { value } = _ref;
  const rest = _objectWithoutProperties(_ref, ['name', 'onChange', 'value']);

  const handleChange = function handleChange(v) {
    return onChange(name, v);
  };

  const props = _objectSpread(
    {
      name,
      onChange: onChange ? handleChange : null,
    },
    value && {
      value,
    },
    {},
    rest
  );

  return React.createElement(RcRange, props);
};

Range.defaultProps = {
  name: 'range',
  value: [0, 10],
};
export default Range;

import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import { bool, func, number, string } from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import cx from 'classnames';
import FieldOverlap from '../common-components/FieldOverlap';

var Input = function Input(_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 200 : _ref$width,
      onChange = _ref.onChange,
      error = _ref.error,
      loading = _ref.loading,
      disabled = _ref.disabled,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["id", "name", "width", "onChange", "error", "loading", "disabled", "value"]);

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      innerValue = _useState2[0],
      setInnerValue = _useState2[1];

  var inputClasses = {
    input: true,
    input__error: !!error,
    input__disabled: disabled
  };

  var handleReset = function handleReset() {
    return setInnerValue('');
  };

  return React.createElement(FieldOverlap, {
    label: name,
    width: width,
    htmlFor: id,
    error: error,
    loading: loading,
    disabled: disabled,
    resetIcon: !isEmpty(innerValue),
    onReset: handleReset
  }, React.createElement("input", _extends({
    id: id,
    className: cx(inputClasses),
    placeholder: "Text goes here...",
    "data-testid": "input",
    disabled: disabled,
    onChange: onChange ? function (v) {
      if (onChange) onChange(name, v.target.value);
      setInnerValue(v.target.value);
    } : null,
    value: innerValue
  }, props)));
};

Input.propTypes = {
  disabled: bool,
  error: string,
  id: string,
  name: string,
  onChange: func,
  loading: bool,
  value: string,
  width: number
};
Input.defaultProps = {
  disabled: false,
  error: null,
  id: 'input',
  name: 'input',
  loading: false,
  onChange: null,
  value: '',
  width: 200
};
export { Input };
export default Input;
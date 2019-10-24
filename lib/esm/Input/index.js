import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';
import { bool, func, number, string } from 'prop-types';
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
    props = _objectWithoutProperties(_ref, [
      'id',
      'name',
      'width',
      'onChange',
      'error',
      'loading',
      'disabled',
    ]);

  var inputClasses = {
    input: true,
    input__error: !!error,
    input__disabled: disabled,
  };
  return React.createElement(
    FieldOverlap,
    {
      label: name,
      width: width,
      htmlFor: id,
      error: error,
      loading: loading,
      disabled: disabled,
    },
    React.createElement(
      'input',
      _extends(
        {
          id: id,
          className: cx(inputClasses),
          placeholder: 'Text goes here...',
          'data-testid': 'input',
          disabled: disabled,
          onChange: onChange
            ? function(v) {
                return onChange(name, v.target.value);
              }
            : null,
        },
        props
      )
    )
  );
};

Input.propTypes = {
  disabled: bool,
  error: string,
  id: string,
  name: string,
  onChange: func,
  loading: bool,
  width: number,
};
Input.defaultProps = {
  disabled: false,
  error: null,
  id: 'input',
  name: 'input',
  loading: false,
  onChange: null,
  width: 200,
};
export { Input };
export default Input;

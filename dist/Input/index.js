import _defineProperty from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';
import cx from 'classnames';
import FieldOverlap from '../common-components/FieldOverlap';
import styles from './styles.module.scss';

const Input = function Input(_ref) {
  let _inputClasses;

  const { id } = _ref;
  const { name } = _ref;
  const _ref$width = _ref.width;
  const width = _ref$width === void 0 ? 200 : _ref$width;
  const { onChange } = _ref;
  const { error } = _ref;
  const { loading } = _ref;
  const { disabled } = _ref;
  const props = _objectWithoutProperties(_ref, [
    'id',
    'name',
    'width',
    'onChange',
    'error',
    'loading',
    'disabled',
  ]);

  const inputClasses =
    ((_inputClasses = {}),
    _defineProperty(_inputClasses, styles.input, true),
    _defineProperty(_inputClasses, styles.inputError, !!error),
    _defineProperty(_inputClasses, styles.disabled, disabled),
    _inputClasses);
  return React.createElement(
    FieldOverlap,
    {
      label: name,
      width,
      htmlFor: id,
      error,
      loading,
      disabled,
    },
    React.createElement('input', {
      id,
      className: cx(inputClasses),
      placeholder: 'Text goes here...',
      'data-testid': 'input',
      disabled,
      onChange: onChange
        ? function(v) {
            return onChange(name, v.target.value);
          }
        : null,
      ...props,
    })
  );
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
export default Input;

import _defineProperty from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

const Button = function Button(_ref) {
  let _predefinedClasses;

  const { className } = _ref;
  const { children } = _ref;
  const { loading } = _ref;
  const { theme } = _ref;
  const { disabled } = _ref;
  const { onClick } = _ref;
  const { size } = _ref;
  const { type } = _ref;
  const props = _objectWithoutProperties(_ref, [
    'className',
    'children',
    'loading',
    'theme',
    'disabled',
    'onClick',
    'size',
    'type',
  ]);

  const predefinedClasses =
    ((_predefinedClasses = {}),
    _defineProperty(_predefinedClasses, styles.button, true),
    _defineProperty(_predefinedClasses, styles[size], !!styles[size] || false),
    _defineProperty(
      _predefinedClasses,
      styles[theme],
      !!styles[theme] || false
    ),
    _defineProperty(_predefinedClasses, styles.loading, loading),
    _predefinedClasses);
  const isDisabled = loading || disabled;
  return React.createElement(
    'button',
    {
      className: cx(predefinedClasses, className),
      disabled: isDisabled,
      type,
      ...props,
      onClick,
    },
    children
  );
};

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  onClick: null,
  loading: false,
  size: 'medium',
  theme: null,
  type: 'button',
};
export default Button;

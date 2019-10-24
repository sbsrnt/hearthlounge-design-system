import _extends from '@babel/runtime/helpers/esm/extends';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';
import { bool, func, string, node, oneOf } from 'prop-types';
import cx from 'classnames';

var Button = function Button(_ref) {
  var _predefinedClasses;

  var className = _ref.className,
    children = _ref.children,
    loading = _ref.loading,
    theme = _ref.theme,
    disabled = _ref.disabled,
    onClick = _ref.onClick,
    size = _ref.size,
    type = _ref.type,
    props = _objectWithoutProperties(_ref, [
      'className',
      'children',
      'loading',
      'theme',
      'disabled',
      'onClick',
      'size',
      'type',
    ]);

  var predefinedClasses =
    ((_predefinedClasses = {
      button: true,
    }),
    _defineProperty(
      _predefinedClasses,
      'button__size--'.concat(size),
      !!'button__size--'.concat(size) || false
    ),
    _defineProperty(
      _predefinedClasses,
      'button__theme--'.concat(theme),
      !!'button__theme--'.concat(theme) || false
    ),
    _defineProperty(_predefinedClasses, 'button__loading', loading),
    _predefinedClasses);
  var isDisabled = loading || disabled;
  return React.createElement(
    'button',
    _extends(
      {
        className: cx(predefinedClasses, className),
        disabled: isDisabled,
        type: type,
      },
      props,
      {
        onClick: onClick,
      }
    ),
    children
  );
};

var supportedSizes = ['small', 'medium'];
var supportedThemes = ['primary', 'secondary'];
Button.propTypes = {
  children: node,
  className: string,
  disabled: bool,
  loading: bool,
  onClick: func,
  size: oneOf(supportedSizes),
  theme: oneOf(supportedThemes),
  type: string,
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
export { Button };
export default Button;

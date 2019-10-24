import _extends from '@babel/runtime/helpers/esm/extends';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import React, { useState } from 'react';
import { bool, func, string } from 'prop-types';
import cx from 'classnames';

var Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
    className = _ref.className,
    disabled = _ref.disabled,
    name = _ref.name,
    onClick = _ref.onClick,
    onKeyPress = _ref.onKeyPress,
    props = _objectWithoutProperties(_ref, [
      'checked',
      'className',
      'disabled',
      'name',
      'onClick',
      'onKeyPress',
    ]);

  var _useState = useState(checked),
    _useState2 = _slicedToArray(_useState, 2),
    innerChecked = _useState2[0],
    setInnerChecked = _useState2[1];

  var containerClasses = cx({
    checkbox__container: true,
    'checkbox__container--checked': innerChecked,
    'checkbox__container--disabled': disabled,
  });
  var checkboxClasses = cx(
    _defineProperty(
      {
        checkbox: true,
      },
      className,
      !!className
    )
  );
  var checkmarkClasses = cx({
    checkbox__checkmark: true,
    'checkbox__checkmark--checked': innerChecked,
  });

  var handleClick = function handleClick() {
    if (onClick) onClick(name, !innerChecked);
    setInnerChecked(!innerChecked);
  };

  var handleKeyPress = function handleKeyPress(e) {
    if (e.charCode === 32) {
      if (onKeyPress) onKeyPress(name, !innerChecked);
      setInnerChecked(!innerChecked);
    }
  };

  return React.createElement(
    'div',
    {
      className: containerClasses,
      onClick: !disabled ? handleClick : null,
      'data-testid': 'checkbox-container',
      'aria-checked': innerChecked,
      role: 'checkbox',
      onKeyPress: !disabled ? handleKeyPress : null,
      tabIndex: 0,
    },
    React.createElement(
      'input',
      _extends(
        {
          type: 'checkbox',
          className: checkboxClasses,
          'data-testid': 'checkbox',
          defaultChecked: innerChecked,
        },
        props
      )
    ),
    React.createElement(
      'span',
      {
        className: checkmarkClasses,
        'data-testid': 'checkmark',
      },
      '\u2713'
    )
  );
};

Checkbox.propTypes = {
  checked: bool,
  className: string,
  disabled: bool,
  name: string,
  onClick: func,
  onKeyPress: func,
};
Checkbox.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  name: 'checkbox',
  onClick: null,
  onKeyPress: null,
};
export { Checkbox };
export default Checkbox;

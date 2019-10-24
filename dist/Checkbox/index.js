import _defineProperty from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty';
import _slicedToArray from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray';
import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import React, { useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

const Checkbox = function Checkbox(_ref) {
  let _cx;
  let _cx2;
  let _cx3;

  const { checked } = _ref;
  const { className } = _ref;
  const { disabled } = _ref;
  const { name } = _ref;
  const { onClick } = _ref;
  const { onKeyPress } = _ref;
  const props = _objectWithoutProperties(_ref, [
    'checked',
    'className',
    'disabled',
    'name',
    'onClick',
    'onKeyPress',
  ]);

  const _useState = useState(checked);
  const _useState2 = _slicedToArray(_useState, 2);
  const innerChecked = _useState2[0];
  const setInnerChecked = _useState2[1];

  const containerClasses = cx(
    ((_cx = {}),
    _defineProperty(_cx, styles.container, true),
    _defineProperty(_cx, styles.containerChecked, innerChecked),
    _defineProperty(_cx, styles.containerDisabled, disabled),
    _cx)
  );
  const checkboxClasses = cx(
    ((_cx2 = {}),
    _defineProperty(_cx2, styles.checkbox, true),
    _defineProperty(_cx2, className, !!className),
    _cx2)
  );
  const checkmarkClasses = cx(
    ((_cx3 = {}),
    _defineProperty(_cx3, styles.checkmark, true),
    _defineProperty(_cx3, styles.checkmarkChecked, innerChecked),
    _cx3)
  );

  const handleClick = function handleClick() {
    if (onClick) onClick(name, !innerChecked);
    setInnerChecked(!innerChecked);
  };

  const handleKeyPress = function handleKeyPress(e) {
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
    React.createElement('input', {
      type: 'checkbox',
      className: checkboxClasses,
      'data-testid': 'checkbox',
      defaultChecked: innerChecked,
      ...props,
    }),
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

Checkbox.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  name: 'checkbox',
  onClick: null,
  onKeyPress: null,
};
export default Checkbox;

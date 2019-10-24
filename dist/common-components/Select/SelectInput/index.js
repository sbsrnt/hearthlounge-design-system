import React from 'react';
import cx from 'classnames';
import styles from '../styles.module.scss';

const SelectInput = function SelectInput(_ref) {
  const { disabled } = _ref;
  const { getInputProps } = _ref;
  const { toggleMenu } = _ref;
  const { name } = _ref;
  const { isOpen } = _ref;
  const { openMenu } = _ref;
  const { closeMenu } = _ref;
  return React.createElement(
    'div',
    {
      className: cx(styles.inputWrapper, disabled && styles.disabled),
      role: 'textbox',
      'aria-label': 'input',
    },
    React.createElement('input', {
      ...getInputProps(),
      onClick: toggleMenu,
      'data-testid': 'select input',
      className: styles.input,
      placeholder: 'ex. Foo, Bar...',
      name,
    }),
    React.createElement(
      'button',
      {
        'data-testid': 'select icon',
        className: cx(styles.icon, isOpen && styles.iconOpen),
        onClick: !isOpen ? openMenu : closeMenu,
      },
      '\u276F'
    )
  );
};

SelectInput.defaultProps = {
  disabled: false,
  name: 'select input',
};
export default SelectInput;

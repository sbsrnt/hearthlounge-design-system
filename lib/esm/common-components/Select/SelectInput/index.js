import _extends from '@babel/runtime/helpers/esm/extends';
import React from 'react';
import { bool, func, string } from 'prop-types';
import cx from 'classnames';

var SelectInput = function SelectInput(_ref) {
  var disabled = _ref.disabled,
    getInputProps = _ref.getInputProps,
    toggleMenu = _ref.toggleMenu,
    name = _ref.name,
    isOpen = _ref.isOpen,
    openMenu = _ref.openMenu,
    closeMenu = _ref.closeMenu;
  return React.createElement(
    'div',
    {
      className: cx('select__inputWrapper', disabled && 'select__disabled'),
      role: 'textbox',
      'aria-label': 'input',
    },
    React.createElement(
      'input',
      _extends({}, getInputProps(), {
        onClick: toggleMenu,
        'data-testid': 'select input',
        className: 'select__input',
        placeholder: 'ex. Foo, Bar...',
        name: name,
      })
    ),
    React.createElement(
      'button',
      {
        'data-testid': 'select icon',
        className: cx('select__icon', isOpen && 'select__icon--open'),
        onClick: !isOpen ? openMenu : closeMenu,
      },
      '\u276F'
    )
  );
};

SelectInput.propTypes = {
  disabled: bool,
  getInputProps: func.isRequired,
  toggleMenu: func.isRequired,
  name: string,
  isOpen: bool.isRequired,
  openMenu: func.isRequired,
  closeMenu: func.isRequired,
};
SelectInput.defaultProps = {
  disabled: false,
  name: 'select input',
};
export default SelectInput;

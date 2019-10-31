import React from 'react';
import { bool, func, string } from 'prop-types';
import cx from 'classnames';

const SelectInput = ({
  disabled,
  getInputProps,
  toggleMenu,
  name,
  isOpen,
  openMenu,
  closeMenu,
}) => {
  return (
    <div
      className={cx('select__inputWrapper', disabled && 'select__disabled')}
      role="textbox"
      aria-label="input"
    >
      <input
        {...getInputProps()}
        onClick={toggleMenu}
        data-testid="select input"
        className="select__input"
        placeholder="ex. Foo, Bar..."
        name={name}
      />
      <button
        data-testid="select icon"
        className={cx('select__icon', isOpen && 'select__icon--open')}
        onClick={!isOpen ? openMenu : closeMenu}
      >
        ❯
      </button>
    </div>
  );
};

SelectInput.propTypes = {
  /** Disable from user interaction */
  disabled: bool,
  getInputProps: func.isRequired,
  toggleMenu: func.isRequired,
  /** Name to identify and be provided through callback */
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

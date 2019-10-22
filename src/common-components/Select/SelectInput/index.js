import React from 'react';
import { bool, func, string } from 'prop-types';
import cx from 'classnames';
import styles from '../styles.module.scss';

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
      className={cx(styles.inputWrapper, disabled && styles.disabled)}
      role="textbox"
      aria-label="input"
    >
      <input
        {...getInputProps()}
        onClick={toggleMenu}
        data-testid="select input"
        className={styles.input}
        placeholder="ex. Foo, Bar..."
        name={name}
      />
      <button
        data-testid="select icon"
        className={cx(styles.icon, isOpen && styles.iconOpen)}
        onClick={!isOpen ? openMenu : closeMenu}
      >
        ❯
      </button>
    </div>
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

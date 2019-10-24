import React from 'react';
import { bool, func, number, string } from 'prop-types';
import cx from 'classnames';
import FieldOverlap from '../common-components/FieldOverlap';
import styles from './styles.module.scss';

const Input = ({
  id,
  name,
  width = 200,
  onChange,
  error,
  loading,
  disabled,
  ...props
}) => {
  const inputClasses = {
    [styles.input]: true,
    [styles.inputError]: !!error,
    [styles.disabled]: disabled,
  };
  return (
    <FieldOverlap
      label={name}
      width={width}
      htmlFor={id}
      error={error}
      loading={loading}
      disabled={disabled}
    >
      <input
        id={id}
        className={cx(inputClasses)}
        placeholder="Text goes here..."
        data-testid="input"
        disabled={disabled}
        onChange={onChange ? v => onChange(name, v.target.value) : null}
        {...props}
      />
    </FieldOverlap>
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

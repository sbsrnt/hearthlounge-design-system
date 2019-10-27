import React, { useState } from 'react';
import { bool, func, number, string } from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import cx from 'classnames';
import FieldOverlap from '../common-components/FieldOverlap';

const Input = ({
  id,
  name,
  width = 200,
  onChange,
  error,
  loading,
  disabled,
  value,
  ...props
}) => {
  const [innerValue, setInnerValue] = useState(value);
  const inputClasses = {
    input: true,
    input__error: !!error,
    input__disabled: disabled,
  };

  const handleReset = () => setInnerValue('');

  return (
    <FieldOverlap
      label={name}
      width={width}
      htmlFor={id}
      error={error}
      loading={loading}
      disabled={disabled}
      resetIcon={!isEmpty(innerValue)}
      onReset={handleReset}
    >
      <input
        id={id}
        className={cx(inputClasses)}
        placeholder="Text goes here..."
        data-testid="input"
        disabled={disabled}
        onChange={
          onChange
            ? v => {
                if (onChange) onChange(name, v.target.value);
                setInnerValue(v.target.value);
              }
            : null
        }
        value={innerValue}
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
  value: string,
  width: number,
};
Input.defaultProps = {
  disabled: false,
  error: null,
  id: 'input',
  name: 'input',
  loading: false,
  onChange: null,
  value: '',
  width: 200,
};

export { Input };
export default Input;

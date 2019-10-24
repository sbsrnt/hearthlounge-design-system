import React from 'react';
import { bool, func, string, node, oneOf } from 'prop-types';
import cx from 'classnames';

const Button = ({
  className,
  children,
  loading,
  theme,
  disabled,
  onClick,
  size,
  type,
  ...props
}) => {
  const predefinedClasses = {
    button: true,
    [`button__size--${size}`]: !!`button__size--${size}` || false,
    [`button__theme--${theme}`]: !!`button__theme--${theme}` || false,
    button__loading: loading,
  };

  const isDisabled = loading || disabled;

  return (
    <button
      className={cx(predefinedClasses, className)}
      disabled={isDisabled}
      type={type}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const supportedSizes = ['small', 'medium'];
const supportedThemes = ['primary', 'secondary'];

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

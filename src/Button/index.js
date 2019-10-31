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
  /** Any node(s) to be displayed as children */
  children: node,
  /** Any additional classNames to specify on the element */
  className: string,
  /** Disable from user interaction */
  disabled: bool,
  /** Loading state to indicate that the data element needs is still loading */
  loading: bool,
  /** Function callback to execute on click of the element -> (name, value) */
  onClick: func,
  /** Size of the element */
  size: oneOf(supportedSizes),
  /** 2 themes are supported */
  theme: oneOf(supportedThemes),
  /** Button type */
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

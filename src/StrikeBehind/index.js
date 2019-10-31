import React from 'react';
import cx from 'classnames';
import { node, oneOf, string } from 'prop-types';

const StrikeBehind = ({ children, className, size, ...props }) => {
  const classes = {
    'strike-behind': true,
    'strike-behind__small': size === 'small',
  };

  return (
    <div className={cx(classes, className)} {...props}>
      <span className="px-1">{children}</span>
    </div>
  );
};

const supportedSizes = ['small', 'medium'];

StrikeBehind.propTypes = {
  /** Any node(s) to be displayed as children */
  children: node,
  /** Any additional classNames to specify on the element */
  className: string,
  /** Size of the element */
  size: oneOf(supportedSizes),
};
StrikeBehind.defaultProps = {
  children: null,
  className: null,
  size: 'medium',
};

export { StrikeBehind };
export default StrikeBehind;

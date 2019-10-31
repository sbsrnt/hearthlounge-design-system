import React from 'react';
import cx from 'classnames';
import { node, string } from 'prop-types';

const Chip = ({ children, className, bgColor, textColor, ...props }) => {
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
    borderColor: textColor,
  };

  return (
    <div
      className={cx('chip py-1 px-3', className)}
      style={bgColor ? styles : null}
      {...props}
    >
      <span>{children}</span>
    </div>
  );
};

Chip.propTypes = {
  /** Chip background color */
  bgColor: string,
  /** Any node(s) to be displayed as children */
  children: node,
  /** Any additional classNames to specify on the element */
  className: string,
  /** Responsible for text color */
  textColor: string,
};

Chip.defaultProps = {
  bgColor: null,
  children: null,
  className: null,
  textColor: null,
};

export { Chip };
export default Chip;

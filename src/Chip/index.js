import React from 'react';
import cx from 'classnames';
import { node, string } from 'prop-types';

const Chip = ({ children, className, bgColor, textColor }) => {
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
    borderColor: textColor,
  };

  return (
    <div
      className={cx('chip py-1 px-3', className)}
      style={bgColor ? styles : null}
    >
      <span>{children}</span>
    </div>
  );
};

Chip.propTypes = {
  bgColor: string,
  children: node,
  className: string,
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

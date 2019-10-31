import React from 'react';
import cx from 'classnames';
import { number, string } from 'prop-types';

const Loader = ({ size, thickness, className, ...props }) => {
  const loaderStyles = {
    width: size,
    height: size,
    borderWidth: thickness,
  };
  return (
    <div
      className={cx('loader', className)}
      style={loaderStyles}
      aria-label="loader"
      {...props}
    />
  );
};

Loader.propTypes = {
  /** Any additional classNames to specify on the element */
  className: string,
  /** Size of the element */
  size: number,
  /** Loader's width */
  thickness: number,
};
Loader.defaultProps = {
  className: '',
  size: 30,
  thickness: 3,
};

export { Loader };
export default Loader;

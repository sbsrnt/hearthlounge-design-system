import React from 'react';
import cx from 'classnames';
import { number, string } from 'prop-types';
import styles from './styles.module.scss';

const Loader = ({ size, thickness, className, ...props }) => {
  const loaderStyles = {
    width: size,
    height: size,
    borderWidth: thickness,
  };
  return (
    <div
      className={cx(styles.loader, className)}
      style={loaderStyles}
      aria-label="loader"
      {...props}
    />
  );
};

Loader.propTypes = {
  className: string,
  size: number,
  thickness: number,
};
Loader.defaultProps = {
  className: '',
  size: 30,
  thickness: 3,
};

export { Loader };
export default Loader;

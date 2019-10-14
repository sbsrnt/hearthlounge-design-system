import React from 'react';
import { number } from 'prop-types';
import styles from './styles.module.scss';

const Loader = ({ size, thickness }) => {
  const loaderStyles = {
    width: size,
    height: size,
    borderWidth: thickness,
  };
  return (
    <div className={styles.loader} style={loaderStyles} aria-label="loader" />
  );
};

Loader.propTypes = {
  size: number,
  thickness: number,
};
Loader.defaultProps = {
  size: 30,
  thickness: 3,
};

export default Loader;

import React from 'react';
import { node, number, string } from 'prop-types';
import styles from './styles.module.scss';

const FieldOverlap = ({ children, label, width, ...labelProps }) => (
  <div className={styles.wrapper} style={{ width }}>
    {/* eslint-disable jsx-a11y/label-has-associated-control */}
    <label className={styles.label} data-testid="label" {...labelProps}>
      {label}
    </label>
    {children}
  </div>
);

FieldOverlap.propTypes = {
  children: node,
  label: string,
  width: number,
};
FieldOverlap.defaultProps = {
  children: null,
  label: null,
  width: 200,
};

export default FieldOverlap;

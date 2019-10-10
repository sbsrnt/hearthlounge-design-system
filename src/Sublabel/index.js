import React from 'react';
import cx from 'classnames';
import { node, string } from 'prop-types';
import styles from './styles.module.scss';

const Sublabel = ({ children, className, ...props }) => (
  <div className={cx(styles.sublabel, className)} {...props}>
    {children}
  </div>
);

Sublabel.propTypes = {
  children: node,
  className: string,
};
Sublabel.defaultProps = {
  children: null,
  className: null,
};

export default Sublabel;

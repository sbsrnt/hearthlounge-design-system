import React from 'react';
import cx from 'classnames';
import { node, oneOf, string } from 'prop-types';
import styles from './styles.module.scss';

const Sublabel = ({ as: T, children, className, ...props }) => (
  <T className={cx(styles.sublabel, className)} {...props}>
    {children}
  </T>
);

const supportedNodes = ['div', 'label'];

Sublabel.propTypes = {
  as: oneOf(supportedNodes),
  children: node,
  className: string,
};
Sublabel.defaultProps = {
  as: 'div',
  children: null,
  className: null,
};

export { Sublabel };
export default Sublabel;

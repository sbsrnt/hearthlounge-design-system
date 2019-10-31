import React from 'react';
import cx from 'classnames';
import { node, oneOf, string } from 'prop-types';

const Sublabel = ({ as: T, children, className, ...props }) => (
  <T className={cx('sublabel', className)} {...props}>
    {children}
  </T>
);

const supportedNodes = ['div', 'label'];

Sublabel.propTypes = {
  /** The tag of the element */
  as: oneOf(supportedNodes),
  /** Any node(s) to be displayed as children */
  children: node,
  /** Any additional classNames to specify on the element */
  className: string,
};
Sublabel.defaultProps = {
  as: 'div',
  children: null,
  className: null,
};

export { Sublabel };
export default Sublabel;

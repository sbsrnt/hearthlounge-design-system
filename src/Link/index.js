import React from 'react';
import cx from 'classnames';
import { node, string } from 'prop-types';

const Link = ({ as: T, to, children, className, ...props }) => (
  <T href={to} className={cx('link', className)} {...props}>
    {children}
  </T>
);

Link.propTypes = {
  /** The tag of the element */
  as: string,
  /** Any node(s) to be displayed as children */
  children: node.isRequired,
  /** Any additional classNames to specify on the element */
  className: string,
  /** Redirection path */
  to: string.isRequired,
};
Link.defaultProps = {
  as: 'a',
  className: null,
};

export { Link };
export default Link;

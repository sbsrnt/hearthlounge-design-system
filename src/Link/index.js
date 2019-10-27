import React from 'react';
import cx from 'classnames';
import { node, string } from 'prop-types';

const Link = ({ as: T, to, children, className, ...props }) => (
  <T href={to} className={cx('link', className)} {...props}>
    {children}
  </T>
);

Link.propTypes = {
  as: string,
  children: node.isRequired,
  className: string,
  to: string.isRequired,
};
Link.defaultProps = {
  as: 'a',
  className: null,
};

export { Link };
export default Link;

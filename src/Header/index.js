import React from 'react';
import { node, oneOf, string } from 'prop-types';

const Header = ({ as: T, children, className, ...props }) => (
  <T className={className} {...props}>
    {children}
  </T>
);

const supportedHeaderLevels = ['h1', 'h2', 'h3', 'h4', 'h5'];

Header.propTypes = {
  /** Levels of header */
  as: oneOf(supportedHeaderLevels),
  /** Any node(s) to be displayed as children */
  children: node,
  /** Any additional classNames to specify on the element */
  className: string,
};
Header.defaultProps = {
  as: 'h3',
  children: null,
  className: null,
};

export { Header };
export default Header;

import React from 'react';
import { node, oneOf, string } from 'prop-types';

const Header = ({ as: T, children, className, ...props }) => (
  <T className={className} {...props}>
    {children}
  </T>
);

const supportedHeaderTypes = ['h1', 'h2', 'h3', 'h4', 'h5'];

Header.propTypes = {
  as: oneOf(supportedHeaderTypes),
  children: node,
  className: string,
};
Header.defaultProps = {
  as: 'h3',
  children: null,
  className: null,
};

export { Header };
export default Header;

import React from 'react';
import { node, string } from 'prop-types';

const Text = ({ children, className, ...props }) => (
  <p className={className} {...props}>
    {children}
  </p>
);

Text.propTypes = {
  /** Any node(s) to be displayed as children */
  children: node,
  /** Any additional classNames to specify on the element */
  className: string,
};
Text.defaultProps = {
  children: null,
  className: null,
};

export { Text };
export default Text;

import React from 'react';
import { node, string } from 'prop-types';

const Link = ({ as: T, to, children, className, ...props }) => {
  return (
    <T href={to} className={className} {...props}>
      {children}
    </T>
  );
};

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

export default Link;

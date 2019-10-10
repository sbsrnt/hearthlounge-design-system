import React from 'react';
import { node, string } from 'prop-types';

const Paragraph = ({ children, className, ...props }) => (
  <p className={className} {...props}>
    {children}
  </p>
);

Paragraph.propTypes = {
  children: node,
  className: string,
};
Paragraph.defaultProps = {
  children: null,
  className: null,
};

export default Paragraph;

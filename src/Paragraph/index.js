import React from 'react';
import { node, string } from 'prop-types';

const Paragraph = ({ children, className }) => (
  <p className={className}>{children}</p>
);

Paragraph.propTypes = {
  children: node,
  className: string,
};
Paragraph.defaultProps = {
  children: null,
  className: '',
};

export default Paragraph;

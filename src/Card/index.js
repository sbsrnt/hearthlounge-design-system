import React from 'react';
import { node } from 'prop-types';

const Card = ({ children }) => <div className="card p-3">{children}</div>;

Card.propTypes = {
  children: node,
};

Card.defaultProps = {
  children: null,
};

export { Card };
export default Card;

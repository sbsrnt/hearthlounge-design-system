import React from 'react';
import { node, string } from 'prop-types';
import cx from 'classnames';

const Card = ({ children, className }) => (
  <div className={cx('card p-3', className)}>{children}</div>
);

Card.propTypes = {
  children: node,
  className: string,
};

Card.defaultProps = {
  children: null,
  className: null,
};

export { Card };
export default Card;

import React from 'react';
import { bool, node, string } from 'prop-types';
import cx from 'classnames';

const Card = ({ children, className, stacked }) => {
  return (
    <div className={cx('card', stacked ? 'stacked' : 'p-3', className)}>
      {stacked ? (
        <div className="p-3 stacked__content">{children}</div>
      ) : (
        children
      )}
    </div>
  );
};

Card.propTypes = {
  children: node,
  className: string,
  stacked: bool,
};

Card.defaultProps = {
  children: null,
  className: null,
  stacked: false,
};

export { Card };
export default Card;

import React from 'react';
import { bool, node, string } from 'prop-types';
import cx from 'classnames';

const Card = ({ children, className, stacked, ...props }) => {
  return (
    <div
      className={cx('card', stacked ? 'stacked' : 'p-3', className)}
      {...props}
    >
      {stacked ? (
        <div className="p-3 stacked__content">{children}</div>
      ) : (
        children
      )}
    </div>
  );
};

Card.propTypes = {
  /** Any node(s) to be displayed as children */
  children: node,
  /** Any additional classNames to specify on the element */
  className: string,
  /** On hover resembles stack of cards */
  stacked: bool,
};

Card.defaultProps = {
  children: null,
  className: null,
  stacked: false,
};

export { Card };
export default Card;

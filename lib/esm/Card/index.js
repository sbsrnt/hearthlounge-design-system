import React from 'react';
import { node, string } from 'prop-types';
import cx from 'classnames';

var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement("div", {
    className: cx('card p-3', className)
  }, children);
};

Card.propTypes = {
  children: node,
  className: string
};
Card.defaultProps = {
  children: null,
  className: null
};
export { Card };
export default Card;
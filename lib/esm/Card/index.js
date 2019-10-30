import React from 'react';
import { bool, node, string } from 'prop-types';
import cx from 'classnames';

var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      stacked = _ref.stacked;
  return React.createElement("div", {
    className: cx('card', stacked ? 'stacked' : 'p-3', className)
  }, stacked ? React.createElement("div", {
    className: "p-3 stacked__content"
  }, children) : children);
};

Card.propTypes = {
  children: node,
  className: string,
  stacked: bool
};
Card.defaultProps = {
  children: null,
  className: null,
  stacked: false
};
export { Card };
export default Card;
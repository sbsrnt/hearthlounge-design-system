import React from 'react';
import { node } from 'prop-types';

var Card = function Card(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "card p-3"
  }, children);
};

Card.propTypes = {
  children: node
};
Card.defaultProps = {
  children: null
};
export { Card };
export default Card;
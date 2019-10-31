import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { bool, node, string } from 'prop-types';
import cx from 'classnames';

var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      stacked = _ref.stacked,
      props = _objectWithoutProperties(_ref, ["children", "className", "stacked"]);

  return React.createElement("div", _extends({
    className: cx('card', stacked ? 'stacked' : 'p-3', className)
  }, props), stacked ? React.createElement("div", {
    className: "p-3 stacked__content"
  }, children) : children);
};

Card.propTypes = {
  /** Any node(s) to be displayed as children */
  children: node,

  /** Any additional classNames to specify on the element */
  className: string,

  /** Whether the animation of stacked cards should trigger or not */
  stacked: bool
};
Card.defaultProps = {
  children: null,
  className: null,
  stacked: false
};
export { Card };
export default Card;
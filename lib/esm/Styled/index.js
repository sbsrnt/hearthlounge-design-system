import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { Children, cloneElement, useState } from 'react';
import { bool, node, oneOf, string } from 'prop-types';
import cx from 'classnames';
import startCase from 'lodash/startCase';
import { neutral50, neutral70 } from '../colors';

var Styled = function Styled(_ref) {
  var _styles;

  var active = _ref.active,
      activeColor = _ref.activeColor,
      background = _ref.background,
      backgroundActiveColor = _ref.backgroundActiveColor,
      backgroundHoverColor = _ref.backgroundHoverColor,
      borderActiveColor = _ref.borderActiveColor,
      borderColor = _ref.borderColor,
      borderHoverColor = _ref.borderHoverColor,
      borderPosition = _ref.borderPosition,
      children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      hoverColor = _ref.hoverColor,
      withBorder = _ref.withBorder,
      withHover = _ref.withHover,
      withTransition = _ref.withTransition,
      props = _objectWithoutProperties(_ref, ["active", "activeColor", "background", "backgroundActiveColor", "backgroundHoverColor", "borderActiveColor", "borderColor", "borderHoverColor", "borderPosition", "children", "className", "color", "hoverColor", "withBorder", "withHover", "withTransition"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var transition = 'all .4s ease';
  var visibleColor = hover ? hoverColor : color;
  var visibleBgColor = hover ? backgroundHoverColor : background;
  var visibleBorderColor = hover ? borderHoverColor : borderColor;
  var activeVisibleColor = active ? activeColor || hoverColor : visibleColor;
  var activeVisibleBorderColor = active ? borderActiveColor || hoverColor : visibleBorderColor;
  var activeVisibleBgColor = active ? backgroundActiveColor || backgroundHoverColor : visibleBgColor;
  var styles = (_styles = {
    color: activeVisibleColor,
    fill: activeVisibleColor,
    background: activeVisibleBgColor
  }, _defineProperty(_styles, "border".concat(startCase(borderPosition)), withBorder ? "4px solid ".concat(activeVisibleBorderColor) : null), _defineProperty(_styles, "transition", withTransition ? transition : null), _styles);
  var childrenWithProps = Children.map(children, function (child) {
    return cloneElement(child, {
      style: styles
    });
  });
  return React.createElement("div", _extends({
    className: cx('styled', className)
  }, withHover && {
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
  }, props), childrenWithProps);
};

var supportedBorderPositions = ['left', 'top', 'right', 'bottom'];
Styled.propTypes = {
  /** Whether active styles should be applied or not */
  active: bool,

  /** Color font when node(s) is active */
  activeColor: string,

  /** Initial background color */
  background: string,

  /** Node background color when node(s) is active */
  backgroundActiveColor: string,

  /** Node border color when node(s) is hovered */
  backgroundHoverColor: string,

  /** Node border color when node(s) is active */
  borderActiveColor: string,

  /** Initial border color */
  borderColor: string,

  /** Node border color when node(s) is hovered */
  borderHoverColor: string,

  /** Border position */
  borderPosition: oneOf(supportedBorderPositions),

  /** Any node(s) to be displayed as children */
  children: node,

  /** Any additional classNames to specify on the element */
  className: string,

  /** Initial font color */
  color: string,

  /** Initial hover font color */
  hoverColor: string,

  /** Whether border styles should be applied or not */
  withBorder: bool,

  /** Whether hover functionality should be applied or not */
  withHover: bool,

  /** Whether transition animation should be applied or not */
  withTransition: bool
};
Styled.defaultProps = {
  active: false,
  activeColor: null,
  background: null,
  backgroundActiveColor: null,
  backgroundHoverColor: null,
  borderActiveColor: neutral50,
  borderColor: neutral70,
  borderHoverColor: neutral50,
  borderPosition: 'left',
  children: null,
  className: null,
  color: neutral70,
  hoverColor: neutral50,
  withBorder: false,
  withHover: false,
  withTransition: false
};
export { Styled };
export default Styled;
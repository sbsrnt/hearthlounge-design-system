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
      withTransition = _ref.withTransition,
      props = _objectWithoutProperties(_ref, ["active", "activeColor", "background", "backgroundActiveColor", "backgroundHoverColor", "borderActiveColor", "borderColor", "borderHoverColor", "borderPosition", "children", "className", "color", "hoverColor", "withBorder", "withTransition"]);

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
    className: cx('styled', className),
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
  active: bool,
  activeColor: string,
  background: string,
  backgroundActiveColor: string,
  backgroundHoverColor: string,
  borderActiveColor: string,
  borderColor: string,
  borderHoverColor: string,
  borderPosition: oneOf(supportedBorderPositions),
  children: node,
  className: string,
  color: string,
  hoverColor: string,
  withBorder: bool,
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
  withTransition: false
};
export { Styled };
export default Styled;
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { Children, cloneElement, useState } from 'react';
import { bool, node, string } from 'prop-types';
import cx from 'classnames';
import { neutral50, neutral70 } from '../colors';

var Styled = function Styled(_ref) {
  var active = _ref.active,
      activeColor = _ref.activeColor,
      background = _ref.background,
      backgroundActiveColor = _ref.backgroundActiveColor,
      backgroundHoverColor = _ref.backgroundHoverColor,
      children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      hoverColor = _ref.hoverColor,
      withTransition = _ref.withTransition,
      props = _objectWithoutProperties(_ref, ["active", "activeColor", "background", "backgroundActiveColor", "backgroundHoverColor", "children", "className", "color", "hoverColor", "withTransition"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var transition = 'all .4s ease';
  var visibleColor = hover ? hoverColor : color;
  var visibleBgColor = hover ? backgroundHoverColor : background;
  var activeVisibleColor = active ? activeColor || hoverColor : visibleColor;
  var activeVisibleBgColor = active ? backgroundActiveColor || backgroundHoverColor : visibleBgColor;
  var styles = {
    color: activeVisibleColor,
    fill: activeVisibleColor,
    background: activeVisibleBgColor,
    transition: withTransition ? transition : null
  };
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

Styled.propTypes = {
  active: bool,
  activeColor: string,
  background: string,
  backgroundActiveColor: string,
  backgroundHoverColor: string,
  children: node,
  className: string,
  color: string,
  hoverColor: string,
  withTransition: bool
};
Styled.defaultProps = {
  active: false,
  activeColor: null,
  background: null,
  backgroundActiveColor: null,
  backgroundHoverColor: null,
  children: null,
  className: null,
  color: neutral70,
  hoverColor: neutral50,
  withTransition: false
};
export { Styled };
export default Styled;
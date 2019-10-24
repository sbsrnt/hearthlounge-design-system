import _extends from '@babel/runtime/helpers/esm/extends';
import _typeof from '@babel/runtime/helpers/esm/typeof';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _taggedTemplateLiteral from '@babel/runtime/helpers/esm/taggedTemplateLiteral';

function _templateObject3() {
  var data = _taggedTemplateLiteral(['\n  fill: white;\n']);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(['\n  fill: currentColor;\n']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  display: ',
    ';\n  vertical-align: middle;\n\n  shape-rendering: inherit;\n  transform: translate3d(0, 0, 0);\n',
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';
import { icons } from '../shared/icons';
var Svg = styled.svg(_templateObject(), function(props) {
  return props.block ? 'block' : 'inline-block';
});
var Path = styled.path(_templateObject2());
var PathSecondary = styled.path(_templateObject3());
/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */

var Icon = function Icon(_ref) {
  var icon = _ref.icon,
    block = _ref.block,
    visible = _ref.visible,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, [
      'icon',
      'block',
      'visible',
      'className',
    ]);

  var iconClasses = {
    icon: true,
    visible: visible,
    notVisible: !visible,
  };
  return React.createElement(
    Svg,
    _extends(
      {
        viewBox: '0 0 24 24',
        width: '20px',
        height: '20px',
        block: block,
        className: cx(iconClasses, className),
      },
      props
    ),
    _typeof(icons[icon]) === 'object'
      ? React.createElement(
          React.Fragment,
          null,
          React.createElement(Path, {
            className: 'primary',
            d: icons[icon].primary,
          }),
          React.createElement(PathSecondary, {
            className: 'secondary',
            d: icons[icon].secondary,
          })
        )
      : React.createElement(Path, {
          d: icons[icon],
        })
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  block: PropTypes.bool,
  visible: PropTypes.bool,
};
Icon.defaultProps = {
  className: null,
  block: false,
  visible: true,
};
export { Icon };
export default Icon;

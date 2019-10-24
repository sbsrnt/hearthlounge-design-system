import _defineProperty from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import _taggedTemplateLiteral from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

function _templateObject3() {
  const data = _taggedTemplateLiteral(['\n  fill: white;\n']);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral(['\n  fill: currentColor;\n']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  display: ',
    ';\n  vertical-align: middle;\n\n  shape-rendering: inherit;\n  transform: translate3d(0, 0, 0);\n',
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { icons } from '../shared/icons';
import styles from './styles.module.scss';

const Svg = styled.svg(_templateObject(), function(props) {
  return props.block ? 'block' : 'inline-block';
});
const Path = styled.path(_templateObject2());
const PathSecondary = styled.path(_templateObject3());
/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */

const Icon = function Icon(_ref) {
  let _iconClasses;

  const { icon } = _ref;
  const { block } = _ref;
  const { visible } = _ref;
  const { className } = _ref;
  const props = _objectWithoutProperties(_ref, [
    'icon',
    'block',
    'visible',
    'className',
  ]);

  const iconClasses =
    ((_iconClasses = {}),
    _defineProperty(_iconClasses, styles.icon, true),
    _defineProperty(_iconClasses, styles.visible, visible),
    _defineProperty(_iconClasses, styles.notVisible, !visible),
    _iconClasses);
  return React.createElement(
    Svg,
    {
      viewBox: '0 0 24 24',
      width: '20px',
      height: '20px',
      block,
      className: cx(iconClasses, className),
      ...props,
    },
    typeof icons[icon] === 'object'
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

Icon.defaultProps = {
  className: null,
  block: false,
  visible: true,
};
export default Icon;

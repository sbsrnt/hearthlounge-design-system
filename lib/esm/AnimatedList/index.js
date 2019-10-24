import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import { motion } from 'framer-motion';
import cx from 'classnames';
import { any, arrayOf, func, shape, string } from 'prop-types';

var AnimatedList = function AnimatedList(_ref) {
  var Item = _ref.children,
      className = _ref.className,
      containerAnimationConfig = _ref.containerAnimationConfig,
      itemAnimationConfig = _ref.itemAnimationConfig,
      itemClassName = _ref.itemClassName,
      items = _ref.items,
      name = _ref.name;

  var container = _objectSpread({
    hidden: {
      opacity: 1,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  }, containerAnimationConfig);

  var item = _objectSpread({
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  }, itemAnimationConfig);

  return React.createElement(motion.ul, {
    className: cx('animatedList__container', className),
    variants: container,
    initial: "hidden",
    animate: "visible"
  }, items.map(function (itemProps, index) {
    return React.createElement(motion.li, {
      key: "".concat(name, "-").concat(index),
      className: cx('animatedList__item', itemClassName),
      variants: item
    }, Item && React.createElement(Item, {
      meta: _objectSpread({}, itemProps)
    }));
  }));
};

AnimatedList.propTypes = {
  children: func,
  className: string,
  containerAnimationConfig: shape({}),
  itemAnimationConfig: shape({}),
  itemClassName: string,
  items: arrayOf(shape({
    value: any
  }).isRequired).isRequired,

  /** Unique list name (required for unique item keys) */
  name: string.isRequired
};
AnimatedList.defaultProps = {
  children: null,
  className: null,
  containerAnimationConfig: {},
  itemAnimationConfig: {},
  itemClassName: null
};
export { AnimatedList };
export default AnimatedList;
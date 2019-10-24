import _defineProperty from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty';

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

import React from 'react';
import { motion } from 'framer-motion';
import cx from 'classnames';
import styles from './styles.module.scss';

const AnimatedList = function AnimatedList(_ref) {
  const Item = _ref.children;
  const { className } = _ref;
  const { containerAnimationConfig } = _ref;
  const { itemAnimationConfig } = _ref;
  const { itemClassName } = _ref;
  const { items } = _ref;
  const { name } = _ref;

  const container = _objectSpread(
    {
      hidden: {
        opacity: 1,
        scale: 0,
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.3,
          when: 'beforeChildren',
          staggerChildren: 0.1,
        },
      },
    },
    containerAnimationConfig
  );

  const item = _objectSpread(
    {
      hidden: {
        y: -10,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
    itemAnimationConfig
  );

  return React.createElement(
    motion.ul,
    {
      className: cx(styles.container, className),
      variants: container,
      initial: 'hidden',
      animate: 'visible',
    },
    items.map(function(itemProps, index) {
      return React.createElement(
        motion.li,
        {
          key: ''.concat(name, '-').concat(index),
          className: cx(styles.item, itemClassName),
          variants: item,
        },
        Item &&
          React.createElement(Item, {
            meta: _objectSpread({}, itemProps),
          })
      );
    })
  );
};

AnimatedList.defaultProps = {
  children: null,
  className: null,
  containerAnimationConfig: {},
  itemAnimationConfig: {},
  itemClassName: null,
};
export default AnimatedList;

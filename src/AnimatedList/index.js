import React from 'react';
import { motion } from 'framer-motion';
import cx from 'classnames';
import { any, arrayOf, func, shape, string } from 'prop-types';

import styles from './styles.module.scss';

const AnimatedList = ({
  children: Item,
  className,
  containerAnimationConfig,
  itemAnimationConfig,
  itemClassName,
  items,
  name,
}) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    ...containerAnimationConfig,
  };

  const item = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    ...itemAnimationConfig,
  };

  return (
    <motion.ul
      className={cx(styles.container, className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((itemProps, index) => (
        <motion.li
          key={`${name}-${index}`}
          className={cx(styles.item, itemClassName)}
          variants={item}
        >
          {Item && <Item meta={{ ...itemProps }} />}
        </motion.li>
      ))}
    </motion.ul>
  );
};

AnimatedList.propTypes = {
  children: func,
  className: string,
  containerAnimationConfig: shape({}),
  itemAnimationConfig: shape({}),
  itemClassName: string,
  items: arrayOf(shape({ value: any }).isRequired).isRequired,
  /** Unique list name (required for unique item keys) */
  name: string.isRequired,
};
AnimatedList.defaultProps = {
  children: null,
  className: null,
  containerAnimationConfig: {},
  itemAnimationConfig: {},
  itemClassName: null,
};

export { AnimatedList };
export default AnimatedList;

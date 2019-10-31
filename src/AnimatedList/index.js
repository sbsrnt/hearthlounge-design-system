import React from 'react';
import { motion } from 'framer-motion';
import cx from 'classnames';
import { any, arrayOf, func, shape, string } from 'prop-types';

const AnimatedList = ({
  children: Item,
  className,
  containerAnimationConfig,
  itemAnimationConfig,
  itemClassName,
  items,
  name,
  ...props
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
      className={cx('animatedList__container', className)}
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {items.map((itemProps, index) => (
        <motion.li
          key={`${name}-${index}`}
          className={cx('animatedList__item', itemClassName)}
          variants={item}
        >
          {Item && <Item meta={{ ...itemProps }} />}
        </motion.li>
      ))}
    </motion.ul>
  );
};

AnimatedList.propTypes = {
  /** Any node(s) to be displayed as children */
  children: func,
  /** Any additional classNames to specify on the element */
  className: string,
  /** Parent config to modify animation properties of the list element */
  containerAnimationConfig: shape({}),
  /** Child config to modify animation properties of the single item element */
  itemAnimationConfig: shape({}),
  /** Any additional classNames to specify on the single item element */
  itemClassName: string,
  /** Array of objects to be iterated over */
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

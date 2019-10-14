import React from 'react';

import cx from 'classnames';
import { func, shape, number } from 'prop-types';
import styles from '../styles.module.scss';

const ListItem = ({
  getItemProps,
  item,
  index,
  highlightedIndex,
  selectedItem,
}) => {
  const selected = selectedItem === item;
  const hovered = highlightedIndex === index;
  const listItemClasses = {
    [styles.listItem]: true,
    [styles.listItemSelected]: selected,
    [styles.listItemHovered]: hovered,
  };

  return (
    <li
      {...getItemProps({
        index,
        item,
      })}
      id={item.value}
      className={cx(listItemClasses)}
    >
      {item.value}
    </li>
  );
};

ListItem.propTypes = {
  getItemProps: func.isRequired,
  item: shape({}).isRequired,
  index: number.isRequired,
  highlightedIndex: number,
  selectedItem: shape({}),
};

ListItem.defaultProps = {
  highlightedIndex: null,
  selectedItem: null,
};

export default ListItem;

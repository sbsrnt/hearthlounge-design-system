import React from 'react';
import { arrayOf, bool, func, number, shape } from 'prop-types';
import cx from 'classnames';
import ListItem from '../ListItem';
import styles from '../styles.module.scss';

const List = ({
  items,
  getMenuProps,
  isOpen,
  highlightedIndex,
  getItemProps,
  selectedItem,
}) => {
  const listClasses = {
    [styles.list]: true,
    [styles.listVisible]: isOpen,
    [styles.listHidden]: !isOpen,
  };

  return (
    <ul
      {...getMenuProps()}
      data-testid="list"
      className={cx(listClasses)}
      aria-hidden={!isOpen}
      aria-owns={items}
    >
      {items
        // .filter(item => !inputValue || item.value.includes(inputValue))
        .map((item, index) => (
          <ListItem
            key={item.value}
            highlightedIndex={highlightedIndex}
            index={index}
            getItemProps={getItemProps}
            selectedItem={selectedItem}
            item={item}
          />
        ))}
    </ul>
  );
};

List.propTypes = {
  items: arrayOf(shape({})),
  getMenuProps: func.isRequired,
  isOpen: bool.isRequired,
  highlightedIndex: number,
  getItemProps: func.isRequired,
  selectedItem: shape({}),
};

List.defaultProps = {
  items: [],
  highlightedIndex: null,
  selectedItem: null,
};

export default List;

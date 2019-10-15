import React from 'react';
import { arrayOf, bool, func, number, string, shape } from 'prop-types';
import cx from 'classnames';
import ListItem from '../ListItem';
import styles from '../styles.module.scss';

const List = ({
  error,
  items,
  getMenuProps,
  isOpen,
  loading,
  highlightedIndex,
  getItemProps,
  resetIcon,
  selectedItem,
}) => {
  const listClasses = {
    [styles.list]: true,
    [styles.listVisible]: isOpen,
    [styles.listHidden]: !isOpen,
    [styles.listWithIcon]:
      (!error && loading) || (error && !loading) || resetIcon,
    [styles.listWithDoubleIcon]: (error || loading) && resetIcon,
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
  error: string,
  items: arrayOf(shape({})),
  getMenuProps: func.isRequired,
  isOpen: bool.isRequired,
  loading: bool,
  highlightedIndex: number,
  getItemProps: func.isRequired,
  selectedItem: shape({}),
  resetIcon: bool,
};

List.defaultProps = {
  error: null,
  items: [],
  highlightedIndex: null,
  loading: false,
  resetIcon: false,
  selectedItem: null,
};

export default List;

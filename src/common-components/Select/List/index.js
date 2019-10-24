import React from 'react';
import {
  array,
  arrayOf,
  bool,
  func,
  number,
  string,
  shape,
  object,
  oneOfType,
} from 'prop-types';
import cx from 'classnames';
import ListItem from '../ListItem';

const List = ({
  error,
  getItemProps,
  getMenuProps,
  highlightedIndex,
  isOpen,
  items,
  loading,
  openMenu,
  resetIcon,
  selectedItem,
}) => {
  const listClasses = {
    select__list: true,
    'select__list--visible': isOpen,
    'select__list--hidden': !isOpen,
    'select__list--withIcon':
      (!error && loading) || (error && !loading) || resetIcon,
    'select__list--withDoubleIcon': (error || loading) && resetIcon,
  };

  return (
    <ul
      {...getMenuProps()}
      aria-hidden={!isOpen}
      aria-owns={items}
      className={cx(listClasses)}
      data-testid="list"
    >
      {items
        // .filter(item => !inputValue || item.value.includes(inputValue))
        .map((item, index) => (
          <ListItem
            getItemProps={getItemProps}
            highlightedIndex={highlightedIndex}
            index={index}
            item={item}
            key={item.value}
            openMenu={openMenu}
            selectedItem={selectedItem}
          />
        ))}
    </ul>
  );
};

List.propTypes = {
  error: oneOfType([bool, string]),
  getMenuProps: func.isRequired,
  getItemProps: func.isRequired,
  highlightedIndex: number,
  isOpen: bool.isRequired,
  items: arrayOf(shape({})),
  loading: bool,
  openMenu: func,
  resetIcon: bool,
  selectedItem: oneOfType([array, object, string]),
};

List.defaultProps = {
  error: null,
  highlightedIndex: null,
  items: [],
  loading: false,
  openMenu: null,
  resetIcon: false,
  selectedItem: null,
};

export default List;

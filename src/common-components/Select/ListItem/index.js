import React from 'react';
import cx from 'classnames';
import {
  array,
  func,
  shape,
  number,
  object,
  string,
  oneOfType,
} from 'prop-types';

const ListItem = ({
  getItemProps,
  item,
  index,
  highlightedIndex,
  // openMenu,
  selectedItem,
}) => {
  const selected = Array.isArray(selectedItem)
    ? selectedItem.find(v => v && v === item.value)
    : selectedItem === item;
  const hovered = highlightedIndex === index;
  const listItemClasses = {
    select__listItem: true,
    'select__listItem--selected': selected,
    'select__listItem--hovered': hovered,
  };

  return (
    <li
      {...getItemProps({
        index,
        item: item.value,
        key: `list_${item.value}`,
      })}
      id={`list_${item.value}`}
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
  openMenu: func,
  selectedItem: oneOfType([array, object, string]),
};

ListItem.defaultProps = {
  highlightedIndex: null,
  openMenu: null,
  selectedItem: null,
};

export default ListItem;

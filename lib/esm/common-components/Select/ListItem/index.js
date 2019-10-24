import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import cx from 'classnames';
import { array, func, shape, number, object, string, oneOfType } from 'prop-types';

var ListItem = function ListItem(_ref) {
  var getItemProps = _ref.getItemProps,
      item = _ref.item,
      index = _ref.index,
      highlightedIndex = _ref.highlightedIndex,
      selectedItem = _ref.selectedItem;
  var selected = Array.isArray(selectedItem) ? selectedItem.find(function (v) {
    return v && v === item.value;
  }) : selectedItem === item;
  var hovered = highlightedIndex === index;
  var listItemClasses = {
    select__listItem: true,
    'select__listItem--selected': selected,
    'select__listItem--hovered': hovered
  };
  return React.createElement("li", _extends({}, getItemProps({
    index: index,
    item: item.value,
    key: "list_".concat(item.value)
  }), {
    id: "list_".concat(item.value),
    className: cx(listItemClasses)
  }), item.value);
};

ListItem.propTypes = {
  getItemProps: func.isRequired,
  item: shape({}).isRequired,
  index: number.isRequired,
  highlightedIndex: number,
  openMenu: func,
  selectedItem: oneOfType([array, object, string])
};
ListItem.defaultProps = {
  highlightedIndex: null,
  openMenu: null,
  selectedItem: null
};
export default ListItem;
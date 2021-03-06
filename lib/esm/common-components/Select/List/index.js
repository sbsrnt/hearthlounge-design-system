import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { array, arrayOf, bool, func, number, string, shape, object, oneOfType } from 'prop-types';
import cx from 'classnames';
import ListItem from '../ListItem';

var List = function List(_ref) {
  var error = _ref.error,
      getItemProps = _ref.getItemProps,
      getMenuProps = _ref.getMenuProps,
      highlightedIndex = _ref.highlightedIndex,
      isOpen = _ref.isOpen,
      items = _ref.items,
      loading = _ref.loading,
      openMenu = _ref.openMenu,
      resetIcon = _ref.resetIcon,
      selectedItem = _ref.selectedItem;
  var listClasses = {
    select__list: true,
    'select__list--visible': isOpen,
    'select__list--hidden': !isOpen,
    'select__list--withIcon': !error && loading || error && !loading || resetIcon,
    'select__list--withDoubleIcon': (error || loading) && resetIcon
  };
  return React.createElement("ul", _extends({}, getMenuProps(), {
    "aria-hidden": !isOpen,
    "aria-owns": items,
    className: cx(listClasses),
    "data-testid": "list"
  }), items // .filter(item => !inputValue || item.value.includes(inputValue))
  .map(function (item, index) {
    return React.createElement(ListItem, {
      getItemProps: getItemProps,
      highlightedIndex: highlightedIndex,
      index: index,
      item: item,
      key: item.value,
      openMenu: openMenu,
      selectedItem: selectedItem
    });
  }));
};

List.propTypes = {
  /** Whether or not there as an issue */
  error: oneOfType([bool, string]),

  /** Pass Downshift's menu props */
  getMenuProps: func.isRequired,

  /** Pass Downshift's item props */
  getItemProps: func.isRequired,

  /** Currently highlighted item */
  highlightedIndex: number,

  /** Whether dropdown is visible or not */
  isOpen: bool.isRequired,

  /** Array of objects to be iterated over */
  items: arrayOf(shape({})),

  /** Loading state to indicate that the data element needs is still loading */
  loading: bool,
  openMenu: func,

  /** Whether to show or not reset icon */
  resetIcon: bool,

  /** Currently selected item */
  selectedItem: oneOfType([array, object, string])
};
List.defaultProps = {
  error: null,
  highlightedIndex: null,
  items: [],
  loading: false,
  openMenu: null,
  resetIcon: false,
  selectedItem: null
};
export default List;
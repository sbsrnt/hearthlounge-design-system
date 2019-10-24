import _defineProperty from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty';
import React from 'react';
import cx from 'classnames';
import styles from '../styles.module.scss';

const ListItem = function ListItem(_ref) {
  let _listItemClasses;

  const { getItemProps } = _ref;
  const { item } = _ref;
  const { index } = _ref;
  const { highlightedIndex } = _ref;
  const { selectedItem } = _ref;
  const selected = Array.isArray(selectedItem)
    ? selectedItem.find(function(v) {
        return v && v === item.value;
      })
    : selectedItem === item;
  const hovered = highlightedIndex === index;
  const listItemClasses =
    ((_listItemClasses = {}),
    _defineProperty(_listItemClasses, styles.listItem, true),
    _defineProperty(_listItemClasses, styles.listItemSelected, selected),
    _defineProperty(_listItemClasses, styles.listItemHovered, hovered),
    _listItemClasses);
  return React.createElement(
    'li',
    {
      ...getItemProps({
        index,
        item: item.value,
        key: 'list_'.concat(item.value),
      }),
      id: 'list_'.concat(item.value),
      className: cx(listItemClasses),
    },
    item.value
  );
};

ListItem.defaultProps = {
  highlightedIndex: null,
  openMenu: null,
  selectedItem: null,
};
export default ListItem;

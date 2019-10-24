import _defineProperty from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty';
import React from 'react';
import cx from 'classnames';
import ListItem from '../ListItem';
import styles from '../styles.module.scss';

const List = function List(_ref) {
  let _listClasses;

  const { error } = _ref;
  const { items } = _ref;
  const { getMenuProps } = _ref;
  const { isOpen } = _ref;
  const { loading } = _ref;
  const { highlightedIndex } = _ref;
  const { getItemProps } = _ref;
  const { resetIcon } = _ref;
  const { selectedItem } = _ref;
  const listClasses =
    ((_listClasses = {}),
    _defineProperty(_listClasses, styles.list, true),
    _defineProperty(_listClasses, styles.listVisible, isOpen),
    _defineProperty(_listClasses, styles.listHidden, !isOpen),
    _defineProperty(
      _listClasses,
      styles.listWithIcon,
      (!error && loading) || (error && !loading) || resetIcon
    ),
    _defineProperty(
      _listClasses,
      styles.listWithDoubleIcon,
      (error || loading) && resetIcon
    ),
    _listClasses);
  return React.createElement(
    'ul',
    {
      ...getMenuProps(),
      'data-testid': 'list',
      className: cx(listClasses),
      'aria-hidden': !isOpen,
      'aria-owns': items,
    },
    items // .filter(item => !inputValue || item.value.includes(inputValue))
      .map(function(item, index) {
        return React.createElement(ListItem, {
          key: item.value,
          highlightedIndex,
          index,
          getItemProps,
          selectedItem,
          item,
        });
      })
  );
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

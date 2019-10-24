import React from 'react';
import styles from './styles.module.scss';

const ChipList = function ChipList(_ref) {
  const { onRemoveItem } = _ref;
  const { selectedItems } = _ref;
  return React.createElement(
    'div',
    {
      className: styles.chipContainer,
      'data-testid': 'chipList',
    },
    selectedItems.length > 0 &&
      selectedItems.map(function(item) {
        return React.createElement(
          'li',
          {
            key: 'chip_'.concat(item),
            className: styles.chip,
          },
          React.createElement(
            'button',
            {
              onClick: function onClick() {
                return onRemoveItem(item);
              },
            },
            item,
            ' x'
          )
        );
      })
  );
};

ChipList.defaultProps = {
  selectedItems: [],
};
export default ChipList;

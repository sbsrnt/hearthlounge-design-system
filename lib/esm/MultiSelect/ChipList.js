import React from 'react';
import { arrayOf, func, string } from 'prop-types';

var ChipList = function ChipList(_ref) {
  var onRemoveItem = _ref.onRemoveItem,
      selectedItems = _ref.selectedItems;
  return React.createElement("div", {
    className: "multiSelect__chipContainer",
    "data-testid": "chipList"
  }, selectedItems.length > 0 && selectedItems.map(function (item) {
    return React.createElement("li", {
      key: "chip_".concat(item),
      className: "multiSelect__chip"
    }, React.createElement("button", {
      onClick: function onClick() {
        return onRemoveItem(item);
      }
    }, item, " x"));
  }));
};

ChipList.propTypes = {
  onRemoveItem: func.isRequired,

  /** Selected array of objects */
  selectedItems: arrayOf(string)
};
ChipList.defaultProps = {
  selectedItems: []
};
export default ChipList;
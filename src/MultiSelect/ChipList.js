import React from 'react';
import { arrayOf, func, string } from 'prop-types';

const ChipList = ({ onRemoveItem, selectedItems }) => (
  <div className="multiSelect__chipContainer" data-testid="chipList">
    {selectedItems.length > 0 &&
      selectedItems.map(item => (
        <li key={`chip_${item}`} className="multiSelect__chip">
          <button onClick={() => onRemoveItem(item)}>{item} x</button>
        </li>
      ))}
  </div>
);
ChipList.propTypes = {
  onRemoveItem: func.isRequired,
  /** Selected array of objects */
  selectedItems: arrayOf(string),
};
ChipList.defaultProps = {
  selectedItems: [],
};

export default ChipList;

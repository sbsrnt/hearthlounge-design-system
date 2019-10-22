import React from 'react';
import { arrayOf, func, string } from 'prop-types';

import styles from './styles.module.scss';

const ChipList = ({ onRemoveItem, selectedItems }) => (
  <div className={styles.chipContainer} data-testid="chipList">
    {selectedItems.length > 0 &&
      selectedItems.map(item => (
        <li key={`chip_${item}`} className={styles.chip}>
          <button onClick={() => onRemoveItem(item)}>{item} x</button>
        </li>
      ))}
  </div>
);
ChipList.propTypes = {
  onRemoveItem: func.isRequired,
  selectedItems: arrayOf(string),
};
ChipList.defaultProps = {
  selectedItems: [],
};

export default ChipList;

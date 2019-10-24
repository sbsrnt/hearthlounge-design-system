import React, { useState } from 'react';
import { arrayOf, bool, func, number, string, shape } from 'prop-types';
import Downshift from 'downshift';
import { differenceBy, isEmpty } from 'lodash';

import FieldOverlap from '../common-components/FieldOverlap';
import ChipList from './ChipList';

import { SelectInput, List } from '../common-components/Select';
import styles from './styles.module.scss';

const MultiSelect = ({
  onResetSelection,
  options,
  name,
  label,
  loading,
  onSelect,
  width,
  error,
  disabled,
  selectedOptions,
}) => {
  const defaultAvailableItems = selectedOptions
    ? differenceBy(options, selectedOptions, 'value')
    : options;

  const safeSelectedOptions = selectedOptions.reduce(
    (acc, v) => [...acc, v.value || v],
    []
  );

  const [inputValue, setInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState(safeSelectedOptions);
  const [availableItems, setAvailableItems] = useState(defaultAvailableItems);

  const handleChange = (selectName, item) => {
    if (selectedItems.includes(item)) {
      removeSelectedItem(item);
    } else {
      addSelectedItem(item);

      if (onSelect) {
        onSelect(selectName, item);
      }
    }
  };

  const handleChangeInput = inputVal => {
    const t = inputVal.split(',');
    if (JSON.stringify(t) !== JSON.stringify(selectedItems)) {
      setInputValue(inputVal);
    }
  };

  function addSelectedItem(item) {
    const filteredItems = availableItems.filter(i => i.value !== item);

    setInputValue('');
    setSelectedItems([...selectedItems, item]);
    setAvailableItems(filteredItems);
  }

  const removeSelectedItem = item => {
    const filteredItems = selectedItems.filter(i => i !== item);
    const concatenatedItems = [
      ...availableItems,
      { value: item, id: item.toLowerCase() },
    ];

    setSelectedItems(filteredItems);
    setAvailableItems(concatenatedItems);
    setInputValue('');
  };

  const handleReset = () => {
    if (!disabled) {
      setSelectedItems([]);
      setInputValue('');
      setAvailableItems(options);
      if (onResetSelection) onResetSelection(name, []);
    }
  };

  return (
    <Downshift
      onInputValueChange={handleChangeInput}
      selectedItem={selectedItems}
      onChange={value => handleChange(name, value)}
      inputValue={inputValue}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        getLabelProps,
        toggleMenu,
        isOpen,
        openMenu,
        selectedItem,
        closeMenu,
      }) => {
        const resetIcon =
          !!(inputValue && !isEmpty(inputValue)) || selectedItem.length > 0;
        return (
          <div style={{ width }}>
            <FieldOverlap
              label={label}
              width={width}
              resetIcon={resetIcon}
              error={error}
              disabled={disabled}
              loading={loading}
              onReset={handleReset}
              {...getLabelProps({ disabled })}
            >
              <div
                className={
                  resetIcon
                    ? styles.chipsAndInputWrapperOpen
                    : styles.chipsAndInputWrapperClose
                }
              >
                <ChipList
                  onRemoveItem={removeSelectedItem}
                  selectedItems={selectedItem}
                />
                <SelectInput
                  disabled={disabled}
                  closeMenu={closeMenu}
                  getInputProps={getInputProps}
                  isOpen={isOpen}
                  name={name}
                  openMenu={openMenu}
                  toggleMenu={toggleMenu}
                />
              </div>
              <List
                items={availableItems}
                getMenuProps={getMenuProps}
                getItemProps={getItemProps}
                isOpen={isOpen}
                highlightedIndex={highlightedIndex}
                selectedItem={selectedItems}
                loading={loading}
                error={error}
                resetIcon={resetIcon}
                openMenu={openMenu}
              />
            </FieldOverlap>
          </div>
        );
      }}
    </Downshift>
  );
};

MultiSelect.propTypes = {
  disabled: bool,
  error: string,
  label: string,
  loading: bool,
  name: string,
  onSelect: func,
  options: arrayOf(shape({})),
  onResetSelection: func,
  selectedOptions: arrayOf(shape({})),
  width: number,
};

MultiSelect.defaultProps = {
  disabled: false,
  error: null,
  label: 'multiselect label',
  loading: false,
  name: 'multiselect',
  onResetSelection: null,
  onSelect: null,
  options: [],
  selectedOptions: [],
  width: 200,
};

export { MultiSelect };
export default MultiSelect;

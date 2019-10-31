import React, { useState } from 'react';
import { arrayOf, bool, func, number, string, shape } from 'prop-types';
import Downshift from 'downshift';
import { differenceBy, isEmpty } from 'lodash';

import FieldOverlap from '../common-components/FieldOverlap';
import ChipList from './ChipList';

import { SelectInput, List } from '../common-components/Select';

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
                    ? 'multiSelect__chipsAndInputWrapperOpen'
                    : 'multiSelect__chipsAndInputWrapperClose'
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
  /** Disable from user interaction */
  disabled: bool,
  /** Whether or not there as an issue */
  error: string,
  /** Represents a caption for an item in a user interface */
  label: string,
  /** Loading state to indicate that the data element needs is still loading */
  loading: bool,
  /** Name to identify and be provided through callback */
  name: string,
  /** Function callback to execute on select of the element -> (name, value) */
  onSelect: func,
  /** Array of objects to be iterated over */
  options: arrayOf(shape({})),
  /** Function callback to execute on reset selection of the element -> (name, value) */
  onResetSelection: func,
  /** Selected array of objects */
  selectedOptions: arrayOf(shape({})),
  /** Width of the element */
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

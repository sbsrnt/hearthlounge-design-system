import _slicedToArray from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray';
import _toConsumableArray from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray';
import React, { useState } from 'react';
import Downshift from 'downshift';
import { differenceBy, isEmpty } from 'lodash';
import FieldOverlap from '../common-components/FieldOverlap';
import ChipList from './ChipList';
import { SelectInput, List } from '../common-components/Select';
import styles from './styles.module.scss';

const MultiSelect = function MultiSelect(_ref) {
  const { onResetSelection } = _ref;
  const { options } = _ref;
  const { name } = _ref;
  const { label } = _ref;
  const { loading } = _ref;
  const { onSelect } = _ref;
  const { width } = _ref;
  const { error } = _ref;
  const { disabled } = _ref;
  const { selectedOptions } = _ref;
  const defaultAvailableItems = selectedOptions
    ? differenceBy(options, selectedOptions, 'value')
    : options;
  const safeSelectedOptions = selectedOptions.reduce(function(acc, v) {
    return [].concat(_toConsumableArray(acc), [v.value || v]);
  }, []);

  const _useState = useState('');
  const _useState2 = _slicedToArray(_useState, 2);
  const inputValue = _useState2[0];
  const setInputValue = _useState2[1];

  const _useState3 = useState(safeSelectedOptions);
  const _useState4 = _slicedToArray(_useState3, 2);
  const selectedItems = _useState4[0];
  const setSelectedItems = _useState4[1];

  const _useState5 = useState(defaultAvailableItems);
  const _useState6 = _slicedToArray(_useState5, 2);
  const availableItems = _useState6[0];
  const setAvailableItems = _useState6[1];

  const handleChange = function handleChange(selectName, item) {
    if (selectedItems.includes(item)) {
      removeSelectedItem(item);
    } else {
      addSelectedItem(item);

      if (onSelect) {
        onSelect(selectName, item);
      }
    }
  };

  const handleChangeInput = function handleChangeInput(inputVal) {
    const t = inputVal.split(',');

    if (JSON.stringify(t) !== JSON.stringify(selectedItems)) {
      setInputValue(inputVal);
    }
  };

  function addSelectedItem(item) {
    const filteredItems = availableItems.filter(function(i) {
      return i.value !== item;
    });
    setInputValue('');
    setSelectedItems([].concat(_toConsumableArray(selectedItems), [item]));
    setAvailableItems(filteredItems);
  }

  var removeSelectedItem = function removeSelectedItem(item) {
    const filteredItems = selectedItems.filter(function(i) {
      return i !== item;
    });
    const concatenatedItems = [].concat(_toConsumableArray(availableItems), [
      {
        value: item,
        id: item.toLowerCase(),
      },
    ]);
    setSelectedItems(filteredItems);
    setAvailableItems(concatenatedItems);
    setInputValue('');
  };

  const handleReset = function handleReset() {
    if (!disabled) {
      setSelectedItems([]);
      setInputValue('');
      setAvailableItems(options);
      if (onResetSelection) onResetSelection(name, []);
    }
  };

  return React.createElement(
    Downshift,
    {
      onInputValueChange: handleChangeInput,
      selectedItem: selectedItems,
      onChange: function onChange(value) {
        return handleChange(name, value);
      },
      inputValue,
    },
    function(_ref2) {
      const { getInputProps } = _ref2;
      const { getItemProps } = _ref2;
      const { getMenuProps } = _ref2;
      const { highlightedIndex } = _ref2;
      const { getLabelProps } = _ref2;
      const { toggleMenu } = _ref2;
      const { isOpen } = _ref2;
      const { openMenu } = _ref2;
      const { selectedItem } = _ref2;
      const { closeMenu } = _ref2;
      const resetIcon =
        !!(inputValue && !isEmpty(inputValue)) || selectedItem.length > 0;
      return React.createElement(
        'div',
        {
          style: {
            width,
          },
        },
        React.createElement(
          FieldOverlap,
          {
            label,
            width,
            resetIcon,
            error,
            disabled,
            loading,
            onReset: handleReset,
            ...getLabelProps({
              disabled,
            }),
          },
          React.createElement(
            'div',
            {
              className: resetIcon
                ? styles.chipsAndInputWrapperOpen
                : styles.chipsAndInputWrapperClose,
            },
            React.createElement(ChipList, {
              onRemoveItem: removeSelectedItem,
              selectedItems: selectedItem,
            }),
            React.createElement(SelectInput, {
              disabled,
              closeMenu,
              getInputProps,
              isOpen,
              name,
              openMenu,
              toggleMenu,
            })
          ),
          React.createElement(List, {
            items: availableItems,
            getMenuProps,
            getItemProps,
            isOpen,
            highlightedIndex,
            selectedItem: selectedItems,
            loading,
            error,
            resetIcon,
            openMenu,
          })
        )
      );
    }
  );
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
export default MultiSelect;

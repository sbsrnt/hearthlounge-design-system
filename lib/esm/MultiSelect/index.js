import _extends from '@babel/runtime/helpers/esm/extends';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import _toConsumableArray from '@babel/runtime/helpers/esm/toConsumableArray';
import _isEmpty from 'lodash/isEmpty';
import _differenceBy from 'lodash/differenceBy';
import React, { useState } from 'react';
import { arrayOf, bool, func, number, string, shape } from 'prop-types';
import Downshift from 'downshift';
import FieldOverlap from '../common-components/FieldOverlap';
import ChipList from './ChipList';
import { SelectInput, List } from '../common-components/Select';

var MultiSelect = function MultiSelect(_ref) {
  var onResetSelection = _ref.onResetSelection,
    options = _ref.options,
    name = _ref.name,
    label = _ref.label,
    loading = _ref.loading,
    onSelect = _ref.onSelect,
    width = _ref.width,
    error = _ref.error,
    disabled = _ref.disabled,
    selectedOptions = _ref.selectedOptions;
  var defaultAvailableItems = selectedOptions
    ? _differenceBy(options, selectedOptions, 'value')
    : options;
  var safeSelectedOptions = selectedOptions.reduce(function(acc, v) {
    return [].concat(_toConsumableArray(acc), [v.value || v]);
  }, []);

  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];

  var _useState3 = useState(safeSelectedOptions),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedItems = _useState4[0],
    setSelectedItems = _useState4[1];

  var _useState5 = useState(defaultAvailableItems),
    _useState6 = _slicedToArray(_useState5, 2),
    availableItems = _useState6[0],
    setAvailableItems = _useState6[1];

  var handleChange = function handleChange(selectName, item) {
    if (selectedItems.includes(item)) {
      removeSelectedItem(item);
    } else {
      addSelectedItem(item);

      if (onSelect) {
        onSelect(selectName, item);
      }
    }
  };

  var handleChangeInput = function handleChangeInput(inputVal) {
    var t = inputVal.split(',');

    if (JSON.stringify(t) !== JSON.stringify(selectedItems)) {
      setInputValue(inputVal);
    }
  };

  function addSelectedItem(item) {
    var filteredItems = availableItems.filter(function(i) {
      return i.value !== item;
    });
    setInputValue('');
    setSelectedItems([].concat(_toConsumableArray(selectedItems), [item]));
    setAvailableItems(filteredItems);
  }

  var removeSelectedItem = function removeSelectedItem(item) {
    var filteredItems = selectedItems.filter(function(i) {
      return i !== item;
    });
    var concatenatedItems = [].concat(_toConsumableArray(availableItems), [
      {
        value: item,
        id: item.toLowerCase(),
      },
    ]);
    setSelectedItems(filteredItems);
    setAvailableItems(concatenatedItems);
    setInputValue('');
  };

  var handleReset = function handleReset() {
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
      inputValue: inputValue,
    },
    function(_ref2) {
      var getInputProps = _ref2.getInputProps,
        getItemProps = _ref2.getItemProps,
        getMenuProps = _ref2.getMenuProps,
        highlightedIndex = _ref2.highlightedIndex,
        getLabelProps = _ref2.getLabelProps,
        toggleMenu = _ref2.toggleMenu,
        isOpen = _ref2.isOpen,
        openMenu = _ref2.openMenu,
        selectedItem = _ref2.selectedItem,
        closeMenu = _ref2.closeMenu;
      var resetIcon =
        !!(inputValue && !_isEmpty(inputValue)) || selectedItem.length > 0;
      return React.createElement(
        'div',
        {
          style: {
            width: width,
          },
        },
        React.createElement(
          FieldOverlap,
          _extends(
            {
              label: label,
              width: width,
              resetIcon: resetIcon,
              error: error,
              disabled: disabled,
              loading: loading,
              onReset: handleReset,
            },
            getLabelProps({
              disabled: disabled,
            })
          ),
          React.createElement(
            'div',
            {
              className: resetIcon
                ? 'multiSelect__chipsAndInputWrapperOpen'
                : 'multiSelect__chipsAndInputWrapperClose',
            },
            React.createElement(ChipList, {
              onRemoveItem: removeSelectedItem,
              selectedItems: selectedItem,
            }),
            React.createElement(SelectInput, {
              disabled: disabled,
              closeMenu: closeMenu,
              getInputProps: getInputProps,
              isOpen: isOpen,
              name: name,
              openMenu: openMenu,
              toggleMenu: toggleMenu,
            })
          ),
          React.createElement(List, {
            items: availableItems,
            getMenuProps: getMenuProps,
            getItemProps: getItemProps,
            isOpen: isOpen,
            highlightedIndex: highlightedIndex,
            selectedItem: selectedItems,
            loading: loading,
            error: error,
            resetIcon: resetIcon,
            openMenu: openMenu,
          })
        )
      );
    }
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

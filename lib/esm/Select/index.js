import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import Downshift from 'downshift';
import isEmpty from 'lodash/isEmpty';
import { arrayOf, bool, func, string, number, oneOfType, shape } from 'prop-types';
import { List, SelectInput } from '../common-components/Select';
import FieldOverlap from '../common-components/FieldOverlap';

var Select = function Select(_ref) {
  var disabled = _ref.disabled,
      error = _ref.error,
      items = _ref.items,
      name = _ref.name,
      label = _ref.label,
      loading = _ref.loading,
      onSelect = _ref.onSelect,
      onInputReset = _ref.onInputReset,
      width = _ref.width;
  return React.createElement(Downshift, {
    onChange: function onChange(selection) {
      if (onSelect) onSelect(name, selection);
    }
  }, function (_ref2) {
    var getInputProps = _ref2.getInputProps,
        getItemProps = _ref2.getItemProps,
        getLabelProps = _ref2.getLabelProps,
        getMenuProps = _ref2.getMenuProps,
        isOpen = _ref2.isOpen,
        highlightedIndex = _ref2.highlightedIndex,
        selectedItem = _ref2.selectedItem,
        openMenu = _ref2.openMenu,
        toggleMenu = _ref2.toggleMenu,
        inputValue = _ref2.inputValue,
        closeMenu = _ref2.closeMenu,
        clearSelection = _ref2.clearSelection;
    var resetIcon = !!(inputValue && !isEmpty(inputValue));

    var handleReset = function handleReset() {
      if (!disabled) {
        if (onInputReset) onInputReset(name, '');
        clearSelection();
      }
    };

    return React.createElement("div", {
      style: {
        width: width
      }
    }, React.createElement(FieldOverlap, _extends({
      disabled: disabled,
      label: label,
      width: width,
      error: error,
      loading: loading,
      name: name,
      resetIcon: resetIcon,
      onReset: handleReset
    }, getLabelProps()), React.createElement(SelectInput, {
      disabled: disabled,
      closeMenu: closeMenu,
      getInputProps: getInputProps,
      isOpen: isOpen,
      name: name,
      openMenu: openMenu,
      toggleMenu: toggleMenu
    }), React.createElement(List, {
      resetIcon: resetIcon,
      error: error,
      loading: loading,
      items: items,
      getMenuProps: getMenuProps,
      getItemProps: getItemProps,
      highlightedIndex: highlightedIndex,
      selectedItem: selectedItem,
      isOpen: isOpen
    })));
  });
};

Select.propTypes = {
  /** Disable from user interaction */
  disabled: bool,

  /** Whether or not there as an issue */
  error: oneOfType([bool, string]),

  /** Array of objects to be iterated over */
  items: arrayOf(shape({})),

  /** Represents a caption for an item in a user interface */
  label: string,

  /** Loading state to indicate that the data element needs is still loading */
  loading: bool,

  /** Name to identify and be provided through callback */
  name: string,

  /** Function callback to execute on input reset of the element -> (name, value) */
  onInputReset: func,

  /** Function callback to execute on select of the element -> (name, value) */
  onSelect: func,

  /** Width of the element */
  width: number
};
Select.defaultProps = {
  disabled: false,
  error: null,
  items: [],
  label: 'Select',
  loading: false,
  name: 'single select',
  onInputReset: null,
  onSelect: null,
  width: 200
};
export { Select };
export default Select;
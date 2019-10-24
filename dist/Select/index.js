import React from 'react';
import Downshift from 'downshift';
import isEmpty from 'lodash/isEmpty';
import { List, SelectInput } from '../common-components/Select';
import FieldOverlap from '../common-components/FieldOverlap';

const Select = function Select(_ref) {
  const { disabled } = _ref;
  const { error } = _ref;
  const { items } = _ref;
  const { name } = _ref;
  const { label } = _ref;
  const { loading } = _ref;
  const { onSelect } = _ref;
  const { onInputReset } = _ref;
  const { width } = _ref;
  return React.createElement(
    Downshift,
    {
      onChange: function onChange(selection) {
        if (onSelect) onSelect(name, selection);
      },
    },
    function(_ref2) {
      const { getInputProps } = _ref2;
      const { getItemProps } = _ref2;
      const { getLabelProps } = _ref2;
      const { getMenuProps } = _ref2;
      const { isOpen } = _ref2;
      const { highlightedIndex } = _ref2;
      const { selectedItem } = _ref2;
      const { openMenu } = _ref2;
      const { toggleMenu } = _ref2;
      const { inputValue } = _ref2;
      const { closeMenu } = _ref2;
      const { clearSelection } = _ref2;
      const resetIcon = !!(inputValue && !isEmpty(inputValue));

      const handleReset = function handleReset() {
        if (!disabled) {
          if (onInputReset) onInputReset(name, '');
          clearSelection();
        }
      };

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
            disabled,
            label,
            width,
            error,
            loading,
            name,
            resetIcon,
            onReset: handleReset,
            ...getLabelProps(),
          },
          React.createElement(SelectInput, {
            disabled,
            closeMenu,
            getInputProps,
            isOpen,
            name,
            openMenu,
            toggleMenu,
          }),
          React.createElement(List, {
            resetIcon,
            error,
            loading,
            items,
            getMenuProps,
            getItemProps,
            highlightedIndex,
            selectedItem,
            isOpen,
          })
        )
      );
    }
  );
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
  width: 200,
};
export default Select;

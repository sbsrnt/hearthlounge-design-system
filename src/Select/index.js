import React from 'react';
import Downshift from 'downshift';
import isEmpty from 'lodash/isEmpty';
import {
  arrayOf,
  bool,
  func,
  string,
  number,
  oneOfType,
  shape,
} from 'prop-types';

import { List, SelectInput } from '../common-components/Select';
import FieldOverlap from '../common-components/FieldOverlap';

const Select = ({
  disabled,
  error,
  items,
  name,
  label,
  loading,
  onSelect,
  onInputReset,
  width,
}) => {
  return (
    <Downshift
      onChange={selection => {
        if (onSelect) onSelect(name, selection);
      }}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        selectedItem,
        openMenu,
        toggleMenu,
        inputValue,
        closeMenu,
        clearSelection,
      }) => {
        const resetIcon = !!(inputValue && !isEmpty(inputValue));
        const handleReset = () => {
          if (!disabled) {
            if (onInputReset) onInputReset(name, '');
            clearSelection();
          }
        };

        return (
          <div style={{ width }}>
            <FieldOverlap
              disabled={disabled}
              label={label}
              width={width}
              error={error}
              loading={loading}
              name={name}
              resetIcon={resetIcon}
              onReset={handleReset}
              {...getLabelProps()}
            >
              <SelectInput
                disabled={disabled}
                closeMenu={closeMenu}
                getInputProps={getInputProps}
                isOpen={isOpen}
                name={name}
                openMenu={openMenu}
                toggleMenu={toggleMenu}
              />
              <List
                resetIcon={resetIcon}
                error={error}
                loading={loading}
                items={items}
                getMenuProps={getMenuProps}
                getItemProps={getItemProps}
                highlightedIndex={highlightedIndex}
                selectedItem={selectedItem}
                isOpen={isOpen}
              />
            </FieldOverlap>
          </div>
        );
      }}
    </Downshift>
  );
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
  width: number,
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

export { Select };
export default Select;

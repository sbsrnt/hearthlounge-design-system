import React from 'react';
import Downshift from 'downshift';
import isEmpty from 'lodash/isEmpty';
import { arrayOf, bool, func, string, number, shape } from 'prop-types';

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
        return onSelect && onSelect(name, selection.value);
      }}
      itemToString={item => (item ? item.value : '')}
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
  disabled: bool,
  error: string,
  items: arrayOf(shape({})),
  label: string,
  loading: bool,
  name: string,
  onInputReset: func,
  onSelect: func,
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

export default Select;

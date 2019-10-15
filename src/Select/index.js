import React from 'react';
import Downshift from 'downshift';
import cx from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { arrayOf, bool, func, string, number, shape } from 'prop-types';

import List from './List';
import FieldOverlap from '../FieldOverlap';

import styles from './styles.module.scss';

const Select = ({
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
        inputValue,
        closeMenu,
        clearSelection,
      }) => {
        const resetIcon = !!(inputValue && !isEmpty(inputValue));
        const handleReset = () => {
          if (onInputReset) onInputReset(name, '');
          clearSelection();
        };

        return (
          <div style={{ width }}>
            <FieldOverlap
              label={label}
              width={width}
              error={error}
              loading={loading}
              name={name}
              resetIcon={resetIcon}
              onReset={handleReset}
              {...getLabelProps()}
            >
              <div
                className={styles.inputWrapper}
                role="textbox"
                aria-label="input"
              >
                <input
                  {...getInputProps()}
                  onClick={openMenu}
                  data-testid="select input"
                  className={styles.input}
                  placeholder="ex. Foo, Bar..."
                  name={name}
                />
                <button
                  data-testid="select icon"
                  className={cx(styles.icon, isOpen && styles.iconOpen)}
                  onClick={!isOpen ? openMenu : closeMenu}
                >
                  ❯
                </button>
              </div>
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

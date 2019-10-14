import React from 'react';
import Downshift from 'downshift';
import cx from 'classnames';
import { arrayOf, func, string, shape } from 'prop-types';

import List from './List';
import FieldOverlap from '../FieldOverlap';

import styles from './styles.module.scss';

const Select = ({ items, name, onSelect }) => {
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
        closeMenu,
      }) => (
        <div>
          <FieldOverlap label={name} {...getLabelProps()}>
            <div
              className={styles.inputWrapper}
              role="textbox"
              aria-label="input"
            >
              <input
                {...getInputProps()}
                onClick={openMenu}
                type="search"
                data-testid="select input"
                className={styles.input}
                placeholder="ex. Foo, Bar..."
                name={name}
                id={name}
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
              items={items}
              getMenuProps={getMenuProps}
              getItemProps={getItemProps}
              highlightedIndex={highlightedIndex}
              selectedItem={selectedItem}
              isOpen={isOpen}
            />
          </FieldOverlap>
        </div>
      )}
    </Downshift>
  );
};

Select.propTypes = {
  items: arrayOf(shape({})),
  name: string,
  onSelect: func,
};
Select.defaultProps = {
  items: [],
  name: 'single select',
  onSelect: null,
};

export default Select;

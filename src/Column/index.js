import React from 'react';
import { node, string, bool, oneOfType, oneOf } from 'prop-types';
import cx from 'classnames';

const Column = ({ children, className, lg, md, sm, xs, ...props }) => {
  const columnClasses = cx({
    [`col-xs-${xs}`]: xs,
    [`col-sm-${sm}`]: sm,
    [`col-md-${md}`]: md,
    [`col-lg-${lg}`]: lg,
    'col-xs': typeof xs === 'boolean' && xs,
    'col-sm': typeof sm === 'boolean' && sm,
    'col-md': typeof md === 'boolean' && md,
    'col-lg': typeof lg === 'boolean' && lg,
    [className]: className,
  });

  return (
    <div className={columnClasses} {...props}>
      {children}
    </div>
  );
};

const COLUMN_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Column.propTypes = {
  /** Any node(s) to be displayed as children */
  children: node,
  /** Any additional classNames to specify on the element */
  className: string,
  /** Column width at the large viewport width */
  lg: oneOfType([oneOf(COLUMN_NUMBERS), bool]),
  /** Column width at the medium viewport width */
  md: oneOfType([oneOf(COLUMN_NUMBERS), bool]),
  /** Column width at the small viewport width */
  sm: oneOfType([oneOf(COLUMN_NUMBERS), bool]),
  /** Column width at the extra small viewport width */
  xs: oneOfType([oneOf(COLUMN_NUMBERS), bool]),
};

Column.defaultProps = {
  children: null,
  className: null,
  lg: null,
  md: null,
  sm: null,
  xs: 12,
};

export { Column };
export default Column;

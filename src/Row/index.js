import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

const Row = ({ className, ...props }) => {
  return <div className={cx('row', className)} {...props} />;
};

Row.propTypes = {
  /** Any additional classNames to specify on the element */
  className: string,
};

Row.defaultProps = {
  className: null,
};

export { Row };
export default Row;

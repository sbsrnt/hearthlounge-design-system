import React from 'react';
import cx from 'classnames';
import { node, string } from 'prop-types';

const StrikeBehind = ({ children, className, ...props }) => {
  return (
    <div className={cx('strike-behind', className)} {...props}>
      <span className="px-1">{children}</span>
    </div>
  );
};

StrikeBehind.propTypes = {
  children: node,
  className: string,
};
StrikeBehind.defaultProps = {
  children: null,
  className: null,
};

export { StrikeBehind };
export default StrikeBehind;

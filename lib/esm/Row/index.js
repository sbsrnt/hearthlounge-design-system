import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

var Row = function Row(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement("div", _extends({
    className: cx('row', className)
  }, props));
};

Row.propTypes = {
  /** Any additional classNames to specify on the element */
  className: string
};
Row.defaultProps = {
  className: null
};
export { Row };
export default Row;
import React from 'react';
import { node, string } from 'prop-types';
import cx from 'classnames';

var ModalFooter = function ModalFooter(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement("div", {
    "data-testid": "modal-footer",
    className: cx('p-3 modal__footer', className)
  }, children);
};

ModalFooter.propTypes = {
  /** Any node(s) to be displayed as children */
  children: node,

  /** Any additional classNames to specify on the element */
  className: string
};
ModalFooter.defaultProps = {
  children: null,
  className: null
};
export default ModalFooter;
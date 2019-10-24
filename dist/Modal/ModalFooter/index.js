import React from 'react';
import cx from 'classnames';
import styles from '../styles.module.scss';

const ModalFooter = function ModalFooter(_ref) {
  const { children } = _ref;
  const { className } = _ref;
  return React.createElement(
    'div',
    {
      'data-testid': 'modal-footer',
      className: cx('p-3', styles.footer, className),
    },
    children
  );
};

ModalFooter.defaultProps = {
  children: null,
  className: null,
};
export default ModalFooter;

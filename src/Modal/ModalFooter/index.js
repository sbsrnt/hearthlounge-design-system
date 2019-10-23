import React from 'react';
import { node, string } from 'prop-types';
import cx from 'classnames';
import styles from '../styles.module.scss';

const ModalFooter = ({ children, className }) => {
  return (
    <div
      data-testid="modal-footer"
      className={cx('p-3', styles.footer, className)}
    >
      {children}
    </div>
  );
};

ModalFooter.propTypes = {
  children: node,
  className: string,
};
ModalFooter.defaultProps = {
  children: null,
  className: null,
};

export default ModalFooter;

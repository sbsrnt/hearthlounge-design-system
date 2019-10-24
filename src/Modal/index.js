import React, { useState } from 'react';
import { bool, func, node, string } from 'prop-types';
import ReactModal from 'react-modal';
import cx from 'classnames';

import { Header } from '../Header';
import { Icon } from '../Icon';
import ModalFooter from './ModalFooter';

import styles from './styles.module.scss';

const Modal = ({
  children,
  isOpen,
  toggleModal,
  header,
  footer,
  footerClassname,
  ...props
}) => {
  const [isInnerOpen, setIsOpen] = useState(isOpen);

  const handleModalClose = () => {
    if (toggleModal) toggleModal(false);
    setIsOpen(false);
  };

  return (
    <ReactModal
      isOpen={isInnerOpen}
      onRequestClose={handleModalClose}
      closeTimeoutMS={400}
      className={styles.modal}
      {...props}
    >
      <div className={cx('d-flex p-3', styles.header)}>
        <Header>{header}</Header>
        <Icon
          icon="close"
          className={styles.closeIcon}
          onClick={handleModalClose}
        />
      </div>
      <div className="p-3">{children}</div>
      {!!footer && (
        <ModalFooter className={footerClassname}>{footer}</ModalFooter>
      )}
    </ReactModal>
  );
};

Modal.propTypes = {
  children: node.isRequired,
  footer: node,
  footerClassname: string,
  header: string.isRequired,
  isOpen: bool,
  ModalFooter: node,
  toggleModal: func,
};
Modal.defaultProps = {
  footer: null,
  footerClassname: null,
  isOpen: false,
  ModalFooter: null,
  toggleModal: null,
};

export { Modal };
export default Modal;

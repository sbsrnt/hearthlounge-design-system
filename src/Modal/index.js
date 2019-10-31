import React, { useState } from 'react';
import { bool, func, node, string } from 'prop-types';
import ReactModal from 'react-modal';

import { Header } from '../Header';
import { Icon } from '../Icon';
import ModalFooter from './ModalFooter';

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
      className="modal"
      {...props}
    >
      <div className="d-flex p-3 modal__header">
        <Header>{header}</Header>
        <Icon
          name="close"
          className="modal__closeIcon"
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
  /** Any node(s) to be displayed as children */
  children: node.isRequired,
  /** Modal's footer content */
  footer: node,
  /** Any additional classNames to specify on the element */
  footerClassname: string,
  /** Modal headline */
  header: string.isRequired,
  /** Whether modal is visible or hidden */
  isOpen: bool,
  /** Modal's footer wrapper component */
  ModalFooter: node,
  /** Function callback to execute toggleModal  */
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

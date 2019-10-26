import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import { bool, func, node, string } from 'prop-types';
import ReactModal from 'react-modal';
import { Header } from '../Header';
import { Icon } from '../Icon';
import ModalFooter from './ModalFooter';

var Modal = function Modal(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      toggleModal = _ref.toggleModal,
      header = _ref.header,
      footer = _ref.footer,
      footerClassname = _ref.footerClassname,
      props = _objectWithoutProperties(_ref, ["children", "isOpen", "toggleModal", "header", "footer", "footerClassname"]);

  var _useState = useState(isOpen),
      _useState2 = _slicedToArray(_useState, 2),
      isInnerOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleModalClose = function handleModalClose() {
    if (toggleModal) toggleModal(false);
    setIsOpen(false);
  };

  return React.createElement(ReactModal, _extends({
    isOpen: isInnerOpen,
    onRequestClose: handleModalClose,
    closeTimeoutMS: 400,
    className: "modal"
  }, props), React.createElement("div", {
    className: "d-flex p-3 modal__header"
  }, React.createElement(Header, null, header), React.createElement(Icon, {
    name: "close",
    className: "modal__closeIcon",
    onClick: handleModalClose
  })), React.createElement("div", {
    className: "p-3"
  }, children), !!footer && React.createElement(ModalFooter, {
    className: footerClassname
  }, footer));
};

Modal.propTypes = {
  children: node.isRequired,
  footer: node,
  footerClassname: string,
  header: string.isRequired,
  isOpen: bool,
  ModalFooter: node,
  toggleModal: func
};
Modal.defaultProps = {
  footer: null,
  footerClassname: null,
  isOpen: false,
  ModalFooter: null,
  toggleModal: null
};
export { Modal };
export default Modal;
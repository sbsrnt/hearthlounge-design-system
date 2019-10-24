import _slicedToArray from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray';
import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import cx from 'classnames';
import ModalFooter from './ModalFooter';
import Header from '../Header';
import Icon from '../Icon';
import styles from './styles.module.scss';

const Modal = function Modal(_ref) {
  const { children } = _ref;
  const { isOpen } = _ref;
  const { toggleModal } = _ref;
  const { header } = _ref;
  const { footer } = _ref;
  const { footerClassname } = _ref;
  const props = _objectWithoutProperties(_ref, [
    'children',
    'isOpen',
    'toggleModal',
    'header',
    'footer',
    'footerClassname',
  ]);

  const _useState = useState(isOpen);
  const _useState2 = _slicedToArray(_useState, 2);
  const isInnerOpen = _useState2[0];
  const setIsOpen = _useState2[1];

  const handleModalClose = function handleModalClose() {
    if (toggleModal) toggleModal(false);
    setIsOpen(false);
  };

  return React.createElement(
    ReactModal,
    {
      isOpen: isInnerOpen,
      onRequestClose: handleModalClose,
      closeTimeoutMS: 400,
      className: styles.modal,
      ...props,
    },
    React.createElement(
      'div',
      {
        className: cx('d-flex p-3', styles.header),
      },
      React.createElement(Header, null, header),
      React.createElement(Icon, {
        icon: 'close',
        className: styles.closeIcon,
        onClick: handleModalClose,
      })
    ),
    React.createElement(
      'div',
      {
        className: 'p-3',
      },
      children
    ),
    !!footer &&
      React.createElement(
        ModalFooter,
        {
          className: footerClassname,
        },
        footer
      )
  );
};

Modal.defaultProps = {
  footer: null,
  footerClassname: null,
  isOpen: false,
  ModalFooter: null,
  toggleModal: null,
};
export default Modal;

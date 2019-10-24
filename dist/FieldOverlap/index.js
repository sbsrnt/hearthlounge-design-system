import _defineProperty from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import Icon from '../Icon';
import Loader from '../Loader';

const FieldOverlap = function FieldOverlap(_ref) {
  let _wrapperClasses;
  let _labelClasses;
  let _childrenWrapperClass;

  const { children } = _ref;
  const { label } = _ref;
  const { loading } = _ref;
  const { width } = _ref;
  const { error } = _ref;
  const { name } = _ref;
  const { resetIcon } = _ref;
  const { onReset } = _ref;
  const labelProps = _objectWithoutProperties(_ref, [
    'children',
    'label',
    'loading',
    'width',
    'error',
    'name',
    'resetIcon',
    'onReset',
  ]);

  const wrapperClasses =
    ((_wrapperClasses = {}),
    _defineProperty(_wrapperClasses, styles.wrapper, true),
    _defineProperty(_wrapperClasses, styles.error, !!error),
    _wrapperClasses);
  const labelClasses =
    ((_labelClasses = {}),
    _defineProperty(_labelClasses, styles.label, true),
    _defineProperty(_labelClasses, styles.error, !!error),
    _labelClasses);
  const childrenWrapperClasses =
    ((_childrenWrapperClass = {}),
    _defineProperty(_childrenWrapperClass, styles.childrenWrapperDefault, true),
    _defineProperty(
      _childrenWrapperClass,
      styles.childrenWithIcon,
      (!error && loading) || (error && !loading) || resetIcon
    ),
    _defineProperty(
      _childrenWrapperClass,
      styles.childrenWithDoubleIcon,
      (error || loading) && resetIcon
    ),
    _childrenWrapperClass);
  return React.createElement(
    'div',
    {
      className: cx(wrapperClasses),
      style: {
        width,
      },
    },
    React.createElement(
      'label',
      {
        className: cx(labelClasses),
        'data-testid': 'label',
        ...labelProps,
      },
      label
    ),
    React.createElement(
      'div',
      {
        className: styles.childrenWrapper,
      },
      React.createElement(
        'div',
        {
          className: cx(childrenWrapperClasses),
          'aria-label': 'field overlap elements',
        },
        children
      ),
      React.createElement(
        'div',
        {
          className: styles.icons,
        },
        resetIcon &&
          React.createElement(Icon, {
            className: styles.close,
            icon: 'close',
            onClick: onReset,
            'aria-label': 'reset input value icon',
          }),
        !loading &&
          error &&
          React.createElement(Icon, {
            icon: 'important',
            'aria-label': 'important icon',
            'data-testid': 'important icon',
          }),
        loading &&
          !error &&
          React.createElement(Loader, {
            size: 18,
            thickness: 2,
            'data-testid': 'loader icon',
          })
      )
    )
  );
};

FieldOverlap.defaultProps = {
  children: null,
  error: null,
  label: null,
  loading: false,
  name: null,
  onReset: null,
  resetIcon: false,
  width: 200,
};
export default FieldOverlap;

import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

const Sublabel = function Sublabel(_ref) {
  const T = _ref.as;
  const { children } = _ref;
  const { className } = _ref;
  const props = _objectWithoutProperties(_ref, ['as', 'children', 'className']);

  return React.createElement(
    T,
    {
      className: cx(styles.sublabel, className),
      ...props,
    },
    children
  );
};

Sublabel.defaultProps = {
  as: 'div',
  children: null,
  className: null,
};
export default Sublabel;

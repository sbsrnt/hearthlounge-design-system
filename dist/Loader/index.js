import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

const Loader = function Loader(_ref) {
  const { size } = _ref;
  const { thickness } = _ref;
  const { className } = _ref;
  const props = _objectWithoutProperties(_ref, [
    'size',
    'thickness',
    'className',
  ]);

  const loaderStyles = {
    width: size,
    height: size,
    borderWidth: thickness,
  };
  return React.createElement('div', {
    className: cx(styles.loader, className),
    style: loaderStyles,
    'aria-label': 'loader',
    ...props,
  });
};

Loader.defaultProps = {
  className: '',
  size: 30,
  thickness: 3,
};
export default Loader;

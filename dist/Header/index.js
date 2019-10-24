import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';

const Header = function Header(_ref) {
  const T = _ref.as;
  const { children } = _ref;
  const { className } = _ref;
  const props = _objectWithoutProperties(_ref, ['as', 'children', 'className']);

  return React.createElement(
    T,
    {
      className,
      ...props,
    },
    children
  );
};

Header.defaultProps = {
  as: 'h3',
  children: null,
  className: null,
};
export default Header;

import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';

const Link = function Link(_ref) {
  const T = _ref.as;
  const { to } = _ref;
  const { children } = _ref;
  const { className } = _ref;
  const props = _objectWithoutProperties(_ref, [
    'as',
    'to',
    'children',
    'className',
  ]);

  return React.createElement(
    T,
    {
      href: to,
      className,
      ...props,
    },
    children
  );
};

Link.defaultProps = {
  as: 'a',
  className: null,
};
export default Link;

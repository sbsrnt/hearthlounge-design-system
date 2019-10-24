import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';

const Paragraph = function Paragraph(_ref) {
  const { children } = _ref;
  const { className } = _ref;
  const props = _objectWithoutProperties(_ref, ['children', 'className']);

  return React.createElement(
    'p',
    {
      className,
      ...props,
    },
    children
  );
};

Paragraph.defaultProps = {
  children: null,
  className: null,
};
export default Paragraph;

import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';
import { node, string } from 'prop-types';

var Paragraph = function Paragraph(_ref) {
  var children = _ref.children,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, ['children', 'className']);

  return React.createElement(
    'p',
    _extends(
      {
        className: className,
      },
      props
    ),
    children
  );
};

Paragraph.propTypes = {
  children: node,
  className: string,
};
Paragraph.defaultProps = {
  children: null,
  className: null,
};
export { Paragraph };
export default Paragraph;

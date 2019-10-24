import _regeneratorRuntime from '@babel/runtime/regenerator';
import _asyncToGenerator from '@babel/runtime/helpers/esm/asyncToGenerator';
import React from 'react';
import { render } from '@testing-library/react';
import { Slider } from '.';
describe('Slider Component', function() {
  test(
    'renders correctly',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        var _render, container;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                (_render = render(React.createElement(Slider, null))),
                  (container = _render.container);
                expect(container).not.toBeNull();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    )
  );
});

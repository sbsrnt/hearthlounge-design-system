import _regeneratorRuntime from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import React from 'react';
import { render } from '@testing-library/react';
import Tooltip from '.';
import styles from './styles.module.scss';

describe('Tooltip Component', function() {
  test(
    'renders correctly',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        let _render;
        let container;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                (_render = render(
                  React.createElement(
                    Tooltip,
                    {
                      text: 'foo',
                    },
                    'bar'
                  )
                )),
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
  test(
    'has tooltipText class on applyChildStyles prop',
    /*#__PURE__*/
    _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2() {
        let _render2;
        let container;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                (_render2 = render(
                  React.createElement(
                    Tooltip,
                    {
                      text: 'foo',
                      applyStylesToChild: true,
                    },
                    'bar'
                  )
                )),
                  (container = _render2.container);
                expect(
                  container.firstChild.classList.contains(styles.tooltipText)
                ).toBeTruthy();

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    )
  );
});
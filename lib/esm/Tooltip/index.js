import _extends from '@babel/runtime/helpers/esm/extends';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import React from 'react';
import { bool, node, string } from 'prop-types';
import { useHover, ToggleLayer } from 'react-laag';
import { motion, AnimatePresence } from 'framer-motion';
import ResizeObserver from 'resize-observer-polyfill';
import styles from './styles.module.scss';

var Tooltip = function Tooltip(_ref) {
  var applyStylesToChild = _ref.applyStylesToChild,
    children = _ref.children,
    text = _ref.text;

  var _useHover = useHover({
      delayEnter: 300,
      delayLeave: 200,
    }),
    _useHover2 = _slicedToArray(_useHover, 2),
    show = _useHover2[0],
    hoverProps = _useHover2[1];

  return React.createElement(
    ToggleLayer,
    {
      ResizeObserver: ResizeObserver,
      isOpen: show,
      fixed: true,
      placement: {
        anchor: 'TOP_CENTER',
        autoAdjust: true,
        triggerOffset: 4,
      },
      renderLayer: function renderLayer(_ref2) {
        var isOpen = _ref2.isOpen,
          layerProps = _ref2.layerProps,
          layerSide = _ref2.layerSide;
        return React.createElement(
          AnimatePresence,
          null,
          isOpen &&
            React.createElement(
              motion.div,
              _extends({}, layerProps, {
                className: styles.tooltipBox,
                initial: {
                  opacity: 0,
                  scale: 0.8,
                  y: layerSide === 'top' ? -8 : 8,
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                },
                exit: {
                  opacity: 0,
                  scale: 0.8,
                  y: layerSide === 'top' ? -8 : 8,
                },
                transition: {
                  type: 'spring',
                  damping: 30,
                  stiffness: 500,
                },
              }),
              text
            )
        );
      },
    },
    function(_ref3) {
      var triggerRef = _ref3.triggerRef;
      return React.createElement(
        'span',
        _extends(
          {
            className: applyStylesToChild ? styles.tooltipText : '',
            ref: triggerRef,
          },
          hoverProps
        ),
        children
      );
    }
  );
};

Tooltip.propTypes = {
  applyStylesToChild: bool,
  children: node.isRequired,
  text: string.isRequired,
};
Tooltip.defaultProps = {
  applyStylesToChild: false,
};
export { Tooltip };
export default Tooltip;

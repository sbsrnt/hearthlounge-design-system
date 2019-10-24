import _slicedToArray from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray';
import React from 'react';
import { useHover, ToggleLayer } from 'react-laag';
import { motion, AnimatePresence } from 'framer-motion';
import ResizeObserver from 'resize-observer-polyfill';
import styles from './styles.module.scss';

const Tooltip = function Tooltip(_ref) {
  const { applyStylesToChild } = _ref;
  const { children } = _ref;
  const { text } = _ref;

  const _useHover = useHover({
    delayEnter: 300,
    delayLeave: 200,
  });
  const _useHover2 = _slicedToArray(_useHover, 2);
  const show = _useHover2[0];
  const hoverProps = _useHover2[1];

  return React.createElement(
    ToggleLayer,
    {
      ResizeObserver,
      isOpen: show,
      fixed: true,
      placement: {
        anchor: 'TOP_CENTER',
        autoAdjust: true,
        triggerOffset: 4,
      },
      renderLayer: function renderLayer(_ref2) {
        const { isOpen } = _ref2;
        const { layerProps } = _ref2;
        const { layerSide } = _ref2;
        return React.createElement(
          AnimatePresence,
          null,
          isOpen &&
            React.createElement(
              motion.div,
              {
                ...layerProps,
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
              },
              text
            )
        );
      },
    },
    function(_ref3) {
      const { triggerRef } = _ref3;
      return React.createElement(
        'span',
        {
          className: applyStylesToChild ? styles.tooltipText : '',
          ref: triggerRef,
          ...hoverProps,
        },
        children
      );
    }
  );
};

Tooltip.defaultProps = {
  applyStylesToChild: false,
};
export default Tooltip;

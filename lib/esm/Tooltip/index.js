import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import { bool, node, oneOf, string } from 'prop-types';
import { useHover, ToggleLayer } from 'react-laag';
import { motion, AnimatePresence } from 'framer-motion';
import ResizeObserver from 'resize-observer-polyfill';

var Tooltip = function Tooltip(_ref) {
  var anchor = _ref.anchor,
      applyStylesToChild = _ref.applyStylesToChild,
      children = _ref.children,
      text = _ref.text;

  var _useHover = useHover({
    delayEnter: 300,
    delayLeave: 200
  }),
      _useHover2 = _slicedToArray(_useHover, 2),
      show = _useHover2[0],
      hoverProps = _useHover2[1];

  return React.createElement(ToggleLayer, {
    ResizeObserver: ResizeObserver,
    isOpen: show,
    fixed: true,
    placement: {
      anchor: anchor,
      autoAdjust: true,
      triggerOffset: 4
    },
    renderLayer: function renderLayer(_ref2) {
      var isOpen = _ref2.isOpen,
          layerProps = _ref2.layerProps,
          layerSide = _ref2.layerSide;
      return React.createElement(AnimatePresence, null, isOpen && React.createElement(motion.div, _extends({}, layerProps, {
        className: "tooltip__box",
        initial: {
          opacity: 0,
          scale: 0.8,
          y: layerSide === 'top' ? -8 : 8
        },
        animate: {
          opacity: 1,
          scale: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          scale: 0.8,
          y: layerSide === 'top' ? -8 : 8
        },
        transition: {
          type: 'spring',
          damping: 30,
          stiffness: 500
        }
      }), text));
    }
  }, function (_ref3) {
    var triggerRef = _ref3.triggerRef;
    return React.createElement("span", _extends({
      className: applyStylesToChild ? 'tooltip__text' : '',
      ref: triggerRef
    }, hoverProps), children);
  });
};

var supportedAnchors = ['LEFT_CENTER', 'TOP_CENTER', 'RIGHT_CENTER', 'BOTTOM_CENTER'];
Tooltip.propTypes = {
  anchor: oneOf(supportedAnchors),

  /** Whether to apply tooltip child styles to wrapping node or not */
  applyStylesToChild: bool,

  /** Any node(s) to be displayed as children */
  children: node.isRequired,

  /** Tooltip text */
  text: string.isRequired
};
Tooltip.defaultProps = {
  anchor: 'TOP_CENTER',
  applyStylesToChild: false
};
export { Tooltip };
export default Tooltip;
import React from 'react';
import { bool, node, oneOf, string } from 'prop-types';
import { useHover, ToggleLayer } from 'react-laag';
import { motion, AnimatePresence } from 'framer-motion';
import ResizeObserver from 'resize-observer-polyfill';

const Tooltip = ({ anchor, applyStylesToChild, children, text }) => {
  const [show, hoverProps] = useHover({ delayEnter: 300, delayLeave: 200 });

  return (
    <ToggleLayer
      ResizeObserver={ResizeObserver}
      isOpen={show}
      fixed
      placement={{ anchor, autoAdjust: true, triggerOffset: 4 }}
      renderLayer={({ isOpen, layerProps, layerSide }) => {
        return (
          <AnimatePresence>
            {isOpen && (
              <motion.div
                {...layerProps}
                className="tooltip__box"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: layerSide === 'top' ? -8 : 8,
                }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: layerSide === 'top' ? -8 : 8,
                }}
                transition={{
                  type: 'spring',
                  damping: 30,
                  stiffness: 500,
                }}
              >
                {text}
              </motion.div>
            )}
          </AnimatePresence>
        );
      }}
    >
      {({ triggerRef }) => (
        <span
          className={applyStylesToChild ? 'tooltip__text' : ''}
          ref={triggerRef}
          {...hoverProps}
        >
          {children}
        </span>
      )}
    </ToggleLayer>
  );
};

const supportedAnchors = [
  'LEFT_CENTER',
  'TOP_CENTER',
  'RIGHT_CENTER',
  'BOTTOM_CENTER',
];

Tooltip.propTypes = {
  anchor: oneOf(supportedAnchors),
  /** Whether to apply tooltip child styles to wrapping node or not */
  applyStylesToChild: bool,
  /** Any node(s) to be displayed as children */
  children: node.isRequired,
  /** Tooltip text */
  text: string.isRequired,
};

Tooltip.defaultProps = {
  anchor: 'TOP_CENTER',
  applyStylesToChild: false,
};

export { Tooltip };
export default Tooltip;

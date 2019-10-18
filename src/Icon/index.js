import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';
import { icons } from '../shared/icons';

import styles from './styles.module.scss';

const Svg = styled.svg`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  vertical-align: middle;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

const Path = styled.path`
  fill: currentColor;
`;

const PathSecondary = styled.path`
  fill: white;
`;

/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */
const Icon = ({ icon, block, visible, className, ...props }) => {
  const iconClasses = {
    [styles.icon]: true,
    [styles.visible]: visible,
    [styles.notVisible]: !visible,
  };

  return (
    <Svg
      viewBox="0 0 24 24"
      width="20px"
      height="20px"
      block={block}
      className={cx(iconClasses, className)}
      {...props}
    >
      {typeof icons[icon] === 'object' ? (
        <>
          <Path className="primary" d={icons[icon].primary} />
          <PathSecondary className="secondary" d={icons[icon].secondary} />
        </>
      ) : (
        <Path d={icons[icon]} />
      )}
    </Svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  block: PropTypes.bool,
  visible: PropTypes.bool,
};

Icon.defaultProps = {
  className: null,
  block: false,
  visible: true,
};

export default Icon;

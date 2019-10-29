import React, { Children, cloneElement, useState } from 'react';
import { bool, node, oneOf, string } from 'prop-types';
import cx from 'classnames';
import startCase from 'lodash/startCase';
import { neutral50, neutral70 } from '../colors';

const Styled = ({
  active,
  activeColor,
  background,
  backgroundActiveColor,
  backgroundHoverColor,
  borderActiveColor,
  borderColor,
  borderHoverColor,
  borderPosition,
  children,
  className,
  color,
  hoverColor,
  withBorder,
  withTransition,
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const transition = 'all .4s ease';
  const visibleColor = hover ? hoverColor : color;
  const visibleBgColor = hover ? backgroundHoverColor : background;
  const visibleBorderColor = hover ? borderHoverColor : borderColor;
  const activeVisibleColor = active ? activeColor || hoverColor : visibleColor;
  const activeVisibleBorderColor = active
    ? borderActiveColor || hoverColor
    : visibleBorderColor;
  const activeVisibleBgColor = active
    ? backgroundActiveColor || backgroundHoverColor
    : visibleBgColor;

  const styles = {
    color: activeVisibleColor,
    fill: activeVisibleColor,
    background: activeVisibleBgColor,
    [`border${startCase(borderPosition)}`]: withBorder
      ? `4px solid ${activeVisibleBorderColor}`
      : null,
    transition: withTransition ? transition : null,
  };

  const childrenWithProps = Children.map(children, child =>
    cloneElement(child, { style: styles })
  );

  return (
    <div
      className={cx('styled', className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {childrenWithProps}
    </div>
  );
};

const supportedBorderPositions = ['left', 'top', 'right', 'bottom'];

Styled.propTypes = {
  active: bool,
  activeColor: string,
  background: string,
  backgroundActiveColor: string,
  backgroundHoverColor: string,
  borderActiveColor: string,
  borderColor: string,
  borderHoverColor: string,
  borderPosition: oneOf(supportedBorderPositions),
  children: node,
  className: string,
  color: string,
  hoverColor: string,
  withBorder: bool,
  withTransition: bool,
};

Styled.defaultProps = {
  active: false,
  activeColor: null,
  background: null,
  backgroundActiveColor: null,
  backgroundHoverColor: null,
  borderActiveColor: neutral50,
  borderColor: neutral70,
  borderHoverColor: neutral50,
  borderPosition: 'left',
  children: null,
  className: null,
  color: neutral70,
  hoverColor: neutral50,
  withBorder: false,
  withTransition: false,
};

export { Styled };
export default Styled;

import React, { Children, cloneElement, useState } from 'react';
import { bool, node, string } from 'prop-types';
import { neutral50, neutral70 } from '../colors';

const Styled = ({
  active,
  background,
  backgroundHoverColor,
  children,
  className,
  color,
  hoverColor,
  withTransition,
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const transition = 'all .4s ease';
  const visibleColor = hover ? hoverColor : color;
  const visibleBgColor = hover ? backgroundHoverColor : background;
  const activeVisibleColor = active ? color : visibleColor;
  const activeVisibleBgColor = active ? background : visibleBgColor;

  const styles = {
    color: activeVisibleColor,
    fill: activeVisibleColor,
    background: activeVisibleBgColor,
    transition: withTransition ? transition : null,
  };

  const childrenWithProps = Children.map(children, child =>
    cloneElement(child, { style: styles })
  );

  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {childrenWithProps}
    </div>
  );
};

Styled.propTypes = {
  active: bool,
  background: string,
  backgroundHoverColor: string,
  children: node,
  className: string,
  color: string,
  hoverColor: string,
  withTransition: bool,
};

Styled.defaultProps = {
  active: false,
  background: null,
  backgroundHoverColor: null,
  children: null,
  className: null,
  color: neutral70,
  hoverColor: neutral50,
  withTransition: false,
};

export { Styled };
export default Styled;

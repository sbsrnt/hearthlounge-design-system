import React from 'react';
import { bool, number, string } from 'prop-types';
import cx from 'classnames';
import { icons } from '../../assets/icons';

const Icon = ({ name, block, visible, className, size, ...props }) => {
  const {
    paths,
    tags: { 1: title },
  } = icons.find(i => i.tags[1] === name);
  const iconClasses = {
    icon: true,
    visible,
    notVisible: !visible,
    icon__block: block,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      className={cx(iconClasses, className)}
      {...props}
    >
      <title>{title}</title>
      {paths.map((path, i) => (
        <path className="icon__path" key={`path_${name}_${i}`} d={path} />
      ))}
    </svg>
  );
};

Icon.propTypes = {
  className: string,
  name: string.isRequired,
  block: bool,
  size: number,
  visible: bool,
};

Icon.defaultProps = {
  className: null,
  block: false,
  size: 24,
  visible: true,
};

export { Icon };
export default Icon;

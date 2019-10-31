import React from 'react';
import { bool, number, string } from 'prop-types';
import cx from 'classnames';
import { icons } from '../icons';

const Icon = ({ name, block, className, size, ...props }) => {
  const { paths } = icons.find(i => i.tags[1] === name);
  const iconClasses = {
    icon: true,
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
      {paths &&
        paths.map((path, i) => (
          <path className="icon__path" key={`path_${name}_${i}`} d={path} />
        ))}
    </svg>
  );
};

Icon.propTypes = {
  block: bool,
  /** Any additional classNames to specify on the element */
  className: string,
  /** Name of the icon to be rendered */
  name: string.isRequired,
  /** Size of the icon */
  size: number,
};

Icon.defaultProps = {
  block: false,
  className: null,
  size: 24,
};

export { Icon };
export default Icon;

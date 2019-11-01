import React from 'react';
import { bool, number, oneOfType, oneOf, string } from 'prop-types';
import cx from 'classnames';
import { icons } from '../icons';

const Icon = ({ name, block, className, size, ...props }) => {
  const { paths } = icons.find(i => i.tags[1] === name);
  const iconClasses = {
    icon: true,
    icon__block: block,
  };

  const getSize = () => {
    switch (size) {
      case 'xs':
        return 16;
      case 'md':
        return 24;
      case 'lg':
        return 35;
      default:
        return size;
    }
  };

  return (
    <svg
      width={getSize()}
      height={getSize()}
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

const staticSizes = ['xs'];

Icon.propTypes = {
  block: bool,
  /** Any additional classNames to specify on the element */
  className: string,
  /** Name of the icon to be rendered */
  name: string.isRequired,
  /** Size of the icon */
  size: oneOfType([oneOf(staticSizes), number]),
};

Icon.defaultProps = {
  block: false,
  className: null,
  size: 24,
};

export { Icon };
export default Icon;

import React, { useState } from 'react';
import { bool, func, string } from 'prop-types';
import cx from 'classnames';

const Checkbox = ({
  checked,
  className,
  disabled,
  name,
  onClick,
  onKeyPress,
  ...props
}) => {
  const [innerChecked, setInnerChecked] = useState(checked);

  const containerClasses = cx({
    checkbox__container: true,
    'checkbox__container--checked': innerChecked,
    'checkbox__container--disabled': disabled,
  });

  const checkboxClasses = cx({
    checkbox: true,
    [className]: !!className,
  });

  const checkmarkClasses = cx({
    checkbox__checkmark: true,
    'checkbox__checkmark--checked': innerChecked,
  });

  const handleClick = () => {
    if (onClick) onClick(name, !innerChecked);
    setInnerChecked(!innerChecked);
  };

  const handleKeyPress = e => {
    if (e.charCode === 32) {
      if (onKeyPress) onKeyPress(name, !innerChecked);
      setInnerChecked(!innerChecked);
    }
  };

  return (
    <div
      className={containerClasses}
      onClick={!disabled ? handleClick : null}
      data-testid="checkbox-container"
      aria-checked={innerChecked}
      role="checkbox"
      onKeyPress={!disabled ? handleKeyPress : null}
      tabIndex={0}
    >
      <input
        type="checkbox"
        className={checkboxClasses}
        data-testid="checkbox"
        defaultChecked={innerChecked}
        {...props}
      />
      <span className={checkmarkClasses} data-testid="checkmark">
        ✓
      </span>
    </div>
  );
};

Checkbox.propTypes = {
  checked: bool,
  className: string,
  disabled: bool,
  name: string,
  onClick: func,
  onKeyPress: func,
};
Checkbox.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  name: 'checkbox',
  onClick: null,
  onKeyPress: null,
};

export { Checkbox };
export default Checkbox;

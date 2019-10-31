import React from 'react';
import RcSlider from 'rc-slider/lib/Slider';
import { func, number, string } from 'prop-types';
import 'rc-slider/assets/index.css';

const Slider = ({ name, onChange, value, ...rest }) => {
  const handleChange = v => onChange(name, v);
  const props = {
    name,
    onChange: onChange ? handleChange : null,
    ...(value && { value }),
    ...rest,
  };
  return <RcSlider {...props} />;
};

Slider.propTypes = {
  /** Name to identify and be provided through callback */
  name: string,
  /** Function callback to execute on change of the element -> (name, value) */
  onChange: func.isRequired,
  /** Currently selected value */
  value: number,
};

Slider.defaultProps = {
  name: 'slider',
  value: 0,
};

export { Slider };
export default Slider;

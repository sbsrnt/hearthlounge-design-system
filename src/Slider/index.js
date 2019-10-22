import React from 'react';
import RcSlider from 'rc-slider';
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
  name: string,
  onChange: func.isRequired,
  value: number,
};

Slider.defaultProps = {
  name: 'slider',
  value: 0,
};

export default Slider;

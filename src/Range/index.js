import React from 'react';
import RcRange from 'rc-slider/lib/Range';
import { arrayOf, func, number, string } from 'prop-types';
import 'rc-slider/assets/index.css';

const Range = ({ name, onChange, value, ...rest }) => {
  const handleChange = v => onChange(name, v);
  const props = {
    name,
    onChange: onChange ? handleChange : null,
    ...(value && { value }),
    ...rest,
  };
  return <RcRange {...props} />;
};

Range.propTypes = {
  name: string,
  onChange: func.isRequired,
  value: arrayOf(number),
};

Range.defaultProps = {
  name: 'range',
  value: [0, 10],
};

export default Range;

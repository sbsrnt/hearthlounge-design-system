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
  /** Name to identify and be provided through callback */
  name: string,
  /** Function callback to execute on change of the element -> (name, value) */
  onChange: func.isRequired,
  /** Currently selected array of values */
  value: arrayOf(number),
};

Range.defaultProps = {
  name: 'range',
  value: [0, 10],
};

export { Range };
export default Range;

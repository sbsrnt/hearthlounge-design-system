import React from 'react';
import { bool, func, node, number, oneOfType, string } from 'prop-types';
import cx from 'classnames';

import { Icon } from '../../Icon';
import { Loader } from '../../Loader';

const FieldOverlap = ({
  children,
  disabled,
  label,
  loading,
  width,
  error,
  name,
  resetIcon,
  onReset,
  ...labelProps
}) => {
  const wrapperClasses = {
    fieldOverlap__wrapper: true,
    fieldOverlap__error: !!error,
    fieldOverlap__disabled: disabled,
  };

  const labelClasses = {
    fieldOverlap__label: true,
    fieldOverlap__error: !!error,
    fieldOverlap__disabled: disabled,
  };

  const childrenWrapperClasses = {
    'fieldOverlap__childrenWrapper--default': true,
    'fieldOverlap__childrenWrapper--withIcon':
      (!error && loading) || (error && !loading) || resetIcon,
    'fieldOverlap__childrenWrapper--withDoubleIcon':
      (error || loading) && resetIcon,
  };

  return (
    <div className={cx(wrapperClasses)} style={{ width }}>
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <label className={cx(labelClasses)} data-testid="label" {...labelProps}>
        {label}
      </label>
      <div className="fieldOverlap__childrenWrapper">
        <div
          className={cx(childrenWrapperClasses)}
          aria-label="field overlap elements"
        >
          {children}
        </div>
        <div
          className={cx(
            'fieldOverlap__icons',
            (resetIcon || loading || error) && 'fieldOverlap__fadeIn',
            !resetIcon && !loading && !error && 'fieldOverlap__fadeOut'
          )}
        >
          <Icon
            className="fieldOverlap__close"
            icon="close"
            onClick={onReset}
            aria-hidden={!resetIcon}
            aria-label="reset input value icon"
            visible={resetIcon}
          />
          {!loading && error && (
            <Icon
              icon="important"
              aria-label="important icon"
              data-testid="important icon"
              visible={!loading && error}
              aria-hidden={!error || loading}
            />
          )}
          {loading && !error && (
            <Loader size={18} thickness={2} data-testid="loader icon" />
          )}
        </div>
      </div>
    </div>
  );
};

FieldOverlap.propTypes = {
  children: node,
  disabled: bool,
  error: oneOfType([bool, string]),
  label: string,
  loading: bool,
  name: string,
  onReset: func,
  resetIcon: bool,
  width: number,
};
FieldOverlap.defaultProps = {
  children: null,
  disabled: false,
  error: null,
  label: null,
  loading: false,
  name: null,
  onReset: null,
  resetIcon: false,
  width: 200,
};

export default FieldOverlap;

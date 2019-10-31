import React from 'react';
import { bool, func, node, number, oneOfType, string } from 'prop-types';
import cx from 'classnames';
import { isString } from 'lodash';

import { Icon } from '../../Icon';
import { Loader } from '../../Loader';
import { Tooltip } from '../../Tooltip';

const FieldOverlap = ({
  children,
  disabled,
  label,
  loading,
  width,
  error,
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

  const errorMsg = isString(error) ? error : 'Something went wrong.';

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
          <div className="d-flex" style={{ marginTop: '1px' }}>
            {resetIcon && (
              <Icon
                className="fieldOverlap__close"
                name="close"
                onClick={onReset}
                aria-hidden={!resetIcon}
                aria-label="reset input value icon"
                size={16}
              />
            )}
          </div>
          {!loading && error && (
            <span style={{ marginTop: '-3px' }}>
              <Tooltip text={errorMsg}>
                <Icon
                  name="error"
                  aria-label="error icon"
                  data-testid="important icon"
                  aria-hidden={!error || loading}
                  size={16}
                />
              </Tooltip>
            </span>
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
  /** Any node(s) to be displayed as children */
  children: node,
  /** Disable from user interaction */
  disabled: bool,
  /** Whether or not there as an issue */
  error: oneOfType([bool, string]),
  /** Represents a caption for an item in a user interface */
  label: string,
  /** Loading state to indicate that the data element needs is still loading */
  loading: bool,
  /** Function callback to execute on reset of the element -> (name, value) */
  onReset: func,
  /** Whether to show or not reset icon */
  resetIcon: bool,
  /** Width of the element */
  width: number,
};
FieldOverlap.defaultProps = {
  children: null,
  disabled: false,
  error: null,
  label: null,
  loading: false,
  onReset: null,
  resetIcon: false,
  width: 200,
};

export default FieldOverlap;

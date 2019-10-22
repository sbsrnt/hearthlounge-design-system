import React from 'react';
import { bool, func, node, number, oneOfType, string } from 'prop-types';
import cx from 'classnames';

import Icon from '../../Icon';
import Loader from '../../Loader';

import styles from './styles.module.scss';

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
    [styles.wrapper]: true,
    [styles.error]: !!error,
    [styles.disabled]: disabled,
  };

  const labelClasses = {
    [styles.label]: true,
    [styles.error]: !!error,
    [styles.disabled]: disabled,
  };

  const childrenWrapperClasses = {
    [styles.childrenWrapperDefault]: true,
    [styles.childrenWithIcon]:
      (!error && loading) || (error && !loading) || resetIcon,
    [styles.childrenWithDoubleIcon]: (error || loading) && resetIcon,
  };

  return (
    <div className={cx(wrapperClasses)} style={{ width }}>
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <label className={cx(labelClasses)} data-testid="label" {...labelProps}>
        {label}
      </label>
      <div className={styles.childrenWrapper}>
        <div
          className={cx(childrenWrapperClasses)}
          aria-label="field overlap elements"
        >
          {children}
        </div>
        <div
          className={cx(
            styles.icons,
            (resetIcon || loading || error) && styles.fadeIn,
            !resetIcon && !loading && !error && styles.fadeOut
          )}
        >
          <Icon
            className={styles.close}
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

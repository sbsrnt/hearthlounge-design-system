import React from 'react';
import { bool, func, node, number, string } from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

import Icon from '../Icon';
import Loader from '../Loader';

const FieldOverlap = ({
  children,
  label,
  loading,
  width,
  error,
  resetIcon,
  onReset,
  ...labelProps
}) => {
  const wrapperClasses = {
    [styles.wrapper]: true,
    [styles.error]: !!error,
  };

  const labelClasses = {
    [styles.label]: true,
    [styles.error]: !!error,
  };

  const childrenWrapperClasses = {
    [styles.childrenWrapperDefault]: true,
    [styles.childrenWithIcon]: error || loading || resetIcon,
    [styles.childrenWithDoubleIcon]: (error || loading) && resetIcon,
  };

  return (
    <div className={cx(wrapperClasses)} style={{ width }}>
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <label className={cx(labelClasses)} data-testid="label" {...labelProps}>
        {label}
      </label>
      <div className={styles.childrenWrapper}>
        <div className={cx(childrenWrapperClasses)}>{children}</div>
        <div className={styles.icons}>
          {resetIcon && (
            <Icon
              className={styles.close}
              icon="close"
              onClick={onReset}
              aria-label="reset input value icon"
            />
          )}
          {!loading && error && (
            <Icon icon="important" aria-label="important icon" />
          )}
          {loading && !error && <Loader size={18} thickness={2} />}
        </div>
      </div>
    </div>
  );
};

FieldOverlap.propTypes = {
  children: node,
  error: bool,
  label: string,
  loading: bool,
  onReset: func,
  resetIcon: bool,
  width: number,
};
FieldOverlap.defaultProps = {
  children: null,
  error: null,
  label: null,
  loading: false,
  onReset: null,
  resetIcon: false,
  width: 200,
};

export default FieldOverlap;

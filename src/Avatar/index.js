import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../Icon';

import styles from './styles.module.scss';

/**
 Use an avatar for attributing actions or content to specific users.
 The user's name should always be present when using Avatar – either printed beside
 the avatar or in a tooltip.
 **/

const Avatar = ({ loading, username, src, size, className, ...props }) => {
  const a11yProps = {};
  const classes = {
    [styles.avatar]: true,
    [styles.src]: src,
    [styles.initial]: !loading,
    [styles.loading]: loading,
    [styles.large]: size && size === 'large',
    [styles.small]: size && size === 'small',
    [styles.tiny]: size && size === 'tiny',
  };

  if (loading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else {
    a11yProps['aria-label'] = username;
  }

  return (
    <div className={cx(classes, className)} {...a11yProps} {...props}>
      {loading && <Icon icon="useralt" />}
      {!loading && src && <img src={src} alt={username} />}
      {!loading && !src && (
        <div aria-hidden="true">{username.substring(0, 1)}</div>
      )}
    </div>
  );
};

export const sizes = ['large', 'medium', 'small', 'tiny'];

Avatar.propTypes = {
  /** Avatar's class */
  className: PropTypes.string,
  /**
   Use the loading state to indicate that the data Avatar needs is still loading.
   */
  loading: PropTypes.bool,
  /**
   Avatar falls back to the user's initial when no image is provided.
   Supply a `username` and omit `src` to see what this looks like.
   */
  username: PropTypes.string,
  /**
   The URL of the Avatar's image.
   */
  src: PropTypes.string,
  /**
   Avatar comes in four sizes. In most cases, you'll be fine with `medium`.
   */
  size: PropTypes.oneOf(sizes),
};

Avatar.defaultProps = {
  className: '',
  loading: false,
  username: 'loading',
  src: null,
  size: 'medium',
};

export { Avatar };
export default Avatar;

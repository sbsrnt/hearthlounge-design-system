import React from 'react';
import { bool, oneOf, string } from 'prop-types';
import cx from 'classnames';

import { Icon } from '../Icon';

/**
 Use an avatar for attributing actions or content to specific users.
 The user's name should always be present when using Avatar – either printed beside
 the avatar or in a tooltip.
 **/

const Avatar = ({ loading, username, src, size, className, ...props }) => {
  const a11yProps = {};
  const classes = {
    avatar: true,
    avatar__src: src,
    avatar__initial: !loading,
    avatar__loading: loading,
    'avatar__size--large': size && size === 'large',
    'avatar__size--small': size && size === 'small',
    'avatar__size--tiny': size && size === 'tiny',
  };

  if (loading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else {
    a11yProps['aria-label'] = username;
  }

  return (
    <div className={cx(classes, className)} {...a11yProps} {...props}>
      {loading && <Icon name="sign-in" />}
      {!loading && src && <img src={src} alt={username} />}
      {!loading && !src && (
        <div aria-hidden="true">{username.substring(0, 1)}</div>
      )}
    </div>
  );
};

export const sizes = ['large', 'medium', 'small', 'tiny'];

Avatar.propTypes = {
  /** Any additional classNames to specify on the element */
  className: string,
  /** Loading state to indicate that the data element needs is still loading */
  loading: bool,
  /**
   Avatar falls back to the user's initial when no image is provided.
   Supply a `username` and omit `src` to see what this looks like.
   */
  username: string,
  /**
   The URL of the Avatar's image.
   */
  src: string,
  /** Size of the element */
  size: oneOf(sizes),
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

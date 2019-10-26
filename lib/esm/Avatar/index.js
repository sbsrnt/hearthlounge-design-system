import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../Icon';
/**
 Use an avatar for attributing actions or content to specific users.
 The user's name should always be present when using Avatar – either printed beside
 the avatar or in a tooltip.
 **/

var Avatar = function Avatar(_ref) {
  var loading = _ref.loading,
      username = _ref.username,
      src = _ref.src,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["loading", "username", "src", "size", "className"]);

  var a11yProps = {};
  var classes = {
    avatar: true,
    avatar__src: src,
    avatar__initial: !loading,
    avatar__loading: loading,
    'avatar__size--large': size && size === 'large',
    'avatar__size--small': size && size === 'small',
    'avatar__size--tiny': size && size === 'tiny'
  };

  if (loading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else {
    a11yProps['aria-label'] = username;
  }

  return React.createElement("div", _extends({
    className: cx(classes, className)
  }, a11yProps, props), loading && React.createElement(Icon, {
    name: "sign-in"
  }), !loading && src && React.createElement("img", {
    src: src,
    alt: username
  }), !loading && !src && React.createElement("div", {
    "aria-hidden": "true"
  }, username.substring(0, 1)));
};

export var sizes = ['large', 'medium', 'small', 'tiny'];
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
  size: PropTypes.oneOf(sizes)
};
Avatar.defaultProps = {
  className: '',
  loading: false,
  username: 'loading',
  src: null,
  size: 'medium'
};
export { Avatar };
export default Avatar;
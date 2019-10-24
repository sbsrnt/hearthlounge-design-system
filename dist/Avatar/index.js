import _defineProperty from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';
import cx from 'classnames';
import Icon from '../Icon';
import styles from './styles.module.scss';
/**
 Use an avatar for attributing actions or content to specific users.
 The user's name should always be present when using Avatar – either printed beside
 the avatar or in a tooltip.
 **/

const Avatar = function Avatar(_ref) {
  let _classes;

  const { loading } = _ref;
  const { username } = _ref;
  const { src } = _ref;
  const { size } = _ref;
  const { className } = _ref;
  const props = _objectWithoutProperties(_ref, [
    'loading',
    'username',
    'src',
    'size',
    'className',
  ]);

  const a11yProps = {};
  const classes =
    ((_classes = {}),
    _defineProperty(_classes, styles.avatar, true),
    _defineProperty(_classes, styles.src, src),
    _defineProperty(_classes, styles.initial, !loading),
    _defineProperty(_classes, styles.loading, loading),
    _defineProperty(_classes, styles.large, size && size === 'large'),
    _defineProperty(_classes, styles.small, size && size === 'small'),
    _defineProperty(_classes, styles.tiny, size && size === 'tiny'),
    _classes);

  if (loading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else {
    a11yProps['aria-label'] = username;
  }

  return React.createElement(
    'div',
    {
      className: cx(classes, className),
      ...a11yProps,
      ...props,
    },
    loading &&
      React.createElement(Icon, {
        icon: 'useralt',
      }),
    !loading &&
      src &&
      React.createElement('img', {
        src,
        alt: username,
      }),
    !loading &&
      !src &&
      React.createElement(
        'div',
        {
          'aria-hidden': 'true',
        },
        username.substring(0, 1)
      )
  );
};

export var sizes = ['large', 'medium', 'small', 'tiny'];
Avatar.defaultProps = {
  className: '',
  loading: false,
  username: 'loading',
  src: null,
  size: 'medium',
};
export default Avatar;

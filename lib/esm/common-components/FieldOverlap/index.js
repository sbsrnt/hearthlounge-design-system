import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _isString from "lodash/isString";
import React from 'react';
import { bool, func, node, number, oneOfType, string } from 'prop-types';
import cx from 'classnames';
import { Icon } from '../../Icon';
import { Loader } from '../../Loader';
import { Tooltip } from '../../Tooltip';

var FieldOverlap = function FieldOverlap(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      label = _ref.label,
      loading = _ref.loading,
      width = _ref.width,
      error = _ref.error,
      name = _ref.name,
      resetIcon = _ref.resetIcon,
      onReset = _ref.onReset,
      labelProps = _objectWithoutProperties(_ref, ["children", "disabled", "label", "loading", "width", "error", "name", "resetIcon", "onReset"]);

  var wrapperClasses = {
    fieldOverlap__wrapper: true,
    fieldOverlap__error: !!error,
    fieldOverlap__disabled: disabled
  };
  var labelClasses = {
    fieldOverlap__label: true,
    fieldOverlap__error: !!error,
    fieldOverlap__disabled: disabled
  };
  var childrenWrapperClasses = {
    'fieldOverlap__childrenWrapper--default': true,
    'fieldOverlap__childrenWrapper--withIcon': !error && loading || error && !loading || resetIcon,
    'fieldOverlap__childrenWrapper--withDoubleIcon': (error || loading) && resetIcon
  };
  var errorMsg = _isString(error) ? error : 'Something went wrong.';
  return React.createElement("div", {
    className: cx(wrapperClasses),
    style: {
      width: width
    }
  }, React.createElement("label", _extends({
    className: cx(labelClasses),
    "data-testid": "label"
  }, labelProps), label), React.createElement("div", {
    className: "fieldOverlap__childrenWrapper"
  }, React.createElement("div", {
    className: cx(childrenWrapperClasses),
    "aria-label": "field overlap elements"
  }, children), React.createElement("div", {
    className: cx('fieldOverlap__icons', (resetIcon || loading || error) && 'fieldOverlap__fadeIn', !resetIcon && !loading && !error && 'fieldOverlap__fadeOut')
  }, React.createElement("div", {
    className: "d-flex",
    style: {
      marginTop: '1px'
    }
  }, resetIcon && React.createElement(Icon, {
    className: "fieldOverlap__close",
    name: "close",
    onClick: onReset,
    "aria-hidden": !resetIcon,
    "aria-label": "reset input value icon",
    size: 16
  })), !loading && error && React.createElement("span", {
    style: {
      marginTop: '-3px'
    }
  }, React.createElement(Tooltip, {
    text: errorMsg
  }, React.createElement(Icon, {
    name: "error",
    "aria-label": "error icon",
    "data-testid": "important icon",
    "aria-hidden": !error || loading,
    size: 16
  }))), loading && !error && React.createElement(Loader, {
    size: 18,
    thickness: 2,
    "data-testid": "loader icon"
  }))));
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
  width: number
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
  width: 200
};
export default FieldOverlap;
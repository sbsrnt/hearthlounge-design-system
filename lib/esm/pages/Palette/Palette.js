import _typeof from "@babel/runtime/helpers/esm/typeof";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _startCase from "lodash/startCase";
import _camelCase from "lodash/camelCase";
import React from 'react';
import tokens from '../../../tokens/tokens.json';
import { nestedTokenColors } from '../../../tokens/categories';

var Palette = function Palette() {
  // eslint-disable-next-line no-underscore-dangle
  var entries = Object.entries(tokens._colors.color);
  return React.createElement("div", {
    className: "palette__container"
  }, React.createElement("div", null, "Common", React.createElement("div", {
    className: "palette__container"
  }, entries.map(function (_ref) {
    var key = _ref[0],
        values = _ref[1];

    if (![].concat(_toConsumableArray(nestedTokenColors), ['medium', 'border', 'secondary', 'lightest', 'dark', 'darkest']).includes(key)) {
      return React.createElement("div", {
        className: "palette__wrapper",
        key: key
      }, React.createElement("p", null, _startCase(key)), React.createElement("ul", null, Object.entries(values).map(function (_ref2) {
        var colorKey = _ref2[0],
            colorValue = _ref2[1];
        return React.createElement("li", {
          key: "".concat(key, "_").concat(colorKey)
        }, React.createElement("span", {
          style: {
            backgroundColor: colorValue
          }
        }), React.createElement("code", null, key, colorKey, " | ", colorValue));
      })));
    }

    return null;
  }))), React.createElement("div", {
    className: "palette__container"
  }, entries.map(function (_ref3) {
    var key = _ref3[0],
        values = _ref3[1];
    var isExtendedObj = Object.values(values).every(function (v) {
      return _typeof(v) === 'object';
    });

    if (isExtendedObj) {
      return React.createElement("div", {
        key: key
      }, React.createElement("h3", null, _startCase(key)), React.createElement("div", {
        className: "palette__wrapper palette__innerWrapper"
      }, Object.entries(values).map(function (_ref4) {
        var extendedObjKey = _ref4[0],
            extendedObjValues = _ref4[1];
        return React.createElement("div", {
          key: "".concat(key, "_").concat(extendedObjKey)
        }, React.createElement("p", null, _startCase(extendedObjKey)), React.createElement("ul", null, Object.entries(extendedObjValues).map(function (_ref5) {
          var k = _ref5[0],
              v = _ref5[1];
          return React.createElement("li", {
            key: "".concat(key, "_").concat(extendedObjKey, "_").concat(k)
          }, React.createElement("span", {
            style: {
              backgroundColor: v
            }
          }), React.createElement("code", null, _camelCase(extendedObjKey), k, " | ", v));
        })));
      })));
    }

    return null;
  })));
};

export default Palette;
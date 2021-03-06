import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
var supportedTypes = ['error', 'info', 'success', 'warn'];

var initToast = function initToast() {
  return toast.configure();
};

var renderToast = function renderToast(_ref) {
  var text = _ref.text,
      type = _ref.type,
      options = _objectWithoutProperties(_ref, ["text", "type"]);

  return supportedTypes.includes(type) ? toast[type](text, _objectSpread({
    className: "toast__".concat(type, "--background"),
    bodyClassName: "toast__".concat(type, "--color"),
    progressClassName: "toast__".concat(type, "--progress")
  }, options)) : toast;
};

export { initToast, renderToast };
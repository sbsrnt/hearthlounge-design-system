import _defineProperty from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '/Users/sebastian/WebstormProjects/hearthlounge-design-system/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './styles.module.scss';

const supportedTypes = ['error', 'info', 'success', 'warn'];

const initToast = function initToast() {
  return toast.configure();
};

const renderToast = function renderToast(_ref) {
  const { text } = _ref;
  const { type } = _ref;
  const options = _objectWithoutProperties(_ref, ['text', 'type']);

  return supportedTypes.includes(type)
    ? toast[type](
        text,
        _objectSpread(
          {
            className: styles[''.concat(type, '-background')],
            bodyClassName: styles[''.concat(type, '-color')],
            progressClassName: styles[''.concat(type, '-progress')],
          },
          options
        )
      )
    : toast;
};

export { initToast, renderToast };

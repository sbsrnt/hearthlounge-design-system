import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
export function useActions(actions, deps) {
  var dispatch = useDispatch();
  return useMemo(function () {
    if (Array.isArray(actions)) {
      return actions.map(function (a) {
        return bindActionCreators(a, dispatch);
      });
    }

    return bindActionCreators(actions, dispatch);
  }, deps ? [dispatch].concat(_toConsumableArray(deps)) : deps);
}
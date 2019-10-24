import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 1.5s ease-in-out infinite;\n  background: ", ";\n  color: transparent;\n  cursor: progress;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  0% { transform:rotate(-3deg) }\n  1.68421% { transform:rotate(3deg) }\n  2.10526% { transform:rotate(6deg) }\n  3.78947% { transform:rotate(-6deg) }\n  4.21053% { transform:rotate(-6deg) }\n  5.89474% { transform:rotate(6deg) }\n  6.31579% { transform:rotate(6deg) }\n  8% { transform:rotate(-6deg) }\n  8.42105% { transform:rotate(-6deg) }\n  10.10526% { transform:rotate(6deg) }\n  10.52632% { transform:rotate(6deg) }\n  12.21053% { transform:rotate(-6deg) }\n  12.63158% { transform:rotate(-6deg) }\n  14.31579% { transform:rotate(6deg) }\n  15.78947% { transform:rotate(0deg) }\n  100% { transform:rotate(0deg) }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Handy CSS animations for micro-interactions
import { css, keyframes } from 'styled-components';
import { color } from './styles';
export var easing = {
  rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)'
};
export var rotate360 = keyframes(_templateObject());
export var glow = keyframes(_templateObject2());
export var float = keyframes(_templateObject3());
export var jiggle = keyframes(_templateObject4());
export var shake = keyframes(_templateObject5());
export var inlineGlow = css(_templateObject6(), glow, color.mediumlight);
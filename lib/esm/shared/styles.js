import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 ", "px;\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { css } from 'styled-components'; // Global style variables

export var background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF'
};
export var color = {
  // Palette
  primary: '#FF4785',
  // coral
  secondary: '#1EA7FD',
  // ocean
  tertiary: '#DDDDDD',
  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',
  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',
  border: 'rgba(0,0,0,.1)',
  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#E69D00'
};
export var spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30
  },
  borderRadius: {
    small: 5,
    default: 10
  }
};
export var typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  size: {
    s1: '12',
    s2: '14',
    s3: '16',
    m1: '20',
    m2: '24',
    m3: '28',
    l1: '32',
    l2: '40',
    l3: '48',
    code: '90'
  }
};
export var breakpoint = 600;
export var pageMargin = '5.55555';
export var pageMargins = css(_templateObject(), spacing.padding.medium, breakpoint * 1, pageMargin * 1, breakpoint * 2, pageMargin * 2, breakpoint * 3, pageMargin * 3, breakpoint * 4, pageMargin * 4);
import { create } from '@storybook/theming';
import { colors } from '../src';
export default create({
  colorPrimary: colors.neutral90,
  colorSecondary: colors.leagueOfExplorers50,

  // UI
  appBg: colors.neutral90,
  appContentBg: colors.neutral90,
  appBorderColor: colors.neutral70,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Lato", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: colors.neutral50,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: colors.neutral50,
  barSelectedColor: colors.neutral10,
  barBg: colors.neutral80,

  // Form colors
  inputBg: 'white',
  inputBorder: colors.neutral80,
  inputTextColor: colors.neutral50,
  inputBorderRadius: 4,

  brandTitle: 'HearthLounge storybook',
});

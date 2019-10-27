import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import theme from './hearthloungeTheme';

addDecorator(withA11y);
import '../src/styles/_styles.scss';

addParameters({
  options: {
    theme: theme,
  },
});

configure(
  [
    require.context('../src/pages', true, /\.stories.mdx$/),
    require.context('../src', true, /\.stories\.(js|mdx)$/),
    // to work locally
    // require.context(
    //   '../node_modules/hearthlounge-design-system/dist',
    //   true,
    //   /\.stories\.(js|mdx)$/
    // ),
  ],
  module
);

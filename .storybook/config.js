import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);
import '../src/styles/_styles.scss';

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /Intro\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.(js|mdx)$/),
  ],
  module
);

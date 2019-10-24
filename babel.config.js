module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['last 2 versions'],
        },
      },
    ],
    '@babel/react',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'babel-plugin-lodash',
    '@babel/plugin-external-helpers',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        regenerator: true,
        helpers: true,
        useESModules: false,
      },
    ],
  ],
  env: {
    esm: {
      presets: [['@babel/env', { modules: false }]],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: false,
            regenerator: true,
            helpers: true,
            useESModules: true,
          },
        ],
      ],
    },
    test: {
      presets: [['@babel/env', { modules: 'commonjs' }]],
    },
  },
};

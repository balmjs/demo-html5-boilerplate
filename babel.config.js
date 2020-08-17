module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: { version: 3, proposals: true },
      },
    ],
  ],
  plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
};

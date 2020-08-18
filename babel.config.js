module.exports = function (api) {
  let envOptions = api.env('production')
    ? {
        useBuiltIns: 'entry',
        corejs: { version: 3, proposals: true }
      }
    : {};
  let runtimeOptions = api.env('production') ? { corejs: 3 } : {};

  return {
    presets: [['@babel/preset-env', envOptions]],
    plugins: [['@babel/plugin-transform-runtime', runtimeOptions]]
  };
};

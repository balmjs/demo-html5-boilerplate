const path = require('path');

module.exports = {
  roots: {
    source: 'app'
  },
  scripts: {
    entry: {
      polyfill: './app/scripts/polyfill.js',
      main: './app/scripts/main.js'
    },
    alias: {
      '@': path.resolve(__dirname, 'app/scripts')
    }
  }
};

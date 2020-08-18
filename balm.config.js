const path = require('path');

module.exports = {
  roots: {
    source: 'app'
  },
  scripts: {
    entry: {
      lib: ['jquery'],
      main: './app/scripts/main.js'
    },
    alias: {
      '@': path.resolve(__dirname, 'app/scripts')
    }
  }
};

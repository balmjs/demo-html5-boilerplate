const path = require('path');

module.exports = {
  roots: {
    source: 'app'
  },
  scripts: {
    entry: {
      main: './app/scripts/main.js'
    },
    alias: {
      '@': path.resolve(__dirname, 'app/scripts')
    }
  }
};

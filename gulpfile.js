const balm = require('balm');

balm.config = {
  roots: {
    source: 'app'
  },
  scripts: {
    entry: {
      lib: ['jquery'],
      main: './app/scripts/main.js'
    }
  }
};

balm.go();

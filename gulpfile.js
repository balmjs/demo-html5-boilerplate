var balm = require('balm');

balm.config = {
  static: true,
  roots: {
    app: 'app'
  },
  paths: {
    app: {
      css: '/css',
      js: '/js',
      img: '/img'
    }
  },
  scripts: {
    entry: {
      'home': './app/js/home.js',
      'about': './app/js/about.js'
    }
  }
};

balm.go();

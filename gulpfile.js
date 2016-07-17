var balm = require('balm');

balm.config = {
  static: true,
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'css',
      js: 'js',
      img: 'img'
    }
  },
  scripts: {
    entry: {
      common : ['jquery'],
      home: './app/js/home.js',
      about: './app/js/about.js'
    },
    vendors: ['common']
  },
  sprites: {
    image: ['icon']
  }
};

balm.go();

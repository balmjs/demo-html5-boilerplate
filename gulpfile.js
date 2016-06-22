var balm = require('balm');

balm.config = {
  // cache: true,
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
      'home': './app/js/home.js',
      'about': './app/js/about.js'
    }
  },
  sprites: {
    imgList: ['icon']
  }
};

balm.go();

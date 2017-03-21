var balm = require('balm');

balm.config = {
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'css',
      js: 'js',
      img: 'images'
    }
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: {
      home: './app/js/home',
      about: './app/js/about'
    }
  }
};

balm.go();

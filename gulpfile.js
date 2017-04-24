var balm = require('balm');

balm.config = {
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts',
      img: 'images'
    }
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: {
      home: './app/scripts/home',
      about: './app/scripts/about'
    }
  }
};

balm.go();

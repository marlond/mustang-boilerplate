'use strict';

export let paths = {

  source : {
    fonts  : [
      'app/fonts/**',
      'bower_components/bootstrap-sass/**',
      'bower_components/font-awesome/**'
    ],
    img    : './app/images/**',
    index  : './app/index.pug',
    jade   : './app/**/*.pug',
    js     : './app/scripts/*.js',
    sass   : './app/styles/**/*.scss'
  },

  build  : {
    css    : 'dist/styles/',
    fonts  : 'dist/fonts/',
    html   : 'dist/',
    img    : 'dist/images/',
    js     : 'dist/scripts/',
    root   : 'dist/**/*'
  },

  server : {
    css    : '.tmp/styles/',
    fonts  : '.tmp/fonts/',
    html   : '.tmp/',
    img    : '.tmp/images/',
    index  : '.tmp/index.html',
    js     : '.tmp/scripts/'
  }

};

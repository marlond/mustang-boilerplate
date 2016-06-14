'use strict';

// Import all dependencies
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {create as bsCreate} from 'browser-sync';
import {config} from '../config';
import {paths} from '../paths';

// Constants
const $ = gulpLoadPlugins({
  rename: {
    'gulp-connect-php': 'connect'
  }
});

const browserSync = bsCreate();
const reload = browserSync.reload;

// Connect Sync
gulp.task('connect:sync', () => {
  $.connect.server({
    port: config.connect.port,
    base: '.tmp',
    livereload: true
  }, () => {
    browserSync.init({
      proxy: config.connect.localhost+':'+config.connect.port,
      serveStatic: [
        './app',
        './bower_components'
      ]
    });
  });

  gulp.watch('app/**/*.php').on('change', reload);

  // gulp.watch(paths.source.jade, ['views']);
});

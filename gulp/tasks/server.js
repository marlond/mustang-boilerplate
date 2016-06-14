'use strict';

// Import all dependencies
import gulp from 'gulp';
import runSequence from 'run-sequence';
import {create as bsCreate} from 'browser-sync';
import {paths} from '../paths';

// Constants
const browserSync = bsCreate();
const reload = browserSync.reload;

// Serve
gulp.task('serve', () => {
  runSequence([
    'views',
    'styles',
    'fonts:tmp'
  ]);

  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/*.html',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch(paths.source.jade, ['views']);
  gulp.watch(paths.source.sass, ['styles']);
  gulp.watch(paths.source.fonts, ['fonts:tmp']);
  gulp.watch('bower.json', ['wiredep', 'fonts:tmp']);
});

// Serve: Dist
gulp.task('serve:dist', () => {
  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: 'dist'
    }
  });
});

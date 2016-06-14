'use strict';

// Import all dependencies
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import {paths} from '../paths';

// Constants
const $ = gulpLoadPlugins();

// Build
gulp.task('build', () => {
  runSequence([
    'html',
    'images',
    'extras',
    'fonts'
  ]);
});

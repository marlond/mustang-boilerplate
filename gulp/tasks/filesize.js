'use strict';

// Import all dependencies
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import {paths} from '../paths';

// Constants
const $ = gulpLoadPlugins();

// Filesize: Build
gulp.task('filesize', () => {
  return gulp.src(paths.build.root)
    .pipe(gulp.dest(paths.build.html))
    .pipe($.size({
      title: 'build',
      gzip: true
    }));
});

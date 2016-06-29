'use strict';

// Import all dependencies
import browserSync from 'browser-sync';
import del from 'del';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import requireDir from 'require-dir';
import {paths} from '../paths';
import {stream as wiredep} from 'wiredep';

// Constants
const $ = gulpLoadPlugins();

// Styles
gulp.task('styles', () => {
  return gulp.src(paths.source.sass)
    .pipe($.plumber({
      errorHandler: (error) => {
        console.log(error.message);
        this.emit('end');
      }
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(paths.server.css))
    .pipe(browserSync.stream());
});

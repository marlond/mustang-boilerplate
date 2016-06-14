'use strict';

// Import all dependencies
import del from 'del';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {paths} from '../paths';

// Constants
const $ = gulpLoadPlugins();

// Extras
gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html',
    '!app/*.pug'
  ], {
    dot: true
  })
    .pipe(gulp.dest('dist'));
});

// Fonts: Build
gulp.task('fonts', () => {
  return gulp.src(paths.source.fonts)
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(paths.build.fonts));
});

// Fonts: Temp
gulp.task('fonts:tmp', () => {
  return gulp.src(paths.source.fonts)
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(paths.server.fonts));
});

// Clean
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

'use strict';

// Import all dependencies
import browserSync from 'browser-sync';
import critical from 'critical';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {paths} from '../paths';
import {stream as wiredep} from 'wiredep';

// Constants
const $ = gulpLoadPlugins({
  rename: {
    'gulp-clean-css': 'cleancss'
  }
});

const dimensions = [{
  width: 320,
  height: 480
}, {
  width: 768,
  height: 1024
}, {
  width: 1280,
  height: 960
}];

// HTML
gulp.task('html', ['views', 'styles'], () => {
  const assets = $.useref({
    searchPath: ['.tmp', 'app', '.']
  });

  return gulp.src(['app/*.html', '.tmp/*.html'])
    .pipe($.plumber({
      errorHandler: (error) => {
        console.log(error.message);
        this.emit('end');
      }
    }))
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cleancss({
      compatibility: '*'
    })))
    .pipe($.if('*.js', $.rev()))
    .pipe($.if('*.css', $.rev()))
    .pipe($.revReplace())
    .pipe($.if('*.html', $.htmlmin({
      collapseWhitespace: true
    })))
    .pipe(gulp.dest(paths.build.html));
});

// Views
gulp.task('views', () => {
  return gulp.src('app/*.pug')
    .pipe($.plumber({
      errorHandler: (error) => {
        console.log(error.message);
        this.emit('end');
      }
    }))
    .pipe($.data((file) => {
      return require('../../_data.json');
    }))
    .pipe($.pug({
      pretty: true
    }))
    .pipe(gulp.dest(paths.server.html))
    .pipe(browserSync.reload({stream:true}));
});

// inject bower components
gulp.task('wiredep', () => {
  // Sass
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  // Jade
  gulp.src('app/layouts/*.pug')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

// Gerenate critical path
gulp.task('critical', () => {
  critical.generate({
    minify: true,
    inline: true,
    base: 'dist',
    extract: true,
    src: 'index.html',
    dimensions: dimensions,
    dest: 'dist/index.html',
    ignore: ['@font-face', /url\(/]
  });
});

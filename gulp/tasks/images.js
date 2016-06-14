'use strict';

// Import all dependencies
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {paths} from '../paths';

// Constants
const $ = gulpLoadPlugins();

// Images
gulp.task('images', () => {
  return gulp.src(paths.source.img)
    .pipe($.filter('**/*.{jpg,png,gif,svg}'))
    .pipe($.cache(
      $.imagemin({
        optimizationLevel: 7,
        progressive: true,
        interlaced: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [
          $.imagemin.gifsicle(),
          $.imagemin.jpegtran(),
          $.imagemin.optipng(),
          $.imagemin.svgo()
        ]
      })
    ))
    .pipe(gulp.dest(paths.build.img));
});

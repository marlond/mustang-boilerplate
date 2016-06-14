'use strict';

// Import all dependencies
import gulp from 'gulp';

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

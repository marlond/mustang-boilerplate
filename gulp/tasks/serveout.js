'use strict';

// Import all dependencies
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import ngrok from 'ngrok';
import psi from 'psi';

// Constants
const $ = gulpLoadPlugins();
const log = $.util.log;
const colors = $.util.colors;
const key = '';

// ServeOut
gulp.task('serveout', () => {
  return ngrok.connect(9000, (err, url) => {
    log(colors.cyan('ngrok'), '- serving your site from', colors.yellow(url));

    // Please feel free to use the `nokey` option to try out PageSpeed
    // Insights as part of your build process. For more frequent use,
    // we recommend registering for your own API key. For more info:
    // https://developers.google.com/speed/docs/insights/v2/getting-started

    // output a formatted report to the terminal
    psi.output(url, {
      nokey: 'true',
      // key: key,
      strategy: 'desktop' //mobile
    }).then(() => {
      console.log('done');
    });
  });
});

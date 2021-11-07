'use strict';

import { paths } from '../gulpfile.babel';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import gulp from 'gulp';
import browsersync from 'browser-sync';
import debug from 'gulp-debug';
import yargs from 'yargs';

const webpackConfig = require('../webpack.config.js'),
  argv = yargs.argv,
  production = !!argv.production;

webpackConfig.mode = production ? 'production' : 'development';
webpackConfig.devtool = production ? false : 'source-map';

gulp.task('scripts', () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest(paths.scripts.dist))
    .pipe(
      debug({
        title: 'JS files',
      }),
    )
    .on('end', browsersync.reload);
});

gulp.task('copyjs', () => {
  return gulp.src(paths.copyjs.src)
  .pipe(gulp.dest(paths.copyjs.dist));
});
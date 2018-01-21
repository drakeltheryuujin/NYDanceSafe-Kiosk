'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();
var webpack = require('webpack');
var env = require('./environment');
var mode = process.env.NODE_ENV || env.DEVELOPMENT;
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require(`../webpack.config.${mode}`);
var compiler = webpack(config);
/*
 Including Gulp and plugins
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');
var beautify = require('gulp-jsbeautifier');
var nano = require('gulp-cssnano');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var mqpacker = require('css-mqpacker');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

/*
 Directory variables
 */
var sassSrcDir = './src/sass/';
var jadeSrcDir = './src/jade/';
var assetsDir = './assets/';
var compiledStylesDir = assetsDir + 'css/';
var libsDir = './libs/';

/*
 Compiling sass, using sourcemaps
 */
gulp.task('sass', function () {
    gulp.src([
        sassSrcDir + 'react.scss',
        sassSrcDir + 'linea/linea.scss'
    ])
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(compiledStylesDir));
});

/*
 Creating a styles build file consisted of all files specified in gulp.src
 */
gulp.task('build:css', function () {
    return gulp.src([
        libsDir + 'materialize/materialize.min.css',
        libsDir + 'owl/owl.carousel.css',
        compiledStylesDir + 'linea.css',
        compiledStylesDir + 'react.css'
    ])
        .pipe(concat('build.css'))
        .pipe(postcss([mqpacker]))
        .pipe(nano({
            safe: true
        }))
        .pipe(rename('build.min.css'))
        .pipe(gulp.dest(assetsDir + 'build'));
});

/*
 Building compile jade, beautifying the output
 */
gulp.task('jade', function () {
    gulp.src(
        [
            jadeSrcDir + 'ring-green.jade',
            jadeSrcDir + 'ring-blue.jade',
            jadeSrcDir + 'tunnel.jade',
            jadeSrcDir + 'waves-light-blue.jade',
            jadeSrcDir + 'waves-deep-purple.jade',
            jadeSrcDir + 'fuzzy-hue.jade',
            jadeSrcDir + 'fuzzy-saturation.jade',
            jadeSrcDir + 'combustion-purple.jade',
            jadeSrcDir + 'combustion-yellow.jade'
        ]
    )
        .pipe(jade())
        .pipe(beautify({
            html: {
                indent_char: ' ',
                indent_size: 4,
                selector_separator_newline: true,
                preserveNewlines: false,
                indent_inner_html: true,
                unformatted: ['span'],
                extra_liners: ['section', 'footer'],
                wrap_line_length: 0
            }
        }))
        .pipe(gulp.dest('./'));
});

/*
 Watching src files changes and running appropriate commands to compile them
 */
gulp.task('watch', function () {
    gulp.watch([
        sassSrcDir + '*.scss',
        sassSrcDir + 'skins/*.scss'
    ], ['sass']);
    gulp.watch([
        jadeSrcDir + '*.jade',
        jadeSrcDir + '**/*.jade'
    ], ['jade']);
});

/*
 Creating a JavaScript build consisted of all the files specified in gulp.src
 */
gulp.task('build:scripts', function () {
    return gulp.src([
        libsDir + 'jquery-2.1.1.min.js',
        libsDir + 'materialize/materialize.min.js',
        libsDir + 'masonry/masonry.pkgd.min.js',
        libsDir + 'owl/owl.carousel.min.js',
        libsDir + 'ajaxchimp/jquery.ajaxchimp.min.js',
        assetsDir + 'config/config.js',
        assetsDir + 'js/app.js'
    ])
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(assetsDir + 'build'));
});

/*
 Creating minified versions of skin specific scripts, placed in assets/js/skins/min/ dir
 */
gulp.task('minify-skin-scripts', function () {
    return gulp.src(assetsDir + 'js/skins/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(assetsDir + 'js/skins/min'));
});

/*
 Optimising the images
 */
gulp.task('imagemin', function () {
    return gulp.src('./assets/images/**/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./assets/images'));
});

if(mode === env.DEVELOPMENT) {
    // only need in development
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));  
}
app.use(webpackHotMiddleware(compiler));

boot(app, __dirname);

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

if (require.main === module) {
  app.start();
}

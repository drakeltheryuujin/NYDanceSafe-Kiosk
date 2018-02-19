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
var explorer = require('loopback-component-explorer');

// if(mode === env.DEVELOPMENT) {
    // // only need in development
    // app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
// }
// app.use(webpackHotMiddleware(compiler));

// boot(app, __dirname);

// app.start = function() {
  // // start the web server
  // return app.listen(function() {
    // app.emit('started');
    // var baseUrl = app.get('url').replace(/\/$/, '');
    // console.log('Web server listening at: %s', baseUrl);
    // if (app.get('loopback-component-explorer')) {
      // var explorerPath = app.get('loopback-component-explorer').mountPath;
      // console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    // }
  // });
// };

// if (require.main === module) {
  // app.start();
// }

app.use('/api', loopback.rest());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
    console.log('Explorer mounted at : %s', app.get('url') + 'explorer');
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // Register explorer using component-centric API:
  explorer(app, { basePath: '/api', mountPath: '/explorer' });

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");
var compiler = Webpack(config);

var bundler = new WebpackDevServer(compiler);

// Create Port
const PORT = process.env.PORT || 8080;

// Creating Web Server
bundler.listen(PORT, function () {
  console.log('Bundling project, Web Server Starting at Port ' + PORT);
});

var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var devConfig = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },

  devServer: {
    contentBase: './build',
    historyApiFallback: true,
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/config/build.config.js',
        to: 'build/config/config.js'
      },
    ])
  ]
 };

module.exports = devConfig;

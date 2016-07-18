var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
     entry: './src/app.js',
     output: {
         path: './build',
         filename: 'app.bundle.js'
     },

     plugins: [
        new CopyWebpackPlugin([
            {
              from: 'src/config/dev.config.js',
              to: 'config/config.js'
            },
        ])
      ]
 };

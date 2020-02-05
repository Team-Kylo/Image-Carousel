const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|js|jsx)$/,
        exclude: /node_modules/,
        resolve: { extensions: ['.js', '.jsx'] },
        use: {
          loader: 'babel-loader', 'file-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', {'plugins': ["babel-plugin-styled-components", "@babel/plugin-proposal-class-properties", "@babel/plugin-transform-modules-commonjs" ]}]
          }
        }
      }
    ]
  },
  watch: true
}
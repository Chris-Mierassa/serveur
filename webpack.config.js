const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/scripts/index.js',
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.(scss|css)$/,
            use: [ MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
          },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
      },
  };
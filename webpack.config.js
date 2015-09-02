var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './Main.js',
    html: './index.html'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  devServer: {
    port: 3000,
    colors: true,
    noInfo: true,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};

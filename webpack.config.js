module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.sass$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader', options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader', options: {
          sourceMap: true
        }
      }]
    }]
  }
};
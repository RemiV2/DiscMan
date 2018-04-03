module.exports = {
  entry: './js/app.js',
  output: {
    devtoolLineToLine: true,
    pathinfo: true,
    sourceMapFilename: "./bundle.js.map",
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: 'url-loader'
      }, {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  target: "electron-main"
};
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
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ]
      }
    ]
  },
  target: "electron-main"
};
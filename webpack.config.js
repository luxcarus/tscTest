var webpack = require("webpack")
var path = require("path")
var SRC = path.resolve(__dirname, 'src') 
module.exports = {
  // entry: SRC + "/index",
  // output: {
  //   filename: SRC + "/bundle.js"
  // },
  entry: {
    "dist/Cat":"./src/Cat.ts",
    "dist/Dog":"./src/Dog.ts"
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: "[name].js"
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'dist/vendor',
    })
  ]
}
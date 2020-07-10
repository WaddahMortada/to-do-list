const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  context: path.resolve('src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        loader: ['babel-loader'] // 'eslint-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' })
  ]
}

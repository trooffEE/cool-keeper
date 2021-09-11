const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const resolvePath = (p) => resolve(__dirname, p)

const config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [join(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': resolvePath('./src'),
      '@components': resolvePath('./src/components'),
      '@assets': resolvePath('./src/assets'),
      '@services': resolvePath('./src/services'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { 
            loader: 'eslint-loader',
            options: {
              cache: true,
            },
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ]
}

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    port: 8080,
    compress: true,
  };
}

module.exports = config
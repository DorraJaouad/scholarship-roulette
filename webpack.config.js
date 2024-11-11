import path from 'path';
import { fileURLToPath } from 'url';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/scholarship-roulette/',
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Matches image file extensions
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]', // Keep original name and hash the file
            outputPath: 'assets/images', // Directory within `dist` to store images
          },
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

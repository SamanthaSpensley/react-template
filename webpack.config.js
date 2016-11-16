// takes jsx and converts it to something readable in the browser
// taking all jsx files and outputing ONE file (bundle.js)

module.exports = {
  entry: './src/client.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

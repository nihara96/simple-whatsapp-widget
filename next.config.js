const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.module.rules.push(
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    );
    return config;
  },
};

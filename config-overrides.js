// @flow
const path = require('path');

module.exports = function override(config, env) {
  // Add alias for src directory
  config.resolve.alias = {
    ...config.resolve.alias,
    'src': path.resolve(__dirname, 'src'),
    'shared': path.resolve(__dirname, 'shared'),
  };

  return config;
};
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const extraNodeModules = require('node-libs-browser');

const here = __dirname;

module.exports = {
  resolver: {
    extraNodeModules: {
      $assets: path.resolve(here, './assets'),
      '$business-layer': path.resolve(here, 'src/business-layer'),
      $components: path.resolve(here, 'src/shared/components'),
      $constants: path.resolve(here, 'src/shared/constants'),
      $screens: path.resolve(here, 'src/screens'),
      $services: path.resolve(here, 'src/services'),
      $theme: path.resolve(here, 'src/shared/theme'),
      $utils: path.resolve(here, 'src/shared/utils'),
      $web3: path.resolve(here, 'src/web3'),
      $widgets: path.resolve(here, 'src/shared/widgets'),
      ...extraNodeModules,
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

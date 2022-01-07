/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const here = __dirname;

module.exports = {
  resolver: {
    extraNodeModules: {
      $assets: path.resolve(here, 'src/shared/assets'),
      '$business-layer': path.resolve(here, 'src/business-layer'),
      $components: path.resolve(here, 'src/shared/components'),
      $screens: path.resolve(here, 'src/screens'),
      $services: path.resolve(here, 'src/services'),
      $utils: path.resolve(here, 'src/shared/utils'),
      $widgets: path.resolve(here, 'src/shared/widgets'),
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

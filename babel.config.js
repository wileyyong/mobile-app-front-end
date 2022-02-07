// eslint-disable-next-line func-names
module.exports = function(api) {
  api.cache(true);

  return {
    plugins: [
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    ],
  };
};

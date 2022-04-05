module.exports = {
  extends: '@react-native-community',
  globals: {
    __DEV__: false,
    fetch: false,
    window: true,
  },
  rules: {
    'no-undef': 'off',
  },
  settings: {
    'import/core-modules': [
      '$auth',
      '$assets',
      '$business-layer',
      '$components',
      '$constants',
      '$screens',
      '$services',
      '$theme',
      '$utils',
      '$web3',
      '$widgets',
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

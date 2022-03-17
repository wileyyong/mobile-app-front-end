module.exports = {
  extends: [
    '@react-native-community',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
  ],
  globals: {
    __DEV__: false,
    fetch: false,
    window: true,
  },
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': 0,
    'no-shadow': 'off',
    'import/export': 'off',
    'import/named': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'warn',
    'no-use-before-define': ['error', 'nofunc'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'class',
      },
      {
        blankLine: 'always',
        prev: 'class',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'multiline-block-like',
      },
      {
        blankLine: 'always',
        prev: 'multiline-expression',
        next: '*',
      },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'prefer-destructuring': 'off',
    'react/destructuring-assignment': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
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

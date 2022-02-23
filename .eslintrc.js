module.exports = {
  extends: ['airbnb', 'plugin:jest/recommended', 'prettier', 'prettier/react'],
  globals: {
    __DEV__: false,
    fetch: false,
  },
  parser: 'babel-eslint',
  rules: {
    "linebreak-style": 0,
    "no-shadow": "off",
    'import/export': 'off',
    'import/named': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: [
          '^\\$assets',
          '^\\$auth',
          '^\\$business-layer',
          '^\\$components',
          '^\\$constants',
          '^\\$theme',
          '^\\$screens',
          '^\\$services',
          '^\\$utils',
          '^\\$web3',
          '^\\$widgets',
        ],
      },
    ],
    'import/order': ['error', { 'newlines-between': 'always' }],
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
        order: ['static-methods', 'instance-variables', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.ts', '.tsx', '.jsx'] }],
    'react/jsx-sort-props': ['error', { callbacksLast: true }],
    'sort-keys': ['error', 'asc', { caseSensitive: true }],
    'sort-vars': 'error',
  },
  settings: {
    'import/core-modules': [
      '$auth',
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

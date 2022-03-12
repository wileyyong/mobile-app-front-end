module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        allowUndefined: true,
        blacklist: null,
        moduleName: '@env',
        path: '.env',
        safe: false,
        whitelist: null,
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};

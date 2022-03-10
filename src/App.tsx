import { Toast } from '$components';
import { Web3Provider } from '$web3';
import { AuthProvider } from '$auth';

import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StatusBar, Platform, Text, TextInput } from 'react-native';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import NavigationRoot from './navigation';
import { EN, FR } from './locales';
import { Provider } from 'react-redux';
import store from './redux/index';
// This langaugeDetector object was created for testing purposes, just to change the
// return of the detect function and check the countried translation
const languageDetector = {
  async: true,
  cacheUserLanguage: () => {},
  detect: (cb) => cb('en'),
  init: () => {},
  type: 'languageDetector',
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: EN,
      },
      fr: {
        translation: FR,
      },
    },
  });

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

export default function App() {
  return (
    <Web3Provider network="mainnet">
      <WalletConnectProvider
        // eslint-disable-next-line no-undef
        redirectUrl={Platform.OS === 'web' ? window.location.origin : 'yourappscheme://'}
        storageOptions={{
          asyncStorage: AsyncStorage,
        }}
      >
        <AuthProvider>
          <Provider store={store}>
            <NavigationRoot />
            <StatusBar backgroundColor="transparent" translucent />
            <Toast />
          </Provider>
        </AuthProvider>
      </WalletConnectProvider>
    </Web3Provider>
  );
}

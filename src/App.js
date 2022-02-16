import { Toast } from '$components';
import { Web3Provider } from '$web3';
import { AuthProvider } from '$auth';

import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Platform } from 'react-native';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import NavigationRoot from './navigation';
import EN from './locales/en/translation.json';
import FR from './locales/fr/translation.json';

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
    fallbackLng: 'fr',
    resources: {
      en: {
        translation: EN,
      },
      fr: {
        translation: FR,
      },
    },
  });

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
          <NavigationRoot />
          <StatusBar backgroundColor="transparent" translucent />
          <Toast />
        </AuthProvider>
      </WalletConnectProvider>
    </Web3Provider>
  );
}

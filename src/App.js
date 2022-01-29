import { Toast } from '$components';
import { Web3Provider } from '$web3';

import React from 'react';
import { StatusBar } from 'react-native';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

import NavigationRoot from './navigation';
import EN from './locales/en/translation.json';
import FR from './locales/fr/translation.json';

// This langaugeDetector object was created for testing purposes, just to change the
// return of the detect function and check the countried translation
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'fr',
    debug: true,
    resources: {
      en: {
        translation: EN,
      },
      fr: {
        translation: FR,
      },
    },
  });

// The entry point of the app. We can add any providers here.
export default function App() {
  return (
    <Web3Provider network="mainnet">
      <NavigationRoot />
      <StatusBar backgroundColor="transparent" translucent />
      <Toast />
    </Web3Provider>
  );
}

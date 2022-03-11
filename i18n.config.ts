import i18n, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { EN, FR } from './src/locales';

const resources = {
  en: {
    translation: EN,
  },
  fr: {
    translation: FR,
  },
};

use(initReactI18next).init({
  compatibilityJSON: 'v3',
  debug: true,
  resources,
  // language to use if translations in user language are not available
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;

import { ASYNC_STORAGE_CURRENT_LANGUAGE_KEY } from '$constants';

import AsyncStorage from '@react-native-async-storage/async-storage';

// This languageDetector object was created for testing purposes, just to change the
// return of the detect function and check the countried translation
export const languageDetector = {
  async: true,
  async cacheUserLanguage(language: string) {
    try {
      // save a user's language choice in Async storage
      await AsyncStorage.setItem(ASYNC_STORAGE_CURRENT_LANGUAGE_KEY, language);
    } catch (error) {
      throw new Error('Error saving language');
    }
  },
  async detect(callback: (lang: string) => void) {
    try {
      // get stored language from Async storage
      await AsyncStorage.getItem(ASYNC_STORAGE_CURRENT_LANGUAGE_KEY).then(
        language => {
          if (language) {
            // if language was stored before, use this language in the app
            return callback(language);
          }

          // if language was not stored yet, use device's locale
          return callback('en');
        },
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error reading language', error);
    }
  },

  init: () => {},
  type: 'languageDetector',
};

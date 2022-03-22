import crashlytics from '@react-native-firebase/crashlytics';

export const firebaseCrashlytics = {
  async logError(message: string) {
    crashlytics().recordError(new Error(message));
  },
  async logMessage(message: string) {
    crashlytics().log(message);
  },
};

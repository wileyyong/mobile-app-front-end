import '../i18n.config';
import { Web3Provider } from '$web3';
import { Toast } from '$components';
import { AuthProvider } from '$auth';

import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';

import { StatusBar, Platform, Text, TextInput, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import * as Sentry from "@sentry/react-native";
import NavigationRoot from './navigation';
import { persistor, store } from 'src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {
  firebaseCrashlytics,
  firebaseMessaging,
} from './shared/utils/firebase'; 
import { SENTRY_ENV } from '@env';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

LogBox.ignoreAllLogs(true); // disable warnings

Sentry.init({
  dsn: 'https://ad215435f14c429eab4f0ad3a8d97af3@o1313935.ingest.sentry.io/6564685',
  tracesSampleRate: 1.0,
  environment: SENTRY_ENV
});

export default function App() {
  useEffect(() => {
    firebaseMessaging.requestUserPermission();
    firebaseMessaging.onNotificationOpenedApp();
    firebaseMessaging.subscribeOnMessage();
    Sentry.captureMessage("App Initialised");
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Web3Provider network="mainnet">
            <WalletConnectProvider
              // @ts-ignore
              redirectUrl={
                Platform.OS === 'web'
                  ? window.location.origin
                  : 'pozzleplanet://'
              }
              storageOptions={{
                // @ts-ignore
                asyncStorage: AsyncStorage,
              }}>
              <AuthProvider>
                <SafeAreaProvider>
                  <NavigationRoot />
                  <StatusBar backgroundColor="transparent" translucent />
                  <Toast />
                </SafeAreaProvider>
              </AuthProvider>
            </WalletConnectProvider>
          </Web3Provider>
        </PersistGate>
      </Provider>
    </>
  );
}

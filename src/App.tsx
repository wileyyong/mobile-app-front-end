import '../i18n.config';
import { Web3Provider } from './web3';
import { Toast } from './shared/components';
import { AuthProvider } from './auth';

import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StatusBar, Platform, Text, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NavigationRoot from './navigation';
import { Provider } from 'react-redux';
import { persistor, store } from 'src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Web3Provider network="mainnet">
            <WalletConnectProvider
              // @ts-ignore
              redirectUrl={
                Platform.OS === 'web'
                  ? window.location.origin
                  : 'yourappscheme://'
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

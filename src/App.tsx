import '../i18n.config';
import { Toast } from '$components';
import { Web3Provider } from '$web3';
import { AuthProvider } from '$auth';

import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NavigationRoot from './navigation';
import { Provider } from 'react-redux';
import store from 'redux';

export default function App() {
  return (
    <Web3Provider network="mainnet">
      <WalletConnectProvider
        // @ts-ignore
        redirectUrl={Platform.OS === 'web' ? window.location.origin : 'yourappscheme://'}
        storageOptions={{
          // @ts-ignore
          asyncStorage: AsyncStorage,
        }}
      >
        <AuthProvider>
          <SafeAreaProvider>
            <Provider store={store}>
              <NavigationRoot />
              <StatusBar backgroundColor="transparent" translucent />
              <Toast />
            </Provider>
          </SafeAreaProvider>
        </AuthProvider>
      </WalletConnectProvider>
    </Web3Provider>
  );
}

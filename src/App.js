import { Toast } from '$components';
import { Web3Provider } from '$web3';

import React from 'react';
import { StatusBar } from 'react-native';

import NavigationRoot from './navigation';

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

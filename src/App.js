import { Toast } from '$components';

import React from 'react';
import { StatusBar } from 'react-native';

import NavigationRoot from './navigation';

// The entry point of the app. We can add any providers here.
export default function App() {
  return (
    <>
      <NavigationRoot />
      <StatusBar backgroundColor="transparent" translucent />
      <Toast />
    </>
  );
}

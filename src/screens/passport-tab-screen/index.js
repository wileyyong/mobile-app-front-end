import { PlanetScreen } from '$screens';
import { PASSPORT_INFO, PASSPORT_SCREEN } from '$constants';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PassportInfo from './passport-info';

const Stack = createNativeStackNavigator();

/**
 *
 *
 */
function PassportTabScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={PlanetScreen} name={PASSPORT_SCREEN} />
      <Stack.Screen component={PassportInfo} name={PASSPORT_INFO} />
    </Stack.Navigator>
  );
}

export default PassportTabScreen;

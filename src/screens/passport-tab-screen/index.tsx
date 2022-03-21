import { PASSPORT_INFO } from '$constants';

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
      <Stack.Screen component={PassportInfo} name={PASSPORT_INFO} />
    </Stack.Navigator>
  );
}

export default PassportTabScreen;

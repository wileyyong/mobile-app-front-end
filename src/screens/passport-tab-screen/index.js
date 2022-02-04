import { PassportScreen } from '$screens';
import { PASSPORT_SCREEN } from '$constants';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/**
 *
 *
 */
function PassportTabScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={PassportScreen} name={PASSPORT_SCREEN} />
    </Stack.Navigator>
  );
}

export default PassportTabScreen;

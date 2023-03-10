import { EXPLORER_SCREEN } from '$constants';
import { ExplorerScreen } from '$screens';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/**
 *
 *
 */
function ExplorerTabScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={ExplorerScreen} name={EXPLORER_SCREEN} />
    </Stack.Navigator>
  );
}

export default ExplorerTabScreen;

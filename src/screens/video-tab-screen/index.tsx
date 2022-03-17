import { POZZLE_ACTIVITY_SCREEN } from '$constants';
import { VideoScreen } from '$screens';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/**
 *
 *
 */
function PozzleVideoTabScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={VideoScreen} name={POZZLE_ACTIVITY_SCREEN} />
    </Stack.Navigator>
  );
}

export default PozzleVideoTabScreen;

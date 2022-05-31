import { POZZLE_ACTIVITY_SCREEN } from '$constants';
import { PozzleActivityScreen } from '$screens';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { verbsItems } from '../pozzle-activity/activity-selection/utils';

const Stack = createNativeStackNavigator();

/**
 *
 *
 */
function PozzleActivityTabScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={PozzleActivityScreen}
        name={POZZLE_ACTIVITY_SCREEN}
        initialParams={{}}
      />
    </Stack.Navigator>
  );
}

export default PozzleActivityTabScreen;

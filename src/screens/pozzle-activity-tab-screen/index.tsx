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
function PozzleActivityTabScreen({ route }) {
  console.log(' PozzleActivityTabScreen route.params', route.params);
  console.log(
    'route && route.params ',
    route != undefined && route.params != undefined ? route.params : {},
  );
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={PozzleActivityScreen}
        name={POZZLE_ACTIVITY_SCREEN}
        initialParams={
          route != undefined && route.params != undefined ? route.params : {}
        }
      />
    </Stack.Navigator>
  );
}

export default PozzleActivityTabScreen;

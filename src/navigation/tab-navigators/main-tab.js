import { EXPLORER_SCREEN, PASSPORT_SCREEN, POZZLE_ACTIVITY_SCREEN } from '$constants';
import { MainTabs } from '$widgets';

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ExplorerScreen, PassportScreen, PozzleActivityScreen } from '$screens';

const Tab = createMaterialTopTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={EXPLORER_SCREEN}
      tabBar={(props) => <MainTabs {...props} />}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        component={PozzleActivityScreen}
        name={POZZLE_ACTIVITY_SCREEN}
        options={{ tabBarLabel: 'Record' }}
      />
      <Tab.Screen
        component={ExplorerScreen}
        name={EXPLORER_SCREEN}
        options={{ tabBarLabel: 'Discover' }}
      />
      <Tab.Screen
        component={PassportScreen}
        name={PASSPORT_SCREEN}
        options={{ tabBarLabel: 'Tokens & Planets' }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

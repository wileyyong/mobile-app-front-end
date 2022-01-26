import { MainTabs } from '$components';

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ExplorerScreen, PassportScreen, PozzleActivityScreen } from '$screens';

const Tab = createMaterialTopTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Explorer"
      tabBar={(props) => <MainTabs {...props} />}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        component={PozzleActivityScreen}
        name="PozzleActivity"
        options={{ tabBarLabel: 'Record' }}
      />
      <Tab.Screen
        component={ExplorerScreen}
        name="Explorer"
        options={{ tabBarLabel: 'Discover' }}
      />
      <Tab.Screen
        component={PassportScreen}
        name="Passport"
        options={{ tabBarLabel: 'Tokens & Planets' }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

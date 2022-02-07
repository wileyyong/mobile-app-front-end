import { EXPLORER_TAB_SCREEN, PASSPORT_TAB_SCREEN, POZZLE_ACTIVITY_TAB_SCREEN } from '$constants';
import { MainTabs } from '$widgets';
import { ExplorerTabScreen, PozzleActivityTabScreen, PassportTabScreen } from '$screens';

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={EXPLORER_TAB_SCREEN}
      tabBar={(props) => <MainTabs {...props} />}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        component={PozzleActivityTabScreen}
        name={POZZLE_ACTIVITY_TAB_SCREEN}
        options={{ tabBarLabel: 'Record' }}
      />
      <Tab.Screen
        component={ExplorerTabScreen}
        name={EXPLORER_TAB_SCREEN}
        options={{ tabBarLabel: 'Discover' }}
      />
      <Tab.Screen
        component={PassportTabScreen}
        name={PASSPORT_TAB_SCREEN}
        options={{ tabBarLabel: 'Tokens & Planets' }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

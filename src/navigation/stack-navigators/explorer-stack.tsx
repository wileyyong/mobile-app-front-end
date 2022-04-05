import { EARTH_SCREEN, PLANET_SCREEN, VIDEO_SCREEN } from '$constants';
import { EarthGlobeScreen, PlanetScreen, VideoScreen } from '$screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MainTabNavigator from '../tab-navigators/main-tab';

const Stack = createNativeStackNavigator();

const MainScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={MainTabNavigator}
        name="Home"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={EarthGlobeScreen}
        name={EARTH_SCREEN}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={PlanetScreen}
        name={PLANET_SCREEN}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={VideoScreen}
        name={VIDEO_SCREEN}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainScreenStack;

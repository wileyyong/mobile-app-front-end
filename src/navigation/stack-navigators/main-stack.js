import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  LandingScreen,
  VideoScreen,
  EarthScreen,
  ExplorerScreen,
  PlanetScreen,
  PozzleActivityScreen,
} from '$screens';

import OnboardingStackNavigator from './onboarding-stack';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen component={LandingScreen} name="Landing" />
      <MainStack.Group
        screenOptions={{
          presentation: 'fullScreenModal',
        }}
      >
        <MainStack.Screen component={VideoScreen} name="Video" />
        <MainStack.Screen component={PozzleActivityScreen} name="PozzleActivity" />
      </MainStack.Group>
      <MainStack.Screen component={EarthScreen} name="Earth" />
      <MainStack.Screen component={ExplorerScreen} name="Explorer" />
      <MainStack.Screen component={PlanetScreen} name="Planet" />
      <MainStack.Screen component={OnboardingStackNavigator} name="Onboarding" />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;

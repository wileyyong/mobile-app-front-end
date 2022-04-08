import {
  LOGIN_SCREEN,
  NEW_PASSPORT_SCREEN,
  ONBOARDING_LOADING_SCREEN,
  WELCOME_SCREEN,
} from '$constants';
import { WelcomeScreen, LoginScreen, NewPassportScreen } from '$screens';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingLoadingScreen from 'src/screens/onboarding/loading-page';

const OnboardingStack = createNativeStackNavigator();

const OnboardingStackNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <OnboardingStack.Screen component={WelcomeScreen} name={WELCOME_SCREEN} />
      <OnboardingStack.Screen component={LoginScreen} name={LOGIN_SCREEN} />
      <OnboardingStack.Screen
        component={NewPassportScreen}
        name={NEW_PASSPORT_SCREEN}
      />
      <OnboardingStack.Screen
        component={OnboardingLoadingScreen}
        name={ONBOARDING_LOADING_SCREEN}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingStackNavigator;

import { LOGIN_SCREEN, NEW_PASSPORT_SCREEN, WELCOME_SCREEN } from '$utils/constants';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WelcomeScreen, LoginScreen, NewPassportScreen } from '$screens';

const OnboardingStack = createNativeStackNavigator();

const OnboardingStackNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <OnboardingStack.Screen component={WelcomeScreen} name={WELCOME_SCREEN} />
      <OnboardingStack.Screen component={LoginScreen} name={LOGIN_SCREEN} />
      <OnboardingStack.Screen component={NewPassportScreen} name={NEW_PASSPORT_SCREEN} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingStackNavigator;

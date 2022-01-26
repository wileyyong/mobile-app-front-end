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
      <OnboardingStack.Screen component={WelcomeScreen} name="Welcome" />
      <OnboardingStack.Screen component={LoginScreen} name="Login" />
      <OnboardingStack.Screen component={NewPassportScreen} name="NewPassport" />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingStackNavigator;

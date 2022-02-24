import { useAuth } from '$auth';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import OnboardingStackNavigator from './stack-navigators/onboarding-stack';
import MainTabNavigator from './tab-navigators/main-tab';

export default function NavigationRoot() {
  const { isAuth } = useAuth();

  return (
    <NavigationContainer>
      {!isAuth ? <MainTabNavigator /> : <OnboardingStackNavigator />}
    </NavigationContainer>
  );
}

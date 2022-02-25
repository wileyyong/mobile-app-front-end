import { useAuth } from '$auth';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import OnboardingStackNavigator from './stack-navigators/onboarding-stack';
import MainScreenStack from './tab-navigators/main-tab';

export default function NavigationRoot() {
  const { isAuth } = useAuth();

  return (
    <NavigationContainer>
      {isAuth ? <MainScreenStack /> : <OnboardingStackNavigator />}
    </NavigationContainer>
  );
}

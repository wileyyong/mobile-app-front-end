import { useAuth } from '$auth';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  ExplorerStackNavigator,
  OnboardingStackNavigator,
} from './stack-navigators';

export default function NavigationRoot() {
  const { isAuth } = useAuth();

  return (
    <NavigationContainer>
      {isAuth ? <ExplorerStackNavigator /> : <OnboardingStackNavigator />}
    </NavigationContainer>
  );
}

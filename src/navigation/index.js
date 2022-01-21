import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import OnboardingStackNavigator from './stack-navigators/onboarding-stack';
import MainStackNavigator from './stack-navigators/main-stack';

export default function NavigationRoot() {
  const [isAuthorized] = useState(true);

  // If the user is logged in, show the main app stack, otherwise show the onboarding stack
  return (
    <NavigationContainer>
      {isAuthorized ? <MainStackNavigator /> : <OnboardingStackNavigator />}
    </NavigationContainer>
  );
}

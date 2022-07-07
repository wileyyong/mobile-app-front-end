import {
  NEW_PASSPORT_SCREEN,
  NAME_SCREEN,
  PICTURE_SCREEN,
  BIO_SCREEN,
  WELCOME_SCREEN,
  LOCATION_SCREEN,
  COMPLETED_ONBOARDING,
  SIGN_MESSAGE,
} from '$constants';
import {
  WelcomeScreen,
  NewPassportScreen,
  NameScreen,
  PictureScreen,
  BioScreen,
  LocationScreen,
  CompletedOnboarding,
  SignMessage,
} from '$screens';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const OnboardingStack = createNativeStackNavigator();

const OnboardingStackNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <OnboardingStack.Screen component={WelcomeScreen} name={WELCOME_SCREEN} />
      <OnboardingStack.Screen component={NameScreen} name={NAME_SCREEN} />
      <OnboardingStack.Screen component={PictureScreen} name={PICTURE_SCREEN} />
      <OnboardingStack.Screen component={BioScreen} name={BIO_SCREEN} />
      <OnboardingStack.Screen
        component={LocationScreen}
        name={LOCATION_SCREEN}
      />
      <OnboardingStack.Screen
        component={CompletedOnboarding}
        name={COMPLETED_ONBOARDING}
      />

      <OnboardingStack.Screen component={SignMessage} name={SIGN_MESSAGE} />
      <OnboardingStack.Screen
        component={NewPassportScreen}
        name={NEW_PASSPORT_SCREEN}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingStackNavigator;

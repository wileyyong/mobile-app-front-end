import React, { useEffect } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';

import {
  ExplorerStackNavigator,
  OnboardingStackNavigator,
} from './stack-navigators';
import { AppState } from 'src/redux/types';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NavigationRoot = () => {
  const user = useSelector((state: AppState) => state.user);
  const linking = {
    prefixes: ['pozzleplanet://'],
  };

  const Stacks = createNativeStackNavigator();

  return (
    <NavigationContainer linking={linking}>
      <Stacks.Navigator>
   
        <Stacks.Screen
          name="Explorer"
          component={ExplorerStackNavigator}
          options={{ headerShown: false }}
        />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;

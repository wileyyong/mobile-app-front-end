import { useAuth } from '$auth';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ExplorerStackNavigator, OnboardingStackNavigator } from './stack-navigators';

export interface INavigationProps {
  navigation?: {
    goBack: () => void;
    replace: (routeName: string, params: any) => void;
    push: (routeName: string, params?: any) => void;
    getParam: (paramName: string, defaultValue?: any) => any;
    navigate: (routeName: string, params?: any) => void;
    dispatch: (action: any) => void;
    state: {
      routeName: string;
      key: string;
      params: {
        [prop: string]: any;
      };
    };
    addListener: (eventType: string, cb: (e: any) => any) => void;
  };
  route?: {
    params: any;
  };
}

export default function NavigationRoot() {
  const { isAuth } = useAuth();

  return (
    <NavigationContainer>
      {isAuth ? <ExplorerStackNavigator /> : <OnboardingStackNavigator />}
    </NavigationContainer>
  );
}

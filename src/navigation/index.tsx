import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  ExplorerStackNavigator,
  OnboardingStackNavigator,
} from './stack-navigators';
import { AppState } from 'src/redux/types';
import { useSelector } from 'react-redux';
import { fetchItemFromStorage } from 'src/shared/utils/asyncstorage';

const NavigationRoot = () => {
  const user = useSelector((state: AppState) => state.user)
  const linking = {
    prefixes: ['pozzleplanet://'],
  };

  useEffect(() => {
    const runAsynce = async () => {
      const token = await fetchItemFromStorage('sessionToken');
    }
    runAsynce();
  }, [])

  return (
    <NavigationContainer linking={linking}>
      {user.authorizationHeader ? (
        <ExplorerStackNavigator />
      ) : (
        <OnboardingStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default NavigationRoot;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  ExplorerStackNavigator,
  OnboardingStackNavigator,
} from './stack-navigators';
import { AppState } from 'src/redux/types';
import { connect } from 'react-redux';

const NavigationRoot = (props: any) => {
  const linking = {
    prefixes: ['pozzleplanet://'],
  };

  return (
    <NavigationContainer linking={linking}>
      {props.user.authorizationHeader ? (
        <ExplorerStackNavigator />
      ) : (
        <OnboardingStackNavigator />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(NavigationRoot);

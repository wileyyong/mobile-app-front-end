import React from 'react';
import { connect } from 'react-redux';

import Welcome from './Welcome';

function OnboardingScreen() {
  return <Welcome />;
}

export default () => connect()(OnboardingScreen);

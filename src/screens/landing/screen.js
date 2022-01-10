import React from 'react';
import { connect } from 'react-redux';

import Welcome from '../onboarding/welcome/Welcome';

function LandingScreen() {
  return <Welcome />;
}

export default () => connect()(LandingScreen);

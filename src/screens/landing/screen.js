import React from 'react';
import { connect } from 'react-redux';

import Welcome from '../onboarding/Welcome';

function LandingScreen() {
  return <Welcome />;
}

export default () => connect()(LandingScreen);

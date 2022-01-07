import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './style';

function LandingScreen({ isUserLogout }) {
  return (
    <View style={styles.container}>
      <Text>LandingScreen</Text>
      {isUserLogout && <Text>Logged In</Text>}
    </View>
  );
}

LandingScreen.defaultProps = {
  isUserLogout: false,
};

LandingScreen.propTypes = {
  isUserLogout: PropTypes.bool,
};


export default () => connect()(LandingScreen);

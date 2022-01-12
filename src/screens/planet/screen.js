import { Text } from '$components';

import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './style';

/**
 *
 *
 */
function PlanetScreen() {
  return (
    <View style={styles.container}>
      <Text>PlanetScreen</Text>
    </View>
  );
}

export default () => connect()(PlanetScreen);

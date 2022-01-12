import { Text } from '$components';

import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './style';

/**
 *
 *
 */
function EarthScreen() {
  return (
    <View style={styles.container}>
      <Text>EarthScreen</Text>
    </View>
  );
}

export default () => connect()(EarthScreen);

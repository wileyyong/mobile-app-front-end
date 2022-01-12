import { Text } from '$components';

import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './style';

/**
 *
 *
 */
function VideoScreen() {
  return (
    <View style={styles.container}>
      <Text>VideoScreen</Text>
    </View>
  );
}

export default () => connect()(VideoScreen);

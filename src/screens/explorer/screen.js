import { Text } from '$components';

import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './style';

/**
 *
 *
 */
function ExplorerScreen() {
  return (
    <View style={styles.container}>
      <Text>ExplorerScreen</Text>
    </View>
  );
}

export default () => connect()(ExplorerScreen);

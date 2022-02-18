import { Camera, ActivityHeader, ProgressButton } from '$components';

import React, { useState } from 'react';
import { ImageBackground, View, useWindowDimensions } from 'react-native';
import ActivitySelection from './activity-selection';

import styles from './style';

const radialGradient = require('$assets/radialGradientBackground.png');

/**
 *
 *
 */
function PozzleActivityScreen() {
  const { width } = useWindowDimensions();
  const [showSheet, setShowSheet] = useState(false);
  const openActivitySelection = () => {};
  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground source={radialGradient} style={styles.backgroundImage}>
        <ActivityHeader
          onPress={() => {
            setShowSheet(true);
          }}
        />
        <Camera />
        <ActivitySelection show={showSheet} onClose={() => setShowSheet(false)}></ActivitySelection>
      </ImageBackground>
    </View>
  );
}

export default PozzleActivityScreen;

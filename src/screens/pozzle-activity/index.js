import { Camera } from '$components';

import React from 'react';
import { ImageBackground, View, useWindowDimensions } from 'react-native';

import styles from './style';

const radialGradient = require('$assets/radialGradientBackground.png');

function PozzleActivityScreen() {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground source={radialGradient} style={styles.backgroundImage}>
        <Camera />
      </ImageBackground>
    </View>
  );
}

export default PozzleActivityScreen;

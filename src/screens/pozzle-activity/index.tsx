import { Camera, ImageBackground } from '$components';

import React from 'react';
import { View, useWindowDimensions } from 'react-native';

import styles from './style';

const radialGradient = require('src/assets/images/radialGradientBackground.png');

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

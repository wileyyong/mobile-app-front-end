import { Camera, PozzleHeader } from '$components';

import React from 'react';
import { ImageBackground, View, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

const radialGradient = require('$assets/radialGradientBackground.png');

/**
 *
 *
 */
function PozzleActivityScreen() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground source={radialGradient} style={styles.backgroundImage}>
        <PozzleHeader
          pozzlesAdded={24}
          pozzlesPledged={60}
          title="Joining A Climate Protest"
          onPress={navigation.goBack}
        />

        <Camera />
      </ImageBackground>
    </View>
  );
}

export default PozzleActivityScreen;

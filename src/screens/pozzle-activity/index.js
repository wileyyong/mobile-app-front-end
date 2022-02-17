import { Camera, PozzleHeader, ProgressButton } from '$components';
import { Colors } from '$theme';

import React from 'react';
import { ImageBackground, View, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import styles from './style';

const radialGradient = require('$assets/radialGradientBackground.png');

/**
 *
 *
 */
function PozzleActivityScreen() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const videoRecording = false;

  const submitVideo = async () => {};

  const startRecording = async () => {};

  const stopRecording = async () => {};

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

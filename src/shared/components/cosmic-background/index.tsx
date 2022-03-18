import { ImageBackground } from '$components';

import React from 'react';
import { View, ViewStyle } from 'react-native';

import Style from './style';

const gradient = require('src/assets/images/purpleGradient.png');
const stars = require('src/assets/images/stars.png');

interface ICosmicBackground {
  children: React.ReactNode;
  style?: ViewStyle;
}

/**
 * Purple 'cosmic' background images commonuly used in the app
 */
const CosmicBackground = ({ children, style }: ICosmicBackground) => {
  return (
    <View style={Style.underlay}>
      <ImageBackground source={gradient} style={[Style.image]}>
        <ImageBackground source={stars} style={[Style.image, style]}>
          {children}
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default CosmicBackground;

import { ImageBackground } from '$components';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import Style from './style';
const skyImage = require('src/assets/images/sky.png');

interface ISkyBackground {
  children: React.ReactNode;
  style?: ViewStyle;
}

/**
 * Sky background images used in the onboarding screens
 */
const SkyBackground = ({ children, style }: ISkyBackground) => {
  return (
    <View style={Style.underlay}>
      <ImageBackground source={skyImage} style={[Style.image, style]}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default SkyBackground;

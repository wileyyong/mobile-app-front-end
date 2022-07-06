import { ImageBackground } from '$components';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import Style from './style';
const Hexagon = require('src/assets/images/hexagon-background.png');

interface IHexagonBackground {
  children: React.ReactNode;
  style?: ViewStyle;
}

/**
 * Sky background images used in the onboarding screens
 */
const HexagonBackground = ({ children, style }: IHexagonBackground) => {
  return (
    <View style={Style.underlay}>
      <ImageBackground source={Hexagon} style={[Style.image, style]}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default HexagonBackground;

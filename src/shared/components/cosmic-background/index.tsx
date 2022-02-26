import { ImageBackground } from '$components';

import React from 'react';
import PropTypes from 'prop-types';
import { StyleProp, View, ViewProps } from 'react-native';

import Style from './style';

const gradient = require('$assets/purpleGradient.png');
const stars = require('$assets/stars.png');

interface ICosmicBackground {
  children: React.ReactNode;
  style?: StyleProp<ViewProps>;
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

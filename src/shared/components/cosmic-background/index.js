import { ImageBackground } from '$components';

import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Style from './style';

const gradient = require('$assets/purpleGradient.png');
const stars = require('$assets/stars.png');

/**
 * Purple 'cosmic' background images commonuly used in the app
 */
const CosmicBackground = ({ children }) => {
  return (
    <View style={Style.underlay}>
      <ImageBackground source={gradient} style={Style.image}>
        <ImageBackground source={stars} style={Style.image}>
          {children}
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

CosmicBackground.defaultProps = {
  children: null,
};

CosmicBackground.propTypes = {
  children: PropTypes.node,
};

export default CosmicBackground;

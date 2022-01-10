import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View } from 'react-native';

import styles from './style';

const gradient = require('$assets/purpleGradient.png');

const stars = require('$assets/stars.png');

/**
 * Purple 'cosmic' background images commonuly used in the app
 */
const CosmicBackground = ({ children }) => {
  return (
    <View style={styles.underlay}>
      <ImageBackground source={gradient} style={styles.image}>
        <ImageBackground source={stars} style={styles.image}>
          {children}
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

CosmicBackground.propTypes = {
  children: PropTypes.node,
};

export default CosmicBackground;

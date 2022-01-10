import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ImageBackground, View } from 'react-native';

import { colors } from '../../theme/colors';

const gradient = require('../../../../assets/purpleGradient.png');
const stars = require('../../../../assets/stars.png');

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

const styles = StyleSheet.create({
  underlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
});

CosmicBackground.propTypes = {
  children: PropTypes.node,
};

export default CosmicBackground;

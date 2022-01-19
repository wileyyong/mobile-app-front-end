import { Camera } from '$components';
import { PozzleHeader } from '$widgets';

import React from 'react';
import { ImageBackground, View, useWindowDimensions } from 'react-native';
import { connect } from 'react-redux';

import { pop } from './actions';
import styles from './style';

const radialGradient = require('$assets/radialGradientBackground.png');

/**
 *
 *
 */
function PozzleActivityScreen() {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground source={radialGradient} style={styles.backgroundImage}>
        <PozzleHeader
          pozzlesAdded={24}
          pozzlesPledged={60}
          title="Joining A Climate Protest"
          onPress={pop}
        />

        <Camera />
      </ImageBackground>
    </View>
  );
}

export default () => connect()(PozzleActivityScreen);

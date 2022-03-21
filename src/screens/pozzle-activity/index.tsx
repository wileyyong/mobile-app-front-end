import React, { useState } from 'react';
import { Camera } from '$components';

import { ImageBackground, View, useWindowDimensions } from 'react-native';

import styles from './style';
import ActivitySelection from './activity-selection';
import ActivityHeader from './activity-header';

const radialGradient = require('src/assets/images/radialGradientBackground.png');

function PozzleActivityScreen() {
  const { width } = useWindowDimensions();
  const [showSheet, setShowSheet] = useState(false);

  return (
    <>
      <View style={[styles.container, { width }]}>
        <ImageBackground source={radialGradient} style={styles.backgroundImage}>
          {showSheet ? (
            <></>
          ) : (
            <ActivityHeader
              onPress={() => {
                setShowSheet(true);
              }}></ActivityHeader>
          )}
          <Camera />
        </ImageBackground>
      </View>
      <ActivitySelection
        show={showSheet}
        onClose={() => setShowSheet(false)}></ActivitySelection>
    </>
  );
}

export default PozzleActivityScreen;

import React, { useState } from 'react';
import { ImageBackground, View, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import ActivitySelection from './activity-selection';
import ActivityHeader from './activity-header';
const radialGradient = require('$assets/radialGradientBackground.png');

/**
 *
 *
 */
function PozzleActivityScreen() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
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
              }}
            ></ActivityHeader>
          )}
        </ImageBackground>
      </View>
      <ActivitySelection show={showSheet} onClose={() => setShowSheet(false)}></ActivitySelection>
    </>
  );
}

export default PozzleActivityScreen;

import React, { useState } from 'react';
import { Camera, ImageBackground } from '$components';

import { View, useWindowDimensions } from 'react-native';

import styles from './style';
import ActivitySelection from './activity-selection';
import ActivityHeader from './activity-header';

const radialGradient = require('src/assets/images/radialGradientBackground.png');

const PozzleActivityScreen = () => {
  const { width } = useWindowDimensions();
  const [showSheet, setShowSheet] = useState(false);

  const renderHeader = () => {
    return (
      <ActivityHeader
        onPress={() => {
          setShowSheet(true);
        }}></ActivityHeader>
    );
  };

  const renderCamera = () => {
    return <Camera />;
  };
  const renderSelection = () => {
    return (
      <ActivitySelection
        show={showSheet}
        onClose={() => setShowSheet(false)}></ActivitySelection>
    );
  };
  return (
    <>
      <View style={[styles.container, { width }]}>
        <ImageBackground source={radialGradient} style={styles.backgroundImage}>
          {renderHeader()}
          {renderCamera()}
        </ImageBackground>
      </View>
      {renderSelection()}
    </>
  );
};

export default PozzleActivityScreen;

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
  const [selectedActivity, setActivity] = useState<any | null>(null);
  const renderHeader = () => {
    return (
      <ActivityHeader
        activityTitle={selectedActivity?.title}
        activityLocation={selectedActivity?.location}
        newActivity={selectedActivity?.newActivity}
        selected={selectedActivity?.title ? true : false}
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
        selectedActivity={selectedActivity}
        onSelect={item => setActivity(item)}
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

import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Pressable, Text, Animated } from 'react-native';
import Video from 'react-native-video';

import styles from '../style';

type VideoViewType = {
  file?: string;
};

const PozzleVideoView = ({ file }: VideoViewType) => {
  const videoRef = useRef(Video);

  return (
    <>
      {file && (
        <View style={styles.camera}>
          <Video
            playInBackground={false}
            playWhenInactive={false}
            posterResizeMode="cover"
            ref={videoRef}
            repeat
            resizeMode="cover"
            source={{ uri: file }}
            style={styles.camera}
          />
        </View>
      )}
    </>
  );
};

export default PozzleVideoView;

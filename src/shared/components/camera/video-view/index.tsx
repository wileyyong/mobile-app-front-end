import { PauseIcon, PlayIcon } from '$components';
import { Colors } from '$theme';

import React, { useRef, useState } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import Video from 'react-native-video';
import PropTypes from 'prop-types';

import styles from '../style';

type VideoViewType = {
  file?: string;
};
const PozzleVideoView = ({ file }:VideoViewType) => {
  const videoRef = useRef(Video);
  const [isVideoPreviewPaused, setIsPaused] = useState(false);
  const [videoProgress, setVideoProgress] = useState({ currentTime: 0, playableDuration: 0 });
  const timeStyle = StyleSheet.flatten([styles.videoProgress]);

  const handlePreviewPlaying = () => {
    const auxIsVideoPreviewPaused = !isVideoPreviewPaused;

    setIsPaused(auxIsVideoPreviewPaused);
  };

  return (
    <>
      {file ? (
        <View style={styles.camera}>
          <Video
            paused={isVideoPreviewPaused}
            playInBackground={false}
            playWhenInactive={false}
            posterResizeMode="cover"
            ref={videoRef}
            repeat
            resizeMode="cover"
            source={{ uri: file }}
            style={styles.camera}
            onProgress={(progress:any) => setVideoProgress(progress)}
          />
        </View>
      ) : (
        <></>
      )}

      <View style={styles.videoProgressContainer}>
        <Text style={timeStyle}>
          {`${videoProgress?.currentTime?.toFixed(2)} - ${videoProgress?.playableDuration?.toFixed(
            2
          )}s`}
        </Text>
      </View>

      {isVideoPreviewPaused ? (
        <Pressable style={styles.videoButtonPlayback} onPress={handlePreviewPlaying}>
          <PlayIcon color={Colors.EIGHTYPERCENTWHITE} size="large"  style={undefined}/>
        </Pressable>
      ) : (
        <Pressable style={styles.videoButtonPlayback} onPress={handlePreviewPlaying}>
          <PauseIcon color={Colors.EIGHTYPERCENTWHITE} size="large" style={undefined} />
        </Pressable>
      )}
    </>
  );
};

PozzleVideoView.defaultProps = {
  file: '',
};

PozzleVideoView.propTypes = {
  file: PropTypes.string,
};

export default PozzleVideoView;

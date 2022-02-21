import { PauseIcon, PlayIcon } from '$components';
import { Colors } from '$theme';

import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import Video from 'react-native-video';

import styles from '../style';

const PozzleVideoView = forwardRef((props, ref) => {
  const videoRef = useRef(Video);
  const [isVideoPreviewPaused, setIsPaused] = useState(false);
  const [file, setVideoFileState] = useState(null);
  const [videoProgress, setVideoProgress] = useState({ currentTime: 0, playableDuration: 0 });
  const timeStyle = StyleSheet.flatten([styles.videoProgress]);

  const cancelRecording = async () => {
    setVideoFileState(null);
  };

  const handlePreviewPlaying = () => {
    const auxIsVideoPreviewPaused = !isVideoPreviewPaused;

    setIsPaused(auxIsVideoPreviewPaused);
  };

  useImperativeHandle(ref, () => ({
    cancelRecording() {
      cancelRecording();
    },
    setVideoFile(_file) {
      setVideoFileState(_file);
    },
  }));

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
            onProgress={(progress) => setVideoProgress(progress)}
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
          <PlayIcon color={Colors.EIGHTYPERCENTWHITE} size="large" />
        </Pressable>
      ) : (
        <Pressable style={styles.videoButtonPlayback} onPress={handlePreviewPlaying}>
          <PauseIcon color={Colors.EIGHTYPERCENTWHITE} size="large" />
        </Pressable>
      )}
    </>
  );
});

export default PozzleVideoView;

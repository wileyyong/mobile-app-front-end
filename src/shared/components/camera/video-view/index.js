import {
  ProgressButton,
  CameraIcon,
  FlashIcon,
  Button,
  PauseIcon,
  PlayIcon,
  CloseIcon,
} from '$components';
import { Colors } from '$theme';
import { VIDEO_RECORD_DURATION_MS } from '$constants';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Pressable,
  Text,
  Linking,
  InViewPort,
} from 'react-native';
import Video from 'react-native-video';

import styles from './../style';

const PozzleVideoView = forwardRef((props, ref) => {
  const videoRef = useRef(Video);
  const [isVideoPreviewPaused, setIsPaused] = useState(false);
  const [file, setVideoFileState] = useState(null);
  const [videoProgress, setVideoProgress] = useState({ currentTime: 0, playableDuration: 0 });
  const timeStyle = StyleSheet.flatten([styles.videoProgress]);
  const closeIconColor = Colors.WHITE;
  const positionButtonStyle = StyleSheet.flatten([styles.cameraButton]);

  const cancelRecording = async () => {
    setVideoFileState(null);
  };

  const handlePreviewPlaying = () => {
    const _isVideoPreviewPaused = !isVideoPreviewPaused;
    setIsPaused(_isVideoPreviewPaused);
  };

  useImperativeHandle(ref, () => ({
    setVideoFile(_file) {
      setVideoFileState(_file);
    },
    cancelRecording() {
      cancelRecording();
    },
  }));

  return (
    <>
      {file ? (
        <View style={styles.camera}>
          <Video
            ref={videoRef}
            onProgress={(progress) => setVideoProgress(progress)}
            paused={isVideoPreviewPaused}
            repeat={true}
            playInBackground={false}
            playWhenInactive={false}
            //poster="http://images.unsplash.com/photo-1603468850790-9bd9f28aee54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3072&q=80"
            posterResizeMode="cover"
            resizeMode="cover"
            source={{ uri: file }}
            style={styles.camera}
          />
        </View>
      ) : (
        <></>
      )}

      <View style={styles.videoProgressContainer}>
        <Text style={timeStyle}>
          {videoProgress?.currentTime?.toFixed(2) +
            ' - ' +
            videoProgress?.playableDuration?.toFixed(2) +
            's'}
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

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

const PozzleCameraButtons = forwardRef((props, ref) => {
  const [file, setVideoFile] = useState(null);

  const startRecording = async () => {
    console.log('startRecording1');
    props.startRecording();
  };
  const submitVideo = async () => {};

  const cancelRecording = async () => {
    console.log('cancelRecording1');
    setVideoFile(null);
  };

  const stopRecording = async () => {
    props.stopRecording();
  };

  useImperativeHandle(ref, () => ({
    cancelRecording() {
      cancelRecording();
    },
    setVideoFile(file) {
      setVideoFile(file);
    },
  }));

  return (
    <View style={styles.cameraContainer}>
      {file ? (
        <ProgressButton
          backgroundColor={Colors.PINK}
          overlayColor={Colors.WHITE}
          overlayDirection="LTR"
          text="Post"
          onStart={submitVideo}
          pressType="TAP"
        />
      ) : (
        <ProgressButton
          backgroundColor={Colors.WHITE}
          overlayColor={Colors.PINK}
          overlayDirection="RTL"
          text="Record"
          onFinish={stopRecording}
          onStart={startRecording}
        />
      )}
    </View>
  );
});

PozzleCameraButtons.defaultProps = {
  cancelRecording: () => {},
  startRecording: () => {},
  stopRecording: () => {},
  file: null,
};

PozzleCameraButtons.propTypes = {
  cancelRecording: PropTypes.func,
  startRecording: PropTypes.func,
  stopRecording: PropTypes.func,
  file: PropTypes.string,
};

export default PozzleCameraButtons;

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
  const [file, setVideoFileState] = useState(null);

  const startRecording = async () => {
    props.startRecording();
  };
  const submitVideo = async () => {};

  const cancelRecording = async () => {
    setVideoFileState(null);
  };

  const stopRecording = async () => {
    props.stopRecording();
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
    <View>
      {file ? (
        <ProgressButton
          backgroundColor={Colors.PINK}
          overlayColor={Colors.WHITE}
          textColorOverlay={Colors.BLACK}
          textColor={Colors.BLACK}
          overlayDirection="LTR"
          text="Post"
          textOverlay="Posting..."
          onStart={submitVideo}
          pressType="TAP"
        />
      ) : (
        <ProgressButton
          backgroundColor={Colors.PINK}
          overlayColor={Colors.WHITE}
          textColorOverlay={Colors.BLACK}
          textColor={Colors.WHITE}
          overlayDirection="RTL"
          text="Record"
          textOverlay="Recording..."
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

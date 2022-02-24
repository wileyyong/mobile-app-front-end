import { ProgressButton } from '$components';
import { Colors } from '$theme';

import PropTypes from 'prop-types';
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';

const PozzleCameraButtons = ({ cancelRecording, startRecording, stopRecording, file }) => {
  const [isRecording, setIsRecording] = useState(false);
  const _startRecording = async () => {
    console.log('CAMERA BUTTONS startRecording ', isRecording);
    if (isRecording) return;
    setIsRecording(true);
    startRecording();
  };

  const submitVideo = async () => {};

  const _stopRecording = async () => {
    setIsRecording(false);
    stopRecording();
  };

  return (
    <View>
      {file ? (
        <ProgressButton
          backgroundColor={Colors.PINK}
          overlayColor={Colors.WHITE}
          overlayDirection="LTR"
          pressType="TAP"
          text="Post"
          textColor={Colors.BLACK}
          textColorOverlay={Colors.BLACK}
          textOverlay="Posting..."
          onStart={submitVideo}
        />
      ) : (
        <ProgressButton
          backgroundColor={Colors.PINK}
          overlayColor={Colors.WHITE}
          overlayDirection="RTL"
          text="Record"
          textColor={Colors.WHITE}
          textColorOverlay={Colors.BLACK}
          textOverlay="Recording..."
          onFinish={_stopRecording}
          onStart={_startRecording}
        />
      )}
    </View>
  );
};

PozzleCameraButtons.defaultProps = {
  cancelRecording: () => {},
  startRecording: () => {},
  stopRecording: () => {},
  isRecording: false,
  setIsRecording: () => {},
  file: '',
};

PozzleCameraButtons.propTypes = {
  cancelRecording: PropTypes.func,
  startRecording: PropTypes.func,
  stopRecording: PropTypes.func,
  isRecording: PropTypes.bool,
  setIsRecording: PropTypes.func,
  file: PropTypes.string,
};

export default PozzleCameraButtons;

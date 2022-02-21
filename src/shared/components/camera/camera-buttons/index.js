import { ProgressButton } from '$components';
import { Colors } from '$theme';

import PropTypes from 'prop-types';
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';

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
          onFinish={stopRecording}
          onStart={startRecording}
        />
      )}
    </View>
  );
});

PozzleCameraButtons.defaultProps = {
  startRecording: () => {},
  stopRecording: () => {},
};

PozzleCameraButtons.propTypes = {
  startRecording: PropTypes.func,
  stopRecording: PropTypes.func,
};

export default PozzleCameraButtons;

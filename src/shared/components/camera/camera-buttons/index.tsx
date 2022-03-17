import { ProgressButton } from '$components';
import { Colors } from '$theme';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View } from 'react-native';

type CameraButtonsType = {
  startRecording: () => void;
  stopRecording: () => void;
  file?: string;
};

const PozzleCameraButtons = ({
  startRecording,
  stopRecording,
  file,
}: CameraButtonsType) => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecordingInternal = async () => {
    if (isRecording) return;
    setIsRecording(true);
    startRecording();
  };

  const submitVideoInternal = async () => {};

  const stopRecordingInternal = async () => {
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
          onStart={submitVideoInternal}
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
          onFinish={stopRecordingInternal}
          onStart={startRecordingInternal}
        />
      )}
    </View>
  );
};

export default PozzleCameraButtons;

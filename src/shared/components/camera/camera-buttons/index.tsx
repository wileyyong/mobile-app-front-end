import { Button, ProgressButton, Toast } from '$components';
import { Colors } from '$theme';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import uploader from '../uploader';
import { useDispatch } from 'react-redux';
import { updateRecordingAndFile } from '../../../../business-layer/progress-button/actions';
import { t } from 'i18next';
import styles from '../style';

type CameraButtonsType = {
  startRecording: () => void;
  stopRecording: () => void;
  file?: string;
};

const PozzleCameraButtons = ({ startRecording, stopRecording, file }: CameraButtonsType) => {
  const dispatch = useDispatch();
  const [isRecording, setIsRecording] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const startRecordingInternal = async () => {
    if (isRecording) return;
    setIsRecording(true);
    startRecording();
  };

  const submitVideoInternal = async () => {
    if (file && !isUploading) {
      setIsUploading(true);
      const result = await uploader.uploadVideo(file);

      if (result) {
        Toast.show({ text1: 'Success', text2: 'Video Uploaded', autoHide: true });
        dispatch(updateRecordingAndFile(0, undefined));
      } else
        Toast.show({ type: 'error', text1: 'Error', text2: 'Video Not Uploaded', autoHide: true });

      setIsUploading(false);
    }
  };

  const stopRecordingInternal = async () => {
    setIsRecording(false);
    stopRecording();
  };

  return (
    <View>
      {file ? (
        <View style={styles.buttonContainer}>
          <Button
            backgroundColor={Colors.WHITE}
            onPress={submitVideoInternal}
            disabled={isUploading}
          >
            <Text style={styles.buttonText}>Post</Text>
          </Button>
        </View>
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

PozzleCameraButtons.defaultProps = {
  file: '',
  startRecording: () => {},
  stopRecording: () => {},
};

PozzleCameraButtons.propTypes = {
  file: PropTypes.string,
  startRecording: PropTypes.func,
  stopRecording: PropTypes.func,
};

export default PozzleCameraButtons;
/* <ProgressButton
          backgroundColor={Colors.PINK}
          overlayColor={Colors.WHITE}
          overlayDirection="LTR"
          pressType="TAP"
          text="Post"
          textColor={Colors.BLACK}
          textColorOverlay={Colors.BLACK}
          textOverlay="Posting..."
          onStart={submitVideoInternal}
        />*/

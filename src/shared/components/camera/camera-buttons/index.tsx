import { Button, ProgressButton, Toast } from '$components';
import { Colors } from '$theme';
import { AWS_API_URL } from '$constants';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { t } from 'i18next';

import CreateActivity from '../api';
import uploader from '../uploader';
import { updateRecordingAndFile } from '../../../../business-layer/progress-button/actions';
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
        const videoUrl = `${AWS_API_URL}/${result}`;

        await CreateActivity.put({
          createdBy: 'User',
          lat: 0,
          location: { coordinates: [0], type: 'Point' },
          long: 0,
          title: 'Test',
          videoSrc: videoUrl,
        })
          .then(() => {
            Toast.show({
              autoHide: true,
              text1: t('pozzleActivityScreen.success'),
              text2: t('pozzleActivityScreen.videoUploaded'),
            });

            dispatch(updateRecordingAndFile(0, undefined));
          })
          .catch(() => {
            Toast.show({
              autoHide: true,
              text1: t('pozzleActivityScreen.error'),
              text2: t('pozzleActivityScreen.videoUploadedError'),
              type: 'error',
            });
          });
      } else
        Toast.show({
          autoHide: true,
          text1: t('pozzleActivityScreen.error'),
          text2: t('pozzleActivityScreen.videoUploadedError'),
          type: 'error',
        });

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
            disabled={isUploading}
            onPress={submitVideoInternal}
          >
            <Text style={styles.buttonText}>{t('pozzleActivityScreen.post')}</Text>
          </Button>
        </View>
      ) : (
        <ProgressButton
          backgroundColor={Colors.PINK}
          overlayColor={Colors.WHITE}
          overlayDirection="RTL"
          text={t('pozzleActivityScreen.record')}
          textColor={Colors.WHITE}
          textColorOverlay={Colors.BLACK}
          textOverlay={t('pozzleActivityScreen.recording')}
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

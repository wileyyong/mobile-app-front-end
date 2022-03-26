import { Button, ProgressButton, Toast } from '$components';
import { Colors } from '$theme';

import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { t } from 'i18next';

import CreateActivity from '../api';
import uploader from '../uploader';
import {
  updateModalStatus,
  updateProgress,
  updateRecordingAndFile,
  updateUploadingStatus,
} from '../../../../redux/progress-button/actions';
import styles from '../style';

type CameraButtonsType = {
  startRecording: () => void;
  stopRecording: () => void;
  file?: string;
  hasActivity?: boolean;
};

const PozzleCameraButtons = ({
  startRecording,
  stopRecording,
  file,
  hasActivity,
}: CameraButtonsType) => {
  const dispatch = useDispatch();
  const [isRecording, setIsRecording] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const startRecordingInternal = async () => {
    if (isRecording) return;
    setIsRecording(true);
    startRecording();
  };

  const onProgressUpdate = (progressEvent: any) => {
    const { loaded, total } = progressEvent;
    let percentage = Math.floor((loaded * 100) / total);
    if (percentage >= 100) percentage = 80;
    dispatch(updateProgress(percentage));
  };

  const submitVideoInternal = async () => {
    if (file && !isUploading) {
      setIsUploading(true);

      dispatch(updateModalStatus(true));
      dispatch(updateUploadingStatus(true));

      const result = await uploader.uploadVideo(file, onProgressUpdate);

      if (result) {
        const videoUrl = result.split('?')[0];
        dispatch(updateProgress(90));
        await CreateActivity.put({
          createdBy: 'User',
          lat: 0,
          location: { coordinates: [0], type: 'Point' },
          long: 0,
          title: 'Test',
          videoSrc: videoUrl,
        })
          .then(() => {
            dispatch(updateProgress(100));
            Toast.show({
              autoHide: true,
              text1: t('pozzleActivityScreen.success'),
              text2: t('pozzleActivityScreen.videoUploaded'),
            });
            dispatch(updateModalStatus(false));
            dispatch(updateUploadingStatus(false));
            dispatch(updateRecordingAndFile(false, undefined));
            dispatch(updateProgress(0));
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
      dispatch(updateModalStatus(false));
      dispatch(updateUploadingStatus(false));
      setIsUploading(false);
      dispatch(updateProgress(0));
    }
  };

  const stopRecordingInternal = async () => {
    setIsRecording(false);
    stopRecording();
  };

  return (
    <>
      <View>
        {file ? (
          <View style={styles.buttonContainer}>
            <Button
              backgroundColor={Colors.WHITE}
              disabled={isUploading || !hasActivity}
              onPress={submitVideoInternal}>
              <Text style={styles.buttonText}>
                {t('pozzleActivityScreen.post')}
              </Text>
            </Button>
          </View>
        ) : (
          <ProgressButton
            backgroundColor={Colors.PINK}
            disabled={false}
            overlayColor={Colors.WHITE}
            overlayDirection="RTL"
            pressType={'LONG'}
            text={t('pozzleActivityScreen.record')}
            textColor={Colors.WHITE}
            textColorOverlay={Colors.BLACK}
            textOverlay={t('pozzleActivityScreen.recording')}
            onFinish={stopRecordingInternal}
            onStart={startRecordingInternal}
          />
        )}
      </View>
    </>
  );
};

export default PozzleCameraButtons;

import { Button } from '$components';
import { Colors } from '$theme';
import { VIDEO_RECORD_DURATION_MS } from '$constants';

import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import { View, Text, Linking } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useTranslation } from 'react-i18next';

import styles from '../style';
import {
  BACK_CAMERA,
  FLASH_OFF,
  ANDROID_CAMERA_PERMISSIONS,
  ANDROID_AUDIO_PERMISSIONS,
} from '../utils';

const PozzleCameraView = ({
  cameraPosition,
  flashMode,
  file,
  setFile,
  isRecording,
  setIsRecording,
}) => {
  const MAX_PRESSING_DURATION_MS = VIDEO_RECORD_DURATION_MS / 1000;
  const { t } = useTranslation();
  const cameraRef = useRef();

  const refreshPermissions = async () => {};

  const openSettings = async () => {
    await refreshPermissions();
    Linking.openSettings();
  };

  const startRecordingInternal = async () => {
    cameraRef.current.recordAsync({ maxDuration: MAX_PRESSING_DURATION_MS }).then((result) => {
      setFile(result.uri);
    });
  };

  const stopRecordingInternal = async () => {
    cameraRef.current.stopRecording();
  };

  const pendingAuthorizationView = () => {
    return (
      <View style={styles.fakeVideo}>
        <Text>{t('pozzleActivityScreen.permissions.misc.pendingAuthorizationView')}</Text>
      </View>
    );
  };

  const notAuthorizedView = () => {
    return (
      <View style={styles.fakeVideo}>
        <Text>{t('pozzleActivityScreen.permissions.misc.notAuthorizedView')}</Text>
        <Button backgroundColor={Colors.WHITE} onPress={openSettings}>
          <Text>{t('pozzleActivityScreen.permissions.misc.openSettings')}</Text>
        </Button>
      </View>
    );
  };

  useEffect(() => {
    if (isRecording) {
      startRecordingInternal();
    } else if (isRecording === false) {
      stopRecordingInternal();
    } else if (isRecording === null) {
      setIsRecording(false);
    }
  }, [isRecording]);

  return (
    <>
      {file ? (
        <></>
      ) : (
        <>
          <View style={styles.camera}>
            <RNCamera
              androidCameraPermissionOptions={ANDROID_CAMERA_PERMISSIONS}
              androidRecordAudioPermissionOptions={ANDROID_AUDIO_PERMISSIONS}
              flashMode={flashMode}
              notAuthorizedView={notAuthorizedView}
              pendingAuthorizationView={pendingAuthorizationView}
              ref={cameraRef}
              style={styles.camera}
              type={cameraPosition}
              useNativeZoom
            />
          </View>
        </>
      )}
    </>
  );
};

PozzleCameraView.defaultProps = {
  cameraPosition: BACK_CAMERA,
  file: '',
  flashMode: FLASH_OFF,
  isRecording: false,
  setFile: () => {},
  setIsRecording: () => {},
};

PozzleCameraView.propTypes = {
  cameraPosition: PropTypes.string,
  file: PropTypes.string,
  flashMode: PropTypes.string,
  isRecording: PropTypes.bool,
  setFile: PropTypes.func,
  setIsRecording: PropTypes.func,
};

export default PozzleCameraView;

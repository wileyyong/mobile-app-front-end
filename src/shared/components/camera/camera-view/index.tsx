import { Button } from '$components';
import { Colors } from '$theme';
import { VIDEO_RECORD_DURATION_MS } from '$constants';

import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Linking } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecordingAndFile } from '../../../../business-layer/progress-button/actions';

import styles from '../style';
import {
  BACK_CAMERA,
  FLASH_OFF,
  ANDROID_CAMERA_PERMISSIONS,
  ANDROID_AUDIO_PERMISSIONS,
} from '../utils';

type CameraViewType = {
  cameraPosition: 'front' | 'back' | undefined;
  flashMode: 'auto' | 'on' | 'off' | 'torch' | undefined;
  file?: string;
  setFile: (file?: string) => void;
  isRecording?: boolean;
  setIsRecording: (value: boolean) => void;
};

const PozzleCameraView = ({
  cameraPosition,
  flashMode,
  file,
  setFile,
  isRecording,
  setIsRecording,
}: CameraViewType) => {
  const dispatch = useDispatch();
  const progressButtonRedux = useSelector((state: any) => state.ProgressButtonRedux);
  const MAX_PRESSING_DURATION_MS = VIDEO_RECORD_DURATION_MS / 1000;
  const { t } = useTranslation();
  const [cameraInstance, setCameraRef] = useState<any>(null);
  const cameraRef = useRef(null);
  const refreshPermissions = async () => {};

  const openSettings = async () => {
    await refreshPermissions();
    Linking.openSettings();
  };

  const startRecordingInternal = async () => {
    if (cameraInstance && cameraInstance.current)
      cameraInstance.current
        .recordAsync({ maxDuration: MAX_PRESSING_DURATION_MS })
        .then((result: any) => {
          dispatch(updateRecordingAndFile(0, result.uri));
          setFile(result.uri);
        });
  };

  const stopRecordingInternal = async () => {
    if (cameraInstance && cameraInstance.current) cameraInstance.current.stopRecording();
  };

  const pendingAuthorizationView: any = () => {
    return (
      <View style={styles.fakeVideo}>
        <Text>{t('pozzleActivityScreen.permissions.misc.pendingAuthorizationView')}</Text>
      </View>
    );
  };

  const notAuthorizedView: any = () => {
    return (
      <View style={styles.fakeVideo}>
        <Text>{t('pozzleActivityScreen.permissions.misc.notAuthorizedView')}</Text>
        <Button backgroundColor={Colors.WHITE} onPress={openSettings}>
          <Text>{t('pozzleActivityScreen.permissions.misc.openSettings')}</Text>
        </Button>
      </View>
    );
  };

  const renderCamera = () => {
    return (
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

    if (cameraRef) {
      setCameraRef(cameraRef);
    }

    if (progressButtonRedux.file === undefined) {
      setFile(undefined);
    }
  }, [isRecording, cameraRef, progressButtonRedux.file]);

  return <>{file ? <></> : <View style={styles.camera}>{renderCamera()}</View>}</>;
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

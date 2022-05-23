import { Button } from '$components';
import { Colors } from '$theme';
import { VIDEO_RECORD_DURATION_MS } from '$constants';

import React, { useRef, useEffect, useState, ReactElement } from 'react';
import { View, Text, Linking } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

import { updateRecordingAndFile } from '../../../../redux/progress-button/actions';
import styles from '../style';
import {
  BACK_CAMERA,
  FLASH_OFF,
  ANDROID_CAMERA_PERMISSIONS,
  ANDROID_AUDIO_PERMISSIONS,
  FLASH_ON,
  FRONT_CAMERA,
} from '../utils';
import { requestCamera, requestMicrophone } from '$utils';

type CameraViewType = {
  cameraPosition: 'front' | 'back' | undefined;
  flashMode: 'auto' | 'on' | 'off' | 'torch' | undefined;
  file?: string;
  setFile: (file?: string) => void;
  isRecording?: boolean;
  setIsRecording: (value: boolean) => void;
  setCameraPosition: (value: 'front' | 'back' | undefined) => void;
};

const PozzleCameraView = ({
  cameraPosition = BACK_CAMERA,
  flashMode = FLASH_OFF,
  file,
  setFile,
  isRecording = false,
  setIsRecording,
  setCameraPosition,
}: CameraViewType) => {
  const route = useRoute();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const progressButtonRedux = useSelector(
    (state: any) => state.ProgressButtonRedux,
  );
  const MAX_PRESSING_DURATION_MS = VIDEO_RECORD_DURATION_MS / 1000;
  const { t } = useTranslation();
  const [cameraInstance, setCameraRef] = useState<any>(null);
  const cameraRef = useRef(null);
  const [hasReqPermissions, setHasReqPermissions] = useState(false);

  const refreshPermissions = async () => {
    await requestCamera().then(resultCamera => {});
    await requestMicrophone().then(resultMicro => {});
  };

  const openSettings = async () => {
    Linking.openSettings();
  };

  const startRecordingInternal = async () => {
    if (cameraInstance && cameraInstance.current)
      cameraInstance.current
        .recordAsync({ maxDuration: MAX_PRESSING_DURATION_MS })
        .then((result: any) => {
          dispatch(updateRecordingAndFile(false, result.uri));
          setFile(result.uri);
        });
  };

  const stopRecordingInternal = async () => {
    if (cameraInstance && cameraInstance.current)
      cameraInstance.current.stopRecording();
  };

  const PendingAuthorizationView: React.FC = () => {
    return (
      <View style={styles.fakeVideo}>
        <Text>
          {t('pozzleActivityScreen.permissions.misc.pendingAuthorizationView')}
        </Text>
      </View>
    );
  };

  const NotAuthorizedView = () => {
    return (
      <View style={styles.fakeVideo}>
        <Text>
          {t('pozzleActivityScreen.permissions.misc.notAuthorizedView')}
        </Text>
        <Button backgroundColor={Colors.WHITE} onPress={openSettings}>
          <Text>{t('pozzleActivityScreen.permissions.misc.openSettings')}</Text>
        </Button>
      </View>
    );
  };

  const renderCamera = () => {
    return (
      isFocused &&
      hasReqPermissions && (
        <RNCamera
          androidCameraPermissionOptions={ANDROID_CAMERA_PERMISSIONS}
          androidRecordAudioPermissionOptions={ANDROID_AUDIO_PERMISSIONS}
          flashMode={flashMode}
          notAuthorizedView={<NotAuthorizedView />}
          pendingAuthorizationView={<PendingAuthorizationView />}
          ref={cameraRef}
          style={styles.camera}
          type={cameraPosition}
          useNativeZoom
          maxZoom={8.0}
          onDoubleTap={() => {
            if (!file && !isRecording) {
              setCameraPosition(
                cameraPosition === BACK_CAMERA ? FRONT_CAMERA : BACK_CAMERA,
              );
            }
          }}
        />
      )
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

    if (
      progressButtonRedux.file === undefined ||
      progressButtonRedux.file === false
    ) {
      setFile(undefined);
    }

    if (!hasReqPermissions && isFocused) {
      setHasReqPermissions(true);
      refreshPermissions();
    }
  }, [isRecording, cameraRef, progressButtonRedux.file, route, isFocused]);

  return (
    <>{file ? <></> : <View style={styles.camera}>{renderCamera()}</View>}</>
  );
};

export default PozzleCameraView;

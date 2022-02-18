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
import { RNCamera } from 'react-native-camera';
import { useTranslation } from 'react-i18next';
import Video from 'react-native-video';

import styles from './../style';
import {
  BACK_CAMERA,
  FLASH_OFF,
  FLASH_ON,
  FRONT_CAMERA,
  ANDROID_CAMERA_PERMISSIONS,
  ANDROID_AUDIO_PERMISSIONS,
  PERMISSIONS_STATUS,
} from './../utils';

const PozzleCameraView = forwardRef((props, ref) => {
  const MAX_PRESSING_DURATION_MS = VIDEO_RECORD_DURATION_MS / 1000;
  const { t } = useTranslation();
  const cameraRef = useRef();
  //const [hasPermissionsAccepted, setPermissionsAccepted] = useState(false);
  const [file, setVideoFileState] = useState(null);
  const [videoRecording, setVideoRecording] = useState(false);
  const [cameraPosition, setCameraPosition] = useState(BACK_CAMERA);
  const [flashMode, setFlashMode] = useState(FLASH_OFF);

  const cameraPositionIconColor = cameraPosition === BACK_CAMERA ? Colors.WHITE : Colors.PINK;
  const cameraFlashIconColor = !flashMode ? Colors.WHITE : Colors.PINK;
  const cameraPositionButtonStyle = {
    backgroundColor:
      cameraPosition === BACK_CAMERA ? Colors.THIRTYPERCENTBLACK : Colors.EIGHTYPERCENTWHITE,
  };
  const cameraFlashButtonStyle = {
    backgroundColor: !flashMode ? Colors.THIRTYPERCENTBLACK : Colors.EIGHTYPERCENTWHITE,
  };

  const positionButtonStyle = StyleSheet.flatten([styles.cameraButton, cameraPositionButtonStyle]);
  const flashButtonStyle = StyleSheet.flatten([styles.cameraButton, cameraFlashButtonStyle]);

  const refreshPermissions = async () => {
    // const result = await cameraRef.current.refreshAuthorizationStatus();
    //  console.log('result', result);
    //   const result2 = cameraRef.current.status;
    //  console.log('result2', result2);
    //setPermissionsAccepted()
  };

  const openSettings = async () => {
    await refreshPermissions();
    Linking.openSettings();
  };

  const startRecording = async () => {
    console.log('startRecording1');
    /*await cameraRef?.current.recordAsync({ maxDuration: MAX_PRESSING_DURATION_MS }).then((data) => {
      console.log('setVideoRecording', data);
      setVideoRecording(data);
    });*/

    return cameraRef?.current.recordAsync({ maxDuration: MAX_PRESSING_DURATION_MS });
  };

  const cancelRecording = async () => {
    console.log('cancelRecording1');
    setVideoRecording(false);
    setVideoFileState(null);
  };

  const stopRecording = async () => {
    console.log('stopRecording1');
    await cameraRef?.current.stopRecording();
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

  useImperativeHandle(ref, () => ({
    startRecording() {
      return startRecording();
    },
    cancelRecording() {
      cancelRecording();
    },
    stopRecording() {
      stopRecording();
    },
    setVideoFile(_file) {
      setVideoFileState(_file);
    },
  }));

  return (
    <>
      {file ? (
        <></>
      ) : (
        <View style={styles.camera}>
          <RNCamera
            androidCameraPermissionOptions={ANDROID_CAMERA_PERMISSIONS}
            androidRecordAudioPermissionOptions={ANDROID_AUDIO_PERMISSIONS}
            flashMode={flashMode}
            ref={cameraRef}
            type={cameraPosition}
            style={styles.camera}
            // pendingAuthorizationView={pendingAuthorizationView}
            // notAuthorizedView={notAuthorizedView}
          />
          <View style={styles.cameraButtonContainer}>
            <TouchableOpacity
              style={positionButtonStyle}
              onPress={() => {
                setCameraPosition((value) => (value === BACK_CAMERA ? FRONT_CAMERA : BACK_CAMERA));
              }}
            >
              <CameraIcon color={cameraPositionIconColor} />
            </TouchableOpacity>
            <TouchableOpacity
              style={flashButtonStyle}
              onPress={() => {
                setFlashMode((value) => (value === FLASH_OFF ? FLASH_ON : FLASH_OFF));
              }}
            >
              <FlashIcon color={cameraFlashIconColor} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
});

PozzleCameraView.defaultProps = {
  cancelRecording: () => {},
  startRecording: () => {},
  stopRecording: () => {},
};

PozzleCameraView.propTypes = {
  cancelRecording: PropTypes.func,
  startRecording: PropTypes.func,
  stopRecording: PropTypes.func,
};

export default PozzleCameraView;

/*
  
  
  */

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

import React, { useEffect, useRef, useState, useReducer } from 'react';
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

import styles from './style';
import {
  BACK_CAMERA,
  FLASH_OFF,
  FLASH_ON,
  FRONT_CAMERA,
  ANDROID_CAMERA_PERMISSIONS,
  ANDROID_AUDIO_PERMISSIONS,
  PERMISSIONS_STATUS,
} from './utils';

const PozzleCamera = () => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const MAX_PRESSING_DURATION_MS = VIDEO_RECORD_DURATION_MS / 1000;
  const { t } = useTranslation();
  const [hasPermissionsAccepted, setPermissionsAccepted] = useState(false);
  const [videoRecording, setVideoRecording] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [cameraPosition, setCameraPosition] = useState(RNCamera.Constants.Type.back);
  const [isFlashEnabled, setIsFlashEnabled] = useState(RNCamera.Constants.FlashMode.off);
  const [isVideoPreviewPaused, setIsPaused] = useState(false);
  const cameraRef = useRef();
  const cameraPositionIconColor = cameraPosition === BACK_CAMERA ? Colors.WHITE : Colors.PINK;
  const closeIconColor = Colors.WHITE;
  const cameraFlashIconColor = !isFlashEnabled ? Colors.WHITE : Colors.PINK;
  const cameraPositionButtonStyle = {
    backgroundColor:
      cameraPosition === BACK_CAMERA ? Colors.THIRTYPERCENTBLACK : Colors.EIGHTYPERCENTWHITE,
  };
  const cameraFlashButtonStyle = {
    backgroundColor: !isFlashEnabled ? Colors.THIRTYPERCENTBLACK : Colors.EIGHTYPERCENTWHITE,
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
    console.log('startRecording');
    setIsRecording(true);
    cameraRef.current.recordAsync({ maxDuration: MAX_PRESSING_DURATION_MS }).then((data) => {
      console.log('log', data);
      setIsRecording(false);
      setVideoRecording({ file: data.uri });
      console.log('vide', videoRecording);
      forceUpdate();
    });
  };

  const cancelRecording = async () => {
    console.log('cancelRecording');
    setVideoRecording(false);
    forceUpdate();
  };

  const stopRecording = async () => {
    console.log('stopRecording');
    await cameraRef.current.stopRecording();
    setIsRecording(false);
    forceUpdate();
  };

  const changeCameraDevice = async () => {
    console.log('changeCameraDevice', cameraPosition);
    const _cameraPosition = cameraPosition === BACK_CAMERA ? FRONT_CAMERA : BACK_CAMERA;

    console.log('_cameraPosition', _cameraPosition);
    setCameraPosition(_cameraPosition);
    forceUpdate();
  };

  const changeFlashDevice = async () => {
    console.log('changeFlashDevice', _isFlashEnabled);
    const _isFlashEnabled = isFlashEnabled === FLASH_OFF ? FLASH_ON : FLASH_OFF;
    setIsFlashEnabled(_isFlashEnabled);
    console.log('changeFlashDevice', _isFlashEnabled);
    forceUpdate();
  };

  const handlePreviewPlaying = () => {
    setIsPaused(!isVideoPreviewPaused);
  };

  const pendingAuthorizationView = (
    <View style={styles.fakeVideo}>
      <Text>{t('pozzleActivityScreen.permissions.misc.pendingAuthorizationView')}</Text>
    </View>
  );

  const notAuthorizedView = (
    <View style={styles.fakeVideo}>
      <Text>{t('pozzleActivityScreen.permissions.misc.notAuthorizedView')}</Text>
      <Button backgroundColor={Colors.WHITE} onPress={openSettings}>
        <Text>{t('pozzleActivityScreen.permissions.misc.openSettings')}</Text>
      </Button>
    </View>
  );

  useEffect(() => {
    refreshPermissions();
  }, []);

  return (
    <>
      {videoRecording.file ? (
        <View style={styles.cameraContainer}>
          <Video
            paused={isVideoPreviewPaused}
            playInBackground={false}
            playWhenInactive={false}
            //poster="http://images.unsplash.com/photo-1603468850790-9bd9f28aee54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3072&q=80"
            posterResizeMode="cover"
            resizeMode="cover"
            source={{ uri: videoRecording.file }}
            style={styles.camera}
          />
          <View style={styles.cameraButtonContainer}>
            <TouchableOpacity style={positionButtonStyle} onPress={cancelRecording}>
              <CloseIcon color={closeIconColor} />
            </TouchableOpacity>
          </View>
          {isVideoPreviewPaused ? (
            <Pressable
              style={styles.videoButtonPlayback}
              onLongPress={() => setIsPaused((currentSetting) => !currentSetting)}
            >
              <PlayIcon color={Colors.EIGHTYPERCENTWHITE} size="large" />
            </Pressable>
          ) : (
            <Pressable
              style={styles.videoButtonPlayback}
              onLongPress={() => setIsPaused((currentSetting) => !currentSetting)}
            >
              <PauseIcon color={Colors.EIGHTYPERCENTWHITE} size="large" />
            </Pressable>
          )}
        </View>
      ) : (
        <View style={styles.cameraContainer}>
          <RNCamera
            androidCameraPermissionOptions={ANDROID_CAMERA_PERMISSIONS}
            androidRecordAudioPermissionOptions={ANDROID_AUDIO_PERMISSIONS}
            flashMode={isFlashEnabled}
            ref={cameraRef}
            type={cameraPosition}
            style={styles.camera}
            pendingAuthorizationView={pendingAuthorizationView}
            notAuthorizedView={notAuthorizedView}
          />
          <View style={styles.cameraButtonContainer}>
            <TouchableOpacity style={positionButtonStyle} onPress={changeCameraDevice}>
              <CameraIcon color={cameraPositionIconColor} />
            </TouchableOpacity>
            <TouchableOpacity style={flashButtonStyle} onPress={changeFlashDevice}>
              <FlashIcon color={cameraFlashIconColor} />
            </TouchableOpacity>

            <TouchableOpacity style={positionButtonStyle} onPress={startRecording}>
              <Text>Record</Text>
            </TouchableOpacity>
            <TouchableOpacity style={flashButtonStyle} onPress={stopRecording}>
              <Text>stop</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default PozzleCamera;

/*



<ProgressButton
        backgroundColor={Colors.WHITE}
        overlayColor={Colors.PINK}
        overlayDirection="RTL"
        text="Record"
        onFinish={stopRecording}
        onStart={startRecording}
      />*/

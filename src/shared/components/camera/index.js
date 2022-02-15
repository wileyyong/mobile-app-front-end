import { ProgressButton, CameraIcon, FlashIcon } from '$components';
import { Colors } from '$theme';

import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';

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
  const [hasPermissionsAccepted, setPermissionsAccepted] = useState(false);
  const [videoRecording, setVideoRecording] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [cameraPosition, setCameraPosition] = useState(BACK_CAMERA);
  const [isFlashEnabled, setIsFlashEnabled] = useState(FLASH_OFF);
  const cameraRef = useRef(null);

  const cameraPositionButtonStyle = {
    backgroundColor:
      cameraPosition === BACK_CAMERA ? Colors.THIRTYPERCENTBLACK : Colors.EIGHTYPERCENTWHITE,
  };
  const cameraFlashButtonStyle = {
    backgroundColor: !isFlashEnabled ? Colors.THIRTYPERCENTBLACK : Colors.EIGHTYPERCENTWHITE,
  };
  const cameraPositionIconColor = cameraPosition === BACK_CAMERA ? Colors.WHITE : Colors.PINK;
  const cameraFlashIconColor = !isFlashEnabled ? Colors.WHITE : Colors.PINK;
  const positionButtonStyle = StyleSheet.flatten([styles.cameraButton, cameraPositionButtonStyle]);
  const flashButtonStyle = StyleSheet.flatten([styles.cameraButton, cameraFlashButtonStyle]);

  const getCameraPermissions = async () => {
    // const dataPerms = await cameraRef.current.refreshAuthorizationStatus();
    const cameraStatus = RNCamera.Constants.CameraStatus;
    const audioStatus = RNCamera.Constants.recordAudioPermissionStatus;

    console.log('dataPerms', dataPerms);
    console.log('cameraStatus', cameraStatus);
    console.log('audioStatus', audioStatus);
    // const cameraPermission = await Camera.getCameraPermissionStatus();
    // const microphonePermission = await Camera.getMicrophonePermissionStatus();
    const cameraPermission = 'authorized';
    const microphonePermission = 'authorized';

    if (cameraPermission !== PERMISSIONS_STATUS.AUTHORIZED) {
      // await Camera.requestCameraPermission();
    }

    if (microphonePermission !== PERMISSIONS_STATUS.AUTHORIZED) {
      // await Camera.requestMicrophonePermission();
    }
  };

  const startRecording = async () => {
    setIsRecording(true);
    await cameraRef?.current?.startRecording({
      flash: isFlashEnabled ? FLASH_ON : FLASH_OFF,
      // eslint-disable-next-line no-console
      onRecordingError: (error) => console.error(error),
      onRecordingFinished: (video) => {
        setVideoRecording(video?.path);
        setIsRecording(false);
      },
    });
  };

  const stopRecording = async () => {
    await cameraRef?.current?.stopRecording();

    if (
      (isRecording && videoRecording.trim() !== ' ') ||
      videoRecording !== undefined ||
      videoRecording !== null
    ) {
      //  Alert.alert('Success!');
    }
    setIsRecording(false);
  };

  const changeCameraDevice = () => {
    setCameraPosition(cameraPosition === BACK_CAMERA ? FRONT_CAMERA : BACK_CAMERA);
  };

  const changeFlashDevice = () => {
    setIsFlashEnabled(isFlashEnabled === FLASH_OFF ? FLASH_ON : FLASH_OFF);
  };

  useEffect(() => {
    getCameraPermissions();
  }, []);

  if (!hasPermissionsAccepted) return <ActivityIndicator color="green" size="large" />;

  return (
    <>
      <View style={styles.cameraContainer}>
        {
          <RNCamera
            androidCameraPermissionOptions={ANDROID_CAMERA_PERMISSIONS}
            androidRecordAudioPermissionOptions={ANDROID_AUDIO_PERMISSIONS}
            flashMode={isFlashEnabled}
            ref={cameraRef}
            style={styles.image}
            type={cameraPosition}
          />
        }

        <View style={styles.cameraButtonContainer}>
          <TouchableOpacity style={positionButtonStyle} onPress={changeCameraDevice}>
            <CameraIcon color={cameraPositionIconColor} />
          </TouchableOpacity>
          <TouchableOpacity style={flashButtonStyle} onPress={changeFlashDevice}>
            <FlashIcon color={cameraFlashIconColor} />
          </TouchableOpacity>
        </View>
      </View>

      <ProgressButton
        backgroundColor={Colors.WHITE}
        overlayColor={Colors.PINK}
        overlayDirection="RTL"
        text="Record"
        onFinish={stopRecording}
        onStart={startRecording}
      />
    </>
  );
};

export default PozzleCamera;

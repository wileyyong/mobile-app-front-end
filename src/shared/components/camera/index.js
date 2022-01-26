import { AnimatedButton, CameraIcon, FlashIcon } from '$components';
import { Colors } from '$theme';

import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

import styles from './style';
import { BACK_CAMERA, FLASH_OFF, FLASH_ON, FRONT_CAMERA } from './utils';

const PozzleCamera = () => {
  const [videoRecording, setVideoRecording] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [cameraPosition, setCameraPosition] = useState(BACK_CAMERA);
  const [isFlashEnabled, setIsFlashEnabled] = useState(false);
  const devices = useCameraDevices();
  const device = devices[cameraPosition];
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

  const [buttonOpts, updateBtnOpts] = useState({
    message: 'Record',
    direction: 'RTL',
    backgroundColor: Colors.PINK,
  });

  const getCameraPermissions = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();

    if (cameraPermission !== 'authorized') {
      await Camera.requestCameraPermission();
    }

    if (microphonePermission !== 'authorized') {
      await Camera.requestMicrophonePermission();
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

    if (videoRecording.trim() !== ' ' || videoRecording !== undefined || videoRecording !== null) {
      //Alert.alert('Success!');
    }
    setIsRecording(false);
  };

  const uploadVideo = async () => {};

  const changeCameraDevice = () => {
    setCameraPosition(cameraPosition === BACK_CAMERA ? FRONT_CAMERA : BACK_CAMERA);
  };

  const onPress = async (_startRecording) => {
    // Ready to Record
    if (buttonOpts.direction === 'RTL' && _startRecording) {
      updateBtnOpts({ message: '', direction: 'LTR', backgroundColor: Colors.WHITE });
      await startRecording(true);
      return;
    }
    // Recording ends
    if (buttonOpts.direction === 'RTL' && !_startRecording) {
      updateBtnOpts({ message: 'Post', direction: 'LTR', backgroundColor: Colors.WHITE });
      await stopRecording(false);
      return;
    }

    // Post video to backend
    if (buttonOpts.direction === 'LTR' && !isRecording) {
      await uploadVideo();
      return;
    }
  };

  useEffect(() => {
    getCameraPermissions();
  }, []);

  if (device === null || device === undefined)
    return <ActivityIndicator color="green" size="large" />;

  return (
    <>
      <View style={styles.cameraContainer}>
        <Camera
          audio
          device={device}
          enableZoomGesture
          isActive
          ref={cameraRef}
          style={styles.image}
          video
        />

        <View style={styles.cameraButtonContainer}>
          <TouchableOpacity style={positionButtonStyle} onPress={changeCameraDevice}>
            <CameraIcon color={cameraPositionIconColor} />
          </TouchableOpacity>
          <TouchableOpacity
            style={flashButtonStyle}
            onPress={() => setIsFlashEnabled((boolean) => !boolean)}
          >
            <FlashIcon color={cameraFlashIconColor} />
          </TouchableOpacity>
        </View>
      </View>
      <AnimatedButton
        backgroundColor={buttonOpts.backgroundColor}
        direction={buttonOpts.direction}
        message={buttonOpts.message}
        onPress={onPress}
      />
    </>
  );
};

export default PozzleCamera;

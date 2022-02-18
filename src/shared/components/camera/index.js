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
import PozzleCameraView from './camera-view';
import PozzleVideoView from './video-view';
import PozzleCameraButtons from './camera-buttons';

const PozzleCamera = () => {
  const { t } = useTranslation();
  const cameraRef = useRef();
  const videoRef = useRef();
  const cameraButtonsRef = useRef();

  //const [hasPermissionsAccepted, setPermissionsAccepted] = useState(false);
  const [cameraPosition, setCameraPosition] = useState(BACK_CAMERA);
  const [flashMode, setFlashMode] = useState(FLASH_OFF);

  const cameraPositionIconColor = cameraPosition === BACK_CAMERA ? Colors.WHITE : Colors.PINK;
  const cameraFlashIconColor = !flashMode ? Colors.WHITE : Colors.PINK;

  const cameraFlashButtonStyle = {
    backgroundColor: !flashMode ? Colors.THIRTYPERCENTBLACK : Colors.EIGHTYPERCENTWHITE,
  };

  const flashButtonStyle = StyleSheet.flatten([styles.cameraButton, cameraFlashButtonStyle]);
  const submitVideo = async () => {};

  const startRecording = async () => {
    console.log('startRecording2');
    const videoData = await cameraRef?.current.startRecording();
    videoRef.current.setVideoFile(videoData.uri);
    cameraRef?.current.setVideoFile(videoData.uri);
    cameraButtonsRef?.current.setVideoFile(videoData.uri);
  };

  const cancelRecording = () => {
    console.log('cancelRecording2');
    cameraRef?.current.cancelRecording();
    cameraButtonsRef?.current.cancelRecording();
  };

  const stopRecording = () => {
    console.log('stopRecording2');
    cameraRef?.current.stopRecording();
  };

  return (
    <>
      <View style={styles.cameraContainer}>
        <PozzleVideoView ref={videoRef} cancelRecording={cancelRecording}></PozzleVideoView>
        <PozzleCameraView
          startRecording={startRecording}
          cancelRecording={cancelRecording}
          stopRecording={stopRecording}
          ref={cameraRef}
        ></PozzleCameraView>
      </View>
      <View style={styles.buttonContainer}>
        <PozzleCameraButtons
          startRecording={startRecording}
          cancelRecording={cancelRecording}
          stopRecording={stopRecording}
          ref={cameraButtonsRef}
        ></PozzleCameraButtons>
      </View>
    </>
  );
};

export default PozzleCamera;

/*


*/

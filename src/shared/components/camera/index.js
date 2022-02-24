import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CameraIcon, FlashIcon } from '$components';
import styles from './style';
import PozzleCameraView from './camera-view';
import PozzleVideoView from './video-view';
import PozzleCameraButtons from './camera-buttons';
import PozzleCameraCancelButton from './camera-buttons/cancel';
import {
  BACK_CAMERA,
  FLASH_OFF,
  FLASH_ON,
  FRONT_CAMERA,
  ANDROID_CAMERA_PERMISSIONS,
  ANDROID_AUDIO_PERMISSIONS,
} from './utils';
import { Colors } from '$theme';
import { useEffect } from 'react';
const PozzleCamera = () => {
  const [cameraPosition, setCameraPosition] = useState(BACK_CAMERA);
  const [flashMode, setFlashMode] = useState(FLASH_OFF);
  const [isRecording, setIsRecording] = useState(null);
  const [file, setFile] = useState(null);

  const videoRef = useRef();
  const cameraButtonsRef = useRef();
  const cancelButtonRef = useRef();

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

  const startRecording = async () => {
    console.log('CAMERA startRecording');
    setIsRecording(true);
    //const videoData = await cameraRef?.current._startRecording();

    /*
    videoRef.current.setVideoFile(videoData.uri);
    cameraRef.current.setVideoFile(videoData.uri);
    cameraButtonsRef.current.setVideoFile(videoData.uri);
    cancelButtonRef.current.setVideoFile(videoData.uri);*/
  };

  const cancelRecording = () => {
    setFile(null);
    /* cameraRef.current.cancelRecording();
    cameraButtonsRef.current.cancelRecording();
    videoRef.current.cancelRecording();*/
  };

  const stopRecording = () => {
    console.log('CAMERA stopRecording');
    setIsRecording(false);
    //cameraRef.current.stopRecording();
  };

  const renderCamera = () => {
    return (
      <PozzleCameraView
        cancelRecording={cancelRecording}
        startRecording={startRecording}
        stopRecording={stopRecording}
        setCameraPosition={setCameraPosition}
        setFlashMode={setFlashMode}
        flashMode={flashMode}
        cameraPosition={cameraPosition}
        isRecording={isRecording}
        file={file}
        setFile={setFile}
      />
    );
  };

  const renderCameraButtons = () => {
    return (
      <View style={styles.buttonContainer}>
        <PozzleCameraButtons
          cancelRecording={cancelRecording}
          startRecording={startRecording}
          stopRecording={stopRecording}
          file={file}
        />
      </View>
    );
  };

  const renderVideoPreview = () => {
    return <PozzleVideoView cancelRecording={cancelRecording} file={file} />;
  };

  const renderActionsButtons = () => {
    return (
      <>
        {file ? (
          <View style={styles.cameraCancelContainer}>
            <PozzleCameraCancelButton cancelRecording={cancelRecording} />
          </View>
        ) : (
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
        )}
      </>
    );
  };

  return (
    <>
      <View style={styles.cameraContainer}>
        {renderVideoPreview()}

        {renderCamera()}
        {renderActionsButtons()}
      </View>

      {renderCameraButtons()}
    </>
  );
};

export default PozzleCamera;

/* back


<>
      <View style={styles.cameraContainer}>
        <PozzleVideoView cancelRecording={cancelRecording} ref={videoRef} />
        <PozzleCameraView
          cancelRecording={cancelRecording}
          ref={cameraRef}
          startRecording={startRecording}
          stopRecording={stopRecording}
        />
      </View>
      <PozzleCameraCancelButton cancelRecording={cancelRecording} ref={cancelButtonRef} />
      <View style={styles.buttonContainer}>
        <PozzleCameraButtons
          cancelRecording={cancelRecording}
          ref={cameraButtonsRef}
          startRecording={startRecording}
          stopRecording={stopRecording}
        />
      </View>
    </>




*/

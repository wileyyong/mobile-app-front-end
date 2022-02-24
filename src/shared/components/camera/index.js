import { CameraIcon, FlashIcon } from '$components';
import { Colors } from '$theme';

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import styles from './style';
import PozzleCameraView from './camera-view';
import PozzleVideoView from './video-view';
import PozzleCameraButtons from './camera-buttons';
import PozzleCameraCancelButton from './camera-buttons/cancel';
import { BACK_CAMERA, FLASH_OFF, FLASH_ON, FRONT_CAMERA } from './utils';

const PozzleCamera = () => {
  const [cameraPosition, setCameraPosition] = useState(BACK_CAMERA);
  const [flashMode, setFlashMode] = useState(FLASH_OFF);
  const [isRecording, setIsRecording] = useState(null);
  const [file, setFile] = useState(null);

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
    setIsRecording(true);
  };

  const cancelRecording = () => {
    setFile(null);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const renderCamera = () => {
    return (
      <PozzleCameraView
        cameraPosition={cameraPosition}
        cancelRecording={cancelRecording}
        file={file}
        flashMode={flashMode}
        isRecording={isRecording}
        setCameraPosition={setCameraPosition}
        setFile={setFile}
        setFlashMode={setFlashMode}
        startRecording={startRecording}
        stopRecording={stopRecording}
      />
    );
  };

  const renderCameraButtons = () => {
    return (
      <View style={styles.buttonContainer}>
        <PozzleCameraButtons
          cancelRecording={cancelRecording}
          file={file}
          startRecording={startRecording}
          stopRecording={stopRecording}
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

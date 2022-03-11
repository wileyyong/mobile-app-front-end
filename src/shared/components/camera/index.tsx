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
  const [cameraPosition, setCameraPosition] = useState<'front' | 'back' | undefined>(BACK_CAMERA);
  const [flashMode, setFlashMode] = useState<'auto' | 'on' | 'off' | 'torch' | undefined>(
    FLASH_OFF
  );
  const [isRecording, setIsRecording] = useState<boolean | undefined>(undefined);
  const [file, setFile] = useState<string | undefined>(undefined);

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
    setFile(undefined);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const renderCamera = () => {
    return (
      <PozzleCameraView
        cameraPosition={cameraPosition}
        file={file}
        flashMode={flashMode}
        isRecording={isRecording}
        setFile={setFile}
      />
    );
  };

  const renderCameraButtons = () => {
    return (
      <View style={styles.buttonContainer}>
        <PozzleCameraButtons
          file={file}
          startRecording={startRecording}
          stopRecording={stopRecording}
        />
      </View>
    );
  };

  const renderVideoPreview = () => {
    return <PozzleVideoView file={file} />;
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
                setCameraPosition((value?: string) =>
                  value === BACK_CAMERA ? FRONT_CAMERA : BACK_CAMERA
                );
              }}
            >
              <CameraIcon color={cameraPositionIconColor} size={undefined} style={undefined} />
            </TouchableOpacity>
            <TouchableOpacity
              style={flashButtonStyle}
              onPress={() => {
                setFlashMode((value?: string) => (value === FLASH_OFF ? FLASH_ON : FLASH_OFF));
              }}
            >
              <FlashIcon color={cameraFlashIconColor} size={undefined} style={undefined} />
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

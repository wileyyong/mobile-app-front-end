import { CameraIcon, FlashIcon } from '$components';
import { Colors } from '$theme';

import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateRecordingAndFile,
  updateRecordingStatus,
} from '../../../redux/progress-button/actions';

import styles from './style';
import PozzleCameraView from './camera-view';
import PozzleVideoView from './video-view';
import PozzleCameraCancelButton from './camera-buttons/cancel';
import { BACK_CAMERA, FLASH_OFF, FLASH_ON, FRONT_CAMERA } from './utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PozzleCamera = () => {
  const dispatch = useDispatch();
  const progressButtonRedux = useSelector(
    (state: any) => state.ProgressButtonRedux,
  );
  const [cameraPosition, setCameraPosition] = useState<
    'front' | 'back' | undefined
  >(BACK_CAMERA);
  const [flashMode, setFlashMode] = useState<
    'auto' | 'on' | 'off' | 'torch' | undefined
  >(FLASH_OFF);
  const [isRecording, setIsRecording] = useState<boolean | undefined>(
    undefined,
  );
  const [file, setFile] = useState<string | undefined>(undefined);

  const cameraPositionIconColor =
    cameraPosition === BACK_CAMERA ? Colors.WHITE : Colors.PINK;
  const cameraFlashIconColor = !flashMode ? Colors.WHITE : Colors.PINK;
  const cameraPositionButtonStyle = {
    backgroundColor:
      cameraPosition === BACK_CAMERA
        ? Colors.THIRTYPERCENTBLACK
        : Colors.EIGHTYPERCENTWHITE,
  };
  const cameraFlashButtonStyle = {
    backgroundColor:
      flashMode === FLASH_OFF
        ? Colors.THIRTYPERCENTBLACK
        : Colors.EIGHTYPERCENTWHITE,
  };

  const positionButtonStyle = StyleSheet.flatten([
    styles.cameraButton,
    cameraPositionButtonStyle,
  ]);
  const flashButtonStyle = StyleSheet.flatten([
    styles.cameraButton,
    cameraFlashButtonStyle,
  ]);

  const startRecording = async () => {
    setIsRecording(true);
    dispatch(updateRecordingStatus(true));
  };

  const cancelRecording = () => {
    setTimeout(() => {
      dispatch(updateRecordingAndFile(false, false));
    }, 500);
    setFile(undefined);
  };

  const stopRecording = () => {
    setIsRecording(false);
    dispatch(updateRecordingStatus(false));
  };

  const renderCamera = () => {
    return (
      <PozzleCameraView
        cameraPosition={cameraPosition}
        file={file}
        flashMode={flashMode}
        isRecording={isRecording}
        setFile={setFile}
        setIsRecording={setIsRecording}
        setCameraPosition={setCameraPosition}
      />
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
            <PozzleCameraCancelButton
              cancelRecording={cancelRecording}
              setFile={setFile}
            />
          </View>
        ) : (
          <View style={styles.cameraButtonContainer}>
            <TouchableOpacity
              style={positionButtonStyle}
              onPressIn={() => {
                setCameraPosition((value?: string) =>
                  value === BACK_CAMERA ? FRONT_CAMERA : BACK_CAMERA,
                );
              }}>
              <CameraIcon color={cameraPositionIconColor} />
            </TouchableOpacity>
            <TouchableOpacity
              style={flashButtonStyle}
              onPressIn={() => {
                setFlashMode((value?: string) =>
                  value === FLASH_OFF ? FLASH_ON : FLASH_OFF,
                );
              }}>
              <FlashIcon color={cameraFlashIconColor} />
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  };

  useEffect(() => {
    if (
      progressButtonRedux.isRecording === true &&
      (isRecording === undefined || isRecording === false)
    ) {
      startRecording();
    }

    if (progressButtonRedux.isRecording === false && isRecording === true) {
      stopRecording();
    }
  }, [progressButtonRedux.isRecording]);

  return (
    <View style={styles.cameraContainer}>
      {renderVideoPreview()}
      {renderCamera()}
      {renderActionsButtons()}
    </View>
  );
};

export default PozzleCamera;
/*  <TapGestureHandler
  onHandlerStateChange={event => { 
    if (event.nativeEvent.state === State.ACTIVE && !file && !isRecording) {
      setCameraPosition((value?: string) =>
        value === BACK_CAMERA ? FRONT_CAMERA : BACK_CAMERA,
      );
    }
  }}
  numberOfTaps={2}>  </TapGestureHandler>*/

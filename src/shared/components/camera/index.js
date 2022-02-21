import React, { useRef } from 'react';
import { View } from 'react-native';

import styles from './style';
import PozzleCameraView from './camera-view';
import PozzleVideoView from './video-view';
import PozzleCameraButtons from './camera-buttons';
import PozzleCameraCancelButton from './camera-buttons/cancel';

const PozzleCamera = () => {
  const cameraRef = useRef();
  const videoRef = useRef();
  const cameraButtonsRef = useRef();
  const cancelButtonRef = useRef();

  const startRecording = async () => {
    const videoData = await cameraRef?.current.startRecording();

    videoRef.current.setVideoFile(videoData.uri);
    cameraRef.current.setVideoFile(videoData.uri);
    cameraButtonsRef.current.setVideoFile(videoData.uri);
    cancelButtonRef.current.setVideoFile(videoData.uri);
  };

  const cancelRecording = () => {
    cameraRef.current.cancelRecording();
    cameraButtonsRef.current.cancelRecording();
    videoRef.current.cancelRecording();
  };

  const stopRecording = () => {
    cameraRef.current.stopRecording();
  };

  return (
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
  );
};

export default PozzleCamera;

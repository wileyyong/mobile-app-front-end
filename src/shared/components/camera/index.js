import { Button, Text } from '$components';
import { Colors } from '$theme';

import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

import styles from './style';

const PozzleCamera = () => {
  const [recording, setRecording] = useState('');
  const [isRecording, setIsRecording] = useState('');
  const devices = useCameraDevices();
  const device = devices.back;
  const cameraRef = useRef(null);

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
      flash: 'on',
      // eslint-disable-next-line no-console
      onRecordingError: (error) => console.error(error),
      onRecordingFinished: (video) => {
        setRecording(video?.path);
        setIsRecording(false);
      },
    });
  };

  const stopRecording = async () => {
    await cameraRef?.current?.stopRecording();

    if (recording.trim() !== ' ' || recording !== undefined || recording !== null) {
      Alert.alert('Success!');
    }
    setIsRecording(false);
  };

  useEffect(() => {
    getCameraPermissions();
  }, []);

  if (device === null || device === undefined)
    return <ActivityIndicator color="green" size="large" />;

  return (
    <>
      <View style={styles.cameraContainer}>
        <Camera audio device={device} isActive ref={cameraRef} style={styles.image} video />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          backgroundColor={Colors.PINK}
          disabled={false}
          onPress={isRecording ? stopRecording : startRecording}
        >
          <Text color={Colors.WHITE} size="xs" style={{ paddingVertical: 4 }} weight="bold">
            {isRecording ? 'Stop' : 'Record'}
          </Text>
        </Button>
      </View>
    </>
  );
};

export default PozzleCamera;

import { Platform } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';

export const requestCamera = async () => {
  return request(
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
  );
};

export const requestMicrophone = async () => {
  return request(
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.CAMERA
      : PERMISSIONS.ANDROID.RECORD_AUDIO,
  );
};

import { RNCamera } from 'react-native-camera';
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();

export const BACK_CAMERA = RNCamera.Constants.Type.back;
export const FRONT_CAMERA = RNCamera.Constants.Type.front;
export const FLASH_ON = RNCamera.Constants.FlashMode.torch;
export const FLASH_OFF = RNCamera.Constants.FlashMode.off;

export const ANDROID_CAMERA_PERMISSIONS = {
  buttonNegative: t('pozzleActivityScreen.permissions.camera.buttonNegative'),
  buttonPositive: t('pozzleActivityScreen.permissions.camera.buttonPositive'),
  message: t('pozzleActivityScreen.permissions.camera.message'),
  title: t('pozzleActivityScreen.permissions.camera.title'),
};

export const ANDROID_AUDIO_PERMISSIONS = {
  buttonNegative: t('pozzleActivityScreen.permissions.audio.buttonNegative'),
  buttonPositive: t('pozzleActivityScreen.permissions.audio.buttonPositive'),
  message: t('pozzleActivityScreen.permissions.audio.message'),
  title: t('pozzleActivityScreen.permissions.audio.title'),
};

export const PERMISSIONS_STATUS = { AUTHORIZED: 'AUTHORIZED' };

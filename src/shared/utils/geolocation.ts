/* eslint-disable no-console */
import { ASYNC_STORAGE_LOCATION_KEY } from '$constants';

import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PermissionsAndroid, Platform } from 'react-native';
import { MapBoxAPI } from '$api';
import { setItemToStorage } from '$utils';

/**
 * Request permission and get the user's location.
 * Currently settings the result in async storage.
 */
export const getLocation = async () => {
  let auth;

  if (Platform.OS === 'android') {
    auth = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        message: 'This app needs access to your location',
        title: 'Location Permission',
        buttonPositive: '',
      },
    );
  } else if (Platform.OS === 'ios') {
    auth = await Geolocation.requestAuthorization('whenInUse');
  }

  if (auth === 'granted') {
    Geolocation.getCurrentPosition(
      async position => {
        console.log('position', position.coords);
        await setItemToStorage(
          ASYNC_STORAGE_LOCATION_KEY,
          JSON.stringify(position.coords),
        );
      },
      error => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 15000 },
    );
  }
};

export const loc2address = async (
  lat: string,
  lng: string,
): Promise<string> => {
  const result = await MapBoxAPI.translateGPStoLocation(
    Number(lat),
    Number(lng),
  );
  return result;
};

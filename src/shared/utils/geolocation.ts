/* eslint-disable no-console */
import { ASYNC_STORAGE_LOCATION_KEY, COMPLETED_ONBOARDING } from '$constants';

import * as Sentry from "@sentry/react-native";
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PermissionsAndroid, Platform } from 'react-native';
import { MapBoxAPI } from '$api';
import { setItemToStorage } from '$utils';

/**
 * Request permission and get the user's location.
 * Currently settings the result in async storage.
 */
export const getLocation = async (userData?: any, navigation?: any) : Promise<any> => {
  return new Promise(async (resolve,reject)=>{
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
        await Geolocation.getCurrentPosition( (position) => {
            console.log('location ', position);
            const { latitude, longitude } = position.coords;
            if (navigation) {
              userData.lat = latitude;
              userData.lng = longitude;
              navigation.navigate(COMPLETED_ONBOARDING, {
                userData,
              });
              resolve({});
            } else {
              resolve({ lat: latitude, lng: longitude });
            }
          },
          error => {
            console.log('location error', error);
            Sentry.captureException(error);
            resolve(false)
          },
          { 
            accuracy: {
              android: 'high',
              ios: 'best',
            },
            enableHighAccuracy: true, maximumAge: 0, timeout: 15000 });
      } else {
        console.log('not granted');
        // not granted
        resolve(false);
      }
  });
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

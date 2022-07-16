import { MapBoxAPI } from '$api';
import { ASYNC_STORAGE_LOCATION_KEY } from '$constants';
import { fetchItemFromStorage } from '$utils';

export const translateGPStoLocation = async (item: any) => {
  if (item.planetId === undefined)
    if (item.location === undefined) {
      const result: any = await MapBoxAPI.translateGPStoLocation(
        item.coordinates[0],
        item.coordinates[1],
      );

      if (result && result.data?.features[0])
        return result.data?.features[0].place_name;
      else return item.coordinates[0] + ' - ' + item.coordinates[1];
    } else
      return (
        item.location.coordinates[0] + ' - ' + item.location.coordinates[1]
      );
  else return item.planetId;
};

export const getLocationNameByGPS = async (lat, long) => {
  console.log('lat',lat, long)
  const result: any = await MapBoxAPI.translateGPStoLocation(
    26.6130449,21.6039577
  );
  console.log('result',result);
  return result;
};

export const getUserLocation = async () => {
  const userLocation = await fetchItemFromStorage(ASYNC_STORAGE_LOCATION_KEY);
  if (userLocation) { 
    const JSONLocation = JSON.parse(userLocation);
    return {lat: JSONLocation.latitude ,long: JSONLocation.longitude}
  }
  return false;
}
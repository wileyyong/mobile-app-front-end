import { MapBoxAPI } from '$api';

export const translateGPStoLocation = async (item: any) => {
  if (item.planetId === undefined)
    if (item.location === undefined) {
      const result: any = await MapBoxAPI.translateGPStoLocation(
        item.coordinates[0],
        item.coordinates[1],
      );
      return result.data.features[0].place_name;
    } else
      return (
        item.location.coordinates[0] + ' - ' + item.location.coordinates[1]
      );
  else return item.planetId;
};

export const translateGPStoLocation = (item: any) => {
  if (item.planetId === undefined)
    if (item.location === undefined)
      return item.coordinates[0] + '-' + item.coordinates[1];
    else
      return item.location.coordinates[0] + '-' + item.location.coordinates[1];
  else return item.planetId;
};

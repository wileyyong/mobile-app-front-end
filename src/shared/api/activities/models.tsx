export type activityParams = {
  title?: string;
  lat?: number;
  long?: number;
  page?: number;
};

export type activityModel = {
  _id: string;
  title: string;
  videoSrc: string;
  lat: number;
  long: number;
  createdBy?: string;
  isActive: true;
  pozzleCount: number;
  POZpledged: number;
  planetId: string;
  createdOn?: string;
  inspiredBy?: string;
  pozzles:[],
  location?: {
    type: string;
    coordinates: Array<number>;
    locationName?: string;
  };
  locationName?: string;
  fromAddPozzle?: boolean
};

export type createActivityModel = {
  activityId?: string;
  title: string;
  videoSrc: string;
  locationName?: string;
  lat: number;
  long: number;
  inspiredBy?: string;
  rewardId?: string
};


export type activityVideo = {
  data?: {},
  muxThumbnail?: string,
  videoSrc?: string,
  cachedSrc?: string,
  processedVideoSrc?: string,
  pozzles: { videoSrc: string, processedVideoSrc?: string }[]
}

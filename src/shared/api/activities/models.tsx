export type activityParams = {
  title?: string;
  lat?: number;
  long?: number;
  page: number;
};

export type activityModel = {
  title: string;
  videoSrc: string;
  lat: number;
  long: number;
  createdBy: string;
  location: {
    type: string;
    coordinates: Array<number>;
  };
};

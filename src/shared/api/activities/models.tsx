export type activityParams = {
  title?: string;
  lat?: number;
  long?: number;
  page: number;
};

export type activityModel = {
  activityId?: string;
  title: string;
  videoSrc: string;
  lat: number;
  long: number;
  createdBy: string;
  createdOn?: string;
  inspiredBy?: string;
  location?: {
    type: string;
    coordinates: Array<number>;
  };
};

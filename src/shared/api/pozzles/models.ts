export type pozzleParams = {
    lat: number;
    long: number;
    zoom: number;
};


  export type pozzleModel = {
    _id: number,
    isDeleted: boolean,
    createdOn: Date,
    location: {
        type: string, // POINT
        coordinates:[number,number]
    },
    report: {
        noOfReport: number,
        complaint:[]
    },
    vqs: number,
    viewCount: number,
    videoSrc: string,
    inspiredBy: any | null, // unknown what type is it?
    isActive: boolean,
    createdBy: string,
    planetId: string | null,
    activityId: string,
    __v: number,
    muxAssetId: string,
    muxPlaybackId: string,
    muxProcessing: boolean,
    muxThumbnail: string,
    processedVideoSrc: string,
    dist: {
        calculated: number
    }
  };
  
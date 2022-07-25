/* eslint-disable global-require */

export const shareIcon = require('src/assets/images/shareIcon.png');
export const reportIcon = require('src/assets/images/reportIcon.png');

export interface IVideoItem {
  index?: number;
  isCurrentVideo?: boolean;
  POZpledged?: number;
  _id?: string;
  createdBy?: string;
  createdOn?: string;
  inspiredBy?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  location?: { coordinates: []; type: string, locationName?:string };
  planetId?: number;
  pozzleCount?: number;
  pozzlesPledged?: number;
  title?: string;
  onPressBack?: () => void;
  src?: string;
  cachedSrc?: string;
  processedVideoSrc?:string;
  pozzleId?: string;
  walletAddress: string;
  muxThumbnail?: string;
  locationName?:string;
}

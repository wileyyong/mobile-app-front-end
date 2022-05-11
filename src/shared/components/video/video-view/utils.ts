/* eslint-disable global-require */

export const shareIcon = require('src/assets/images/shareIcon.png');
export const reportIcon = require('src/assets/images/reportIcon.png');

export interface IVideoItem {
  isCurrentVideo?: boolean;
  POZpledged?: number;
  _id?: string;
  createdBy?: string;
  createdOn?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  location?: [{ coordinates: []; type: string }];
  planetId?: number;
  pozzleCount?: number;
  title?: string;
  onPressBack?: () => void;
  src: string;
  cachedSrc?: string;
}

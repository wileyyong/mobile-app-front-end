import { IVideoItem } from './utils';
import convertToProxyURL from 'react-native-video-cache';

export const cacheVideo = async (src: string) => {
  try {
    const r = await convertToProxyURL(src);
    return r;
  } catch {
    return src;
  }
};

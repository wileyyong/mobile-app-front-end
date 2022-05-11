import { IVideoItem } from './utils';
import convert from 'react-native-video-cache';

export const cacheVideo = async (src: string) => {
  try {
    const r = await convert(src);
    console.log('r ', r);
    return r;
  } catch {
    return src;
  }
};

import { Image } from 'react-native';
import { useAssets } from 'expo-asset';
import React from 'react';

type WrappedImageProps = {
  source: any;
};

const WrappedImage = ({source, ...props}: WrappedImageProps) => {
  const [assets] = useAssets(source);

  if (!assets) return null;

  return <Image source={source} {...props} />
};

export default WrappedImage;

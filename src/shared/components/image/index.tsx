import { Image, ViewStyle } from 'react-native';
import { useAssets } from 'expo-asset';
import React from 'react';

type WrappedImageProps = {
  source: any;
  style: ViewStyle;
};

const WrappedImage = ({ source, style, ...props }: WrappedImageProps) => {
  const [assets] = useAssets(source);

  if (!assets) return null;

  return <Image source={source} style={style} {...props} />;
};

export default WrappedImage;

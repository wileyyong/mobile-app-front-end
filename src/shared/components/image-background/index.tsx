import { ImageBackground } from 'react-native';
import { useAssets } from 'expo-asset';
import React from 'react';

type WrappedImageBackgroundProps = {
  children: React.ReactNode;
  source: any;
};

const WrappedImageBackground = ({ children, source, ...props }: WrappedImageBackgroundProps) => {
  const [assets] = useAssets(source);

  if (!assets) return children;

  return (
    <ImageBackground source={source} {...props}>
      {children}
    </ImageBackground>
  );
};

export default WrappedImageBackground;

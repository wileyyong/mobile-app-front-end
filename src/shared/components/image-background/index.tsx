import { ImageBackground, ImageBackgroundProps } from 'react-native';
import { useAssets } from 'expo-asset';
import React, { PropsWithChildren } from 'react';

type WrappedImageBackgroundProps = ImageBackgroundProps & {
  source: any;
};

const WrappedImageBackground = ({
  children,
  source,
  ...props
}: PropsWithChildren<WrappedImageBackgroundProps>) => {
  const [assets] = useAssets(source);

  if (!assets) return <>{children}</>;

  return (
    <ImageBackground source={source} {...props}>
      {children}
    </ImageBackground>
  );
};

export default WrappedImageBackground;

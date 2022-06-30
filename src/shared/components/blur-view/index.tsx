import React, { ReactElement } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { BlurView as RNBlurView } from '@react-native-community/blur';

interface IBlurView {
  children: ReactElement;
  style?: object;
  blurType?: string;
}

const BlurView = ({ children, ...props }: IBlurView) => {
  if (Platform.OS === 'ios') {
    return <RNBlurView {...props}>{children}</RNBlurView>;
  }

  const styles = StyleSheet.flatten([
    {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    props.style,
  ]);

  return (
    <View {...props} style={styles}>
      {children}
    </View>
  );
};

export default BlurView;

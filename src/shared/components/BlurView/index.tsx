import React, { ReactElement } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { BlurView as RNBlurView } from '@react-native-community/blur';

interface IBlurView {
  children: ReactElement;
  style?: object;
}

const BlurView = ({ children, ...props }: IBlurView) => {
  if (Platform.OS === 'ios') {
    return <RNBlurView {...props}>{children}</RNBlurView>;
  }

  const styles = StyleSheet.flatten([
    props.style,
    {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
  ]);

  return (
    <View {...props} style={styles}>
      {children}
    </View>
  );
};

export default BlurView;

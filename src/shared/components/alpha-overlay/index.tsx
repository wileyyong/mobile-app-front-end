import React, { useState } from 'react';
import { Text, VStack } from '$components';
import styles from './style';
import { Colors } from '$theme';
import { BlurView } from '@react-native-community/blur';
import { ViewStyle } from 'react-native';

interface IAlphaOverlay {
  text: string;
  style?: ViewStyle
}

const AlphaOverlay = ({ text,style }: IAlphaOverlay) => {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, 1);

  return (
    show && (
      <VStack style={[styles.overlay, style]} justify="center" align="center">
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          blurAmount={5}
          blurType={'dark'}
          overlayColor={Colors.SEVENTYPERCENTPURPLE}></BlurView>
        <Text color={Colors.GRAY3}>{text}</Text>
      </VStack>
    )
  );
};

export default AlphaOverlay;

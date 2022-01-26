import { Colors } from '$theme';
import { Button, Text } from '$components';

import React, { useState } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

/**
 * A custom animated button
 */
const AnimatedButton = ({ onPress, backgroundColor, direction, message }) => {
  const [buttonOpts] = useState({
    animation: new Animated.Value(0),
    backgroundColor,
    direction,
    message,
    opacity: new Animated.Value(1),
    recordTimeInSec: 5,
  });

  const [buttonExtraStyle, updateBtnStyle] = useState(
    StyleSheet.flatten([{ backgroundColor }, { width: '100%' }])
  );

  const [buttonTextExtraStyle, updateBtnTextStyle] = useState(
    StyleSheet.flatten([{ color: Colors.WHITE }])
  );

  // Background Progress (LTR - Video)
  const progressInterpolateLTR = buttonOpts.animation.interpolate({
    extrapolate: 'clamp',
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const colorInterpolateLTR = buttonOpts.animation.interpolate({
    inputRange: [1, 1],
    outputRange: [Colors.PINK, Colors.PINK],
  });

  // Background Progress (RTL - Upload)
  const progressInterpolateRTL = buttonOpts.animation.interpolate({
    extrapolate: 'clamp',
    inputRange: [0, 1],
    outputRange: ['100%', '0%'],
  });

  const colorInterpolateRTL = buttonOpts.animation.interpolate({
    inputRange: [1, 1],
    outputRange: [Colors.PINK, Colors.PINK],
  });

  const [progressStyle, updateProgressStyle] = useState({
    backgroundColor: colorInterpolateRTL,
    bottom: 0,
    opacity: buttonOpts.opacity,
    width: progressInterpolateRTL,
  });

  const RTLAnimation = () => {
    updateProgressStyle({
      backgroundColor: colorInterpolateRTL,
      bottom: 0,
      opacity: buttonOpts.opacity,
      width: progressInterpolateRTL,
    });

    onPress(true); // Start recording on parent

    // Apply Animation
    buttonOpts.animation.setValue(0);
    buttonOpts.opacity.setValue(1);

    // Change button bg color
    updateBtnStyle(StyleSheet.flatten([{ backgroundColor: Colors.WHITE }, { width: '100%' }]));
    buttonOpts.message = '';

    Animated.timing(buttonOpts.animation, {
      duration: buttonOpts.recordTimeInSec * 1000,
      toValue: 1,
      useNativeDriver: false,
    }).start((finished) => {
      // Animation Finished = Recording Done -  Call parent
      if (finished) {
        updateBtnTextStyle(StyleSheet.flatten([{ color: Colors.BLACK }]));
        buttonOpts.message = 'Post';
        buttonOpts.direction = 'LTR';
        onPress(false); // Stop recording on parent
      }
    });
  };

  const LTRAnimation = () => {
    updateProgressStyle({
      backgroundColor: colorInterpolateLTR,
      bottom: 0,
      opacity: buttonOpts.opacity,
      width: progressInterpolateLTR,
    });

    onPress(); // Start uploading video on parent

    // Apply Animation
    buttonOpts.animation.setValue(0);
    buttonOpts.opacity.setValue(1);
    buttonOpts.message = '';
    Animated.timing(buttonOpts.animation, {
      duration: buttonOpts.recordTimeInSec * 1000,
      toValue: 1,
      useNativeDriver: false,
    }).start((finished) => {
      // Animation Finished = Recording Done -  Call parent
      if (finished) {
        updateBtnTextStyle(StyleSheet.flatten([{ color: Colors.WHITE }]));
        buttonOpts.message = '';
      }
    });
  };

  const handlePress = () => {
    if (direction === 'RTL') RTLAnimation();
    if (direction === 'LTR') LTRAnimation();
  };

  return (
    <View style={styles.container}>
      <Button type="animated" onPress={handlePress}>
        <View style={[styles.button, buttonExtraStyle]}>
          <View style={StyleSheet.absoluteFill}>
            <Animated.View style={[styles.progress, progressStyle]} />
          </View>
          <Text style={[styles.buttonText, buttonTextExtraStyle]}>{buttonOpts.message}</Text>
        </View>
      </Button>
    </View>
  );
};

AnimatedButton.defaultProps = {
  backgroundColor: Colors.WHITE,
  direction: 'RTL',
  message: 'Record',
  onPress: () => {},
};

AnimatedButton.propTypes = {
  backgroundColor: PropTypes.string,
  direction: PropTypes.string,
  message: PropTypes.string,
  onPress: PropTypes.func,
};

export default AnimatedButton;

import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Animated } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import { Colors } from '$theme';
import { Button, Text } from '$components';
/**
 * A custom animated button
 */
const AnimatedButton = ({ onPress, backgroundColor, direction, message }) => {
  const [buttonOpts, updateBtnOpts] = useState({
    animation: new Animated.Value(0),
    opacity: new Animated.Value(1),
    recordTimeInSec: 5,
    message,
    backgroundColor,
    direction,
  });

  const [buttonExtraStyle, updateBtnStyle] = useState(
    StyleSheet.flatten([{ backgroundColor: backgroundColor }, { width: '100%' }])
  );

  const [buttonTextExtraStyle, updateBtnTextStyle] = useState(
    StyleSheet.flatten([{ color: Colors.WHITE }])
  );

  const [progressStyle, updateProgressStyle] = useState({
    width: progressInterpolateRTL,
    bottom: 0,
    opacity: buttonOpts.opacity,
    backgroundColor: colorInterpolateRTL,
  });

  const RTLAnimation = () => {
    updateProgressStyle({
      width: progressInterpolateRTL,
      bottom: 0,
      opacity: buttonOpts.opacity,
      backgroundColor: colorInterpolateRTL,
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
      width: progressInterpolateLTR,
      bottom: 0,
      opacity: buttonOpts.opacity,
      backgroundColor: colorInterpolateLTR,
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
    console.log('handlePress', direction);

    if (direction === 'RTL') RTLAnimation();
    if (direction === 'LTR') LTRAnimation();
  };

  // Background Progress (LTR - Video)
  const progressInterpolateLTR = buttonOpts.animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const colorInterpolateLTR = buttonOpts.animation.interpolate({
    inputRange: [1, 1],
    outputRange: [Colors.PINK, Colors.PINK],
  });

  // Background Progress (RTL - Upload)
  const progressInterpolateRTL = buttonOpts.animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '0%'],
    extrapolate: 'clamp',
  });

  const colorInterpolateRTL = buttonOpts.animation.interpolate({
    inputRange: [1, 1],
    outputRange: [Colors.PINK, Colors.PINK],
  });

  return (
    <View style={styles.container}>
      <Button type={'animated'} onPress={handlePress}>
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

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Animated, Pressable, ViewPropTypes } from 'react-native';

const RNAnimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 * An animated pressable that scales when pressed. You can wrap this
 * component around anything that you want to animate when pressed.
 */
const AnimatedPressable = ({ scaleTo, ...props }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = (toValue) => {
    Animated.timing(scale, {
      duration: 200,
      toValue,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = (toValue) => {
    Animated.timing(scale, {
      duration: 200,
      toValue,
      useNativeDriver: true,
    }).start();
  };

  const onLongPress = (toValue) => {
    Animated.timing(scale, {
      duration: 300,
      toValue,
      useNativeDriver: true,
    }).start();
  };

  return (
    <RNAnimatedPressable
      {...props}
      delayLongPress={500}
      style={[props.style, { transform: [{ scale }] }]}
      onLongPress={() => {
        onLongPress(1);
      }}
      onPressIn={() => {
        onPressIn(scaleTo);
      }}
      onPressOut={() => {
        onPressOut(1);
      }}
    />
  );
};

AnimatedPressable.defaultProps = {
  scaleTo: 0.95,
  style: {},
};

AnimatedPressable.propTypes = {
  scaleTo: PropTypes.number,
  style: ViewPropTypes.style,
};

export default AnimatedPressable;

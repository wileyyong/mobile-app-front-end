import React from 'react';
import PropTypes from 'prop-types';
import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 * An animated pressable that scales when pressed. You can wrap this
 * component around anything that you want to animate when pressed.
 */
const AnimatedPressable = ({ scaleTo = 0.9, ...props }) => {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(scale.value) }],
    };
  });

  return (
    <ReanimatedPressable
      {...props}
      style={[props.style, animatedStyle]}
      onPressIn={() => {
        scale.value = withTiming(scaleTo, { duration: 50 });
      }}
      onPressOut={() => {
        scale.value = withTiming(1, { duration: 50 });
      }}
      onLongPress={() => {
        scale.value = withTiming(1, { duration: 50 });
      }}
    />
  );
};

AnimatedPressable.propTypes = {
  scaleTo: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default AnimatedPressable;

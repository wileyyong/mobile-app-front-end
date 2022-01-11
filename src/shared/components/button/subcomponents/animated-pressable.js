import React from 'react';
import PropTypes from 'prop-types';
import { Pressable, ViewPropTypes } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 * An animated pressable that scales when pressed. You can wrap this
 * component around anything that you want to animate when pressed.
 */
const AnimatedPressable = ({ scaleTo, ...props }) => {
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
      onLongPress={() => {
        scale.value = withTiming(1, { duration: 50 });
      }}
      onPressIn={() => {
        scale.value = withTiming(scaleTo, { duration: 50 });
      }}
      onPressOut={() => {
        scale.value = withTiming(1, { duration: 50 });
      }}
    />
  );
};

AnimatedPressable.defaultProps = {
  scaleTo: 0.9,
  style: {},
};

AnimatedPressable.propTypes = {
  scaleTo: PropTypes.number,
  style: ViewPropTypes.style,
};

export default AnimatedPressable;

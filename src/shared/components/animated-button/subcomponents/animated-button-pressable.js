import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Animated, Pressable, ViewPropTypes } from 'react-native';

const AnimatedPressableComponent = Animated.createAnimatedComponent(Pressable);

const AnimatedButtonPressable = ({ scaleTo, ...props }) => {
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
    <AnimatedPressableComponent
      {...props}
      delayLongPress={500}
      style={[props.style, { transform: [{ scale }] }]}
      onLongPress={() => {
        onLongPress(scaleTo);
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

AnimatedButtonPressable.defaultProps = {
  scaleTo: 0.95,
  style: {},
};

AnimatedButtonPressable.propTypes = {
  scaleTo: PropTypes.number,
  style: ViewPropTypes.style,
};

export default AnimatedButtonPressable;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Animated, Pressable, ViewPropTypes } from 'react-native';
import { VIDEO_RECORD_DURATION_MS } from '$constants';

const AnimatedPressableComponent = Animated.createAnimatedComponent(Pressable);

const ProgressButtonPressable = ({ scaleTo, ...props }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = toValue => {
    Animated.timing(scale, {
      duration: 200,
      toValue,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = toValue => {
    Animated.timing(scale, {
      duration: 200,
      toValue,
      useNativeDriver: true,
    }).start();
  };

  const onLongPress = toValue => {
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
      delayPressOut={props.pressType === 'LONG' ? VIDEO_RECORD_DURATION_MS : 0}
      style={[props.style, { transform: [{ scale }] }]}
      onLongPress={() => {
        onLongPress(scaleTo);
        if (props.pressType === 'LONG') {
          if (props.onLongPressStart) {
            props.onLongPressStart();
          }
        }
      }}
      onPressIn={() => {
        onPressIn(scaleTo);
      }}
      onPressOut={() => {
        onPressOut(1);

        if (props.pressType === 'LONG') {
          if (props.onLongPressStop) {
            props.onLongPressStop();
          }
        }
      }}
    />
  );
};

ProgressButtonPressable.defaultProps = {
  disabled: false,
  onLongPressStart: () => {},
  onLongPressStop: () => {},
  pressType: 'LONG',
  scaleTo: 0.95,
  style: {},
};

ProgressButtonPressable.propTypes = {
  disabled: PropTypes.bool,
  onLongPressStart: PropTypes.func,
  onLongPressStop: PropTypes.func,
  pressType: PropTypes.oneOf(['LONG', 'TAP']),
  scaleTo: PropTypes.number,
  style: ViewPropTypes.style,
};

export default ProgressButtonPressable;

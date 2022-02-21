import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Animated, Pressable, ViewPropTypes } from 'react-native';

const AnimatedPressableComponent = Animated.createAnimatedComponent(Pressable);

const ProgressButtonPressable = ({ scaleTo, ...props }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = (toValue) => {
    //  console.log('onPressIn', toValue);
    Animated.timing(scale, {
      duration: 200,
      toValue,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = (toValue) => {
    //  console.log('onPressOut', toValue);
    Animated.timing(scale, {
      duration: 200,
      toValue,
      useNativeDriver: true,
    }).start();
  };

  const onLongPress = (toValue) => {
    // console.log('onLongPress', toValue);
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
      delayPressOut={props.pressType === 'LONG' ? 5000 : 0}
      style={[props.style, { transform: [{ scale }] }]}
      onLongPress={() => {
        onLongPress(scaleTo);

        // console.log('onLongPressprops', props);
        if (props.pressType === 'LONG') {
          if (props.onLongPressStart) {
            props.onLongPressStart();
          }
        }
      }}
      onPressIn={() => {
        // console.log('onPressInprops', props);
        onPressIn(scaleTo);
      }}
      onPressOut={() => {
        // console.log('onPressOut', props);
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

import { Colors } from '$theme';

import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, StyleSheet, Easing } from 'react-native';

import styles from './style';

const ProgressOverlay = forwardRef((props, ref) => {
  const counter = useRef(new Animated.Value(1)).current;
  const [count, setCount] = useState(-1);
  const [isActive, setActive] = useState(false);

  useImperativeHandle(ref, () => ({
    onFinish() {
      setActive(false);
    },
    onStart() {
      setActive(true);
    },
  }));

  const OverlayLTR = counter.interpolate({
    extrapolate: 'clamp',
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  const OverlayRTL = counter.interpolate({
    extrapolate: 'clamp',
    inputRange: [0, 100],
    outputRange: ['100%', '0%'],
  });

  const updateProgress = (progress) => {
    Animated.timing(counter, {
      duration: 500,
      easing: Easing.linear,
      toValue: progress,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    setCount((old) => old + 3);

    if (props.progress > 1 && (count >= 100 || count === -1)) {
      setCount(-1);
      updateProgress(0);

      if (props.onFinish) {
        props.onFinish();
      }
    } else if (!isActive) {
      setCount(-1);
      updateProgress(0);
    } else {
      updateProgress(count);
    }
  }, [props.progress]);

  return (
    <View style={props.children ? styles.progressOverlay : styles.defaultProgressBar}>
      <Animated.View
        style={
          ([StyleSheet.absoluteFill],
          {
            backgroundColor: props.overlayColor,
            height: props.height ? props.height : '100%',
            width: props.overlayDirection === 'LTR' ? OverlayLTR : OverlayRTL,
          })
        }
      ></Animated.View>
    </View>
  );
});

ProgressOverlay.defaultProps = {
  children: null,
  height: 55,
  onFinish: () => {},
  overlayColor: Colors.PINK,
  overlayDirection: 'RTL',
  progress: 0,
};

ProgressOverlay.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
  onFinish: PropTypes.func,
  overlayColor: PropTypes.string,
  overlayDirection: PropTypes.oneOf(['RTL', 'LTR']),
  progress: PropTypes.number,
};

export default ProgressOverlay;

import { Colors } from '$theme';
import { ProgressBar, Text } from '$components';

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
import { View, StyleSheet } from 'react-native';

import { VIDEO_RECORD_DURATION_MS } from '../../utils/constants';

import { AnimatedButtonPressable } from './subcomponents';
import styles from './style';

const AnimatedButton = (props) => {
  const MAX_PRESSING_DURATION_MS = VIDEO_RECORD_DURATION_MS;
  const progressBarChild = useRef();
  const [isPressingButton, setIsPressingButton] = useState(false);
  const getureLongPress = Gesture.LongPress()
    .maxDistance(100)
    .minDuration(MAX_PRESSING_DURATION_MS)
    .shouldCancelWhenOutside(true)
    .onBegin(() => {
      'worklet';

      runOnJS(start)();
    })
    .onFinalize(() => {
      'worklet';

      if (isPressingButton) {
        runOnJS(finish)();
      }
    });

  const getureShortPress = Gesture.Tap()
    .onStart(() => {
      'worklet';

      runOnJS(start)();
    })
    .onEnd(() => {
      'worklet';

      if (isPressingButton) {
        runOnJS(finish)();
      }
    });

  function start() {
    if (props.onStart) {
      props.onStart();
    }

    setIsPressingButton(true);

    if (progressBarChild.current) {
      progressBarChild.current.onStart();
    }
  }

  function finish() {
    setIsPressingButton(false);

    if (props.onFinish) {
      props.onFinish();
    }

    if (progressBarChild.current) {
      progressBarChild.current.onFinishFromAnimatedButton();
    }
  }

  const buttonStyle = StyleSheet.flatten([styles.solidButton, { width: '100%' }]);

  return (
    <GestureDetector gesture={props.pressType === 'LONG' ? getureLongPress : getureShortPress}>
      <AnimatedButtonPressable style={buttonStyle}>
        <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
          <ProgressBar
            backgroundColor={props.backgroundColor}
            overlayColor={props.overlayColor}
            overlayDirection={props.overlayDirection}
            ref={progressBarChild}
            onFinish={finish}
            onStart={start}
          >
            <Text
              style={[
                styles.text,
                { color: isPressingButton ? props.textColorOverlay : props.textColor },
              ]}
            >
              {isPressingButton ? props.textOverlay : props.text}
            </Text>
          </ProgressBar>
        </View>
      </AnimatedButtonPressable>
    </GestureDetector>
  );
};

AnimatedButton.defaultProps = {
  backgroundColor: Colors.PINK,
  onFinish: () => {},
  onStart: () => {},
  overlayColor: Colors.WHITE,
  overlayDirection: 'LTR',
  pressType: 'LONG',
  text: 'Record',
  textColor: Colors.WHITE,
  textColorOverlay: Colors.BLACK,
  textOverlay: 'Recording...',
};

AnimatedButton.propTypes = {
  backgroundColor: PropTypes.string,
  onFinish: PropTypes.func,
  onStart: PropTypes.func,
  overlayColor: PropTypes.string,
  overlayDirection: PropTypes.oneOf(['RTL', 'LTR']),
  pressType: PropTypes.oneOf(['LONG', 'TAP']),
  text: PropTypes.string,
  textColor: PropTypes.string,
  textColorOverlay: PropTypes.string,
  textOverlay: PropTypes.string,
};

export default AnimatedButton;

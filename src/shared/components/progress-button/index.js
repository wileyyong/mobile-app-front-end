/* eslint-disable no-unreachable */
import { Colors } from '$theme';
import { Text } from '$components';
import { VIDEO_RECORD_DURATION_MS } from '$constants';

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
import { View, StyleSheet } from 'react-native';

import { ProgressButtonPressable, ProgressBar } from './subcomponents';
import styles from './style';

const ProgressButton = (props) => {
  const MAX_PRESSING_DURATION_MS = VIDEO_RECORD_DURATION_MS;
  const progressBarChild = useRef();
  const [isPressingButton, setIsPressingButton] = useState(false);
  const gestureLongPress = Gesture.LongPress()
    .maxDistance(100)
    .minDuration(MAX_PRESSING_DURATION_MS)
    .shouldCancelWhenOutside(true)
    .onFinalize(() => {
      'worklet';

      if (isPressingButton) {
        runOnJS(finish)();
      }
    });

  const gestureShortPress = Gesture.Tap()
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

  const buttonStyle = StyleSheet.flatten([
    styles.solidButton,
    { opacity: props.disabled ? 0.7 : 1, width: '100%' },
  ]);

  return (
    <GestureDetector
      disabled={props.disabled}
      gesture={props.pressType === 'LONG' ? gestureLongPress : gestureShortPress}
    >
      <ProgressButtonPressable
        disabled={props.disabled}
        pressType={props.pressType}
        style={buttonStyle}
        onLongPressStart={start}
        onLongPressStop={finish}
      >
        <View style={[styles.container]}>
          <ProgressBar
            backgroundColor={props.overlayColor}
            overlayColor={props.backgroundColor}
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
      </ProgressButtonPressable>
    </GestureDetector>
  );
};

ProgressButton.defaultProps = {
  backgroundColor: Colors.PINK,
  disabled: false,
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

ProgressButton.propTypes = {
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
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

export default ProgressButton;

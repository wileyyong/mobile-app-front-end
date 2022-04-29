/* eslint-disable no-unreachable */
import { Colors } from '$theme';
import { Text } from '$components';
import { VIDEO_RECORD_DURATION_MS } from '$constants';

import React, { useState, useRef } from 'react';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
import { View, StyleSheet } from 'react-native';

import { ProgressButtonPressable, ProgressBar } from './subcomponents';
import styles from './style';

interface IProgressButton {
  backgroundColor: string;
  disabled: boolean;
  onFinish: () => void;
  onStart: () => void;
  overlayColor: string;
  overlayDirection: 'RTL' | 'LTR';
  pressType: 'LONG' | 'TAP';
  text: string;
  textColor: string;
  textColorOverlay: string;
  textOverlay: string;
}

const ProgressButton = ({
  backgroundColor = Colors.PINK,
  disabled,
  onFinish,
  onStart,
  overlayColor = Colors.WHITE,
  overlayDirection = 'LTR',
  pressType = 'LONG',
  text = 'Record',
  textColor = Colors.WHITE,
  textColorOverlay = Colors.BLACK,
  textOverlay = 'Recording...',
}: IProgressButton) => {
  const MAX_PRESSING_DURATION_MS = VIDEO_RECORD_DURATION_MS;
  const progressBarChild = useRef();
  const [isPressingButton, setIsPressingButton] = useState(false);
  const gestureLongPress = Gesture.LongPress()
    .maxDistance(100)
    .shouldCancelWhenOutside(false)
    .onStart(() => {
      'worklet';
      runOnJS(start)();
    })
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
    setIsPressingButton(true);

    if (onStart) {
      onStart();
    }

    if (progressBarChild.current) {
      progressBarChild.current.onStart();
    }
  }

  function finish() {
    setIsPressingButton(false);

    if (onFinish) {
      onFinish();
    }

    if (progressBarChild.current) {
      progressBarChild.current.onFinishFromAnimatedButton();
    }
  }

  const buttonStyle = StyleSheet.flatten([
    styles.solidButton,
    { opacity: disabled ? 0.7 : 1, width: '100%' },
  ]);

  return (
    <GestureDetector
      disabled={disabled}
      gesture={pressType === 'LONG' ? gestureLongPress : gestureShortPress}>
      <ProgressButtonPressable
        disabled={disabled}
        pressType={pressType}
        style={buttonStyle}
        onLongPressStart={() => {}}
        onLongPressStop={() => {}}>
        <View style={[styles.container]}>
          <ProgressBar
            backgroundColor={overlayColor}
            overlayColor={backgroundColor}
            overlayDirection={overlayDirection}
            ref={progressBarChild}
            onFinish={finish}
            onStart={start}>
            <Text
              style={[
                styles.text,
                {
                  color: isPressingButton ? textColorOverlay : textColor,
                },
              ]}>
              {isPressingButton ? textOverlay : text}
            </Text>
          </ProgressBar>
        </View>
      </ProgressButtonPressable>
    </GestureDetector>
  );
};

export default ProgressButton;

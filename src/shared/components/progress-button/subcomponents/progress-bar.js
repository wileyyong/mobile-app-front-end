import { Colors } from '$theme';
import { VIDEO_RECORD_DURATION_MS } from '$constants';

import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './style';

import { ProgressOverlay } from './index';

const ProgressBar = forwardRef((props, ref) => {
  const progressOverlayChild = useRef();
  const MAX_PRESSING_DURATION_MS = VIDEO_RECORD_DURATION_MS;
  const [remainingTimeMs, setRemainingTimeMs] = useState(
    MAX_PRESSING_DURATION_MS,
  );
  const [recordingIntervalHandle, setRecordingIntervalHandle] = useState(-1);
  const [isAnimationActive, setAnimationActive] = useState(false);

  const onStart = () => {
    if (!isAnimationActive) {
      setAnimationActive(true);

      if (progressOverlayChild.current) {
        progressOverlayChild.current.onStart();
      }

      if (props.onStart) {
        props.onStart();
      }
      setRemainingTimeMs(MAX_PRESSING_DURATION_MS);
      setRecordingIntervalHandle(
        setInterval(() => {
          console.log('interval');
          setRemainingTimeMs(r => r - 100);
        }, 100),
      );
    }
  };

  const onFinishFromAnimatedButton = () => {
    console.log('ProgressBar onFinishFromAnimatedButton');
    setAnimationActive(false);

    if (progressOverlayChild.current) {
      progressOverlayChild.current.onFinish();
    }
    console.log('clearInterval');
    clearInterval(recordingIntervalHandle);
    setRemainingTimeMs(MAX_PRESSING_DURATION_MS);
  };

  const onFinish = () => {
    console.log('ProgressBar onFinish');
    if (isAnimationActive) {
      setAnimationActive(false);

      if (progressOverlayChild.current) {
        progressOverlayChild.current.onFinish();
      }
      clearInterval(recordingIntervalHandle);
      setRemainingTimeMs(MAX_PRESSING_DURATION_MS);

      if (props.onFinish) {
        props.onFinish();
      }
      // props.progress = 0;
    }
  };

  useImperativeHandle(ref, () => ({
    isAnimationActive() {
      return isAnimationActive;
    },
    onFinish() {
      onFinish();
    },
    onFinishFromAnimatedButton() {
      onFinishFromAnimatedButton();
    },
    onStart() {
      onStart();
    },
  }));

  return (
    <View
      height={props.height}
      style={[
        props.children ? styles.container : styles.defaultContainer,
        { backgroundColor: props.backgroundColor },
      ]}>
      <ProgressOverlay
        MAX_PRESSING_DURATION_MS={MAX_PRESSING_DURATION_MS}
        overlayColor={props.overlayColor}
        overlayDirection={props.overlayDirection}
        progress={1 - remainingTimeMs / MAX_PRESSING_DURATION_MS}
        ref={progressOverlayChild}
        onFinish={onFinish}>
        {props.children}
      </ProgressOverlay>
      {props.children ? props.children : <></>}
    </View>
  );
});

ProgressBar.defaultProps = {
  backgroundColor: Colors.PINK,
  children: null,
  height: 55,
  onFinish: () => {},
  onStart: () => {},
  overlayColor: Colors.WHITE,
  overlayDirection: 'RTL',
};

ProgressBar.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  height: PropTypes.number,
  onFinish: PropTypes.func,
  onStart: PropTypes.func,
  overlayColor: PropTypes.string,
  overlayDirection: PropTypes.oneOf(['RTL', 'LTR']),
};

export default ProgressBar;

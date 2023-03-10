import { Colors } from '$theme';
import { VIDEO_RECORD_DURATION_MS } from '$constants';
import { useSelector } from 'react-redux';

import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './style';

import { ProgressOverlay } from './index';

const ProgressBar = forwardRef((props, ref) => {
  const redux = useSelector((state: any) => state.ProgressButtonRedux);
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
          setRemainingTimeMs(r => r - 100);
        }, 100),
      );
    }
  };

  const onFinishFromAnimatedButton = () => {
    setAnimationActive(false);

    if (progressOverlayChild.current) {
      progressOverlayChild.current.onFinish();
    }

    clearInterval(recordingIntervalHandle);
    setRemainingTimeMs(MAX_PRESSING_DURATION_MS);
  };

  const onFinish = () => {
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

  useEffect(() => {
    if (redux.isRecording === false) {
      clearInterval(recordingIntervalHandle);
      setRemainingTimeMs(MAX_PRESSING_DURATION_MS);
    }
  }, [redux.isRecording]);

  return (
    <View
      height={props.height}
      style={[
        props.children ? styles.container : styles.defaultContainer,
        {
          backgroundColor: redux.isRecording
            ? props.backgroundColor
            : props.initBackgroundColor,
        },
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
  initBackgroundColor: Colors.PINK,
  backgroundColor: Colors.PINK,
  children: null,
  height: 59,
  onFinish: () => {},
  onStart: () => {},
  overlayColor: Colors.WHITE,
  overlayDirection: 'RTL',
};

ProgressBar.propTypes = {
  initBackgroundColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  height: PropTypes.number,
  onFinish: PropTypes.func,
  onStart: PropTypes.func,
  overlayColor: PropTypes.string,
  overlayDirection: PropTypes.oneOf(['RTL', 'LTR']),
};

export default ProgressBar;

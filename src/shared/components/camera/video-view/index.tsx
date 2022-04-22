import { PauseIcon, PlayIcon } from '$components';
import { Colors } from '$theme';

import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Pressable, Text, Animated } from 'react-native';
import {
  State,
  TapGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Video from 'react-native-video';

import styles from '../style';

type VideoViewType = {
  file?: string;
};

const PozzleVideoView = ({ file }: VideoViewType) => {
  const videoRef = useRef(Video);
  const [isVideoPreviewPaused, setIsPaused] = useState(false);
  const [showButtons, setShowButtons] = useState<boolean>();
  const [videoProgress, setVideoProgress] = useState({
    currentTime: 0,
    playableDuration: 0,
  });
  const timeStyle = StyleSheet.flatten([styles.videoProgress]);
  const fadeAnimation = new Animated.Value(1);

  const handlePreviewPlaying = () => {
    const auxIsVideoPreviewPaused = !isVideoPreviewPaused;
    setIsPaused(auxIsVideoPreviewPaused);
  };

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (showButtons === undefined && file !== undefined) {
      fadeOut();
      setTimeout(() => {
        setShowButtons(false);
      }, 1500);
    } else if (file === undefined) setShowButtons(undefined);
  }, [showButtons, file]);

  return (
    <>
      {file && (
        <View style={styles.camera}>
          <Video
            paused={isVideoPreviewPaused}
            playInBackground={false}
            playWhenInactive={false}
            posterResizeMode="cover"
            ref={videoRef}
            repeat
            resizeMode="cover"
            source={{ uri: file }}
            style={styles.camera}
            onProgress={(progress: any) => setVideoProgress(progress)}
          />
        </View>
      )}

      <View style={styles.videoProgressContainer}>
        <Text style={timeStyle}>
          {`${videoProgress?.currentTime?.toFixed(
            2,
          )} - ${videoProgress?.playableDuration?.toFixed(2)}s`}
        </Text>
      </View>
      <TapGestureHandler
        onHandlerStateChange={event => {
          if (
            event.nativeEvent.state === State.ACTIVE &&
            showButtons !== undefined
          ) {
            const _showButtons = !showButtons;
            if (_showButtons) {
              fadeIn();
              setShowButtons(_showButtons);
            } else if (!_showButtons) {
              fadeOut();
              setTimeout(() => {
                setShowButtons(_showButtons);
              }, 500);
            }
            handlePreviewPlaying();
          }
        }}>
        <Animated.View
          style={[
            styles.animatedView,
            {
              opacity: fadeAnimation,
            },
          ]}>
          {isVideoPreviewPaused ? (
            <TouchableOpacity style={[styles.videoButtonPlayback]}>
              {showButtons && (
                <PlayIcon color={Colors.EIGHTYPERCENTWHITE} size="large" />
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.videoButtonPlayback}>
              {showButtons && (
                <PauseIcon color={Colors.EIGHTYPERCENTWHITE} size="large" />
              )}
            </TouchableOpacity>
          )}
        </Animated.View>
      </TapGestureHandler>
    </>
  );
};

export default PozzleVideoView;

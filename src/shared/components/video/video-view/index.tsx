import {
  Button,
  PauseIcon,
  PlayIcon,
  Text,
  AboutPozzle,
  PozzleHeader,
  OptionsIcon,
} from '$components';
import { Colors } from '$theme';

import React, { useEffect, useState } from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import Video from 'react-native-video';

import { useTranslation } from 'react-i18next';

import styles from './style';
import { IVideoItem } from './utils';
import {
  State,
  TapGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet';

export const shareIcon = require('src/assets/images/shareIcon.png');
export const reportIcon = require('src/assets/images/reportIcon.png');

const VideoItem = ({
  index = 0,
  POZpledged,
  _id,
  createdBy,
  createdOn,
  inspiredBy,
  isCurrentVideo,
  isActive,
  isDeleted,
  location,
  planetId,
  onPressBack,
  pozzleCount,
  title,
  src,
  pozzleId,
}: IVideoItem) => {
  const [showButtons, setShowButtons] = useState<boolean>();
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  const [isPaused, setIsPaused] = useState(true);
  const [videoProgress, setVideoProgress] = useState({
    currentTime: 0,
    playableDuration: 0,
  });
  const timeStyle = StyleSheet.flatten([styles.videoProgress]);
  const fadeAnimation = new Animated.Value(1);

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

  if (!src) {
    return null;
  }

  useEffect(() => {
    if (showButtons === undefined) {
      fadeOut();
      setTimeout(() => {
        setShowButtons(false);
      }, 500);
      setIsPaused(false);
    }
  }, [isPaused, isCurrentVideo]);

  return (
    <View style={[{ width }, styles.videoFeedContainer]}>
      <PozzleHeader
        pozzlesAdded={1}
        pozzlesPledged={POZpledged}
        title={title}
        onPress={onPressBack}
        style={styles.videoHeader}
      />

      <View style={styles.videoContainer}>
        {isCurrentVideo ? (
          <>
            <Video
              paused={isPaused}
              playInBackground={false}
              playWhenInactive={false}
              repeat={true}
              resizeMode="cover"
              source={{
                uri: src,
              }}
              style={styles.image}
              onProgress={(progress: any) => setVideoProgress(progress)}
            />
            <View style={styles.videoProgressContainer}>
              <Text style={timeStyle}>
                {`${videoProgress?.currentTime?.toFixed(
                  2,
                )} - ${videoProgress?.playableDuration?.toFixed(2)}s`}
              </Text>
            </View>
          </>
        ) : (
          <View style={styles.fakeVideo} />
        )}

        <TapGestureHandler
          onHandlerStateChange={event => {
            if (event.nativeEvent.state === State.ACTIVE) {
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

              const auxIsVideoPreviewPaused = !isPaused;
              setIsPaused(auxIsVideoPreviewPaused);
            }
          }}>
          <Animated.View
            style={[
              styles.animatedView,
              {
                opacity: fadeAnimation,
              },
            ]}>
            {isPaused ? (
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

        <AboutPozzle
          createdBy={createdBy}
          inspiredBy={inspiredBy}
          locationJoined={'locationJoined'} // TO DO
          title={title}
          pozzleId={pozzleId}
        />
      </View>
    </View>
  );
};
export default VideoItem;

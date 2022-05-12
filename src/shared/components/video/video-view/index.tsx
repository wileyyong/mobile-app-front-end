import {
  Button,
  PauseIcon,
  PlayIcon,
  Text,
  AboutPozzle,
  PozzleHeader,
} from '$components';
import { Colors } from '$theme';

import React, { useEffect, useState } from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Video from 'react-native-video';
import InViewPort from '@coffeebeanslabs/react-native-inviewport';
import { useTranslation } from 'react-i18next';

import styles from './style';
import { IVideoItem } from './utils';
import { State, TapGestureHandler } from 'react-native-gesture-handler';

export const shareIcon = require('src/assets/images/shareIcon.png');
export const reportIcon = require('src/assets/images/reportIcon.png');

const VideoItem = ({
  POZpledged,
  _id,
  createdBy,
  createdOn,
  isCurrentVideo,
  isActive,
  isDeleted,
  location,
  planetId,
  onPressBack,
  pozzleCount,
  title,
  src,
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
              console.log('auxIsVideoPreviewPaused', auxIsVideoPreviewPaused);
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

        {!isPaused ? (
          <AboutPozzle
            addedBy={'addedBy'}
            inspiredBy={'inspiredBy'}
            locationJoined={'locationJoined'}
          />
        ) : (
          <View style={styles.videoButtonsContainer}>
            <Button
              backgroundColor={Colors.WHITE}
              disabled={false}
              size="small-plus">
              <Image source={shareIcon} style={styles.videoButtonImage} />
              <Text size="xs" style={styles.textPadding} weight="bold">
                {t('videoView.share')}
              </Text>
            </Button>

            <Button
              backgroundColor={Colors.WHITE}
              disabled={false}
              size="small-plus">
              <Image source={reportIcon} style={styles.videoButtonImage} />
              <Text size="xs" style={styles.textPadding} weight="bold">
                {t('videoView.report')}
              </Text>
            </Button>
          </View>
        )}
      </View>
    </View>
  );
};

VideoItem.propTypes = {};

export default VideoItem;
/* {isPaused ? (
          <Pressable
            style={styles.videoButtonPlayback}
            onLongPress={() => setIsPaused(currentSetting => !currentSetting)}>
            <PlayIcon color={Colors.EIGHTYPERCENTWHITE} size="large" />
          </Pressable>
        ) : (
          <Pressable
            style={styles.videoButtonPlayback}
            onLongPress={() => setIsPaused(currentSetting => !currentSetting)}>
            <PauseIcon color={Colors.EIGHTYPERCENTWHITE} size="large" />
          </Pressable>
        )}
*/

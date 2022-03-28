import {
  Button,
  PauseIcon,
  PlayIcon,
  Text,
  AboutPozzle,
  PozzleHeader,
} from '$components';
import { Colors } from '$theme';

import React, { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import Video from 'react-native-video';
import InViewPort from '@coffeebeanslabs/react-native-inviewport';
import { useTranslation } from 'react-i18next';

import styles from './style';

export const shareIcon = require('src/assets/images/shareIcon.png');
export const reportIcon = require('src/assets/images/reportIcon.png');

interface IVideoItem {
  isCurrentVideo?: boolean;
  POZpledged?: number;
  _id?: string;
  createdBy?: string;
  createdOn?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  location?: [{ coordinates: []; type: string }];
  planetId?: number;
  pozzleCount?: number;
  title?: string;
  onPressBack?: () => void;
  src: string;
}

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
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  const [isPaused, setIsPaused] = useState(true);
  const [videoProgress, setVideoProgress] = useState({
    currentTime: 0,
    playableDuration: 0,
  });
  const timeStyle = StyleSheet.flatten([styles.videoProgress]);
  const handlePlaying = () => {
    setIsPaused(!isCurrentVideo);
  };

  if (!_id) return null;

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
          <InViewPort onChange={handlePlaying}>
            <Video
              paused={isPaused}
              playInBackground={false}
              playWhenInactive={false}
              repeat
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
          </InViewPort>
        ) : (
          <View style={styles.fakeVideo} />
        )}

        {isPaused ? (
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

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
import { Image, Pressable, useWindowDimensions, View } from 'react-native';
import Video from 'react-native-video';
import InViewPort from '@coffeebeanslabs/react-native-inviewport';
import { useTranslation } from 'react-i18next';

import styles from './style';

export const shareIcon = require('src/assets/images/shareIcon.png');
export const reportIcon = require('src/assets/images/reportIcon.png');

interface IVideoItem {
  addedBy: string;
  inspiredBy: string;
  isCurrentVideo: boolean;
  locationJoined: string;
  onPress: () => void;
  pozzlesAdded: number;
  pozzlesPledged: number;
  src: string;
  title: string;
}

const VideoItem = ({
  addedBy,
  inspiredBy,
  isCurrentVideo,
  locationJoined,
  onPress,
  pozzlesAdded = 0,
  pozzlesPledged = 0,
  src,
  title,
}: IVideoItem) => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  const [isPaused, setIsPaused] = useState(true);

  const handlePlaying = () => {
    setIsPaused(!isCurrentVideo);
  };

  return (
    <View style={[{ width }, styles.videoFeedContainer]}>
      <PozzleHeader
        pozzlesAdded={pozzlesAdded}
        pozzlesPledged={pozzlesPledged}
        title={title}
        onPress={onPress}
      />

      <View style={styles.videoContainer}>
        {isCurrentVideo ? (
          <InViewPort onChange={handlePlaying}>
            <Video
              paused={isPaused}
              playInBackground={false}
              playWhenInactive={false}
              poster="http://images.unsplash.com/photo-1603468850790-9bd9f28aee54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3072&q=80"
              posterResizeMode="cover"
              resizeMode="cover"
              source={{ uri: src }}
              style={styles.image}
            />
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
            addedBy={addedBy}
            inspiredBy={inspiredBy}
            locationJoined={locationJoined}
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

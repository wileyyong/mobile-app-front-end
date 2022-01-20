import { Button, PauseIcon, PlayIcon, Text } from '$components';
import { Colors } from '$theme';
import { AboutPozzle, PozzleHeader } from '$widgets';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Pressable, useWindowDimensions, View } from 'react-native';
import Video from 'react-native-video';

import styles from './style';
import { reportIcon, shareIcon } from './utils';

const VideoItem = ({
  addedBy,
  inspiredBy,
  locationJoined,
  onPress,
  pozzlesAdded,
  pozzlesPledged,
  src,
  title,
}) => {
  const { width } = useWindowDimensions();
  const [isPaused, setIsPaused] = useState(true);

  return (
    <View style={[{ width }, styles.videoFeedContainer]}>
      <PozzleHeader
        pozzlesAdded={pozzlesAdded}
        pozzlesPledged={pozzlesPledged}
        title={title}
        onPress={onPress}
      />

      <View style={styles.videoContainer}>
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

        {isPaused ? (
          <Pressable
            style={styles.videoButtonPlayback}
            onLongPress={() => setIsPaused(!isPaused)}
          >
            <PlayIcon color={Colors.EIGHTYPERCENTWHITE} size="large" />
          </Pressable>
        ) : (
          <Pressable
            style={styles.videoButtonPlayback}
            onLongPress={() => setIsPaused(!isPaused)}
          >
            <PauseIcon color={Colors.EIGHTYPERCENTWHITE} size="large" />
          </Pressable>
        )}

        {!isPaused ? (
          <AboutPozzle addedBy={addedBy} inspiredBy={inspiredBy} locationJoined={locationJoined} />
        ) : (
          <View style={styles.videoButtonsContainer}>
            <Button backgroundColor={Colors.WHITE} disabled={false} size="small-plus">
              <Image source={shareIcon} style={styles.videoButtonImage} />
              <Text size="xs" style={styles.textPadding} weight="bold">
                Share
              </Text>
            </Button>

            <Button backgroundColor={Colors.WHITE} disabled={false} size="small-plus">
              <Image source={reportIcon} style={styles.videoButtonImage} />
              <Text size="xs" style={styles.textPadding} weight="bold">
                Report
              </Text>
            </Button>
          </View>
        )}
      </View>
    </View>
  );
};

VideoItem.defaultProps = {
  addedBy: '',
  inspiredBy: '',
  locationJoined: '',
  onPress: () => { },
  pozzlesAdded: 0,
  pozzlesPledged: 0,
  src: '',
  title: '',
};

VideoItem.propTypes = {
  addedBy: PropTypes.string,
  inspiredBy: PropTypes.string,
  locationJoined: PropTypes.string,
  onPress: PropTypes.func,
  pozzlesAdded: PropTypes.number,
  pozzlesPledged: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string,
};

export default VideoItem;

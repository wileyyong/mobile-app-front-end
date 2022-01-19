import { AboutPozzle, PozzleHeader } from '$widgets';

import React from 'react';
import PropTypes from 'prop-types';
import { useWindowDimensions, View } from 'react-native';
import Video from 'react-native-video';

import styles from './style';

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
          playInBackground={false}
          playWhenInactive={false}
          poster="http://images.unsplash.com/photo-1603468850790-9bd9f28aee54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3072&q=80"
          posterResizeMode="cover"
          resizeMode="cover"
          source={{ uri: src }}
          style={styles.image}
        />

        <AboutPozzle addedBy={addedBy} inspiredBy={inspiredBy} locationJoined={locationJoined} />
      </View>
    </View>
  );
};

VideoItem.defaultProps = {
  addedBy: '',
  inspiredBy: '',
  locationJoined: '',
  onPress: () => {},
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

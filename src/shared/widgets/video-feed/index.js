import { Video } from '$components';

import React from 'react';
import PropTypes from 'prop-types';
import { useWindowDimensions } from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

/**
 * The scrollable video feed
 */
const VideoFeed = ({ onPressBack, videos }) => {
  const { width } = useWindowDimensions();
  const scrollPosition = useSharedValue(0);
  const scrollRef = useAnimatedRef();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollPosition.value = e.contentOffset.x;
    },
  });

  return (
    <Animated.ScrollView
      decelerationRate="fast"
      disableIntervalMomentum
      horizontal
      ref={scrollRef}
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      onScroll={scrollHandler}
    >
      {videos.map((video) => (
        <Video
          addedBy={video.addedBy}
          inspiredBy={video.inspiredBy}
          key={video.title}
          locationJoined={video.locationJoined}
          pozzlesAdded={video.pozzlesAdded}
          pozzlesPledged={video.pozzlesPledged}
          src={video.src}
          title={video.title}
          onPress={onPressBack}
        />
      ))}
    </Animated.ScrollView>
  );
};

VideoFeed.propTypes = {
  onPressBack: PropTypes.func.isRequired,
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideoFeed;

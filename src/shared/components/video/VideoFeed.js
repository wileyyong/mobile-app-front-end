import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

import Video from './Video';

const videos = [
  { src: 'video1.mp4', title: 'Video 1' },
  { src: 'video2.mp4', title: 'Video 2' },
  { src: 'video3.mp4', title: 'Video 3' },
  { src: 'video4.mp4', title: 'Video 4' },
];

/**
 * The scrollable video feed
 */
const VideoFeed = () => {
  const { width } = useWindowDimensions();
  const scrollPosition = useSharedValue(0);
  const scrollRef = useAnimatedRef();

  const scrollHanlder = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollPosition.value = e.contentOffset.x;
    },
  });

  return (
    <View style={{ marginVertical: 50 }}>
      <Animated.ScrollView
        decelerationRate="fast"
        disableIntervalMomentum
        horizontal
        ref={scrollRef}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 20}
        onScroll={scrollHanlder}
      >
        {videos.map(() => (
          <Video />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default VideoFeed;

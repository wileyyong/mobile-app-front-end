import { Video } from '$components';

import React, { useState } from 'react';
import {
  FlatList,
  I18nManager,
  Platform,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

/**
 * The scrollable video feed
 */
const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';

interface IVideoFeed {
  onPressBack: () => void;
  videos: any[];
  loadMore: () => void;
}

const VideoFeed = ({ onPressBack, videos, loadMore }: IVideoFeed) => {
  const { width } = useWindowDimensions();
  const scrollPosition = useSharedValue(0);
  const scrollRef = useAnimatedRef();

  const [currentSlide, setCurrentSlide] = useState(0);

  const rtlSafeIndex = i => (isAndroidRTL ? videos.length - 1 - i : i);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollPosition.value = e.contentOffset.x;
    },
  });

  const setSliderPage = event => {
    const { currentPage } = currentSlide;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = rtlSafeIndex(Math.round(x / width));

    if (indexOfNextScreen !== currentPage) {
      setCurrentSlide(indexOfNextScreen);
    }
    if (currentPage == videos.length - 1) loadMore();
  };

  return (
    <FlatList
      data={videos}
      decelerationRate="fast"
      disableIntervalMomentum
      horizontal
      keyExtractor={(_, index) => `${index}`}
      ref={scrollRef}
      renderItem={({ item, index }) => (
        <Video
          createdOn={item.createdOn}
          createdBy={item.createdBy}
          isCurrentVideo={currentSlide === index}
          _id={item._id}
          location={item.location}
          POZpledged={item.pozzlesPledged || 0}
          src={item.pozzles[0].videoSrc}
          title={item.title}
          onPressBack={onPressBack}
        />
      )}
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      onScroll={e => {
        //  eslint-disable-next-line no-unused-expressions
        scrollHandler;
        setSliderPage(e);
      }}
    />
  );
};

export default VideoFeed;

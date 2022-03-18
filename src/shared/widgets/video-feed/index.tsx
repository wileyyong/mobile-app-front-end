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
}

const VideoFeed = ({ onPressBack, videos }: IVideoFeed) => {
  console.log('videos', videos);
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
          addedBy={'item.addedBy'}
          inspiredBy={'item.inspiredBy'}
          isCurrentVideo={currentSlide === index}
          key={item._id}
          locationJoined={'item.locationJoined'}
          pozzlesAdded={'item.pozzlesAdded'}
          pozzlesPledged={'item.pozzlesPledged'}
          src={
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
          }
          title={'item.title'}
          onPress={() => {}}
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
/*
<Video
          addedBy={'item.addedBy'}
          inspiredBy={'item.inspiredBy'}
          isCurrentVideo={currentSlide === index}
          key={'item.title'}
          locationJoined={'item.locationJoined'}
          pozzlesAdded={'item.pozzlesAdded'}
          pozzlesPledged={'item.pozzlesPledged'}
          src={'item.src'}
          title={'item.title'}
          onPress={onPressBack}
        />
        */

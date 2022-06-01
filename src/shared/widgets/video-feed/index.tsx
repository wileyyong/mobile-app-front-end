import { Video } from '$components';

import React, { Component, PureComponent, useEffect, useState } from 'react';
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
import { cacheVideo } from 'src/shared/components/video/video-view/cache-videos';
import { IVideoItem } from 'src/shared/components/video/video-view/utils';

/**
 * The scrollable video feed
 */
const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';

interface IVideoFeed {
  onPressBack: () => void;
  parentActivity: IVideoItem;
  videos: IVideoItem[];
  loadMore: () => void;
  updateParentIndex: (index: number) => void;
}

const VideoFeed = ({
  onPressBack,
  parentActivity,
  videos,
  loadMore,
  updateParentIndex,
}: IVideoFeed) => {
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
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = rtlSafeIndex(Math.round(x / width));

    if (indexOfNextScreen !== currentSlide) {
      setCurrentSlide(indexOfNextScreen);
    }
    // It will load and cache the videos when there are 5 slides remaining
    if (currentSlide >= videos.length - 5) loadMore();
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
        <RenderVideoItemView
          key={item._id}
          item={item}
          index={index}
          currentSlide={currentSlide}
          onPressBack={onPressBack}
          title={parentActivity.title}
          location={parentActivity.location}
        />
      )}
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      onScroll={e => {
        //  eslint-disable-next-line no-unused-expressions
        scrollHandler;
        setSliderPage(e);
        updateParentIndex(currentSlide);
      }}
    />
  );
};

export default VideoFeed;

class RenderVideoItemView extends PureComponent {
  render() {
    const { item, index, currentSlide, onPressBack, title, location } =
      this.props;
    return (
      <Video
        createdOn={item.createdOn}
        createdBy={item.createdBy}
        inspiredBy={item.pozzles ? item.pozzles[0].inspiredBy : item.inspiredBy}
        isCurrentVideo={currentSlide === index}
        _id={item._id}
        location={location}
        POZpledged={item.pozzlesPledged || 0}
        src={item.cachedSrc}
        title={title}
        onPressBack={onPressBack}
        pozzleId={item.pozzles ? item.pozzles[0]._id : item._id}
      />
    );
  }
}

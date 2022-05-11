import { Activities } from '$api';
import { Button, ImageBackground, Text } from '$components';
import { Colors } from '$theme';
import { VideoFeed } from '$widgets';

import React, { useEffect, useState } from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import styles from './style';
import { POZZLE_ACTIVITY_TAB_SCREEN } from '$constants';
import { cacheVideo } from 'src/shared/components/video/video-view/cache-videos';

const radialGradient = require('src/assets/images/radialGradientBackground.png');
const addPozzleIcon = require('src/assets/images/addPozzleIcon.png');
const pledgeIcon = require('src/assets/images/pledgeIcon.png');

/**
 *
 *
 */
const VideoScreen = () => {
  const [page, setPage] = useState(1);
  const [hasData, setHasData] = useState(false);
  const [videos, setVideos] = useState([]);
  const navigation = useNavigation();
  const { t } = useTranslation();

  const launchAddPozzleScreen = () =>
    navigation.navigate(POZZLE_ACTIVITY_TAB_SCREEN);
  const { width } = useWindowDimensions();

  const getVideos = async () => {
    await Activities.get({
      page: page,
    }).then(
      async (_videos: any) => {
        console.log('videos loaded ', page);
        _videos.data = await setupCache(_videos.data);
        console.log('videos loaded,', _videos.data);
        setVideos([...videos, ..._videos.data]);
        setHasData(true);
        setPage(page + 1);
      },
      err => {
        setHasData(false);
      },
    );
  };

  const setupCache = async (_videosData: any) => {
    await _videosData.forEach(async video => {
      if (!video.cachedSrc)
        video.cachedSrc = await cacheVideo(video.pozzles[0].videoSrc);
    });
    return _videosData;
  };

  useEffect(() => {
    if (!hasData) {
      getVideos();
    }
  }, [hasData]);

  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground source={radialGradient} style={styles.image}>
        <VideoFeed
          videos={videos}
          loadMore={getVideos}
          onPressBack={navigation.goBack}
        />

        <View style={styles.buttonContainer}>
          <Button
            backgroundColor={Colors.WHITE}
            disabled={false}
            size="small-plus">
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Image source={pledgeIcon} style={styles.buttonImage} />
              <Text size="xs" weight="bold">
                {t('videoScreen.pledgeText')}
              </Text>
            </View>
          </Button>

          <Button
            backgroundColor={Colors.WHITE}
            disabled={false}
            size="medium"
            onPress={launchAddPozzleScreen}>
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Image source={addPozzleIcon} style={styles.buttonImage} />
              <Text size="xs" weight="bold">
                {t('videoScreen.addPozzleText')}
              </Text>
            </View>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default VideoScreen;

import { Button, ImageBackground, Text } from '$components';
import { Colors } from '$theme';
import { VideoFeed } from '$widgets';

import React, { useEffect, useState } from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import styles from './style';
import GetActivitys from './api';

const radialGradient = require('src/assets/images/radialGradientBackground.png');
const addPozzleIcon = require('src/assets/images/addPozzleIcon.png');
const pledgeIcon = require('src/assets/images/pledgeIcon.png');

/**
 *
 *
 */
function VideoScreen() {
  const [hasData, setHasData] = useState(false);
  const [videos, setVideos] = useState([]);
  const navigation = useNavigation();
  const { t } = useTranslation();

  const launchAddPozzleScreen = () => navigation.navigate('PozzleActivity');
  const { width } = useWindowDimensions();

  const getVideos = async () => {
    await GetActivitys.get({
      lat: 38.7223,
      long: 9.1393,
      title: 'Test',
      page: 1,
    }).then(
      (_videos: any) => {
        //console.log('_videos', _videos);
        setVideos(_videos.data);
        _videos.data.forEach((vid: any) => {
          console.log('vid', vid);
        });
        setHasData(true);
      },
      err => {
        setHasData(false);
        console.log('ERERR ', err);
      },
    );
  };

  useEffect(() => {
    if (!hasData) getVideos();
  }, []);

  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground source={radialGradient} style={styles.image}>
        <VideoFeed videos={videos} onPressBack={navigation.goBack} />

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
}

export default VideoScreen;

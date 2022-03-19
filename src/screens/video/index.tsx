import { Button, ImageBackground, Modal, Text } from '$components';
import { Colors } from '$theme';
import { VideoFeed } from '$widgets';

import React, { useEffect, useState } from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import styles from './style';
import GetActivitys from './api';
import { POZZLE_ACTIVITY_TAB_SCREEN } from '$constants';

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
    console.log('getVideos ', page);
    await GetActivitys.get({
      lat: 38.7223,
      long: 9.1393,
      title: 'Test',
      page: page,
    }).then(
      (_videos: any) => {
        setVideos(_videos.data);
        setHasData(true);
        setPage(page + 1);
      },
      err => {
        setHasData(false);
        console.log('ERERR ', err);
      },
    );
  };

  useEffect(() => {
    if (!hasData) {
      getVideos();
    }
  }, [hasData]);

  return (
    <Modal
      title="Pozzles"
      icon="close"
      onClose={() => {
        navigation.goBack();
      }}
      show={true}>
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
    </Modal>
  );
};

export default VideoScreen;

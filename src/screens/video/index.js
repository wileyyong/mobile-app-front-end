import { Button, ImageBackground, Text } from '$components';
import { Colors } from '$theme';
import { VideoFeed } from '$widgets';

import React from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import styles from './style';
import { addPozzleIcon, pledgeIcon, radialGradient, videos } from './utils';

/**
 *
 *
 */
function VideoScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const launchAddPozzleScreen = () => navigation.navigate('PozzleActivity');
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground source={radialGradient} style={styles.image}>
        <VideoFeed videos={videos} onPressBack={navigation.goBack} />

        <View style={styles.buttonContainer}>
          <Button backgroundColor={Colors.WHITE} disabled={false} size="small-plus">
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
            onPress={launchAddPozzleScreen}
          >
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

import { Button, Text, VideoFeed } from '$components';
import { Colors } from '$theme';

import { PozzleActivityScreen } from '$screens';

import React from 'react';
import { Image, ImageBackground, useWindowDimensions, View } from 'react-native';
import { connect } from 'react-redux';

import { pop } from './actions';
import NAME from './name';
import styles from './style';
import { addPozzleIcon, pledgeIcon, radialGradient, videos } from './utils';

/**
 *
 *
 */
function VideoScreen() {
  const launchAddPozzleScreen = () => PozzleActivityScreen.push(NAME);
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground source={radialGradient} style={styles.image}>
        <VideoFeed videos={videos} onPressBack={pop} />

        <View style={styles.buttonContainer}>
          <Button backgroundColor={Colors.WHITE} disabled={false} size="small-plus">
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Image source={pledgeIcon} style={styles.buttonImage} />
              <Text size="xs" weight="bold">
                Pledge
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
                Add Pozzle
              </Text>
            </View>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}

export default () => connect()(VideoScreen);

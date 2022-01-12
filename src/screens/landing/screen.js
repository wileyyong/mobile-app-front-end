import { Button, Spacer, Text } from '$components';
import { Colors } from '$theme';

import { EarthScreen, WelcomeScreen, VideoScreen, ExplorerScreen, PlanetScreen } from '$screens';

import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './style';
import NAME from './name';

/**
 * This is only for sample screen in development stage
 * Navigate to each screen flows
 */
function LandingScreen() {
  const launchOnboardingScreen = () => WelcomeScreen.push(NAME);
  const launchEarthScreen = () => EarthScreen.push(NAME);
  const launchVideoScreen = () => VideoScreen.push(NAME);
  const launchExplorerScreen = () => ExplorerScreen.push(NAME);
  const launchPlanetScreen = () => PlanetScreen.push(NAME);

  return (
    <View style={styles.container}>
      <Text>Pozzle Planet</Text>
      <Spacer height={60} />
      <Button backgroundColor={Colors.GRAY1} onPress={launchOnboardingScreen}>
        <Text>Onboarding Screen</Text>
      </Button>
      <Button backgroundColor={Colors.GRAY1} onPress={launchVideoScreen}>
        <Text>Video Screen</Text>
      </Button>
      <Button backgroundColor={Colors.GRAY1} onPress={launchEarthScreen}>
        <Text>Earth Screen</Text>
      </Button>
      <Button backgroundColor={Colors.GRAY1} onPress={launchExplorerScreen}>
        <Text>Explorer Screen</Text>
      </Button>
      <Button backgroundColor={Colors.GRAY1} onPress={launchPlanetScreen}>
        <Text>Planet Screen</Text>
      </Button>
    </View>
  );
}

export default () => connect()(LandingScreen);

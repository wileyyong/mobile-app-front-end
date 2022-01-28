import {
  EARTH_SCREEN,
  EXPLORER_SCREEN,
  ONBOARDING_SCREEN,
  PLANET_SCREEN,
  VIDEO_SCREEN,
} from '$utils/constants';
import { Button, Spacer, Text, Toast } from '$components';
import { Colors } from '$theme';

import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

/**
 * This is only for sample screen in development stage
 * Navigate to each screen flows
 */
function LandingScreen() {
  const navigation = useNavigation();
  const launchOnboardingScreen = () => navigation.navigate(ONBOARDING_SCREEN);
  const launchEarthScreen = () => navigation.navigate(EARTH_SCREEN);
  const launchVideoScreen = () => navigation.navigate(VIDEO_SCREEN);
  const launchExplorerScreen = () => navigation.navigate(EXPLORER_SCREEN);
  const launchPlanetScreen = () => navigation.navigate(PLANET_SCREEN);

  const showToast = () => {
    Toast.show({
      text1: 'Hello',
      text2: 'hi there',
      type: 'success',
    });
  };

  return (
    <View style={styles.container}>
      <Text>Pozzle Planet</Text>
      <Spacer height={60} />
      <Button backgroundColor={Colors.GRAY1} onPress={launchOnboardingScreen}>
        <Text>Onboarding Screen</Text>
      </Button>
      <Spacer height={10} />
      <Button backgroundColor={Colors.GRAY1} onPress={launchVideoScreen}>
        <Text>Video Screen</Text>
      </Button>
      <Spacer height={10} />
      <Button backgroundColor={Colors.GRAY1} onPress={launchEarthScreen}>
        <Text>Earth Screen</Text>
      </Button>
      <Spacer height={10} />
      <Button backgroundColor={Colors.GRAY1} onPress={launchExplorerScreen}>
        <Text>Explorer Screen</Text>
      </Button>
      <Spacer height={10} />
      <Button backgroundColor={Colors.GRAY1} onPress={launchPlanetScreen}>
        <Text>Planet Screen</Text>
      </Button>
      <Spacer height={10} />
      <Button backgroundColor={Colors.GRAY1} onPress={showToast}>
        <Text>Show Toast</Text>
      </Button>
    </View>
  );
}

export default LandingScreen;

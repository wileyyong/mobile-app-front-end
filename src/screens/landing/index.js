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
  const launchOnboardingScreen = () => navigation.navigate('Onboarding');
  const launchEarthScreen = () => navigation.navigate('Earth');
  const launchVideoScreen = () => navigation.navigate('Video');
  const launchExplorerScreen = () => navigation.navigate('Explorer');
  const launchPlanetScreen = () => navigation.navigate('Planet');

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

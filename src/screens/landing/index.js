import { Button, Spacer, Text, Toast, ProgressButton } from '$components';
import { Colors } from '$theme';

import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

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

  const { t, i18n } = useTranslation();

  const showToast = () => {
    Toast.show({
      text1: 'Hello',
      text2: 'hi there',
      type: 'success',
    });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <Text>Pozzle Planet</Text>
      <Spacer height={60} />
      <Button backgroundColor={Colors.GRAY1} onPress={launchOnboardingScreen}>
        <Text>{t('landingScreen.onboardingScreen')}</Text>
      </Button>
      <Spacer height={10} />
      <Button backgroundColor={Colors.GRAY1} onPress={launchVideoScreen}>
        <Text>{t('landingScreen.videoScreen')}</Text>
      </Button>
      <Spacer height={10} />
      <Button backgroundColor={Colors.GRAY1} onPress={launchEarthScreen}>
        <Text>{t('landingScreen.earthScreen')}</Text>
      </Button>
      <Spacer height={10} />
      <Button backgroundColor={Colors.GRAY1} onPress={launchExplorerScreen}>
        <Text>{t('landingScreen.explorerScreen')}</Text>
      </Button>
      <Spacer height={10} />
      <Button backgroundColor={Colors.GRAY1} onPress={launchPlanetScreen}>
        <Text>{t('landingScreen.planetScreen')}</Text>
      </Button>
      <Spacer height={10} />
      <Button backgroundColor={Colors.GRAY1} onPress={showToast}>
        <Text>Show Toast</Text>
      </Button>

      <Spacer height={40} />
      <Text>Animated Button & Progress Bar</Text>

      <Spacer height={20} />
      <ProgressButton
        backgroundColor={Colors.WHITE}
        overlayColor={Colors.PINK}
        overlayDirection="RTL"
        text="Record"
      />

      <Spacer height={20} />
      <ProgressButton
        backgroundColor={Colors.WHITE}
        overlayColor={Colors.PINK}
        pressType="TAP"
        text="Post"
        textColor={Colors.BLACK}
        textOverlay="Posting..."
      />

      <Spacer height={10} />
      <Button onPress={() => changeLanguage('fr')}>
        <Text>French</Text>
      </Button>
      <Spacer height={10} />
      <Button onPress={() => changeLanguage('en')}>
        <Text>English</Text>
      </Button>
    </View>
  );
}

export default LandingScreen;

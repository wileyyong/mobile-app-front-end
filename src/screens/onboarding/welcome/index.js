import { LOGIN_SCREEN, NEW_PASSPORT_SCREEN } from '$constants';
import { Button, CosmicBackground, Orbs, Spacer, Text, VStack } from '$components';
import { useWeb3, ensToAddress } from '$web3';
import { Colors } from '$theme';

import React from 'react';
import { Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import styles from './style';

const pozIcon = require('$assets/poz.png');

function WelcomeScreen() {
  const navigation = useNavigation();
  const toPassportScreen = () => navigation.navigate(NEW_PASSPORT_SCREEN);
  const toLoginScreen = () => navigation.navigate(LOGIN_SCREEN);
  const { t } = useTranslation();

  const web3 = useWeb3();

  React.useEffect(() => {
    (async () => {
      const address = await ensToAddress('pozzleplanet.eth', web3);

      Alert.alert(
        'Web3 is working!',
        `The wallet address that is holding pozzleplanet.eth is ${address}`
      );
    })();
  }, []);

  return (
    <CosmicBackground>
      <Orbs />
      <VStack style={styles.content}>
        <Spacer height={100} />
        <Image source={pozIcon} />
        <Spacer height={250} />
        <Button backgroundColor={Colors.LIGHT_PURPLE} onPress={toPassportScreen}>
          <Text color={Colors.WHITE} weight="bold">
            {t('onBoardingScreen.newUserButtonText')}
          </Text>
        </Button>
        <Spacer height={20} />
        <Button backgroundColor={Colors.WHITE} onPress={toLoginScreen}>
          <Text weight="bold">{t('onBoardingScreen.prevUserButtonText')}</Text>
        </Button>
        <Spacer />
      </VStack>
    </CosmicBackground>
  );
}

export default WelcomeScreen;

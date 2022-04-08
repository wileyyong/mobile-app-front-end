import {
  LOGIN_SCREEN,
  NEW_PASSPORT_SCREEN,
  ONBOARDING_LOADING_SCREEN,
} from '$constants';
import {
  Button,
  CosmicBackground,
  Orbs,
  Spacer,
  Text,
  VStack,
} from '$components';
import { useWeb3, ensToAddress } from '$web3';
import { Colors } from '$theme';

import React from 'react';
import { Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import styles from './style';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

const pozIcon = require('src/assets/images/poz.png');

function WelcomeScreen() {
  const navigation = useNavigation();
  const connector = useWalletConnect();
  // connector.killSession();
  const { t } = useTranslation();

  const toLoginScreen = () => {
    if (connector.connected) {
      navigation.navigate(ONBOARDING_LOADING_SCREEN);
    } else {
      navigation.navigate(LOGIN_SCREEN);
    }
  };

  const web3 = useWeb3();

  return (
    <CosmicBackground
      style={{
        justifyContent: 'center',
      }}>
      <Orbs />
      <VStack style={styles.content}>
        <Spacer height={100} />
        <Image source={pozIcon} />
        <Spacer height={250} />
        <Button backgroundColor={Colors.LIGHT_PURPLE} onPress={() => {}}>
          <Text
            color={Colors.WHITE}
            translationKey="onBoardingScreen.newUserButtonText"
            weight="bold"
          />
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

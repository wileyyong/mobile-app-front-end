import { LOGIN_SCREEN, PASSPORT_SCREEN } from '$utils/constants';
/* eslint-disable react/no-unescaped-entities */
import { Button, CosmicBackground, Orbs, Spacer, Text, VStack } from '$components';

import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '$theme';

import styles from './style';

const pozIcon = require('$assets/poz.png');

function WelcomeScreen() {
  const navigation = useNavigation();
  const toPassportScreen = () => navigation.navigate(PASSPORT_SCREEN);
  const toLoginScreen = () => navigation.navigate(LOGIN_SCREEN);

  return (
    <CosmicBackground>
      <Orbs />
      <VStack style={styles.content}>
        <Spacer height={100} />
        <Image source={pozIcon} />
        <Spacer height={250} />
        <Button backgroundColor={Colors.PINK} onPress={toPassportScreen}>
          <Text color={Colors.WHITE} weight="bold">
            I'm New
          </Text>
        </Button>
        <Spacer height={20} />
        <Button backgroundColor={Colors.WHITE} onPress={toLoginScreen}>
          <Text weight="bold">Login with Crypto Wallet</Text>
        </Button>
        <Spacer />
      </VStack>
    </CosmicBackground>
  );
}

export default WelcomeScreen;

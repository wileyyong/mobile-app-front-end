/* eslint-disable react/no-unescaped-entities */
import { Button, CosmicBackground, Orbs, Spacer, Text, VStack } from '$components';

import { PassportScreen, LoginScreen } from '$screens';

import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { Colors } from '$theme';

import styles from './style';
import NAME from './name';

const pozIcon = require('$assets/poz.png');

function WelcomeScreen() {
  const toPassportScreen = () => PassportScreen.push(NAME);
  const toLoginScreen = () => LoginScreen.push(NAME);

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

export default () => connect()(WelcomeScreen);

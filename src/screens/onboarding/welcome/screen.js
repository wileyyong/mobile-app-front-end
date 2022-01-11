/* eslint-disable react/no-unescaped-entities */
import { Button, CosmicBackground, Orbs, Spacer, Text, VStack } from '$components';

import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { colors } from '$theme/colors';

import styles from './style';

const pozIcon = require('$assets/poz.png');

function WelcomeScreen() {
  return (
    <CosmicBackground>
      <Orbs />
      <VStack style={styles.content}>
        <Spacer height={100} />
        <Image source={pozIcon} />
        <Spacer height={250} />
        <Button backgroundColor={colors.PINK}>
          <Text color={colors.WHITE}>I'm New</Text>
        </Button>
        <Spacer height={20} />
        <Button backgroundColor={colors.WHITE}>
          <Text>Login with Crypto Wallet</Text>
        </Button>
        <Spacer />
      </VStack>
    </CosmicBackground>
  );
}

export default () => connect()(WelcomeScreen);
